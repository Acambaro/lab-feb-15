//You'll need one of these for each answer
var pTagOne = document.getElementById('ans-one');
var pTagTwo = document.getElementById('ans- two');
var pTagThree = document.getElementById('ans-three');
var pTagFour = document.getElementById('ans-four');
var pTagOnefive = document.getElementById('ans-five');
var pTagsix = document.getElementById('ans-six');

// var ans1 = prompt('Did Sam live in South Dakota for 8 years?');
// if (ans1.toLowerCase() === 'n' || ans1.toUpperCase() === 'NO') {
//   // alert('You\'re right! Sam never lived in South Dakota!');
//   // The alert() is replaced with the following line
//   pTagOne.textContent = 'You\'re right! Sam never lived in South Dakota!';
// } else if (ans1.toLowerCase() === 'y' || ans1.toUpperCase() === 'YES') {
//   // alert('Nope! Sam never lived in South Dakota!');
//   // The alert() is replaced with the following line
//   pTagOne.textContent = 'Nope! Sam never lived in South Dakota!';
// } else {
//   // This error-correction can stay as an alert
//   alert('Please give a yes or no answer.');
// }
function sum(n1 , n2){
  var total = (n1 + n2);
  // console.log ('The sum of ' + n1 + ' and '+ n2 + ' is ' + total + '.' );
  pTagOne .textContent = 'The sum of ' + n1 + ' and '+ n2 + ' is ' + total + '.' ;
  return total;
}
function multiply(n1 , n2){
  var total2 = (n1 * n2);
  console.log(' The product of ' + n1 + ' and ' + n2 + ' is ' + total2 + '.');
  return total2;
}

function sumAndMultiply(n1,n2,n3){
  var sum1 = sum (n1,n2);
  var sumTotal = sum (sum1,n3);
  var multiply1 = multiply (n1,n2);
  var multiplyTotal = multiply (multiply1,n3);
  console.log( n1 + ' and '+ n2 + ' and ' + n3 + ' sum to ' + sumTotal + '.');
  console.log(' The numbers ' + n1 + ' and ' + n2 + ' and ' + n3 + ' have a product of ' + multiplyTotal + '.');

  var answerArray = [sumTotal,multiplyTotal];

  return answerArray;
}

function sumArray (nArray){
  console.table(nArray);

  var count = 0;
  for (i=0; i < nArray.length; i++){
    count += nArray[i];

  }
  console.log(nArray.toString() + ' was passed in as an array of numbers, and ' + count + ' is their sum. ' );


}
function multiplyArray (nArray){
  console.table(nArray);
  var count = nArray[0];
  for (i=1; i < nArray.length; i++){
    count *= nArray[i];
  }
  console.log('The numbers ' + nArray.toString() + ' have a product of ' + count + '.')
}
