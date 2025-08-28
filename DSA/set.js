let mySet =  function() {
    this.collection = [];

    this.has = function(element) {
        return(this.collection.indexOf(element) !== -1);
    }

    this.values = function(){
        return this.collection;
    }

    this.add = function(element){
        if (!this.has(element)){
            this.collection.push(element);
            console.log(this.collection);
            return 1;
        }
        return -1;
    }

    this.remove = function(element){
        if(this.has(element)){
            let index = this.collection.indexOf(element);
            this.collection.splice(index,1);
            return 1;
        }
        return -1;
    }

    this.size =  function(){
        console.log('length is ' + this.collection.length);
        return this.collection.length;
    }

    this.union = function(obj){
        let unionCollection = new mySet();
        
        this.collection.forEach((value)=>{unionCollection.add(value)});
        obj.collection.forEach((value)=>{unionCollection.add(value)});

        console.log(unionCollection);
        return unionCollection;
    }

    this.intersection = function (obj){
        let intercestionCollection = new mySet();

        this.collection.forEach(function (value) {
            if (obj.has(value)) {
                intercestionCollection.add(value);
            }
        });
        console.log(intercestionCollection);
        return intercestionCollection;
    }


    this.difference = function(obj){
        let differenceCollection = new mySet();

        this.collection.forEach(function(value){
            if (!obj.has(value)){
                differenceCollection.add(value);
            }
    });
    console.log(differenceCollection); 
    return differenceCollection;
    }

    this.subset = function(obj){
        return this.collection.every(function(value){
            return obj.has(value);
        });
    }



}



let x = new mySet();
let y = new mySet();

x.add(1);
x.add(3);
x.add(5);
x.add(7);
x.size();

console.log(x.has(1));
x.remove(5);
x.size();

y.add(3);
y.add(4);

x.union(y);

x.intersection(y);

x.difference(y);

console.log(x.subset(y) + ".");

console.log(x.has(1));