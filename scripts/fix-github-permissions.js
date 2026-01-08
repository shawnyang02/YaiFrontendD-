#!/usr/bin/env node

/**
 * GitHub Actions 权限配置修复指南
 * 解决 "Write access to repository not granted" 错误
 */

console.log('🔧 GitHub Actions 权限配置修复指南');
console.log('='.repeat(60));

console.log('\n❌ 当前错误：');
console.log('   remote: Write access to repository not granted.');
console.log('   fatal: unable to access repository - 403 error');

console.log('\n🎯 解决方案：');

console.log('\n1️⃣ 配置仓库 Actions 权限');
console.log('   📍 访问: https://github.com/[你的用户名]/YaiFrontendD-/settings/actions');
console.log('   • 点击仓库的 "Settings" 标签');
console.log('   • 在左侧菜单选择 "Actions" -> "General"');

console.log('\n2️⃣ 修改 Workflow permissions');
console.log('   在 "Workflow permissions" 部分：');
console.log('   ✅ 选择: "Read and write permissions"');
console.log('   ✅ 勾选: "Allow GitHub Actions to create and approve pull requests"');
console.log('   💾 点击 "Save" 保存设置');

console.log('\n3️⃣ 启用 GitHub Pages');
console.log('   📍 访问: https://github.com/[你的用户名]/YaiFrontendD-/settings/pages');
console.log('   • 在左侧菜单选择 "Pages"');
console.log('   • Source: 选择 "Deploy from a branch"');
console.log('   • Branch: 选择 "gh-pages" 分支');
console.log('   • Folder: 选择 "/ (root)"');
console.log('   💾 点击 "Save" 保存设置');

console.log('\n4️⃣ 验证仓库可见性');
console.log('   • 确保仓库是 Public（公开）');
console.log('   • 私有仓库需要 GitHub Pro 才能使用 GitHub Pages');

console.log('\n5️⃣ 重新运行 Actions');
console.log('   配置完成后：');
console.log('   • 访问 Actions 标签页');
console.log('   • 找到失败的工作流');
console.log('   • 点击 "Re-run jobs" 重新运行');

console.log('\n🔍 详细步骤截图指南：');
console.log('   1. Settings -> Actions -> General');
console.log('   2. 找到 "Workflow permissions" 部分');
console.log('   3. 选择 "Read and write permissions"');
console.log('   4. 勾选 "Allow GitHub Actions to create and approve pull requests"');
console.log('   5. 点击 "Save" 按钮');

console.log('\n⚠️  常见问题排查：');
console.log('   • 确认你是仓库的 Owner 或有 Admin 权限');
console.log('   • 检查组织级别的 Actions 权限设置');
console.log('   • 确保没有分支保护规则阻止推送');

console.log('\n✅ 配置成功后的预期结果：');
console.log('   • GitHub Actions 可以成功推送到 gh-pages 分支');
console.log('   • 预览链接自动生成：https://[用户名].github.io/YaiFrontendD-/pr-[PR号]/');
console.log('   • 生产链接：https://[用户名].github.io/YaiFrontendD-/');

console.log('\n' + '='.repeat(60));
console.log('🎉 按照以上步骤配置后，部署问题就能解决了！');