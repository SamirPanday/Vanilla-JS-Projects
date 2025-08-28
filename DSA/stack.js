var Stack = function() {
    this.count = 0;
    this.storage = {};

    this.push = function(value){
        this.storage[this.count] = value;
        this.count++;
    }

    this.pop = function() {
        delete this.storage[this.count -1];
        this.count--;
    }

    this.size = function() {
        return this.count;
    }

    this.peek = function() {
        return this.storage[this.count -1];
    }
}


var myStack = new Stack();

myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
myStack.push(5);

console.log(myStack.storage);

console.log(myStack.peek());

myStack.pop();

console.log(myStack.storage);


