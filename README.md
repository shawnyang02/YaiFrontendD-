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

## 📦 预览链接功能

本项目已配置自动化 CI/CD 流程，支持：

- ✅ **Pull Request 预览**: 每个 PR 自动生成预览链接
- ✅ **多平台部署**: 支持 GitHub Pages、Surge.sh、Vercel
- ✅ **自动评论**: 在 PR 中自动添加预览链接评论
- ✅ **生产部署**: 主分支自动部署到生产环境

### 配置说明

详细配置步骤请查看 [DEPLOYMENT.md](./DEPLOYMENT.md)

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