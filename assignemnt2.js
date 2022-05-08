//------------------1.Access Multi-Dimensional Arrays With Indexes------------------------
const myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14 ]] ;
const myData = myArray[2][1];
console.log(myData);


//------------------2. Manipulate Arrays With push()---------------------------
const myArray = [1,2,3,4];
myArray.push(["dog",3]);
const myArray2 =  ["Stimpson","J","cat",["happy","joy"]];
myArray2.push(["dog",3]);

console.log(myArray);
console.log(myArray2);


//-------------------3. Manipulate Arrays With pop():--------------------------
const myArray = [7,2,2,2]
const  removedFromMyArray = myArray.pop();
console.log(myArray);
console.log(removedFromMyArray);


//------------------4. Manipulate Arrays With shift():--------------------------------------------
const myArray =["ramesh","sip",1,2,3,3];
const removedFromMyArray = myArray.shift();
console.log(removedFromMyArray);
console.log(myArray)


//------------------5. Manipulate Arrays With unshift():-------------------------
const myArray = ["Stimpson","J","cat"];
const removedFromMyArray = myArray.unshift(["Paul",35]);

console.log(myArray)


//-------------------6. Shopping List:-------------------------------------------------
const shopping_list = [
    ["reliance trends",1],
    ["west side",2],
    ["pop jeans",3],
    ["levis",4],
    ["jack & jones",5]
];
console.log(shopping_list.length);



//------------------7. Write Reusable JavaScript with Functions:---------------------
function reusableFunction(){
    console.log("hi world to the dev function");
}
reusableFunction();


//-------------------------9. Global Scope and Functions:-------------------------
var myGlobal = 10;
function fun1(oopsGlobal){
      oopsGlobal = 5;
    return oopsGlobal;
}
console.log(myGlobal);

console.log(fun1());


//------------------------10. Local Scope and Functions:--------------------------
function test(){
    var local_variable ="mylocalscope";
    console.log(local_variable);
}
// console.log(local_variable);
test();




//------------------------11. Global vs. Local Scope in Functions-------------------------
var myOutfit = "outerWear";
function test (){
    var myOutfit = "sweater";
    return myOutfit;
}

console.log(test());



//------------------------- 12. Return a Value from a Function with Return:-------------------
function plusFive(num){
    return num+5;
}
var result = plusFive(5);
console.log(result);



//--------------------------13. Understanding Undefined Value returned from a Function:-----------
var sum = 0;
function addFive(num) {
sum = sum + num;
}
console.log(addFive(5));



//-------------------------14. Assignment with a Returned Value:-------------------------------
function minus(x,y){
    return (x+y);
   
   }
   var result = minus(7,12)
   console.log(result);


//-----------------------15. Stand in Line-------------------------------------
function nextInLine(arr, item) {
  
    var queue = arr.push(item);
  
    var removeItem = arr.shift();
  
    return removeItem;  
  }
  

  var testArr = [1,2,3,4,5];
  
  
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6)); 
  console.log("After: " + JSON.stringify(testArr));



//------------------------------16. Understanding Boolean Values--------------------
function welcomeToBooleans(){
    return true;

}
console.log(welcomeToBooleans());




//-----------------------------17. Use Conditional Logic with If Statements----------------------
function trueOrFalse(wasThatTrue) {
    if(wasThatTrue){
        return "true"
    }
     return "false";
  }
  console.log(trueOrFalse(true));




//--------------------------18. Comparison with the Equality Operator:------------------------------
function testEqual(val) {
    if (val == 12) { 
      return "Equal";
    }
    return "Not Equal";
  }
  
  consoel.log(testEqual(10));


//-------------------------20. Comparison with the Strict Equality Operator:---------------------------
function testStrict(val) {
    if (val === 7) { 
      return "Equal";
    }
    return "Not Equal";
  }
  
  
  console.log(testStrict(10));