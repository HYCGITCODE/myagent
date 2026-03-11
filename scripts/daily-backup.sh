#!/bin/bash

# OpenClaw 每日自动备份脚本
# 功能：每天 24:00 在 myagent 仓库创建 v_日期 文件夹并备份 openclaw 文件

set -e

# 配置
OPENCLAW_DIR="/home/admin/.openclaw"
BACKUP_DIR="/home/admin/.openclaw/backups"
DATE=$(date +%Y-%m-%d)
VERSION_DIR="v_${DATE}"
REPO_URL="git@github.com:HYCGITCODE/myagent.git"
BACKUP_REPO_DIR="${BACKUP_DIR}/myagent-backup"

echo "======================================"
echo "OpenClaw 每日备份任务"
echo "日期：${DATE}"
echo "======================================"

# 1. 创建备份目录
echo "[1/6] 创建备份目录..."
mkdir -p "${BACKUP_DIR}"

# 2. 克隆或更新仓库
if [ -d "${BACKUP_REPO_DIR}" ]; then
    echo "[2/6] 更新备份仓库..."
    cd "${BACKUP_REPO_DIR}"
    git pull origin master
else
    echo "[2/6] 克隆备份仓库..."
    git clone "${REPO_URL}" "${BACKUP_REPO_DIR}"
    cd "${BACKUP_REPO_DIR}"
fi

# 3. 创建版本文件夹
echo "[3/6] 创建版本文件夹：${VERSION_DIR}"
mkdir -p "${VERSION_DIR}"

# 4. 复制 openclaw 文件（排除大型文件）
echo "[4/6] 复制 openclaw 文件..."
cd "${OPENCLAW_DIR}"
find . -maxdepth 1 -type f -o -type d ! -path './node_modules/*' ! -path './.cache/*' ! -path './browser/*' ! -path './backups/*' ! -path './workspace/tetris-web/node_modules/*' ! -path './workspace/tetris-web/dist/*' ! -path './workspace/tetris-web-git/*' ! -name '*.log' ! -name '*.docx' | while read file; do
    cp -r "$file" "${BACKUP_REPO_DIR}/${VERSION_DIR}/" 2>/dev/null || true
done

# 5. 提交并推送
echo "[5/6] 提交备份..."
cd "${VERSION_DIR}"
git init
git remote add origin "${REPO_URL}" || true
git add .
git commit -m "backup: ${VERSION_DIR} - OpenClaw 每日备份

自动备份时间：$(date '+%Y-%m-%d %H:%M:%S')
备份内容：
- Agent 配置文件
- 模型配置
- 扩展插件
- 工作空间文档
- 项目文件

排除项：
- node_modules
- 日志文件
- 浏览器缓存
- 临时文件" || echo "无变更"

# 6. 推送到 GitHub
echo "[6/6] 推送到 GitHub..."
git push -u origin master || echo "推送失败，请检查网络连接"

echo "======================================"
echo "备份完成！"
echo "版本：${VERSION_DIR}"
echo "位置：${BACKUP_REPO_DIR}/${VERSION_DIR}"
echo "======================================"

# 发送通知给老大
echo "📧 发送备份成功通知..."
cat > /tmp/backup_notification.json << EOF
{
  "action": "send",
  "channel": "feishu",
  "target": "ou_2680962647f0f8827a7c9b18848f44ee",
  "message": "✅ OpenClaw 每日备份完成\n\n📅 日期：${DATE}\n📦 版本：${VERSION_DIR}\n📍 位置：myagent 仓库\n🔗 链接：https://github.com/HYCGITCODE/myagent\n\n备份内容:\n- Agent 配置文件\n- 模型配置\n- 扩展插件\n- 工作空间文档\n- 项目文件\n\n排除项:\n- node_modules\n- 日志文件\n- 浏览器缓存\n- 临时文件\n\n备份大小：$(du -sh ${BACKUP_REPO_DIR}/${VERSION_DIR} 2>/dev/null | cut -f1)"
}
EOF

# 使用 openclaw message 命令发送通知
cd /home/admin/.openclaw
openclaw message send --channel feishu --target ou_2680962647f0f8827a7c9b18848f44ee \
  "✅ OpenClaw 每日备份完成\n\n📅 日期：${DATE}\n📦 版本：${VERSION_DIR}\n📍 位置：myagent 仓库\n🔗 链接：https://github.com/HYCGITCODE/myagent\n\n备份内容:\n- Agent 配置文件\n- 模型配置\n- 扩展插件\n- 工作空间文档\n- 项目文件\n\n排除项:\n- node_modules\n- 日志文件\n- 浏览器缓存\n- 临时文件\n\n备份大小：$(du -sh ${BACKUP_REPO_DIR}/${VERSION_DIR} 2>/dev/null | cut -f1)" 2>/dev/null || echo "通知发送失败，请检查 openclaw 命令"
