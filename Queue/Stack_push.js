class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
}
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
    push(value){
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return++this.size;
    }
}
var stack = new Stack()