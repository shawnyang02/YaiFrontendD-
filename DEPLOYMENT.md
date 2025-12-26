# 部署和预览链接配置指南

本项目支持多种预览链接生成方案，您可以根据需要选择合适的方案。

## 🚀 方案对比

| 方案 | 优势 | 劣势 | 配置复杂度 |
|------|------|------|------------|
| **GitHub Pages** | 免费、与 GitHub 集成好 | 只支持静态站点、有使用限制 | ⭐⭐ |
| **Surge.sh** | 快速部署、简单易用 | 免费版有限制 | ⭐ |
| **Vercel** | 性能最佳、功能最全 | 免费版有带宽限制 | ⭐⭐⭐ |

## 📋 配置步骤

### 方案一：GitHub Pages（推荐新手）

1. **启用 GitHub Pages**
   - 进入仓库 Settings → Pages
   - Source 选择 "GitHub Actions"

2. **无需额外配置**
   - 已在 `.github/workflows/ci-cd.yml` 中配置
   - PR 时自动生成预览链接
   - 主分支推送时部署到生产环境

### 方案二：Surge.sh（推荐快速部署）

1. **获取 Surge Token**
   ```bash
   npm install -g surge
   surge login
   surge token
   ```

2. **配置 GitHub Secrets**
   - 仓库 Settings → Secrets and variables → Actions
   - 添加 `SURGE_TOKEN`

3. **启用 Workflow**
   - 重命名 `surge-deploy.yml.disabled` → `surge-deploy.yml`（如果存在）

### 方案三：Vercel（推荐生产环境）

1. **获取 Vercel Token**
   - 访问 [Vercel Dashboard](https://vercel.com/account/tokens)
   - 创建新的 Token

2. **配置 GitHub Secrets**
   - 添加 `VERCEL_TOKEN`

3. **启用 Workflow**
   - 重命名 `vercel-deploy.yml.disabled` → `vercel-deploy.yml`（如果存在）

## 🔧 高级配置

### 自定义域名（Vercel）

在 `vercel.json` 中添加：
```json
{
  "alias": ["your-domain.com", "www.your-domain.com"]
}
```

### 环境变量配置

在各平台配置环境变量：
- **GitHub Pages**: 在 workflow 中设置
- **Surge.sh**: 通过 GitHub Secrets
- **Vercel**: 在 Vercel Dashboard 中配置

## 📱 预览链接格式

- **GitHub Pages**: `https://username.github.io/repo-name/pr-123/`
- **Surge.sh**: `https://repo-name-pr-123.surge.sh`
- **Vercel**: `https://repo-name-git-branch-username.vercel.app`

## 🛠️ 故障排除

### 构建失败
1. 检查 Node.js 版本兼容性
2. 确认所有依赖已正确安装
3. 查看构建日志中的错误信息

### 预览链接无法访问
1. 确认部署状态为成功
2. 检查路由配置（SPA 应用需要配置 fallback）
3. 验证静态资源路径是否正确

### Token 权限问题
1. 确认 Token 有足够权限
2. 检查 Token 是否过期
3. 重新生成并更新 Secrets

## 📚 相关文档

- [GitHub Actions 文档](https://docs.github.com/en/actions)
- [Surge.sh 文档](https://surge.sh/help/)
- [Vercel 文档](https://vercel.com/docs)

## 🤝 贡献

如果您有更好的部署方案或发现问题，欢迎提交 Issue 或 PR。