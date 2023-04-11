// 1. Write a function that creates a closure and returns a function that can add a specific number to any number passed to it. For example, if the closure is created with 5, the returned function should add 5 to any number passed to it.

function numAdder (num) {
    return function (x) {
        return x + num;
    }
}

let addNum = numAdder(5);

console.log(addNum(10));



// 2. Write a recursive function that searches an array for a specific value. The function should return true if the value is found, and false if it is not. You can assume that the array is not nested.

const myArray = ["mango", "banana", "apple"];

function searchArray (arr, val) {
    if (arr.indexOf(val) >= 0){
        return true;
    } else {
        return false;
    }
}

console.log(searchArray(myArray, "banana"));



// 3. Write a function that adds a new paragraph element to the bottom of an HTML document. The function should take a string argument that will be used as the text content of the new paragraph element.

function addPara (text) {
    const newPara = document.createElement("p");
    newPara.innerText = text;
    const footerElem = document.getElementById("footer");
    footerElem.style.position = "absolute";
    footerElem.style.bottom = "0";
    footerElem.appendChild(newPara);
}

addPara("This is the text you want to show.");



// 4. Write a function that adds a new list item to an unordered list in an HTML document. The function should take a string argument that will be used as the text content of the new list item.


function addList (listItem) {
    const newList = document.createElement("li");
    newList.innerText = listItem;
    const unorderedList = document.getElementById("list");
    unorderedList.appendChild(newList);
}

addList("This is a new list item");



//5. Write a function that changes the background color of an HTML element. The function should take two arguments: the first argument is a reference to the HTML element, and the second argument is a string representing the new background color.

const changeBG = document.getElementById("changebg");
function changeBackgroundColor (element,  newColor) {
    element.style.backgroundColor = newColor;
}

changeBackgroundColor(changeBG, "blue");




// 6. Write a function that saves an object to localStorage. The function should take two arguments: the first argument is a string representing the key to use for storing the object, and the second argument is the object to store.

const myObject = { name: "Talha", age: 18, class: "JavaScript" };
function saveObjectToLocalStorage(key, value) {
    const stringifiedValue = JSON.stringify(value);
    localStorage.setItem(key, stringifiedValue);
}
saveObjectToLocalStorage("myKey", myObject);



// 7. Write a function that retrieves an object from localStorage. The function should take one argument, which is a string representing the key used to store the object. The function should return the object.

function retriveObjectFromLocalStorage (key) {
    const storedValue = localStorage.getItem(key);
    return JSON.parse (storedValue);
};

// Uses object stored in above task (6)

const storedObject = retriveObjectFromLocalStorage("myKey");
console.log(storedObject)



// 8. Write a function that takes an object and saves each property to localStorage using the property name as the key and the property value as the value. The function should also retrieve the object from localStorage and return it as a new object.

function saveToLocalStorage2 (obj) {
    for (let prop in obj) {
      localStorage.setItem(prop, JSON.stringify(obj[prop]));
    }
}

saveToLocalStorage2(myObject);

