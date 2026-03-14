#!/bin/bash
# 每天 24 点备份 OpenClaw 所有文件到 GitHub myagent 仓库
# 创建以日期命名的文件夹（如 v_2026-03-12）
# 使用方法：./backup-to-github.sh

set -e

# 配置
WORKSPACE_DIR="$HOME/.openclaw"
GITHUB_USER="HYCGITCODE"
GITHUB_REPO="HYCGITCODE/myagent"
BACKUP_PREFIX="v_"

# 日期配置
DATE=$(date +%Y-%m-%d)
DATE_DIR="${BACKUP_PREFIX}${DATE}"
TIMESTAMP=$(date +%Y-%m-%d_%H-%M-%S)
TEMP_DIR="/tmp/openclaw-backup-$TIMESTAMP"
CLONE_DIR="/tmp/myagent-clone-$TIMESTAMP"

echo "=== OpenClaw 每日备份到 GitHub ==="
echo "时间：$(date)"
echo "目标仓库：$GITHUB_REPO"
echo "备份目录：$DATE_DIR"
echo ""

# 创建临时目录
mkdir -p "$TEMP_DIR"

# 1. 收集 OpenClaw 文件
echo "📋 收集 OpenClaw 文件..."

# 复制 workspace 目录（排除 node_modules 和大文件）
echo "  ✓ workspace/"
cp -r "$WORKSPACE_DIR/workspace" "$TEMP_DIR/" --no-preserve=mode,ownership 2>/dev/null || true

