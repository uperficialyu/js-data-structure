/* @Description 冒泡排序测试
 * @Author: yushunping
 * @Date:   2020-11-15 21:54:43
 * @Last Modified by:   yushunping
 * @Last Modified time: 2020-11-15 21:57:31
 */

import sort from '../../code/sort/sort1.js';

test('冒泡排序1', () => {
  expect(sort.sort1([1, 9, 5, 3, 4])).toEqual([1, 3, 4, 5, 9])
});

