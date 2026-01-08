#!/usr/bin/env node

/**
 * 修复 VSCode 自动格式化问题的脚本
 */

import { execSync } from 'child_process';
import { existsSync } from 'fs';

const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function runCommand(command, description) {
  try {
    log(`\n🔧 ${description}`, 'blue');
    log(`执行命令: ${command}`, 'yellow');
    
    const output = execSync(command, { 
      encoding: 'utf8', 
      stdio: 'pipe',
      cwd: process.cwd()
    });
    
    log(`✅ ${description} - 成功`, 'green');
    if (output.trim()) {
      console.log(output);
    }
    return true;
  } catch (error) {
    log(`❌ ${description} - 失败`, 'red');
    console.log(error.stdout || error.message);
    return false;
  }
}

async function main() {
  log('🚀 开始修复 VSCode 自动格式化问题', 'blue');
  
  // 1. 检查并安装官方 Prettier 扩展
  log('\n📦 检查 VSCode 扩展:', 'blue');
  
  try {
    const extensions = execSync('code --list-extensions', { encoding: 'utf8' });
    
    if (!extensions.includes('esbenp.prettier-vscode')) {
      log('❌ 缺少官方 Prettier 扩展', 'red');
      log('请手动安装: code --install-extension esbenp.prettier-vscode', 'yellow');
    } else {
      log('✅ 官方 Prettier 扩展已安装', 'green');
    }
    
    if (!extensions.includes('dbaeumer.vscode-eslint')) {
      log('❌ 缺少 ESLint 扩展', 'red');
      log('请手动安装: code --install-extension dbaeumer.vscode-eslint', 'yellow');
    } else {
      log('✅ ESLint 扩展已安装', 'green');
    }
    
    // 检查冲突的扩展
    const conflictingExtensions = [
      'hb432.prettier-eslint-typescript',
      'rvest.vs-code-prettier-eslint',
      'lyngai.vscode-eslint-ts-fix'
    ];
    
    conflictingExtensions.forEach(ext => {
      if (extensions.includes(ext)) {
        log(`⚠️  发现冲突扩展: ${ext}`, 'yellow');
        log(`建议卸载: code --uninstall-extension ${ext}`, 'yellow');
      }
    });
    
  } catch (error) {
    log('❌ 无法检查 VSCode 扩展，请确保 VSCode 已安装并在 PATH 中', 'red');
  }
  
  // 2. 测试 Prettier 配置
  log('\n🎨 测试 Prettier 配置:', 'blue');
  runCommand('npx prettier --check utils/promiseall.js', '检查文件格式');
  runCommand('npx prettier --write utils/promiseall.js', '格式化文件');
  
  // 3. 测试 npm scripts
  log('\n📝 测试 npm scripts:', 'blue');
  runCommand('npm run format:check', '检查所有文件格式');
  runCommand('npm run format', '格式化所有文件');
  
  // 4. 提供解决方案
  log('\n💡 解决方案:', 'blue');
  log('1. 安装官方 Prettier 扩展:', 'yellow');
  log('   code --install-extension esbenp.prettier-vscode', 'reset');
  
  log('\n2. 卸载冲突的扩展:', 'yellow');
  log('   code --uninstall-extension hb432.prettier-eslint-typescript', 'reset');
  log('   code --uninstall-extension rvest.vs-code-prettier-eslint', 'reset');
  log('   code --uninstall-extension lyngai.vscode-eslint-ts-fix', 'reset');
  
  log('\n3. 重启 VSCode:', 'yellow');
  log('   Cmd+Shift+P → "Developer: Reload Window"', 'reset');
  
  log('\n4. 检查文件类型:', 'yellow');
  log('   打开 utils/promiseall.js，确保右下角显示 "JavaScript"', 'reset');
  
  log('\n5. 手动格式化测试:', 'yellow');
  log('   右键文件 → "Format Document" 或 Shift+Alt+F', 'reset');
  
  log('\n🎉 修复完成！请按照上述步骤操作', 'green');
}

main().catch(console.error);