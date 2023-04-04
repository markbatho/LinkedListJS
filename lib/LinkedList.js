const Node = require('./Node');

class LinkedList {
    constructor() {
        this.headNode = null;
        this.length = 0;
    }

    append(value) {
        if (this.headNode === null) {
            this.headNode = new Node(value);
        } else {
            const tail = this.tail();
            tail.nextNode = new Node(value);
        }

        this.length++;
    }

    prepend(value) {
        if (this.headNode === null) {
            this.headNode = new Node(value);
        } else {
            let tmp = this.headNode;
            this.headNode = new Node(value);
            this.headNode.nextNode = tmp;
        }

        this.length++;
    }

    size() {
        return this.length;
    }

    head() {
        return this.headNode;
    }

    tail() {
        let tmp = this.headNode;

        while (tmp.nextNode) {
            tmp = tmp.nextNode;
        }

        return tmp;
    }

    at(index) {
        let tmp = this.headNode;

        for (let i = 0; i < index; i++) {
            tmp = tmp.nextNode;
            if (tmp === null) return null;
        }
       
        return tmp;
    }

    pop() {
        if (this.length < 2) return;
        this.at(this.length-2).nextNode = null;
        this.length--;
    }

    contains(value) {
        let tmp = this.headNode;

        while (tmp) {
            if (tmp.value === value) return true;
            tmp = tmp.nextNode;
        }

        return false;
    }

    find(value) {
        let tmp = this.headNode;

        for (let i = 0; i < this.length; i++) {
            if (tmp.value === value) return i;
            tmp = tmp.nextNode;
        }

        return null;
    }

    toString() {
        let str = '';
        let tmp = this.headNode;

        while (tmp) {
            str += `(${tmp.value}) -> `;
            tmp = tmp.nextNode;
        }

        return str += 'null';
    }

    insertAt(value, index) {
        if (index < 1) {
            this.prepend(value);
        } else if (index > this.length) {
            this.append(value);
        } else {
            const prev = this.at(index-1);
            const next = this.at(index);
            const newNode = new Node(value);

            prev.nextNode = newNode;
            newNode.nextNode = next;

            this.length++;
        }
    }

    removeAt(index) {
        if (index < 1) return;
        else if (index >= this.length) return;
        else {
            const prev = this.at(index-1);
            const curr = this.at(index);

            prev.nextNode = curr.nextNode;
            curr.nextNode = null;
            this.length--;
        }
    }
}

module.exports = LinkedList;
