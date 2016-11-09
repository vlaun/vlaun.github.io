var grade = [];
function average3Grades() {
    for (var i = 0; i < 3; i++) {
        grade.push(prompt("Enter a grade"));
    }

    console.log(grade);

    var gradeOne = parseInt(grade.pop());

    var gradeTwo = parseInt(grade.pop());

    var gradeThree = parseInt(grade.pop());


    console.log(gradeOne);
    console.log(gradeTwo);
    console.log(gradeThree);

    var total = (gradeOne + gradeTwo + gradeThree);
    console.log(total);
    var average = (total/3);
    console.log(average);

    if (average >= 80) {
        alert("You're Awesome!");
        console.log("You're Awesome!")
    } else {
        alert("You need more practice.");
        console.log("You need more practice.")
    }

}

average3Grades();

//Solution
// function getNumericGrade() {
//     var grade = parseInt(prompt("Input grade"));
//
//         while(isNaN(grade) || (grade < 0 || grade > 100)); {
//
//             grade = parseInt(prompt("Input grade as a number between 0 and 100"));
               console.log(grade);
               console.log(typeof grade);
//     }
//     return grade;
// }
//
//
// // //Solution
// //
// function average3Grades() {
//     var total = 0;
//     for(var i = 0; i < 3; i++) {
//         total = total + getNumericGrade();
//     }
//     return total / 3;
// }


var grade = [];
function genericGradesAverage() {

    do  {
        console.log(grade);
        grade.push(prompt("Enter a number"));
    } while (confirm ("Add another grade?"));
    var sum = 0;
    for (var i = 0; i < grade.length; i++) {
      sum += grade [i];
    }
    average = sum/grade.length;
    if (average >= 80) {
        alert("You're Awesome!");
        console.log("You're Awesome!")
    } else {
        (average < 80);
        alert("You need more practice.");
        console.log("You need more practice.")
    }

}

genericGradesAverage();


//Solution
// function genericGradesAverage() {
//     var total = 0;
//     var counter = 0;
//     var addAnotherGrade;
//     var average;
//     do {
//         total += getNumericGrade();
//        addAnotherGrade = confirm("do you want to add another grade?")
//         counter++;
//     } while (addAnotherGrade);
//     average = total / counter;
//     return average;
// }
// genericGradesAverage();