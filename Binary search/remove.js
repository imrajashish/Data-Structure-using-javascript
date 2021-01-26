class Node{
    constructor(val){
        this.val = val;
        this.head = null;
        this.tail = null;
    }
}
class singlyLinkList{
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
}
var list = new singlyLinkList()
