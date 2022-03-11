enum Environment {
  Browser = 1,
  Node,
  UnKnow,
}

/***
 * @description 获取当前运行环境
 * @return { Environment } 运行环境名称
 */
function getEnv() {
  if (
    process &&
    Object.prototype.toString.call(process) === '[object process]'
  ) {
    // For node use ws npm package
    return Environment.Node;
  } else if (Object.prototype.toString.call(window) === '[object Window]') {
    return Environment.Browser;
  } else {
    return Environment.UnKnow;
  }
}

/***
 * @description 校验是浏览器环境
 * @return { boolean } 仅在浏览器环境下为 true
 */
export function isBrowser() {
  return getEnv() === Environment.Browser;
}

/***
 * @description 校验是 Node 环境
 * @return { boolean } 仅在 Node 环境下为 true
 */
export function isNode() {
  return getEnv() === Environment.Node;
}
