/* @Description 奇偶排序
 * @Author: yushunping
 * @Date: 2020-11-15 20:37:23
 * @Last Modified by:   yushunping
 * @Last Modified time: 2020-11-17 07:38:21
*/

const sort = (arr) => {
  // 进行升序排序
  arr.sort((a, b) => a - b);
  // 声明一个空数组用来存储奇偶排序后的数组
  let r = [];
  // 记录奇数、偶数位下标
  let odd = 1;
  let even = 0;
  // 对数组进行遍历
  arr.forEach(item => {
    if (item % 2 === 1) {
      r[odd] = item;
      odd += 2;
    } else {
      r[even] = item;
      even += 2;
    }
  });
  return r;
};

export default sort;
