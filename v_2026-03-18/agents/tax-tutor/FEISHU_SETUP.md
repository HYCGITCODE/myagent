# 税务学习导师 - 飞书专用群聊配置指南

## 方案 A：专用群聊配置

### 步骤 1：创建飞书群聊

1. 打开飞书
2. 创建新群聊
3. 群聊名称：**税务学习助手** 📚
4. 添加成员：仅自己（或需要共同学习的伙伴）

### 步骤 2：添加机器人到群聊

1. 在群聊设置中 → 群机器人 → 添加机器人
2. 选择已配置的 OpenClaw 机器人（应用名称可能是"OpenClaw"或自定义名称）
3. 确认添加

### 步骤 3：获取群聊 ID

**方法 A：通过飞书 API**
```bash
# 使用飞书 CLI 或 API 获取群聊列表
curl -X GET "https://open.feishu.cn/open-apis/im/v1/chats" \
  -H "Authorization: Bearer <access_token>"
```

**方法 B：通过 OpenClaw 命令**
```bash
openclaw channels resolve --channel feishu --query "税务学习助手"
```

**方法 C：从群聊 URL 获取**
- 打开群聊
- 查看 URL 或群聊信息
- 群聊 ID 格式：`oc_xxxxxxxxxxxx`

### 步骤 4：更新配置

获取群聊 ID 后，更新配置文件：

```bash
# 编辑配置文件
nano ~/.openclaw/agents/config/tax-tutor.json
```

将 `bindings` 部分修改为：
```json
"bindings": [
  {
    "channel": "feishu",
    "accountId": "default",
    "chatId": "oc_xxxxxxxxxxxx"
  }
]
```

### 步骤 5：重启 Gateway

```bash
openclaw gateway restart
```

### 步骤 6：测试

在"税务学习助手"群聊中发送：
```
规划 CPA 会计 3 个月学习计划
```

如果配置正确，税务学习导师将响应。

---

## 备选方案：使用当前私聊

如果群聊配置复杂，可以直接在当前私聊中使用触发词：

**触发词**：`/tax` 或 `@税务学习导师`

示例：
```
/tax 规划 CPA 会计 3 个月学习计划
```

---

## 常见问题

### Q: 如何确认机器人已添加到群聊？
A: 在群聊中发送 `@机器人` 看是否能@成功

### Q: 群聊 ID 在哪里找？
A: 优先尝试 `openclaw channels resolve` 命令，或从飞书开发者后台查看

### Q: 配置后不响应怎么办？
A: 检查：
1. Gateway 是否重启
2. 群聊 ID 是否正确
3. 机器人是否有群聊消息权限

---

_创建日期：2026-03-17_
