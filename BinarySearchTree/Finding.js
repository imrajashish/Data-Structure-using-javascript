class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinarySerchTree{
    constructor(){
        this.root = null;
    }
    insert(value){
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        } else {
            var current = this.root;
            while(true){
                if(value === current.value) return undefined;
                if(value < current.value){
                    if(value < current.value){
                        if(current.left === null){
                            current.left = newNode;
                            return this;
                        } else {
                            if(current.right === null){
                                current.right = newNode;
                                return this;
                            } else {
                                current.right;
                            }
                        }
                    }
                }     
        }
    }
}
var tree = new BinarySerchTree();
tree.insert(10)