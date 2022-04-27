function FirstReverse(str) { 

  // code goes here  
  var splitString = str.split(" ");
  var reverseString = splitString.reverse();
  var joinString = reverseString.join(" "); 
  return joinString; 

}
   
// keep this function call here 
console.log(FirstReverse(readline()));
