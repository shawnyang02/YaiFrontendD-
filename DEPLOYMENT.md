# GitHub Pages 部署和预览链接配置指南

本项目使用 GitHub Pages 实现自动化部署和预览链接生成。

## 🚀 功能特性

- ✅ **Pull Request 预览**: 每个 PR 自动生成独立的预览链接
- ✅ **自动评论**: 在 PR 中自动添加预览链接评论
- ✅ **生产部署**: 主分支推送时自动部署到生产环境
- ✅ **零配置**: 无需额外的 Token 或密钥配置

## 📋 配置步骤

### 1. 启用 GitHub Pages

1. **进入仓库设置**
   - 打开 GitHub 仓库页面
   - 点击 `Settings` 选项卡

2. **配置 Pages 设置**
   - 在左侧菜单中找到 `Pages`
   - Source 选择 `GitHub Actions`
   - 保存设置

### 2. 推送代码触发部署

项目已配置完整的 CI/CD 流程：

```yaml
# .github/workflows/ci-cd.yml 已包含以下功能：
- 代码检查和构建
- PR 预览部署
- 生产环境部署
```

## 📱 预览链接格式

- **PR 预览**: `https://username.github.io/repo-name/pr-123/`
- **生产环境**: `https://username.github.io/repo-name/`

## 🔧 工作流程

### Pull Request 流程
1. 创建 PR 或推送到 PR 分支
2. 自动触发构建和部署
3. 在 PR 中自动添加预览链接评论
4. 每次推送都会更新预览

### 生产部署流程
1. 合并 PR 到 `main` 分支
2. 自动触发生产环境部署
3. 更新 `https://username.github.io/repo-name/`

## 🛠️ 故障排除

### 构建失败
1. **检查构建日志**
   - 进入 Actions 选项卡查看详细错误
   - 常见问题：依赖安装失败、TypeScript 类型错误

2. **本地验证**
   ```bash
   pnpm install
   pnpm lint
   pnpm build:prod
   ```

### 预览链接无法访问
1. **检查 Pages 设置**
   - 确认 Source 设置为 `GitHub Actions`
   - 检查是否有自定义域名冲突

2. **检查部署状态**
   - 在 Actions 中查看 `deploy-preview` 任务状态
   - 确认 `peaceiris/actions-gh-pages` 执行成功

### 权限问题
1. **GITHUB_TOKEN 权限**
   - 默认 Token 应该有足够权限
   - 如果失败，检查仓库的 Actions 权限设置

## 📚 技术实现

### Webpack 配置优化
- 生产环境代码分割和压缩
- 静态资源优化和缓存策略
- SPA 路由支持 (`historyApiFallback`)

### GitHub Actions 配置
- 多阶段构建流程
- 构建产物缓存和传递
- 条件部署（PR vs 生产）

## 🔍 监控和维护

### 检查部署状态
```bash
# 运行配置检查脚本
pnpm setup:deploy
```

### 清理旧的预览部署
GitHub Pages 会自动管理部署历史，但如果需要手动清理：
1. 进入 `gh-pages` 分支
2. 删除不需要的 `pr-*` 目录

## 📖 相关文档

- [GitHub Pages 官方文档](https://docs.github.com/en/pages)
- [GitHub Actions 文档](https://docs.github.com/en/actions)
- [peaceiris/actions-gh-pages](https://github.com/peaceiris/actions-gh-pages)

## 🤝 贡献

如果您发现问题或有改进建议，欢迎提交 Issue 或 PR。