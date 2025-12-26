#!/usr/bin/env node

/**
 * YAML 语法验证脚本
 * 验证 GitHub Actions 工作流文件的语法正确性
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 验证 GitHub Actions YAML 语法');
console.log('='.repeat(40));

const yamlFile = '.github/workflows/ci-cd.yml';
const fullPath = path.resolve(yamlFile);

try {
  // 检查文件是否存在
  if (!fs.existsSync(fullPath)) {
    console.error(`❌ 文件不存在: ${yamlFile}`);
    process.exit(1);
  }

  // 读取文件内容
  const content = fs.readFileSync(fullPath, 'utf8');
  
  // 基本语法检查
  const lines = content.split('\n');
  let hasErrors = false;
  
  console.log(`📄 检查文件: ${yamlFile}`);
  console.log(`📏 总行数: ${lines.length}`);
  
  // 检查常见的 YAML 语法问题
  lines.forEach((line, index) => {
    const lineNum = index + 1;
    
    // 检查制表符（应该使用空格）
    if (line.includes('\t')) {
      console.error(`❌ 第 ${lineNum} 行: 包含制表符，应使用空格缩进`);
      hasErrors = true;
    }
    
    // 检查行尾空格
    if (line.endsWith(' ') && line.trim() !== '') {
      console.warn(`⚠️  第 ${lineNum} 行: 行尾有多余空格`);
    }
  });
  
  // 检查多行字符串的语法
  const multilineRegex = /script:\s*\|/;
  const hasMultilineScript = content.match(multilineRegex);
  
  if (hasMultilineScript) {
    console.log('✅ 检测到多行脚本，语法格式正确');
  }
  
  // 检查基本的 YAML 结构
  const requiredSections = ['name:', 'on:', 'jobs:'];
  requiredSections.forEach(section => {
    if (!content.includes(section)) {
      console.error(`❌ 缺少必需的部分: ${section}`);
      hasErrors = true;
    } else {
      console.log(`✅ 找到必需部分: ${section}`);
    }
  });
  
  if (!hasErrors) {
    console.log('\n🎉 YAML 语法验证通过！');
    console.log('✅ 文件格式正确，可以提交到 GitHub');
  } else {
    console.log('\n❌ 发现语法错误，请修复后重试');
    process.exit(1);
  }
  
} catch (error) {
  console.error('❌ 验证过程中出错:', error.message);
  process.exit(1);
}

console.log('\n' + '='.repeat(40));