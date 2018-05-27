var katzDeli = []

var takeANumber = function(katzDeli, newCustomer) {
    
    if (katzDeli.length > 0);
     katzDeli.push(newCustomer);
     return ('Welcome, ' + newCustomer + '. You are number ' + katzDeli.length + ' in line.')
  }
  
  
  function nowServing (katzDeliLine) {
  
   if(katzDeliLine.length===0) {
     
   return 'There is nobody waiting to be served!';
}
   var customer = katzDeliLine.shift(); 
   
   return "Currently serving " + customer + "."; }
   
   
function nowServing (katzDeliLine) { //declared function
   if(katzDeliLine.length===0) { //checks if length of array(katzDeli) is = to 0
   return 'There is nobody waiting to be served!'; //returns string no one is waiting
}
   var customer = katzDeliLine.shift(); // shift array of people
    
   return "Currently serving " + customer + "." ; //return string with customer name
}

const deliLine = ["Steven", "Blake", "Avi"];
console.log(deliLine);
