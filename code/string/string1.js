/* @Description 字符串反转
 * @Author: yushunping
 * @Date: 2020-02-23 18:26:07
 * @Last Modified by: yushunping
 * @Last Modified time: 2020-02-23 18:39:21
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
  // 字符串按空格进行分割，保存数组，数组的元素的先后顺序就是单词的顺序
  let arr = str.split(' ');
  // 对数组进行遍历，然后每个元素进行反转
  let result = arr.map((item) => {
    return item.split('').reverse().join('');
  });
  return result.join(' ');
};

export default {
  string1,
  string2
};
