/* @Description 最大间距测试
 * @Author: yushunping
 * @Date:   2020-11-15 21:54:43
 * @Last Modified by:   yushunping
 * @Last Modified time: 2020-11-20 22:09:29
 */

import maxspace from '../../code/sort/maxspace'

test('sort:input2', () => {
  expect(maxspace.maxspace1([3, 6, 9, 1])).toBe(3)
});
test('sort:input3', () => {
  expect(maxspace.maxspace1([10])).toBe(0)
});
test('sort:input4', () => {
  expect(maxspace.maxspace1([13, 16, 19, 1])).toBe(12)
});

test('sort:input2', () => {
  expect(maxspace.maxspace2([3, 6, 9, 1])).toBe(3)
});
test('sort:input3', () => {
  expect(maxspace.maxspace2([10])).toBe(0)
});
test('sort:input4', () => {
  expect(maxspace.maxspace2([13, 16, 19, 1])).toBe(12)
});