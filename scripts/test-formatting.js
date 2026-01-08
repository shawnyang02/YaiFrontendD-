#!/usr/bin/env node

/**
 * 测试 ESLint 和 Prettier 配置脚本
 */

import { execSync } from 'child_process';
import { existsSync } from 'fs';
import path from 'path';

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
    log(`\n🔍 ${description}`, 'blue');
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

function checkFile(filePath, description) {
  const exists = existsSync(filePath);
  if (exists) {
    log(`✅ ${description} - 存在`, 'green');
  } else {
    log(`❌ ${description} - 不存在`, 'red');
  }
  return exists;
}

async function main() {
  log('🚀 开始测试 ESLint 和 Prettier 配置', 'blue');
  
  // 检查配置文件
  log('\n📁 检查配置文件:', 'blue');
  checkFile('eslint.config.js', 'ESLint 配置文件');
  checkFile('.prettierrc.json', 'Prettier 配置文件');
  checkFile('.prettierignore', 'Prettier 忽略文件');
  checkFile('.vscode/settings.json', 'VSCode 设置文件');
  
  // 检查源文件
  log('\n📄 检查源文件:', 'blue');
  checkFile('src/App.tsx', 'React 应用文件');
  checkFile('src/index.tsx', 'React 入口文件');
  checkFile('utils/myDebounce.ts', 'TypeScript 工具文件');
  
  // 测试 Prettier
  log('\n🎨 测试 Prettier 格式化:', 'blue');
  runCommand('npx prettier --check src/App.tsx', '检查 App.tsx 格式');
  runCommand('npx prettier --write src/App.tsx', '格式化 App.tsx');
  
  // 测试 ESLint
  log('\n🔧 测试 ESLint 检查:', 'blue');
  runCommand('npx eslint src/App.tsx', '检查 App.tsx 语法');
  runCommand('npx eslint src/App.tsx --fix', '修复 App.tsx 问题');
  
  // 测试组合命令
  log('\n🔄 测试组合命令:', 'blue');
  runCommand('npm run format', '运行格式化脚本');
  runCommand('npm run lint:check', '运行 ESLint 检查');
  
  log('\n🎉 测试完成！', 'green');
  log('💡 提示: 在 VSCode 中保存文件时会自动格式化', 'yellow');
}

main().catch(console.error);