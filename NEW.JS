var arr = ['ade', 'tobi', 'ola']
console.log("Before :", arr)
//properties
arr.length


//Methods

//Removes the last Element of an Array
arr.pop()
//Removes the first Element of an Array
arr.shift()
//Add an Element to the front of an Array
arr.unshift("tooo")
//Add an Element to the end of an Array
arr.push("welcome")
//Reverse the Element of an Array
/*arr.reverse()*/

// //create a duplicate of the array to be duplicated
// var newArr = arr.slice()
// console.log("New arr", newArr)

//Removes an Elemnt from a specified position in an Array
//arr.splice(2,1,)

// arr.toString()
// console.log("After :", arr)

//Functions
function valid () {
    var x = document.getElementById('input').value;
    x.length = 7;
    if (8 > x.length){
        var text = document.getElementById('id');
        text.innerHTML = "Not Valid"
        var color = text.style.color = "red";
    }else{
        var text = document.getElementById('id');
        text.innerHTML = "OK"
        var color = text.style.color = "green";
    }
}
function pass () {
    var x = document.getElementById('psw').value;
    x.length = 7;
    if (8 > x.length){
        alert('Please password must be 8  and above');
    }else{
        alert('Welcome' + x)
    }
}
// Functions 

// More on Function and Array
function cool (a,b) {
    var ans = a + b;
    console.log(ans)
}
cool (12 ,13);
cool (11, 21);

var arr = [];

function price (a) {
    arr.push(a);
    console.log("pushed array is : ", arr)
}

function total () {
    var array = arr.slice();
    console.log("The new Array value is :" , array)

    var sum = array[0] + array[1];
    console.log(sum);
    document.getElementById("demo").innerHTML = sum;
}
    // Like & DisLike Button
var x = 0;
function like () {
        x = x+1;
        var y = document.getElementById('num');
        if (x <= 1){
            y.innerHTML =  x+ "person Liked your post";
            y.style.color = 'black';
        }
        else{
            y.innerHTML =  x+ "people Liked your post";
            y.style.color = 'black';
        }
}
function disLike () {
        
        if (x > 0){
            x = x -1;
            var y = document.getElementById('num');
            y.innerHTML = x + 'people Liked your post'
        }
}
// Functions

    