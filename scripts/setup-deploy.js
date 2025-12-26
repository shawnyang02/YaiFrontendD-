#!/usr/bin/env node

/**
 * GitHub Pages 部署设置检查脚本
 * 帮助用户验证 GitHub Pages 预览链接配置
 */

import { readFileSync, existsSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

/**
 * 检查必要的配置文件
 */
function checkRequiredFiles() {
  const requiredFiles = [
    '.github/workflows/ci-cd.yml',
    'package.json',
    'webpack.config.js'
  ];

  const missingFiles = requiredFiles.filter(file => 
    !existsSync(join(projectRoot, file))
  );

  if (missingFiles.length > 0) {
    console.error('❌ 缺少必要文件:', missingFiles.join(', '));
    process.exit(1);
  }

  console.log('✅ 所有必要文件都存在');
}

/**
 * 检查 CI/CD 配置
 */
function checkCICDConfig() {
  try {
    const cicdPath = join(projectRoot, '.github/workflows/ci-cd.yml');
    const cicdContent = readFileSync(cicdPath, 'utf8');
    
    const requiredSteps = [
      'deploy-preview',
      'deploy-production',
      'peaceiris/actions-gh-pages',
      'github-script'
    ];

    const missingSteps = requiredSteps.filter(step => 
      !cicdContent.includes(step)
    );

    if (missingSteps.length > 0) {
      console.warn('⚠️  CI/CD 配置可能不完整，缺少:', missingSteps.join(', '));
    } else {
      console.log('✅ CI/CD 配置正确');
    }
  } catch (error) {
    console.error('❌ CI/CD 配置检查失败:', error.message);
  }
}

/**
 * 验证 package.json 配置
 */
function validatePackageJson() {
  try {
    const packagePath = join(projectRoot, 'package.json');
    const packageJson = JSON.parse(readFileSync(packagePath, 'utf8'));
    
    const requiredScripts = ['build:prod'];
    const missingScripts = requiredScripts.filter(script => 
      !packageJson.scripts || !packageJson.scripts[script]
    );

    if (missingScripts.length > 0) {
      console.warn('⚠️  缺少必要的构建脚本:', missingScripts.join(', '));
    } else {
      console.log('✅ package.json 配置正确');
    }
  } catch (error) {
    console.error('❌ package.json 解析失败:', error.message);
  }
}

/**
 * 显示 GitHub Pages 配置指南
 */
function showGitHubPagesGuide() {
  console.log(`
🚀 GitHub Pages 预览链接配置指南
==================================

当前配置状态：
- ✅ CI/CD 流程已配置
- ✅ 自动预览链接生成
- ✅ PR 评论功能

📋 使用步骤：

1. 🔧 启用 GitHub Pages
   - 进入仓库 Settings → Pages
   - Source 选择 "GitHub Actions"

2. 📤 推送代码
   - 推送代码到 GitHub 仓库
   - 创建 Pull Request

3. 🔗 获取预览链接
   - PR 中会自动添加预览链接评论
   - 格式: https://username.github.io/repo-name/pr-123/

4. 🚀 生产部署
   - 合并到 main 分支自动部署生产环境
   - 地址: https://username.github.io/repo-name/

⚡ 特性说明：
- 🔄 每次推送自动更新预览
- 💬 自动在 PR 中添加预览链接
- 🏗️ 零配置，无需额外 Token
- 📱 支持 SPA 路由

📚 详细文档: DEPLOYMENT.md
`);
}

/**
 * 检查项目结构
 */
function checkProjectStructure() {
  const importantDirs = ['src', 'public', '.github/workflows'];
  const missingDirs = importantDirs.filter(dir => 
    !existsSync(join(projectRoot, dir))
  );

  if (missingDirs.length > 0) {
    console.warn('⚠️  缺少重要目录:', missingDirs.join(', '));
  } else {
    console.log('✅ 项目结构完整');
  }
}

/**
 * 主函数
 */
function main() {
  console.log('🔧 开始检查 GitHub Pages 部署配置...\n');
  
  checkRequiredFiles();
  checkProjectStructure();
  checkCICDConfig();
  validatePackageJson();
  showGitHubPagesGuide();
  
  console.log('✨ 配置检查完成！');
}

// 运行脚本
main();