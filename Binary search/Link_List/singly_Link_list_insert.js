class Node{
    construct(val){
        this.val = val;
        this.next = null;
    }
}
class singlyLinkList{
    construct(val){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
      var newNode = new Node(val);
      if(!this.head){
          this.head = newNode;
          this.tail = newNode;
      }else{
          this.tail.next = newNode;
          this.tail = newNode;
      }
      this.length++;
      return this;
    }
    pop(){
        if(!this.head) return undefined;
            var current = this.head;
            var newTail = current;
            while(current.next){
                newTail = current;
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
        this.currentHead = this.head;
        this.head = currentHead.next;
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
        if(index < 0 || index>=this.length) return null;
        var count = 0;
        var current = this.head;
        while(count !== index){
            current = current.next;
            current++;
        }
        return current;
    }
    set(index, val){
        var foundNode = thid.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }  
    insert(){
        if(index < 0 || index >= this.length) return false;
        if(index === this.length) return this.push(val);
        if(index = 0) return this.unshift(val);
        var newNode = new Node(val);
        var prev = this.get(index-1);
        prev.next = newNode;
    }
}
var list = new singlyLinkList()
list.push("hello")
list.push("Good Bye")
list.push("<3")


