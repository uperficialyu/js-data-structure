/* @Description 数组中的第K个最大元素
 * @Author: yushunping
 * @Date: 2020-11-15 20:37:23
 * @Last Modified by:   yushunping
 * @Last Modified time: 2020-11-19 22:37:37
*/

const findmax1 = (arr, k) => {
  return arr.sort((a, b) => b - a)[k - 1];
};

const findmax2 = (arr, k) => {
  let len = arr.length - 1;
  for (let i = len, tmp; i > len - k; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  return arr[len - (k - 1)];
};



export default {
  findmax1,
  findmax2
};
