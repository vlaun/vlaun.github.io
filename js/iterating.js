var names = ['Julie', 'Sylvia', 'Margaret', 'Sally'];

console.log(names.length);

console.log('The first name is ' + names[0]);

console.log('The second name is ' + names [1]);

console.log('The third shape is ' + names [2]);

console.log('The fourth shape is ' + names[3]);


var names = ['Julie', 'Sylvia', 'Margaret', 'Sally'];
for(var i = 0; i < names; i++) {
    console.log(name[i])
}


var grades = [100, 80, 90, 80, 50];
function average (grades) {
    //use a for loop to iterate through the array and get the average
    var sum = 0;
    for (var i = 0; i < grades.length; i++); {
        sum += grades[i];
}

var grade = average(grades);
    console.log("you made a grade of " + grade);



}


console.log("There are " + names.length + " names in the names array.");

for (var i = 0; i < names.length; i++) {
    console.log("Name at index " + i + " is " + names[i]);
}
    console.log("ForEach loop:");

    names.forEach(function( element, i , array) {
        console.log("Name at index " + i + " is " + element);

    });


