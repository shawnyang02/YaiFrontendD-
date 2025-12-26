# YaiFrontend 项目

一个现代化的 React + TypeScript 前端项目，支持自动化部署和预览链接生成。

## 🚀 快速开始

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build:prod

# 检查部署配置
pnpm setup:deploy
```

## 📦 GitHub Pages 预览功能

本项目已配置自动化 CI/CD 流程，支持：

- ✅ **Pull Request 预览**: 每个 PR 自动生成预览链接
- ✅ **GitHub Pages 部署**: 免费、零配置的静态站点托管
- ✅ **自动评论**: 在 PR 中自动添加预览链接评论
- ✅ **生产部署**: 主分支自动部署到生产环境

### 使用方法

1. **启用 GitHub Pages**: 仓库 Settings → Pages → Source 选择 "GitHub Actions"
2. **创建 PR**: 推送代码并创建 Pull Request
3. **获取预览**: 在 PR 评论中查看自动生成的预览链接

预览链接格式: `https://username.github.io/repo-name/pr-123/`

## 🛠️ 技术栈

- **框架**: React 19
- **语言**: TypeScript
- **构建工具**: Webpack 5
- **包管理**: pnpm
- **代码规范**: ESLint + Prettier
- **CI/CD**: GitHub Actions

## 📁 项目结构

```
├── src/                 # 源代码
├── public/              # 静态资源
├── dist/                # 构建输出
├── .github/workflows/   # CI/CD 配置
├── scripts/             # 工具脚本
└── DEPLOYMENT.md        # 部署文档
```