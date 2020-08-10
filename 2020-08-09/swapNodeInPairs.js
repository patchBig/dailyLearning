function swapPairs(head) {
    if (head === null || head.next === null) return head;
    let curr = head.next;
    let prev = head;
    let c = head;
    head = curr;
    while(prev.next !== null) {
        if (c == prev) {
            prev.next = curr.next;
            curr.next = prev;
        }
        else {
            prev.next = curr.next;
            c.next = curr;
            curr.next = prev;
            c = prev;
        }
        if (prev.next === null) break;
        else {
            prev = prev.next;
            curr = prev.next;
        }
    }
    return head;
}
