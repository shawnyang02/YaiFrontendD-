// ESLint 配置 - 使用 ESLint 9.x 新格式
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
  // 全局忽略配置
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'build/**',
      '*.config.js',
      'coverage/**',
      'utils/**/*.js' // 忽略 utils 目录下的 JS 文件
    ],
  },
  
  // TypeScript 和 React 文件配置
  {
    files: ['src/**/*.{ts,tsx}', 'utils/**/*.ts'],
    languageOptions: {
      parser: typescriptParser,
      ecmaVersion: 2020,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
      'react': react,
      'react-hooks': reactHooks,
      'prettier': prettier,
    },
    rules: {
      // Prettier 集成
      'prettier/prettier': 'error',
      
      // TypeScript 规则
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      
      // React 规则
      'react/react-in-jsx-scope': 'off', // React 17+ 不需要
      'react/prop-types': 'off', // 使用 TypeScript
      'react/jsx-uses-react': 'off',
      'react/jsx-uses-vars': 'error',
      'react/jsx-key': 'error',
      'react/no-unescaped-entities': 'warn',
      
      // React Hooks 规则
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      
      // 基础规则
      'no-unused-vars': 'off', // 由 @typescript-eslint/no-unused-vars 处理
      'no-console': 'warn',
      'prefer-const': 'error',
      'no-var': 'error',
      'eqeqeq': 'error',
      'no-duplicate-imports': 'error',
      'no-debugger': 'warn',
      'no-alert': 'warn',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  
  // Prettier 配置（关闭与 Prettier 冲突的规则）
  prettierConfig,
];