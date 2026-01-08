# 自动格式化代码设置指南

## 🎯 功能说明

本项目已配置完整的保存时自动格式化功能，包括：
- **保存时自动格式化** - 使用 Prettier
- **保存时自动修复 ESLint 错误**
- **自动整理 import 语句**
- **自动移除行尾空格**

## 📋 必需的 VSCode 扩展

请确保安装以下扩展：

```json
{
  "recommendations": [
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "ms-vscode.vscode-typescript-next"
  ]
}
```

## ⚙️ 当前配置

### 1. VSCode 设置 (`.vscode/settings.json`)
```json
{
  "editor.formatOnSave": true,           // 保存时格式化
  "editor.formatOnPaste": true,          // 粘贴时格式化
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",  // 保存时修复 ESLint
    "source.organizeImports": "explicit" // 保存时整理 import
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

### 2. Prettier 配置 (`.prettierrc.json`)
```json
{
  "semi": true,              // 使用分号
  "trailingComma": "es5",    // ES5 尾随逗号
  "singleQuote": true,       // 使用单引号
  "printWidth": 80,          // 行宽 80 字符
  "tabWidth": 2,             // 缩进 2 空格
  "useTabs": false,          // 使用空格而非 Tab
  "jsxSingleQuote": true,    // JSX 使用单引号
  "bracketSpacing": true,    // 对象括号内空格
  "arrowParens": "avoid",    // 箭头函数参数括号
  "endOfLine": "lf"          // 使用 LF 换行符
}
```

## 🚀 使用方法

### 自动格式化（推荐）
1. 在 VSCode 中打开项目
2. 编辑任意代码文件
3. 按 `Cmd+S` (Mac) 或 `Ctrl+S` (Windows) 保存
4. 代码会自动格式化并修复 ESLint 错误

### 手动格式化命令
```bash
# 格式化所有文件
npm run format

# 检查格式化状态
npm run format:check

# 修复 ESLint 错误
npm run lint:fix

# 同时执行格式化和 ESLint 修复
npm run code:fix

# 测试格式化配置
npm run test:format
```

## 🔧 支持的文件类型

自动格式化支持以下文件类型：
- **TypeScript**: `.ts`, `.tsx`
- **JavaScript**: `.js`, `.jsx`
- **样式文件**: `.css`
- **配置文件**: `.json`
- **Markdown**: `.md`

## 📝 格式化规则示例

### 代码格式化前：
```typescript
const myFunction=(param1:string,param2:number)=>{
return {
name:param1,
age:param2
}
}
```

### 代码格式化后：
```typescript
const myFunction = (param1: string, param2: number) => {
  return {
    name: param1,
    age: param2,
  };
};
```

## 🛠️ 故障排除

### 如果自动格式化不工作：

1. **检查扩展是否安装**：
   ```bash
   code --list-extensions | grep prettier
   code --list-extensions | grep eslint
   ```

2. **重启 VSCode**：
   - 按 `Cmd+Shift+P` (Mac) 或 `Ctrl+Shift+P` (Windows)
   - 输入 "Developer: Reload Window"

3. **检查 Prettier 配置**：
   ```bash
   npx prettier --check src/App.tsx
   ```

4. **检查 ESLint 配置**：
   ```bash
   npx eslint src/App.tsx
   ```

5. **手动测试格式化**：
   ```bash
   npm run test:format
   ```

### 常见问题：

**Q: 保存时没有自动格式化？**
A: 检查 VSCode 设置中 `editor.formatOnSave` 是否为 `true`

**Q: ESLint 错误没有自动修复？**
A: 检查 `editor.codeActionsOnSave` 配置是否正确

**Q: 某些文件不被格式化？**
A: 检查文件是否在 `.prettierignore` 中被忽略

## 📚 相关命令

```bash
# 开发服务器
npm run dev

# 构建项目
npm run build

# 代码质量检查
npm run code:check

# 完整的代码修复
npm run code:fix
```

## 💡 提示

- 建议团队成员都使用相同的 VSCode 扩展和配置
- 可以通过 `.vscode/extensions.json` 推荐必需的扩展
- 在 CI/CD 中使用 `npm run code:check` 确保代码质量
- 使用 `npm run test:format` 测试格式化配置是否正常工作