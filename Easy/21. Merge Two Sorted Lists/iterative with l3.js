const mergeTwoLists = (l1, l2) => {
    let l3 = new ListNode();
    let l3Head = l3;

    while (l1 && l2) {
        if (l1.val <= l2.val) {
            l3.next = l1;
            l1 = l1.next
        } else {
            l3.next = l2;
            l2 = l2.next
        }
        l3 = l3.next
    }

    if(!l1) l3.next = l2;
    if(!l2) l3.next = l1;

    return l3Head.next
};