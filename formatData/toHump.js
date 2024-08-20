/**
 * 将字符串转换为驼峰命名法
 *
 * @param name 待转换的字符串
 * @returns 转换后的驼峰命名法字符串
 */
function toHump(name) {
  return name.replace(/\_(\w)/g, function (_all, letter) {
    return letter.toUpperCase();
  });
}

module.exports = toHump;
