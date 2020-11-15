/* @Description 选择排序
 * @Author: yushunping
 * @Date: 2020-11-15 20:37:23
 * @Last Modified by:   yushunping
 * @Last Modified time: 2020-11-16 07:32:53
*/

const sort = (arr) => {
  for (let i = 0, len = arr.length, min; i < len; i++) {
    min = arr[i];
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < min) {
        let c = min;
        min = arr[j];
        arr[j] = c;
      }
    }
    arr[i] = min;
  }
  return arr;
};

export default sort;
