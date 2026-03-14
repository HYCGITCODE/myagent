# OpenClaw 脚本目录

## 脚本列表

### 1. backup-to-github.sh ⭐ 主要任务

**功能**: 每天 24 点备份 OpenClaw 所有文件到 GitHub myagent 仓库

**执行时间**: 每天 24:00 (Asia/Shanghai)

**备份内容**:
- workspace/ - 主要工作目录
- agents-team/ - 团队角色定义
- memory/ - 记忆文件
- agents/config/ - Agent 配置
- cron/ - 定时任务配置
- scripts/ - 自动化脚本
- 核心配置文件 (AGENTS.md, SOUL.md, USER.md, TOOLS.md, IDENTITY.md, HEARTBEAT.md)

**备份目录命名**: `v_YYYY-MM-DD` (例如：`v_2026-03-12`)

**配置项**:
| 配置项 | 说明 | 当前值 | 需要修改 |
|--------|------|--------|----------|
| `GITHUB_REPO` | GitHub 仓库地址 | `github.com/yourusername/myagent` | ✅ 需要替换 |
| `GITHUB_TOKEN` | GitHub 访问令牌 | 环境变量 | ✅ 需要设置 |
| `BACKUP_PREFIX` | 文件夹前缀 | `v_` | 可选 |

**使用方法**:
```bash
# 1. 设置环境变量
export GITHUB_TOKEN="your_github_token"

# 2. 编辑脚本，修改 GITHUB_REPO 为实际仓库地址
vim ~/.openclaw/scripts/backup-to-github.sh

# 3. 手动测试运行
bash ~/.openclaw/scripts/backup-to-github.sh

# 4. 查看 cron 状态
cat ~/.openclaw/cron/jobs.json
```

---

### 2. sync-agents-to-github.sh (已废弃)

**状态**: ⚠️ 已被 backup-to-github.sh 替代

**说明**: 原脚本只同步 agent 配置文件，新脚本备份全部 OpenClaw 文件。

## Cron 任务管理

### 查看任务列表
```bash
cat ~/.openclaw/cron/jobs.json
```

### 启用/禁用任务
编辑 `~/.openclaw/cron/jobs.json`，修改 `"enabled": true/false`

### 手动触发任务
```bash
bash ~/.openclaw/scripts/sync-agents-to-github.sh
```

### 查看执行日志
```bash
# 查看最近的 cron 日志
journalctl -u openclaw-cron --since "1 hour ago"
```

---

## 待添加脚本

- [ ] healthcheck.sh - 定期安全检查
- [ ] backup.sh - 工作区备份
- [ ] cleanup.sh - 临时文件清理
