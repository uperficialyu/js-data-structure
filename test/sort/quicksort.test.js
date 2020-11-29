/* @Description 快速排序测试
 * @Author: yushunping
 * @Date:   2020-11-15 21:54:43
 * @Last Modified by:   yushunping
 * @Last Modified time: 2020-11-27 21:57:03
 */

import sort from '../../code/sort/quicksort'

test('input:1', () => {
  expect(sort.quicksort1([1, 2, 0])).toEqual([0, 1, 2])
  expect(sort.quicksort1([5, 3, 7, 4, 1, 9, 8, 6, 2])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
  expect(sort.quicksort1([3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48])).toEqual([2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50])
});
