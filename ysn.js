

function getRandom(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min; // 随机生成 min 到 max 的整数
    return num; 
}

function deleteLineWithContentSync(filepath, content) {
    // 同步读取文件内容
    let data;
    try {
      data = fs.readFileSync(filepath, 'utf8');
    } catch (err) {
      throw err;
    }
  
    // 将文件内容按行分割为数组
    const lines = data.split('\n');
  
    // 查找包含指定内容的行号
    const lineIndex = lines.findIndex(line => line.includes(content));
  
    if (lineIndex !== -1) {
      // 删除包含指定内容的行
      lines.splice(lineIndex, 1);
  
      // 将剩余行重新组合成一个字符串
      const newContent = lines.join('\n');
  
      // 同步写入新的文件内容
      try {
        fs.writeFileSync(filepath, newContent, 'utf8');
        console.log(`删除成功！🍺`);
      } catch (err) {
        throw err;
      }
    } else {
      console.log(`删除失败！❌`);
    }
  }
