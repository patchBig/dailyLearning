// 从尾到头打印链表

// ## 题目链接

// [牛客网](https://www.nowcoder.com/practice/d0267f7f55b3412ba93bd35cfa8e8035?tpId=13&tqId=11156&tPage=1&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking&from=cyc_github)

// ## 题目描述

// 从尾到头反过来打印出每个结点的值。

// <div align="center"> <img src="https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/f5792051-d9b2-4ca4-a234-a4a2de3d5a57.png" width="300px"> </div><br>

function printListFromTailToHead(head)
{
    // write code here
    let array = [];
    while(head) {
        array.unshift(head.val);
        head = head.next;
    }
    return array
}