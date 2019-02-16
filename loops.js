function forLoop(array) {
  for (i = 0; i <= 25; i++) {
    
  }
}




function doWhileLoop(num) {
  
  var i = 0;
  
  function incrementVariable() {
  i = i + 1;
  return i;
  }
  
  do {
    console.log('I run once regardless.');
  } while (incrementVariable() < num)
}