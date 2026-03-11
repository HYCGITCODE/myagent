# OpenClaw 每日自动备份

## 📋 功能说明

每天 24:00 (00:00) 自动在 myagent 仓库创建 `v_日期` 文件夹，并备份当前 openclaw 的所有文件。

## ⏰ 定时任务

**Cron 表达式**: `0 0 * * *`  
**执行时间**: 每天 24:00 (凌晨 0 点)  
**日志文件**: `/home/admin/.openclaw/logs/backup.log`

## 📂 备份结构

```
myagent/
├── agents/              # 主仓库文件
├── extensions/
├── workspace/
├── v_2026-03-11/       # ← 每日备份文件夹
│   ├── agents/
│   ├── extensions/
│   ├── workspace/
│   ├── openclaw.json
│   └── ...
├── v_2026-03-12/
└── v_2026-03-13/
```

## 🔧 脚本位置

**备份脚本**: `/home/admin/.openclaw/scripts/daily-backup.sh`

## 📝 排除项

以下文件不会被备份：
- `node_modules/` - 依赖包
- `*.log` - 日志文件
- `agents/main/sessions/*.jsonl*` - 会话日志
- `delivery-queue/` - 投递队列
- `.cache/` - 缓存
- `browser/` - 浏览器数据
- `*.docx` - Word 文档
- `workspace/tetris-web/node_modules/` - 项目依赖
- `workspace/tetris-web/dist/` - 构建产物

## 🚀 手动执行

```bash
# 手动运行备份
/home/admin/.openclaw/scripts/daily-backup.sh

# 查看备份日志
tail -f /home/admin/.openclaw/logs/backup.log

# 查看定时任务
crontab -l
```

## 📊 备份内容

### 包含
- ✅ Agent 配置文件
- ✅ 模型配置
- ✅ 扩展插件
- ✅ 工作空间文档
- ✅ 项目文件
- ✅ OpenClaw 主配置

### 排除
- ❌ node_modules (太大)
- ❌ 日志文件
- ❌ 浏览器缓存
- ❌ 临时文件
- ❌ 大型二进制文件

## 🔍 查看备份历史

```bash
# 查看 GitHub 仓库
https://github.com/HYCGITCODE/myagent

# 查看本地备份
ls -la /home/admin/.openclaw/backups/myagent-backup/
```

## ⚠️ 注意事项

1. **首次备份**: 会克隆整个仓库，可能需要几分钟
2. **后续备份**: 只上传变更文件，速度较快
3. **网络要求**: 需要能访问 GitHub
4. **磁盘空间**: 每个备份约 5-10MB

## 🛠️ 故障排查

### 备份失败

```bash
# 1. 检查脚本权限
chmod +x /home/admin/.openclaw/scripts/daily-backup.sh

# 2. 手动执行测试
/home/admin/.openclaw/scripts/daily-backup.sh

# 3. 查看错误日志
tail -100 /home/admin/.openclaw/logs/backup.log
```

### GitHub 认证失败

```bash
# 重新认证 GitHub
gh auth login

# 检查认证状态
gh auth status
```

### 定时任务未执行

```bash
# 检查 cron 服务
systemctl status cron

# 查看 cron 日志
grep CRON /var/log/syslog | tail -20

# 重新添加定时任务
(crontab -l; echo "0 0 * * * /home/admin/.openclaw/scripts/daily-backup.sh >> /home/admin/.openclaw/logs/backup.log 2>&1") | crontab -
```

## 📞 联系

**维护者**: OCA 胡小豆  
**创建时间**: 2026-03-11  
**最后更新**: 2026-03-11
