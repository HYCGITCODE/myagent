# 团队 Agent 配置汇总

**创建时间**: 2026-03-11  
**最后更新**: 2026-03-11  
**配置位置**: `/home/admin/.openclaw/agents/config/`

---

## 📊 Agent 配置总览

| Agent ID | 姓名 | 角色 | 使用模型 | 配置文件 | 状态 |
|----------|------|------|----------|----------|------|
| **pm-huxiaochan** | 胡小产 | 产品负责人 | `qwen3.5-plus` | `pm-huxiaochan.json` | ✅ 已配置 |
| **ui-huxiaou** | 胡小 U | UI 设计师 | `qwen3.5-plus` | `ui-huxiaou.json` | ✅ 已配置 |
| **arch-huxiaojia** | 胡小架 | 架构师 | `qwen3.5-plus` | `arch-huxiaojia.json` | ✅ 已配置 |
| **fe-huxiaoqian** | 胡小前 | 前端开发 | **`glm-5`** 🔴 | `fe-huxiaoqian.json` | ✅ 已配置 |
| **be-huxiaohou** | 胡小后 | 后端开发 | **`glm-5`** 🔴 | `be-huxiaohou.json` | ✅ 已配置 |
| **qa-huxiaoce** | 胡小测 | 质量保障 | `qwen3.5-plus` | `qa-huxiaoce.json` | ✅ 已配置 |

---

## 🤖 模型分配策略

### 代码生成类任务（使用 glm-5）
| Agent | 任务类型 | 模型 |
|-------|----------|------|
| **FE** | 前端开发、组件实现 | `glm-5` |
| **BE** | 后端开发、API 设计 | `glm-5` |

### 分析协调类任务（使用 qwen3.5-plus）
| Agent | 任务类型 | 模型 |
|-------|----------|------|
| **OCA** | 流程监督、团队协调 | `qwen3.5-plus` |
| **PM** | 需求分析、项目管理 | `qwen3.5-plus` |
| **UI** | 界面设计、用户体验 | `qwen3.5-plus` |
| **Arch** | 架构设计、技术选型 | `qwen3.5-plus` |
| **QA** | 测试用例、Bug 分析 | `qwen3.5-plus` |

---

## 🔧 使用方法

### 方式 1: 使用 ACP 运行时调用

```javascript
sessions_spawn({
  runtime: "acp",           // ← 使用预定义 Agent
  agentId: "fe-huxiaoqian", // ← 指定 Agent ID
  thread: true,             // ← 线程绑定
  mode: "session",          // ← 持久会话
  task: "前端开发任务"
})
```

### 方式 2: 使用 CLI 调用

```bash
# 调用 FE Agent
openclaw agent invoke --id fe-huxiaoqian --task "前端开发任务"

# 调用 BE Agent
openclaw agent invoke --id be-huxiaohou --task "后端开发任务"

# 调用 PM Agent
openclaw agent invoke --id pm-huxiaochan --task "项目进度汇报"
```

### 方式 3: 在任务中指定模型

```javascript
sessions_spawn({
  runtime: "subagent",
  model: "glm-5",           // ← 手动指定模型
  label: "fe-task",
  task: "前端开发任务"
})
```

---

## 📋 配置文件结构

每个 Agent 配置文件包含：

```json
{
  "agentId": "fe-huxiaoqian",
  "name": "胡小前",
  "role": "设计系统工程师",
  "model": "glm-5",
  "description": "负责前端开发、组件实现、接口联调",
  "capabilities": [
    "界面实现",
    "接口联调",
    "自测交付",
    "Bug 修复"
  ],
  "sessionConfig": {
    "runtime": "acp",
    "thread": true,
    "mode": "session",
    "cleanup": "keep"
  },
  "identityFile": "/home/admin/.openclaw/workspace/agents-team/fe-huxiaoqian/IDENTITY.md"
}
```

---

## 🎯 配置说明

### sessionConfig 参数

| 参数 | 值 | 说明 |
|------|-----|------|
| **runtime** | `acp` | 使用 ACP 运行时，支持预定义 Agent |
| **thread** | `true` | 绑定到独立线程，保持对话上下文 |
| **mode** | `session` | 持久会话模式，非一次性任务 |
| **cleanup** | `keep` | 任务完成后保留会话，不删除 |

### capabilities 说明

| 能力 | 说明 |
|------|------|
| **界面实现** | 像素级还原设计稿，组件库开发 |
| **接口联调** | 对接后端 API，处理数据渲染与异常状态 |
| **自测交付** | 联调完成后进行自测，确保无阻塞性 Bug |
| **Bug 修复** | 快速响应 QA 反馈，修复后通知回归 |

---

## 📊 使用统计

| Agent | 调用次数 | 平均耗时 | 最后使用 |
|-------|----------|----------|----------|
| pm-huxiaochan | 0 | - | - |
| ui-huxiaou | 0 | - | - |
| arch-huxiaojia | 0 | - | - |
| fe-huxiaoqian | 0 | - | - |
| be-huxiaohou | 0 | - | - |
| qa-huxiaoce | 0 | - | - |

---

## 🔄 更新日志

| 日期 | 变更 | 说明 |
|------|------|------|
| 2026-03-11 | 初始创建 | 创建 6 个预定义 Agent 配置 |
| 2026-03-11 | 模型配置 | FE/BE 使用 glm-5，其他使用 qwen3.5-plus |

---

## 💡 最佳实践

### 1. 选择合适的运行时

| 场景 | 推荐运行时 | 说明 |
|------|-----------|------|
| 长期角色（如 FE/BE） | `acp` + `agentId` | 保持独立模型配置 |
| 临时任务 | `subagent` | 快速创建，任务完成销毁 |
| 需要独立上下文 | `acp` + `thread: true` | 保持对话历史 |

### 2. 模型选择建议

| 任务类型 | 推荐模型 | 原因 |
|----------|----------|------|
| 代码生成 | `glm-5` | 代码生成能力强 |
| 需求分析 | `qwen3.5-plus` | 综合能力强 |
| 架构设计 | `qwen3.5-plus` | 逻辑推理优秀 |
| 文档编写 | `qwen3.5-plus` | 表达清晰 |

### 3. 会话管理

| 操作 | 命令 | 说明 |
|------|------|------|
| 查看会话 | `sessions_list` | 查看所有活跃会话 |
| 查看历史 | `sessions_history(sessionKey)` | 查看会话历史 |
| 发送消息 | `sessions_send(sessionKey, message)` | 向会话发送消息 |
| 清理会话 | `sessions_spawn(cleanup: "delete")` | 任务完成后删除 |

---

## 📞 联系信息

| 角色 | Agent ID | 飞书 ID | 联系方式 |
|------|----------|--------|----------|
| OCA | oca-huxiaodou | ou_2680962647f0f8827a7c9b18848f44ee | 飞书私信 |
| PM | pm-huxiaochan | - | 飞书群 |
| UI | ui-huxiaou | - | 飞书群 |
| FE | fe-huxiaoqian | - | 飞书群 |
| BE | be-huxiaohou | - | 飞书群 |
| QA | qa-huxiaoce | ou_qa_huxiaoce | 飞书私信 |

---

**文档维护**: OCA 胡小豆  
**下次审查**: 2026-03-18
