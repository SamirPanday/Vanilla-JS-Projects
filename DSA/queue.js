function Queue(){
    collection = [];

    this.print = function(){
        console.log(collection);    
    }

    this.enqueue = function(element){
        collection.push(element);
    }

    this.dequeue = function(){
        collection.shift();
    }

    this.front = function(){
        return collection[0];
    }

    this.size = function(){
        return collection.length;
    }

    this.isEmpty =  function(){
        return collection.length === 0;
    }

}

x= new Queue();

x.enqueue(1);
x.enqueue('b');
x.enqueue(3);

x.print();

x.dequeue();
x.print();


console.log(x.front());

console.log(x.isEmpty());


x.dequeue();
x.dequeue();

console.log(x.isEmpty());