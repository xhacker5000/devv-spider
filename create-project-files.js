// dump devv project files to local

const fs = require('fs');
const path = require('path');

// 读取JSON文件
const jsonFilePath = path.join(__dirname, 'file-json.json');
const outputDir = path.join(__dirname, 'demo-project');

// 确保输出目录存在
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 读取并解析JSON文件
try {
  const jsonData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'));
  
  if (!jsonData.files || !Array.isArray(jsonData.files)) {
    console.error('JSON文件中没有找到files数组');
    process.exit(1);
  }
  
  // 处理每个文件
  jsonData.files.forEach(fileObj => {
    const { filename, content } = fileObj;
    
    if (!filename) {
      console.warn('跳过未指定文件名的项');
      return;
    }
    
    // 构建完整的文件路径
    const fullPath = path.join(outputDir, filename);
    
    // 确保目录存在
    const dirPath = path.dirname(fullPath);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    
    // 写入文件内容
    fs.writeFileSync(fullPath, content || '');
    console.log(`创建文件: ${fullPath}`);
  });
  
  console.log('所有文件创建完成！');
} catch (error) {
  console.error('处理文件时出错:', error);
} 