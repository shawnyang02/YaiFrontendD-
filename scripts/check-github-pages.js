#!/usr/bin/env node

/**
 * GitHub Pages 配置检查脚本
 * 帮助用户检查和配置 GitHub Pages 设置
 */

console.log('🔍 GitHub Pages 配置检查');
console.log('='.repeat(50));

console.log('\n📋 请按以下步骤检查 GitHub Pages 配置：');

console.log('\n1️⃣ 检查仓库设置');
console.log('   • 访问你的 GitHub 仓库');
console.log('   • 点击 Settings 标签');
console.log('   • 在左侧菜单找到 "Pages" 选项');

console.log('\n2️⃣ 配置 GitHub Pages');
console.log('   • Source: 选择 "Deploy from a branch"');
console.log('   • Branch: 选择 "gh-pages" 分支');
console.log('   • Folder: 选择 "/ (root)"');
console.log('   • 点击 "Save" 保存设置');

console.log('\n3️⃣ 检查 Actions 权限');
console.log('   • 在 Settings 中找到 "Actions" -> "General"');
console.log('   • 确保 "Workflow permissions" 设置为:');
console.log('     - "Read and write permissions" 或');
console.log('     - "Read repository contents and packages permissions" + "Allow GitHub Actions to create and approve pull requests"');

console.log('\n4️⃣ 验证权限设置');
console.log('   • 在 Settings -> Actions -> General 中');
console.log('   • 确保启用了 "Allow GitHub Actions to create and approve pull requests"');

console.log('\n5️⃣ 重新运行工作流');
console.log('   • 创建新的 Pull Request 或');
console.log('   • 在 Actions 标签中手动重新运行失败的工作流');

console.log('\n✅ 配置完成后，GitHub Pages 将自动部署');
console.log('   预览链接格式: https://[username].github.io/[repository]/pr-[number]/');
console.log('   生产链接格式: https://[username].github.io/[repository]/');

console.log('\n🔧 如果仍有问题，请检查：');
console.log('   • 仓库是否为公开仓库（私有仓库需要 GitHub Pro）');
console.log('   • gh-pages 分支是否已创建');
console.log('   • Actions 是否有足够的权限');

console.log('\n' + '='.repeat(50));
console.log('🎉 配置完成后，你的预览链接就能正常工作了！');