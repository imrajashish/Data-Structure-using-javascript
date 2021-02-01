class Node{
    constructor(val){
        this.val = null;
        this.head = null;
        this.tail = null;
    }
}
class DoublyLinkList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(this.length == 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head) return undefined;
        var poppedNode = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }
    shift(){
        if(this.length === 0) return undefined;
        var oldHead = this.head;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        } else{
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;

        }
        this.length--;
        return oldHead;
    }
    unshift(val){
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = new Node;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return list;
    }
}
var list = new DoublyLinkList
list.push("Harry")
list.push("Ron")
list.push("Hermione")
