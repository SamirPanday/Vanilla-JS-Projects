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
            this.root = new Node(data);
            return;
        }
        else{
            const serachTree = function(node){
                if(data < node.data){
                    if (node.left === null){
                        node.left = new Node(data);
                        return;
                    }
                    else if(node.left !=null){
                        return serachTree(node.left);
                    }
                }
                
                else if(data > node.data){
                    if(node.right === null){
                        node.right = new Node(data);
                        return;
                    }
                    else if(node.right !=null){
                        return serachTree(node.right);
                    }  
                }
                else{
                    return null;
                }
            };
            return serachTree(node);
        } 
     }
    
    findMin(){
        let currentNode =  this.root;
        
        while (currentNode.left != null){
            currentNode = currentNode.left;
        }
        return currentNode.data;
    }

    findMax(){
        let currentNode =  this.root;
        
        while (currentNode.right != null){
            currentNode = currentNode.right;
        }
        return currentNode.data;
    }

    find(data){
        let currentNode =  this.root;
        while(currentNode.data != data){
            if (data < currentNode.data){
                currentNode = currentNode.left
            }
            else if (data > currentNode.data){
                currentNode = currentNode.right;
            }

            if(currentNode === null){
                return null;
            }
        }
        return currentNode;
    }
    
    isPresent(data){
        let currentNode =  this.root;
        while(currentNode.data != data){
            if (data < currentNode.data){
                currentNode = currentNode.left
            }
            else if (data > currentNode.data){
                currentNode = currentNode.right;
            }

            if(currentNode === null){
                return null;
            }
        }
        return (currentNode.data === data) ;
    }

    remove(data){
        const removeNode =  function(node, data){
            if(node === null){
                return null;
            }

            if(data === node.data){
                if(node.left === null && node.right === null){
                    return null;
                }

                if(node.left === null){
                    return node.right;
                }

                if(node.right === null){
                    return node.left;
                }

            var tempNode = node.right;
            while(tempNode.left !== null){
                tempNode = tempNode.left;
            }
            node.data = tempNode.data;
            node.right = removeNode(node.right, tempNode.data)
            return node;
            }
            else if (data < node.data){
                node.left = removeNode(node.left, data)
                return node;
            }
            else{
                node.right = removeNode(node.right, data)
                return node;
            }

        }
    this.root = removeNode(this.root, data);
    }




}


const test = new BST();

test.add(1);
test.add(2);
test.add(3);
test.add(4);
test.add(5);
test.add(6);

test.remove(4);

console.log(test.findMax());
console.log(test.findMin());
console.log(test.isPresent(2));
console.log(test.isPresent(4));
