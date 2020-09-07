// 替换空格

// ## 题目链接

// [牛客网](https://www.nowcoder.com/practice/4060ac7e3e404ad1a894ef3e17650423?tpId=13&tqId=11155&tPage=1&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking&from=cyc_github)

// ## 题目描述


// 将一个字符串中的空格替换成 "%20"。

// ```text
// Input:
// "A B"

// Output:
// "A%20B"
// ```


/**
 * @param {String} str 
 */
function replaceSpace(str)
{
    let l = str.length;
    let newStr = '';
    for(let i = 0; i < l; i++) {
        if (str[i] === ' ') {
            newStr += '%20'
        }
        else {
            newStr += str[i]
        }
    }
    return newStr;
}

// function replaceSpace(str)
// {
//     // write code here
//     return str.replace(/\s/g,"%20")
// }