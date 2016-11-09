'use strict';
var shapes, names, i, htmlTable;
shapes = ['square', 'rectangle', 'circle', 'triangle'];
names = ['Barry', 'Jessia', 'Clark'];

function createHtmlTable(items) {

        var htmlTable = '<table>';

        for (i = 0; i < items.length; i++) {
        htmlTable += '<tr><td>' + i + '</td>' + '<td>' + items[i] + '</td>' + '<td></td>';
        }
        htmlTable += '</table>';
        return htmlTable;
}

function createHtmlTable(items) {...}
function itemsMatched(items, text) {
        var itemsMatched = [];
        for (i = 0; i < items.length; i++) {
                if (items[i].toLowerCase().indexOf("text") !== -1) {
                        itemsMatched.push(items[i]);
                }
                htmlTable += '</table>';
                return itemsMatched;
        }
        htmlTable = createHtmlTable(itemsMatched);
        console.log(htmlTable);

}


var shapesWithC = ([]
for (i = 0; i < shapes.length; i++); {
     if (shapes[i].toLowerCase().indexOf("c") !== -1) {
             shapesWithC.push(shapes[i]);
     }

}
htmlTable = createHtmlTable(shapesWithC);
console.log(htmlTable);




var namesWithC = [];

for (i = 0; i < names.length; i++) {
        if (names[i].toLowerCase().indexOf("c") !== -1) {
                namesWithC.push(names[i]);
        }
        return namesWithC [];
}
htmlTable = createHtmlTable(namesWithC);
console.log(htmlTable);

htmlTable = createHtmlTable(shapes);
console.log(htmlTable);

htmlTable = createHtmlTable(names);
console.log(htmlTable);


var arrayOfNumbers = [1, 2, 3, 4, 5,];

for(var i = 0; i < arrayOfNumbers; i++) {
    console.log("The element at index " + i + "is" + arrayOfNumbers [i]);
}

arrayOfNumbers.forEach(function(element, index, array) {
    console.log("The element at index " + i + "is " + element)
});

newArray = [];
[1, 2, 3, 4, 5,].forEach(function(element, index, array) {
    newArray.push(element + 1);
});
