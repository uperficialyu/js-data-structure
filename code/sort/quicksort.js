/* @Description 快速排序
 * @Author: yushunping
 * @Date: 2020-11-15 20:37:23
 * @Last Modified by:   yushunping
 * @Last Modified time: 2020-11-27 21:55:27
*/

const quicksort1 = (arr) => {
  let quickSort = (arr) => {
    let len = arr.length
    if (len < 2) {
      return arr
    } else {
      // 选标尺元素
      let flag = arr[0]
      let left = []
      let right = []
      // 把剩余的元素遍历下，比标尺元素小的放左边，大的放右边
      for (let i = 1, tmp; i < len; i++) {
        tmp = arr[i]
        if (tmp < flag) {
          left.push(tmp)
        } else {
          right.push(tmp)
        }
      }
      // 进行递归操作
      return quickSort(left).concat(flag, quickSort(right))
    }
  }
  return quickSort(arr)
};

export default {
  quicksort1,
  // maxspace2
}
