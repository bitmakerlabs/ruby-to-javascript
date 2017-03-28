
var apples = 14;
console.log(apples);

console.log("I have " + apples + " apples.");




var materials = ['wood', 'metal', 'stone'];
var words = {
  'elephant': "The world's largest land mammal.",
  school: 'A place of learning.', // no quotes needed
  'ice cream': 'A delicious milk-based dessert.', // need quotes with spaces
};




var num = 16;
if (num > 10) {
  console.log(num + " is greater than 10.");
} else if (num == 10) {
  console.log(num + " is exactly 10.");
} else {
  console.log(num + " must be less than 10.");
}




for (var i = 0; i < 10; i++) {
  console.log("Doing the same thing over and over.");
}

var base = 5;
for (var num = 0; num < 20; num++) {
  console.log(num + base);
}

var total = 0;
for (var num = 0; num < 100; num++) {
  total += num;
}
console.log(total);

for (var height = 3; height < 16; height++) {
  if (height > 9) {
    console.log("You can get on the rollercoaster!");
  } else {
    console.log("You are too short to ride this rollercoaster.");
  }
}




var containers = ['purse', 'wallet', 'backback'];
for (var i = 0; i < containers.length; i++) {
  console.log(containers[i]);
}

// OR
containers.forEach(function(container) {
  console.log(container);
});




// function declaration
function helloWorld() {
  console.log('Hello world!');
}
// OR, function expression
var helloWorld = function() {
  console.log('Hello world!');
};

helloWorld();




function add(firstNum, secondNum) {
  return first_num + second_num;
}

var amount = add(5, 7);
console.log(amount);
