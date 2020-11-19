/* @Description 数组中的第K个最大元素测试
 * @Author: yushunping
 * @Date:   2020-11-15 21:54:43
 * @Last Modified by:   yushunping
 * @Last Modified time: 2020-11-19 22:38:18
 */

import findmax from '../../code/sort/findmax.js';

test('sort:input 2', () => {
  expect(findmax.findmax1([3, 2, 1, 5, 6, 4], 2)).toBe(5)
});
test('sort:input 4', () => {
  expect(findmax.findmax1([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)).toBe(4)
});

test('sort:input 2', () => {
  expect(findmax.findmax2([3, 2, 1, 5, 6, 4], 2)).toBe(5)
});
test('sort:input 4', () => {
  expect(findmax.findmax2([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)).toBe(4)
});
