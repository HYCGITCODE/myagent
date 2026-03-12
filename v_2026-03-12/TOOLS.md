# TOOLS.md - Local Notes

Skills define _how_ tools work. This file is for _your_ specifics — the stuff that's unique to your setup.

---

## API Keys & Environment

### Tavily Search

| 配置项 | 值 |
|--------|-----|
| **API Key** | `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` |
| **环境变量** | `TAVILY_API_KEY` |
| **安装位置** | `~/.openclaw/workspace/skills/tavily-tool/` |

**配置命令**:
```bash
# Gateway 环境变量配置
openclaw gateway env set TAVILY_API_KEY="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"
```

**使用示例**:
```bash
node skills/tavily-tool/scripts/tavily_search.js --query "best rust http client" --max_results 5
```

---

## What Goes Here

Things like:

- Camera names and locations
- SSH hosts and aliases
- Preferred voices for TTS
- Speaker/room names
- Device nicknames
- Anything environment-specific

## Examples

```markdown
### Cameras

- living-room → Main area, 180° wide angle
- front-door → Entrance, motion-triggered

### SSH

- home-server → 192.168.1.100, user: admin

### TTS

- Preferred voice: "Nova" (warm, slightly British)
- Default speaker: Kitchen HomePod
```

## Why Separate?

Skills are shared. Your setup is yours. Keeping them apart means you can update skills without losing your notes, and share skills without leaking your infrastructure.

---

## 🎮 游戏开发工具链

### Vue 3 + TypeScript 项目初始化

```bash
# 创建 Vite + Vue 3 + TypeScript 项目
npm create vite@latest tetris-web -- --template vue-ts
cd tetris-web
npm install

# 安装开发依赖
npm install -D @types/node
```

### 常见问题及解决方案

| 问题 | 原因 | 解决方案 |
|------|------|----------|
| vue-tsc 版本警告 | 与 Vue 3 版本不匹配 | `npm install -D vue-tsc@latest` |
| Canvas 类型缺失 | 未定义 Canvas 类型 | 在 `src/types/index.ts` 中定义完整类型 |
| requestAnimationFrame 类型错误 | TypeScript 严格模式 | 使用 `ReturnType<typeof requestAnimationFrame>` |

### 游戏开发常用工具

| 工具 | 用途 | 安装命令 |
|------|------|----------|
| Vite | 构建工具 | `npm create vite@latest` |
| TypeScript | 类型检查 | `npm install -D typescript` |
| vue-tsc | Vue 类型检查 | `npm install -D vue-tsc` |
| ESLint | 代码规范 | `npm install -D eslint` |

### 性能测试命令

```bash
# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 类型检查
npx vue-tsc --noEmit

# 代码规范检查
npm run lint
```

---

Add whatever helps you do your job. This is your cheat sheet.
