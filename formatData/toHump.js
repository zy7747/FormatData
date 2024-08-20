// 下划线转换驼峰
function toHump(name) {
  return name.replace(/\_(\w)/g, function (_all, letter) {
    return letter.toUpperCase();
  });
}

module.exports = toHump;
