/* @Description 选择排序测试
 * @Author: yushunping
 * @Date:   2020-11-15 21:54:43
 * @Last Modified by:   yushunping
 * @Last Modified time: 2020-11-16 07:35:33
 */

import sort from '../../code/sort/sort2'

test('选择排序', () => {
  expect(sort([1, 9, 5, 3, 4])).toEqual([1, 3, 4, 5, 9])
});