# 复制 agents 配置目录
echo "  ✓ agents/config/"
mkdir -p "$TEMP_DIR/agents/config"
cp -r "$WORKSPACE_DIR/agents/config"/*.json "$TEMP_DIR/agents/config/" 2>/dev/null || true
cp "$WORKSPACE_DIR/agents/config/README.md" "$TEMP_DIR/agents/config/" 2>/dev/null || true

# 复制 agents-team 目录
echo "  ✓ agents-team/"
cp -r "$WORKSPACE_DIR/workspace/agents-team" "$TEMP_DIR/" 2>/dev/null || true

# 复制 cron 配置
echo "  ✓ cron/"
mkdir -p "$TEMP_DIR/cron"
cp "$WORKSPACE_DIR/cron/jobs.json" "$TEMP_DIR/cron/" 2>/dev/null || true

# 复制 scripts 目录
echo "  ✓ scripts/"
cp -r "$WORKSPACE_DIR/scripts" "$TEMP_DIR/" 2>/dev/null || true

# 复制 memory 文件
echo "  ✓ memory/"
mkdir -p "$TEMP_DIR/memory"
cp "$WORKSPACE_DIR/workspace/memory/"*.md "$TEMP_DIR/memory/" 2>/dev/null || true
cp "$WORKSPACE_DIR/workspace/MEMORY.md" "$TEMP_DIR/" 2>/dev/null || true

# 复制核心配置文件
echo "  ✓ 核心配置"
cp "$WORKSPACE_DIR/workspace/AGENTS.md" "$TEMP_DIR/" 2>/dev/null || true
cp "$WORKSPACE_DIR/workspace/SOUL.md" "$TEMP_DIR/" 2>/dev/null || true
cp "$WORKSPACE_DIR/workspace/USER.md" "$TEMP_DIR/" 2>/dev/null || true
cp "$WORKSPACE_DIR/workspace/TOOLS.md" "$TEMP_DIR/" 2>/dev/null || true
cp "$WORKSPACE_DIR/workspace/IDENTITY.md" "$TEMP_DIR/" 2>/dev/null || true
cp "$WORKSPACE_DIR/workspace/HEARTBEAT.md" "$TEMP_DIR/" 2>/dev/null || true

# 生成备份清单
echo "📋 生成备份清单..."
cat > "$TEMP_DIR/BACKUP_MANIFEST.md" << EOF
# OpenClaw 备份清单

**备份时间**: $(date +%Y-%m-%d\ %H:%M:%S)
**备份目录**: $DATE_DIR
**来源**: $WORKSPACE_DIR

## 包含内容

### 工作区文件
- workspace/ - 主要工作目录
- agents-team/ - 团队角色定义
- memory/ - 记忆文件
- MEMORY.md - 长期记忆

### Agent 配置
- agents/config/*.json - Agent 配置文件
- agents/config/README.md - 配置说明

### 核心配置
- AGENTS.md - Agent 工作指南
- SOUL.md - Agent 人格定义
- USER.md - 用户档案
- TOOLS.md - 工具配置
- IDENTITY.md - 身份定义
- HEARTBEAT.md - 心跳任务

### 系统配置
- cron/jobs.json - 定时任务
- scripts/ - 自动化脚本

## 文件统计

EOF

# 统计文件数量
FILE_COUNT=$(find "$TEMP_DIR" -type f | wc -l)
TOTAL_SIZE=$(du -sh "$TEMP_DIR" | awk '{print $1}')
echo "- **总文件数**: $FILE_COUNT" >> "$TEMP_DIR/BACKUP_MANIFEST.md"
echo "- **总大小**: $TOTAL_SIZE" >> "$TEMP_DIR/BACKUP_MANIFEST.md"

# 2. 使用 gh 克隆仓库
echo ""
echo "🔄 从 GitHub 克隆仓库..."

# 清除可能冲突的环境变量
unset GH_TOKEN GITHUB_TOKEN

cd /tmp
gh repo clone "$GITHUB_REPO" "$CLONE_DIR" -- --depth 1 2>/dev/null || {
    echo "❌ 克隆失败，请检查 gh 认证状态"
    gh auth status
    exit 1
}

cd "$CLONE_DIR"

# 3. 创建日期目录并复制文件
echo "📦 打包到 $DATE_DIR ..."
mkdir -p "$DATE_DIR"
cp -r "$TEMP_DIR"/* "$DATE_DIR/"

# 4. Git 提交
echo "💾 提交更改..."
git config user.email "hyc@openclaw.local"
git config user.name "HYCGITCODE"
git add "$DATE_DIR/"

if git diff --staged --quiet; then
    echo "⚠️  无变更，跳过提交"
    cd /
    rm -rf "$TEMP_DIR" "$CLONE_DIR"
    exit 0
fi

git commit -m "🤖 每日备份 $(date +%Y-%m-%d) - $DATE_DIR"

# 5. 推送到 GitHub
echo "📤 推送到 GitHub..."
git push origin HEAD 2>&1 | tee /tmp/push.log || {
    echo "❌ 推送失败"
    cat /tmp/push.log
    exit 1
}

echo ""
echo "✅ 备份完成！"
echo "📂 备份目录：$DATE_DIR"
echo "📊 提交信息：每日备份 $(date +%Y-%m-%d)"
echo "🔗 仓库：https://github.com/$GITHUB_REPO"
echo "📁 文件数：$FILE_COUNT"
echo "💾 总大小：$TOTAL_SIZE"

# 推送成功后发送通知
echo "📩 发送通知..."
cat > /tmp/backup_notification.json << EOF
{
    "msg_type": "interactive",
    "card": {
        "header": {
            "title": {
                "tag": "plain_text",
                "content": "✅ OpenClaw 每日备份完成"
            },
            "template": "green"
        },
        "elements": [
            {
                "tag": "div",
                "text": {
                    "tag": "lark_md",
                    "content": "**备份时间**: $(date +%Y-%m-%d %H:%M:%S)\n**备份目录**: $DATE_DIR\n**文件数量**: $FILE_COUNT\n**总大小**: $TOTAL_SIZE"
                }
            },
            {
                "tag": "action",
                "actions": [
                    {
                        "tag": "button",
                        "text": {
                            "tag": "plain_text",
                            "content": "🔗 查看仓库"
                        },
                        "url": "https://github.com/$GITHUB_REPO/tree/main/$DATE_DIR",
                        "type": "primary"
                    }
                ]
            }
        ]
    }
}
EOF

# 使用飞书 webhook 发送通知（如果有配置）
if [ -n "$FEISHU_WEBHOOK" ]; then
    curl -s -X POST -H "Content-Type: application/json" \
        -d @/tmp/backup_notification.json \
        "$FEISHU_WEBHOOK" > /dev/null 2>&1 && \
        echo "✓ 飞书通知已发送" || echo "⚠️ 飞书通知发送失败"
fi

# 清理
cd /
rm -rf "$TEMP_DIR" "$CLONE_DIR"
rm -f /tmp/push.log /tmp/backup_notification.json

echo ""
echo "✨ 下次备份时间：明天 24:00"
