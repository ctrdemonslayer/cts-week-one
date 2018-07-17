/*
var arr = ['Altuve', 'Bregman', 'Correa', 'Springer'];
arr.length;

arr.pop();

arr.push('Baggwell');

arr.shift();

arr.unshift('Kyle');
 
var arr = ['Altuve', 'Bregman', 'Correa', 'Springer'];

arr.pop(); // "Springer"

arr; // ['Altuve', 'Bregman', 'Correa']

arr.push('Bagwell'); // 4

arr; // ['Altuve', 'Bregman', 'Correa', 'Bagwell']

arr.shift(); // ['Bregman', 'Correa', 'Bagwell']

arr.unshift('Kyle'); // 4

arr; // ['Kyle', 'Bregman', 'Correa', 'Bagwell']
*/
var arr = ['Altuve', 'Bregman', 'Correa', 'Springer'];

var foundElement = arr.indexOf('Correa');//can pullofmore than 1element at a time

var players = [
    'Altuve', 
    'Bregman', 
    'Correa', 
    'Springer'
];

for(var i = 0; i <players.length; i++) {
        console.log(players[i]);
}
    
players.forEach(function(element) {
   console.log(element);
});

var student = {
    name: 'Kristine',
    age: 12,
    city: 'Scottsdale',
};
for (var key in student) {
    console.log(key +'=>'+ student[key]);
};

var i = 0;

while (i < players.length) {
   console.log(players[i]);
   i++;
};

do {
   console.log(players[i]);
   i++;
} while (i < players.length) ;
