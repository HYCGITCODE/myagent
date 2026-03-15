# OpenClaw 每日备份任务配置指南

## 📋 任务说明

**任务名称**: OpenClaw 每日备份到 GitHub  
**执行时间**: 每天 24:00 (Asia/Shanghai)  
**备份位置**: GitHub `myagent` 仓库的 `v_YYYY-MM-DD` 文件夹  
**首次执行**: 2026-03-12 24:00 (今晚)

---

## 🔧 配置步骤

### 步骤 1: 创建 GitHub 仓库

如果还没有 `myagent` 仓库，先创建：

```bash
# 在 GitHub 上创建新仓库
# 仓库名：myagent
# 可见性：私有 (推荐) 或 公开
# 初始化：勾选 "Add a README file"
```

### 步骤 2: 创建 GitHub Token

```bash
# 1. 访问 https://github.com/settings/tokens
# 2. 点击 "Generate new token (classic)"
# 3. 填写说明：OpenClaw Backup
# 4. 勾选权限：
#    ✅ repo (Full control of private repositories)
#    ✅ workflow
# 5. 生成 token，复制保存
```

### 步骤 3: 配置环境变量

```bash
# 设置 GITHUB_TOKEN
openclaw gateway env set GITHUB_TOKEN="ghp_xxxxxxxxxxxxxxxxxxxx"

# 验证是否设置成功
openclaw gateway env list | grep GITHUB_TOKEN
```

### 步骤 4: 修改脚本配置

```bash
# 编辑脚本，修改第 11 行的仓库地址
vim ~/.openclaw/scripts/backup-to-github.sh

# 修改前:
GITHUB_REPO="github.com/yourusername/myagent"

# 修改后 (替换为你的 GitHub 用户名):
GITHUB_REPO="github.com/huyouchen/myagent"
```

### 步骤 5: 手动测试

```bash
# 首次运行前建议手动测试
bash ~/.openclaw/scripts/backup-to-github.sh

# 检查输出:
# ✅ 备份完成！
# 📂 备份目录：v_2026-03-12
# 🔗 仓库：https://github.com/...
```

### 步骤 6: 验证 cron 配置

```bash
# 查看 cron 任务配置
cat ~/.openclaw/cron/jobs.json

# 确认内容:
# - "schedule": "0 0 * * *"  (每天 24 点)
# - "enabled": true
# - "nextRun": "2026-03-12T24:00:00+08:00"
```

---

## 📦 备份内容

### 工作区文件
```
workspace/
├── agents-team/          # 团队角色定义
│   ├── pm-huxiaochan/
│   ├── ui-huxiaou/
│   ├── arch-huxiaojia/
│   ├── fe-huxiaoqian/
│   ├── be-huxiaohou/
│   └── qa-huxiaoce/
├── memory/               # 每日记忆文件
├── AGENTS.md             # Agent 工作指南
├── SOUL.md               # Agent 人格定义
├── USER.md               # 用户档案
├── TOOLS.md              # 工具配置
├── IDENTITY.md           # 身份定义
└── HEARTBEAT.md          # 心跳任务
```

### Agent 配置
```
agents/config/
├── pm-huxiaochan.json
├── ui-huxiaou.json
├── arch-huxiaojia.json
├── fe-huxiaoqian.json
├── be-huxiaohou.json
├── qa-huxiaoce.json
└── README.md
```

### 系统配置
```
cron/
└── jobs.json             # 定时任务配置

scripts/
├── backup-to-github.sh   # 备份脚本
└── README.md             # 脚本说明
```

---

## 📊 备份目录结构示例

```
myagent/
├── v_2026-03-12/         # 3 月 12 日备份
│   ├── workspace/
│   ├── agents/
│   ├── memory/
│   ├── cron/
│   ├── scripts/
│   ├── AGENTS.md
│   ├── SOUL.md
│   ├── USER.md
│   ├── TOOLS.md
│   ├── IDENTITY.md
│   ├── HEARTBEAT.md
│   └── BACKUP_MANIFEST.md
│
├── v_2026-03-13/         # 3 月 13 日备份
├── v_2026-03-14/         # 3 月 14 日备份
└── ...
```

---

## 🔍 故障排查

### 问题 1: 克隆失败

```bash
# 错误信息：克隆失败，请检查仓库地址和 GITHUB_TOKEN 环境变量

# 解决方案:
# 1. 确认 GITHUB_TOKEN 已设置
openclaw gateway env list | grep GITHUB_TOKEN

# 2. 确认仓库地址正确
# 应该是：github.com/你的用户名/myagent

# 3. 确认 token 权限足够
# 需要 repo 和 workflow 权限
```

### 问题 2: 推送失败

```bash
# 错误信息：推送失败，请检查网络和权限

# 解决方案:
# 1. 检查网络连接
ping github.com

# 2. 确认 token 未过期
# GitHub token 默认永久有效，除非手动撤销

# 3. 确认仓库存在且有写入权限
# 如果是私有仓库，确保 token 有 repo 权限
```

### 问题 3: cron 未执行

```bash
# 检查 cron 配置
cat ~/.openclaw/cron/jobs.json

# 确认 "enabled": true

# 查看 cron 日志
journalctl -u openclaw-cron --since "1 hour ago"
```

---

## 📝 手动触发备份

```bash
# 随时可以手动触发备份
bash ~/.openclaw/scripts/backup-to-github.sh

# 查看备份结果
# 脚本会输出备份目录和仓库链接
```

---

## 🗑️ 管理备份

### 查看备份历史

```bash
# 在 GitHub 仓库查看
https://github.com/你的用户名/myagent
```

### 删除旧备份

```bash
# 本地删除（不影响 GitHub）
rm -rf /tmp/openclaw-backup-*

# GitHub 删除需要手动操作或使用 GitHub API
# 建议保留最近 30 天的备份
```

### 恢复备份

```bash
# 1. 从 GitHub 克隆仓库
git clone https://github.com/你的用户名/myagent.git

# 2. 找到需要恢复的日期文件夹
cd myagent/v_2026-03-12/

# 3. 复制文件回 OpenClaw 目录
cp -r workspace/* ~/.openclaw/workspace/
cp -r agents/* ~/.openclaw/agents/
# ... 其他目录
```

---

## ⚠️ 注意事项

1. **Token 安全**: 不要将 GITHUB_TOKEN 提交到代码库
2. **备份大小**: 排除 node_modules 等大文件，避免仓库过大
3. **私有仓库**: 建议使用私有仓库保护敏感信息
4. **定期检查**: 每周检查一次备份是否成功执行
5. **版本管理**: 备份文件夹按日期命名，便于追溯

---

**配置完成后，每天 24 点自动备份！**
