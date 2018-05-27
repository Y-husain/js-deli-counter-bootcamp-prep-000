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
   
     describe('nowServing', () => {
    it('returns the line is empty when no one is on line', () => {
      expect(nowServing([])).toEqual("There is nobody waiting to be served!");
    });

    it('returns an announcement about the person it is serving, and shifts the line', () => {
      const deliLine = ["Steven", "Blake", "Avi"]
      expect(nowServing(deliLine)).toEqual("Currently serving Steven.");
      expect(deliLine).toEqual(["Blake", "Avi"]);
    });
  });
