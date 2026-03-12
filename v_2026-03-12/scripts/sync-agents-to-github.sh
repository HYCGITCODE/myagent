#!/bin/bash
# 每天 24 点推送 agent 信息到 GitHub myagent 文件夹
# 使用方法：./sync-agents-to-github.sh

set -e

# 配置
WORKSPACE_DIR="$HOME/.openclaw/workspace"
AGENTS_DIR="$WORKSPACE_DIR/agents-team"
CONFIG_DIR="$HOME/.openclaw/agents/config"
GITHUB_REPO="github.com/yourusername/myagent"  # 需要替换为实际仓库
TARGET_DIR="myagent"

# 时间戳
TIMESTAMP=$(date +%Y-%m-%d_%H-%M-%S)
TEMP_DIR="/tmp/agents-$TIMESTAMP"

echo "=== Agent 信息同步到 GitHub ==="
echo "时间：$(date)"
echo "目标仓库：$GITHUB_REPO"
echo ""

# 创建临时目录
mkdir -p "$TEMP_DIR"

# 1. 收集 Agent 配置文件
echo "📋 收集 Agent 配置文件..."
cp -r "$CONFIG_DIR"/*.json "$TEMP_DIR/" 2>/dev/null || echo "无 JSON 配置文件"

# 2. 收集 Agent IDENTITY 文件
echo "📋 收集 Agent IDENTITY 文件..."
for agent_dir in "$AGENTS_DIR"/*/; do
    if [ -f "$agent_dir/IDENTITY.md" ]; then
        agent_name=$(basename "$agent_dir")
        cp "$agent_dir/IDENTITY.md" "$TEMP_DIR/$agent_name-IDENTITY.md"
        echo "  ✓ $agent_name"
    fi
done

# 3. 收集 TEAM.md
echo "📋 收集 TEAM.md..."
cp "$AGENTS_DIR/TEAM.md" "$TEMP_DIR/" 2>/dev/null || echo "无 TEAM.md"

# 4. 生成汇总文档
echo "📋 生成汇总文档..."
cat > "$TEMP_DIR/README.md" << EOF
# Agent 团队配置汇总

**同步时间**: $(date +%Y-%m-%d\ %H:%M:%S)
**来源**: OpenClaw Workspace

## Agent 列表

EOF

# 添加每个 agent 的简要信息
for agent_dir in "$AGENTS_DIR"/*/; do
    if [ -f "$agent_dir/IDENTITY.md" ]; then
        agent_name=$(basename "$agent_dir")
        echo "### $agent_name" >> "$TEMP_DIR/README.md"
        echo "" >> "$TEMP_DIR/README.md"
        head -20 "$agent_dir/IDENTITY.md" >> "$TEMP_DIR/README.md" 2>/dev/null || true
        echo "" >> "$TEMP_DIR/README.md"
        echo "---" >> "$TEMP_DIR/README.md"
        echo "" >> "$TEMP_DIR/README.md"
    fi
done

# 5. Git 操作
echo "🔄 同步到 GitHub..."
cd "$TEMP_DIR"

# 检查是否是 git 仓库，如果不是则克隆
if [ ! -d ".git" ]; then
    echo "克隆仓库..."
    git clone "https://$GITHUB_TOKEN@$GITHUB_REPO.git" . 2>/dev/null || {
        echo "❌ 克隆失败，请检查仓库地址和权限"
        exit 1
    }
fi

# 创建目标目录
mkdir -p "$TARGET_DIR"

# 复制文件到目标目录
cp *.json "$TARGET_DIR/" 2>/dev/null || true
cp *-IDENTITY.md "$TARGET_DIR/" 2>/dev/null || true
cp TEAM.md "$TARGET_DIR/" 2>/dev/null || true
cp README.md "$TARGET_DIR/" 2>/dev/null || true

# Git 提交
git config user.email "oca@openclaw.local"
git config user.name "OCA Bot"
git add "$TARGET_DIR/"
git commit -m "🤖 每日 Agent 信息同步 $(date +%Y-%m-%d)" || {
    echo "⚠️  无变更，跳过提交"
    exit 0
}

# 推送到 GitHub
git push origin main || git push origin master

echo ""
echo "✅ 同步完成！"
echo "📂 目标目录：$TARGET_DIR"
echo "📊 提交信息：每日 Agent 信息同步 $(date +%Y-%m-%d)"

# 清理
rm -rf "$TEMP_DIR"
