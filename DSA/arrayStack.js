var letters = [];


var word  =  'palindrome'

var revWord = '';

for (var i =0; i<word.length ; i++) {
    letters.push(word[i]);
}

for (var i= 0; i<word.length; i++) {
    revWord += letters.pop();
}

if (revWord === word) {
    console.log(word + " is a palindrome");
}

else {
    console.log(word + " is not a palindrome");
}

