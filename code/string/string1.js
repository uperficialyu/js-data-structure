/* @Description 字符串反转
 * @Author: yushunping
 * @Date: 2020-02-23 18:26:07
 * @Last Modified by: yushunping
 * @Last Modified time: 2020-02-23 18:52:48
 */

const string1 = (str) => {
  // 字符串按空格进行分割，保存数组，数组的元素的先后顺序就是单词的顺序
  let arr = str.split(' ');
  // 对数组进行遍历，然后每个元素进行反转
  let result = arr.map((item) => {
    return item.split('').reverse().join('');
  });
  return result.join(' ');
};

const string2 = (str) => {
  // 字符串按空格进行分隔，保存数组，数组的元素的先后顺序就是单词的顺序
  // 对数组进行遍历，然后每个元素进行反转
  return str.split(' ').map(item => {
    return item.split('').reverse().join('');
  }).join(' ');
};

const string3 = (str) => {
  // 字符串按空格进行分隔，保存数组，数组的元素的先后顺序就是单词的顺序
  // 对数组进行遍历，然后每个元素进行反转
  return str.split(/\s/g).map(item => {
    return item.split('').reverse().join('');
  }).join(' ');
};

const string4 = (str) => {
  // 字符串按空格进行分隔，保存数组，数组的元素的先后顺序就是单词的顺序
  // 对数组进行遍历，然后每个元素进行反转
  return str.match(/[\w']+/g).map(item => {
    return item.split('').reverse().join('')
  }).join(' ')
};

const string5 = (str) => {
  // 字符串按空格进行分隔，保存数组，数组的元素的先后顺序就是单词的顺序
  // 对数组进行遍历，然后每个元素进行反转
  // 对输入进行了限制（空）单词用空格隔开（没见过单词中有<等特殊字符之前考虑的是空格，单引号）(LeetCode测试用例)
  return str.length ? str.match(/[\S]+/g).map(item => {
    return item.split('').reverse().join('')
  }).join(' ') : ''
};

export default {
  string1,
  string2,
  string3,
  string4,
  string5
};
