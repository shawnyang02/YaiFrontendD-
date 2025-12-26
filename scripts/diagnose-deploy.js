#!/usr/bin/env node

/**
 * GitHub Actions 部署诊断脚本
 * 帮助诊断为什么 deploy-preview 没有执行
 */

import { execSync } from 'child_process';
import { existsSync } from 'fs';

/**
 * 检查 Git 状态
 */
function checkGitStatus() {
  console.log('🔍 检查 Git 状态...\n');
  
  try {
    const branch = execSync('git branch --show-current', { encoding: 'utf8' }).trim();
    const remote = execSync('git remote -v', { encoding: 'utf8' });
    const status = execSync('git status --porcelain', { encoding: 'utf8' });
    
    console.log(`📍 当前分支: ${branch}`);
    console.log(`🌐 远程仓库:`);
    console.log(remote);
    
    if (status.trim()) {
      console.log('⚠️  有未提交的更改:');
      console.log(status);
    } else {
      console.log('✅ 工作目录干净');
    }
    
    // 检查是否有远程分支
    try {
      const remoteBranch = execSync(`git rev-parse --abbrev-ref ${branch}@{upstream}`, { encoding: 'utf8' }).trim();
      console.log(`🔗 跟踪的远程分支: ${remoteBranch}`);
    } catch {
      console.log('⚠️  当前分支没有设置上游分支');
    }
    
  } catch (error) {
    console.error('❌ Git 状态检查失败:', error.message);
  }
}

/**
 * 检查 GitHub Actions 配置
 */
function checkActionsConfig() {
  console.log('\n🔧 检查 GitHub Actions 配置...\n');
  
  const workflowFiles = [
    '.github/workflows/ci-cd.yml',
    '.github/workflows/branch-preview.yml'
  ];
  
  workflowFiles.forEach(file => {
    if (existsSync(file)) {
      console.log(`✅ ${file} 存在`);
    } else {
      console.log(`❌ ${file} 不存在`);
    }
  });
}

/**
 * 提供解决方案
 */
function provideSolutions() {
  console.log('\n🚀 解决方案指南\n');
  
  console.log('📋 deploy-preview 不执行的常见原因和解决方法:\n');
  
  console.log('1. 🎯 **触发条件问题**');
  console.log('   问题: deploy-preview 只在 Pull Request 时执行');
  console.log('   解决: 创建 PR 而不是直接推送到 main 分支');
  console.log('   命令: git checkout -b feature/test && git push -u origin feature/test');
  console.log('   然后在 GitHub 上创建 Pull Request\n');
  
  console.log('2. 🏗️ **build 任务失败**');
  console.log('   问题: deploy-preview 依赖 build 任务成功');
  console.log('   解决: 检查 Actions 页面的 build 任务日志');
  console.log('   本地测试: pnpm install && pnpm lint && pnpm build:prod\n');
  
  console.log('3. 🔑 **权限问题**');
  console.log('   问题: GITHUB_TOKEN 权限不足');
  console.log('   解决: 仓库 Settings → Actions → General → Workflow permissions');
  console.log('   选择: "Read and write permissions"\n');
  
  console.log('4. 📄 **GitHub Pages 未启用**');
  console.log('   问题: GitHub Pages 功能未开启');
  console.log('   解决: 仓库 Settings → Pages → Source 选择 "GitHub Actions"\n');
  
  console.log('5. 🌿 **分支预览 (新功能)**');
  console.log('   功能: 推送到非主分支也能生成预览');
  console.log('   链接: https://username.github.io/repo-name/branch-分支名/');
  console.log('   状态: 在 commit 状态中查看预览链接\n');
}

/**
 * 检查本地构建
 */
function checkLocalBuild() {
  console.log('🔨 检查本地构建...\n');
  
  try {
    console.log('📦 安装依赖...');
    execSync('pnpm install', { stdio: 'inherit' });
    
    console.log('🔍 代码检查...');
    execSync('pnpm lint', { stdio: 'inherit' });
    
    console.log('🏗️ 构建项目...');
    execSync('pnpm build:prod', { stdio: 'inherit' });
    
    if (existsSync('dist/index.html')) {
      console.log('✅ 本地构建成功！');
    } else {
      console.log('❌ 构建产物不完整');
    }
    
  } catch (error) {
    console.log('❌ 本地构建失败，这可能是 Actions 失败的原因');
    console.log('错误:', error.message);
  }
}

/**
 * 主函数
 */
function main() {
  console.log('🔧 GitHub Actions 部署诊断工具\n');
  console.log('=' .repeat(50));
  
  checkGitStatus();
  checkActionsConfig();
  
  // 询问是否要运行本地构建测试
  console.log('\n❓ 是否要运行本地构建测试？(可能需要几分钟)');
  console.log('   如果要测试，请运行: pnpm build:prod');
  
  provideSolutions();
  
  console.log('📚 更多帮助: 查看 GitHub 仓库的 Actions 页面');
  console.log('🔗 GitHub Actions: https://github.com/用户名/仓库名/actions');
}

// 运行诊断
main();