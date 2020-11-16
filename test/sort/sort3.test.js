/* @Description 选择排序测试
 * @Author: yushunping
 * @Date:   2020-11-15 21:54:43
 * @Last Modified by:   yushunping
 * @Last Modified time: 2020-11-17 07:40:47
 */

import sort from '../../code/sort/sort3'

test('oddSort', () => {
  expect(sort([4, 2, 5, 7, 1, 6])).toEqual([2, 1, 4, 5, 6, 7])
});
