class node{
    constructor(val){
        this.val = val;
        this.next = null; 
    }
}
class SinglyLinkList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head)return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next){
            var newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift(){
        if(!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return currentHead;
    }
    unshift(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    get(index){
        if(index<0 || index>= this.length) return null;
        var count = 0;
        var current = this.head;
        while(counter !== index){
            current = current.next;
            current++;
        }
        return current;
    }
}
var list = new SinglyLinkList()
list.push("Hello")
list.push("Good Bye")
list.push("!")
list.push("<3")