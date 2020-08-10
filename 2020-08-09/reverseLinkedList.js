// [翻转链表数据](https://leetcode.com/problems/reverse-linked-list/)


function reverseList(head) {
    if (head === null) return null;
    let prev = null;
    let curr = head;
    while(curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}