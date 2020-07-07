var mergeTwoLists = function(l1, l2) {
    var head1 = l1,
        head2 = l2,
        curHead,
        head;

    if (!head1) {
        return head2;
    }

    if (!head2) {
        return head1;
    }

    if (head1.val < head2.val) {
        head = head1;
        curHead = head;
        head1 = head1.next;
    } else {
        head = head2;
        curHead = head;
        head2 = head2.next;
    }

    while (head1 && head2) {
        if (head1.val < head2.val) {
            curHead.next = head1;
            curHead = head1;
            head1 = head1.next;
        } else {
            curHead.next = head2;
            curHead = head2;
            head2 = head2.next;
        }
    }

    if (head1) {
        curHead.next = head1;
    } else if (head2) {
        curHead.next = head2;
    }

    return head;
};