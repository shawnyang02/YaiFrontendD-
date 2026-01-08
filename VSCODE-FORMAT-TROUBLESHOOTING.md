# VSCode 自动格式化故障排除指南

## 🔧 问题：保存时没有自动格式化

如果你的 JavaScript/TypeScript 文件在保存时没有自动格式化，请按以下步骤排查：

### 1. 检查 VSCode 扩展

确保安装了必需的扩展：
```bash
# 检查是否安装了 Prettier 扩展
code --list-extensions | grep prettier

# 检查是否安装了 ESLint 扩展  
code --list-extensions | grep eslint
```

如果没有安装，请安装：
- `esbenp.prettier-vscode`
- `dbaeumer.vscode-eslint`

### 2. 检查 VSCode 设置

打开 VSCode 设置 (`Cmd+,` 或 `Ctrl+,`)，确保以下设置正确：

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.insertSpaces": true,
  "editor.tabSize": 2,
  "editor.detectIndentation": false
}
```

### 3. 检查文件关联

确保 VSCode 正确识别文件类型：
1. 打开问题文件
2. 查看右下角状态栏的语言模式
3. 如果不是 "JavaScript" 或 "TypeScript"，点击切换

### 4. 重启 VSCode

有时需要重启 VSCode 来应用配置：
1. 按 `Cmd+Shift+P` (Mac) 或 `Ctrl+Shift+P` (Windows)
2. 输入 "Developer: Reload Window"
3. 按回车重启窗口

### 5. 手动格式化测试

测试 Prettier 是否正常工作：
```bash
# 检查单个文件格式
npx prettier --check utils/promiseall.js

# 手动格式化单个文件
npx prettier --write utils/promiseall.js

# 格式化所有文件
npm run format
```

### 6. 检查 Prettier 配置

确保项目根目录有 `.prettierrc.json` 文件：
```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false
}
```

### 7. 清除 VSCode 缓存

如果问题持续存在：
1. 关闭 VSCode
2. 删除工作区的 `.vscode` 缓存（如果存在）
3. 重新打开项目

### 8. 检查文件权限

确保文件不是只读状态：
```bash
# 检查文件权限
ls -la utils/promiseall.js

# 如果需要，修改权限
chmod 644 utils/promiseall.js
```

## 🚀 快速修复命令

如果自动格式化不工作，可以使用这些命令：

```bash
# 格式化所有 JS/TS 文件
npm run format

# 修复 ESLint 错误
npm run lint:fix  

# 同时格式化和修复
npm run code:fix

# 检查格式化状态
npm run code:check
```

## 💡 调试技巧

### 查看 VSCode 输出
1. 打开 VSCode 输出面板 (`Cmd+Shift+U`)
2. 选择 "Prettier" 或 "ESLint" 查看错误信息

### 测试特定文件类型
```bash
# 测试 JavaScript 文件
npx prettier --write "**/*.js"

# 测试 TypeScript 文件  
npx prettier --write "**/*.ts"

# 测试所有支持的文件
npx prettier --write "**/*.{js,ts,tsx,css,json}"
```

### 验证配置
```bash
# 验证 Prettier 配置
npx prettier --check .

# 验证 ESLint 配置
npx eslint --print-config utils/promiseall.js
```

## ✅ 验证修复

创建一个测试文件验证格式化是否正常：

```javascript
// 创建测试文件 test-format.js
function test(a,b,c){
return{x:a,y:b,z:c}
}
```

保存后应该自动格式化为：
```javascript
function test(a, b, c) {
  return { x: a, y: b, z: c };
}
```

如果以上步骤都无法解决问题，请检查 VSCode 版本是否过旧，或尝试重新安装 Prettier 扩展。