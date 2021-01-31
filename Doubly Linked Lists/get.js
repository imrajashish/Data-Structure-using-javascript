class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}


class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(this.length === 0){
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
             this.tail.prev = newNode;
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
        } else {
            this.head.next = oldHead;
            oldHead.prev = null;
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
            this.head.prev = newNode;
            newNode,next = this.head;
            this.head = newNode;
        }
        this.length++;
        return list;
    }
    get(index){
        if(oindex < 0 || index >= this.length) return null;
        if(index <= this.length/2){
            console.log("Working From Start")
            var count = 0;
            var current = this.head;
            while(count !== index){
                current = current.next;
                count++;
            }
            return current;
        } else {
            console.log("Working From End")
            var count = this.length-1;
            var current = this.tail;
            while(count !== index){
                current = current.prev;
                count--;
            }
        }
    }
}
var list = new DoublyLinkedList() 