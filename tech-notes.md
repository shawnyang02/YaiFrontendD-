# 技术总结笔记

## 📅 更新记录

| 日期       | 主题                   | 标签           |
|------------|------------------------|----------------|
| 2025-12-14 | 项目初始化总结         | `webpack`, `react`, `typescript` |

## 📚 目录

- [项目架构](#项目架构)
- [技术栈总结](#技术栈总结)
- [核心配置](#核心配置)
- [开发流程](#开发流程)
- [常见问题](#常见问题)
- [学习资源](#学习资源)

## 项目架构

### 项目结构
```
YaiFrontendD-
├── src/                 # 源代码目录
│   ├── index.tsx       # 应用入口
│   ├── App.tsx         # 主组件
│   ├── index.css       # 全局样式
│   ├── App.css         # 组件样式
│   ├── logo.svg        # 静态资源
│   └── custom.d.ts     # 类型声明
├── public/              # 公共资源目录
│   └── index.html      # HTML模板
├── utils/              # 工具函数目录
│   └── myDebounce.ts   # 防抖工具
├── webpack.config.js   # Webpack配置
├── tsconfig.json       # TypeScript配置
├── .eslintrc.json      # ESLint配置
├── .prettierrc.json    # Prettier配置
└── package.json        # 项目配置
```

### 架构特点
- **模块化设计**: 代码按功能和类型清晰划分
- **TypeScript支持**: 提供类型安全和更好的开发体验
- **Webpack构建**: 灵活的构建配置，支持开发和生产环境
- **ESLint + Prettier**: 统一代码风格，提高代码质量
- **工具函数库**: 包含常用工具函数（如防抖函数）

## 工具函数

### 防抖函数 (myDebounce)
**功能**: 延迟执行函数，避免频繁调用
**应用场景**: 搜索框输入、窗口大小调整、滚动事件等

```typescript
// utils/myDebounce.ts
const myDebounce = (func: (...args: any[]) => void, delay: number): ((...args: any[]) => void) => {
  let timer: ReturnType<typeof setTimeout> | null = null;
  return (...args: any[]) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

export default myDebounce;
```

**使用示例**:
```typescript
import myDebounce from './utils/myDebounce';

const handleSearch = myDebounce((keyword: string) => {
  // 执行搜索逻辑
  console.log('搜索:', keyword);
}, 500);

// 输入时调用
input.addEventListener('input', (e) => {
  handleSearch(e.target.value);
});
```

## 技术栈总结

### React 19
- 函数式组件优先
- Hooks API使用 (useState, useEffect, useContext等)
- JSX语法
- 组件化开发思想

### TypeScript
- 静态类型检查
- 接口和类型定义
- 泛型支持
- 编译时错误检查

### Webpack 5
- 模块打包
- 代码分割
- 热模块替换
- 资源处理 (CSS, 图片等)

### ESLint & Prettier
- 代码质量检查
- 自动格式化
- 统一团队代码风格

## 核心配置

### Webpack配置要点
```javascript
// webpack.config.js
module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[contenthash].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      { test: /\.tsx?$/, use: 'ts-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.(png|svg|jpg|jpeg|gif)$/i, type: 'asset/resource' },
    ],
  },
  // ... 更多配置
};
```

### TypeScript配置要点
```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES6",
    "lib": ["dom", "dom.iterable", "esnext"],
    "jsx": "react-jsx",
    "strict": true,
    "moduleResolution": "node",
    "esModuleInterop": true,
    "skipLibCheck": true
  }
}
```

## 开发流程

### 1. 启动开发服务器
```bash
pnpm dev
```
- 开发服务器地址: http://localhost:3000
- 支持热模块替换

### 2. 代码开发
- 创建新组件: `src/components/ComponentName.tsx`
- 添加样式: `src/components/ComponentName.css`
- 编写类型定义: `src/types/ComponentName.ts`

### 3. 代码检查
```bash
pnpm lint      # 检查代码质量
pnpm lint:fix  # 自动修复问题
pnpm format    # 格式化代码
```

### 4. 构建项目
```bash
pnpm build        # 开发模式构建
pnpm build:prod   # 生产模式构建
```
- 构建产物: `dist/` 目录

## 常见问题

### Q: 如何添加新的依赖？
A: 使用pnpm安装：
```bash
pnpm add package-name          # 生产依赖
pnpm add -D package-name       # 开发依赖
```

### Q: 如何配置新的Webpack loader？
A: 在`webpack.config.js`的`module.rules`中添加新的规则：
```javascript
{
  test: /\.extension$/,
  use: ['loader-name']
}
```

### Q: 如何处理TypeScript类型错误？
A: 
1. 检查类型定义是否正确
2. 使用`any`类型临时解决（不推荐长期使用）
3. 编写类型声明文件

## 学习资源

### React
- [React官方文档](https://react.dev/)
- [React Hooks API](https://react.dev/reference/react/hooks)

### TypeScript
- [TypeScript官方文档](https://www.typescriptlang.org/docs/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

### Webpack
- [Webpack官方文档](https://webpack.js.org/)
- [Webpack Guides](https://webpack.js.org/guides/)

### ESLint & Prettier
- [ESLint官方文档](https://eslint.org/)
- [Prettier官方文档](https://prettier.io/)

## 📝 笔记模板

### 技术点记录模板

#### 技术名称
**日期**: YYYY-MM-DD
**标签**: `tag1`, `tag2`

**核心概念**:
- 概念1: 解释...
- 概念2: 解释...

**使用方法**:
```typescript
// 代码示例
```

**注意事项**:
- 注意点1
- 注意点2

**应用场景**:
- 场景1
- 场景2

### 问题解决模板

#### 问题描述
**问题**: 描述遇到的问题
**影响**: 说明问题的影响范围

**排查过程**:
1. 步骤1
2. 步骤2
3. 步骤3

**解决方案**:
```typescript
// 修复代码示例
```

**预防措施**:
- 措施1
- 措施2

---

## 🚀 未来规划

- [ ] 添加单元测试框架 (Jest + React Testing Library)
- [ ] 配置CI/CD流程
- [ ] 优化构建性能
- [ ] 添加状态管理 (Redux Toolkit或Zustand)
- [ ] 实现路由系统 (React Router)
- [ ] 添加API请求库 (Axios)

---

*最后更新: 2025-12-14*