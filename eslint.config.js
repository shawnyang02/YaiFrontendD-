// ESLint 配置 - 使用 ESLint 9.x 新格式
export default [
  {
    // 全局忽略配置
    ignores: [
      'node_modules/**',
      'dist/**',
      'build/**',
      '*.config.js',
      'coverage/**'
    ],
  },
  {
    files: ['src/**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      // 基础规则
      'no-unused-vars': 'off', // 由 TypeScript 处理
      'no-console': 'warn',
      'prefer-const': 'error',
      'no-var': 'error',
      
      // 代码质量
      'eqeqeq': 'error',
      'no-duplicate-imports': 'error',
    },
  },
];
