# Devv Spider

一个用于从 Devv 项目中导出文件到本地的工具。

## 功能特性

- 🚀 快速导出 Devv 项目中的所有文件
- 📁 自动创建目录结构
- 💾 保持文件的原始内容和层级关系
- 🔄 支持批量处理多个文件

## 安装与使用

### 前置要求

- Node.js 12.0 或更高版本

### 使用方法

1. 克隆或下载此项目：
```bash
git clone <repository-url>
cd devv-spider
```

2. 准备项目数据文件 `file-json.json`，包含以下结构：
```json
{
  "projectId": "your-project-id",
  "name": "Your Project Name", 
  "files": [
    {
      "filename": "path/to/file.js",
      "content": "file content here"
    }
  ]
}
```

3. 运行导出脚本：
```bash
node create-project-files.js
```

4. 导出的文件将保存在 `demo-project` 目录中。

## 项目结构

```
devv-spider/
├── create-project-files.js  # 主要的文件导出脚本
├── file-json.json          # 项目数据文件（包含文件信息）
├── README.md               # 项目说明文档
└── demo-project/           # 导出的文件目录（自动生成）
```

## 工作原理

1. **读取数据**：脚本读取 `file-json.json` 文件中的项目数据
2. **解析文件信息**：提取每个文件的路径和内容
3. **创建目录结构**：根据文件路径自动创建必要的目录
4. **写入文件**：将文件内容写入到对应的本地文件中

## 输出示例

运行脚本后，您将看到类似以下的输出：

```
创建文件: /path/to/demo-project/.devv/ARCHITECTURE.md
创建文件: /path/to/demo-project/src/components/Header.js
创建文件: /path/to/demo-project/src/pages/Home.js
...
所有文件创建完成！
```

## 错误处理

脚本包含以下错误处理机制：

- ✅ 检查 JSON 文件格式是否正确
- ✅ 验证文件数组是否存在
- ✅ 跳过无效的文件条目
- ✅ 自动创建缺失的目录
- ✅ 显示详细的错误信息

## 注意事项

- 确保 `file-json.json` 文件格式正确
- 输出目录 `demo-project` 会被自动创建
- 如果目标文件已存在，将被覆盖
- 文件名中的路径分隔符会被正确处理

## 贡献

欢迎提交 Issue 和 Pull Request 来改进这个工具！

## 许可证

MIT License

---

**提示**：这个工具专门用于处理从 Devv 平台导出的项目数据，帮助开发者快速将在线项目转换为本地文件结构。
