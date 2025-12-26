#!/usr/bin/env node

/**
 * 部署设置脚本
 * 帮助用户快速配置预览链接生成
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
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
 * 显示配置指南
 */
function showSetupGuide() {
  console.log(`
🚀 预览链接配置指南
==================

已为您配置了三种部署方案：

1. 📄 GitHub Pages (免费，推荐新手)
   - 无需额外配置
   - PR 时自动生成预览链接
   - 访问格式: https://username.github.io/repo-name/pr-123/

2. ⚡ Surge.sh (快速部署)
   - 需要配置 SURGE_TOKEN
   - 获取方法: npm install -g surge && surge login && surge token
   - 在 GitHub Secrets 中添加 SURGE_TOKEN

3. 🌟 Vercel (功能最全，推荐生产)
   - 需要配置 VERCEL_TOKEN
   - 获取方法: 访问 https://vercel.com/account/tokens
   - 在 GitHub Secrets 中添加 VERCEL_TOKEN

📋 下一步操作：
1. 推送代码到 GitHub
2. 创建 Pull Request 测试预览功能
3. 根据需要配置相应的 Token

📚 详细文档请查看: DEPLOYMENT.md
`);
}

/**
 * 验证 package.json 配置
 */
function validatePackageJson() {
  try {
    const packagePath = join(projectRoot, 'package.json');
    const packageJson = JSON.parse(readFileSync(packagePath, 'utf8'));
    
    const requiredScripts = ['build:prod', 'vercel-build'];
    const missingScripts = requiredScripts.filter(script => 
      !packageJson.scripts || !packageJson.scripts[script]
    );

    if (missingScripts.length > 0) {
      console.warn('⚠️  缺少推荐的脚本:', missingScripts.join(', '));
    } else {
      console.log('✅ package.json 配置正确');
    }
  } catch (error) {
    console.error('❌ package.json 解析失败:', error.message);
  }
}

/**
 * 主函数
 */
function main() {
  console.log('🔧 开始检查部署配置...\n');
  
  checkRequiredFiles();
  validatePackageJson();
  showSetupGuide();
  
  console.log('✨ 配置检查完成！');
}

// 运行脚本
main();