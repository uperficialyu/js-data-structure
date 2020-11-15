/* @Description 冒泡排序
 * @Author: yushunping
 * @Date: 2020-11-15 20:37:23
 * @Last Modified by:   yushunping
 * @Last Modified time: 2020-11-15 21:52:38
*/

const sort1 = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      let tem = 0;
      if (arr[j] > arr[j + 1]) {
        tem = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tem;
      }
    }
  }
  return arr;
};

export default {
  sort1
};
