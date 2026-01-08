// 防抖函数
/**
 * 防抖函数 - 延迟执行函数，避免频繁调用
 * @param func 要执行的函数
 * @param delay 延迟时间（毫秒）
 * @returns 防抖处理后的函数
 */
const myDebounce = (
  func: (...args: any[]) => void,
  delay: number
): ((...args: any[]) => void) => {
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

// 测试防抖函数
const debouncedHello = myDebounce(() => {
  console.log('Hello from debounced function! 🎉');
}, 1000);

// 调用防抖函数
console.log('🧪 测试防抖函数...');
debouncedHello();

export default myDebounce;
