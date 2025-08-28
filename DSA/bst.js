class Node{
    constructor(data, left = null, right = null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST{
    constructor(){
        this.root = null;
    }

    add(data){
        const node = this.root;

        if(node === null){
            node = new Node(data);
            return;
        }
        else{
            
        }
    }


}

