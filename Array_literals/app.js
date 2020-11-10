// const numbers = [1, 2, 3];
// console.log(numbers);

// const moreNumbers = new Array('hi','welcome');
// console.log(moreNumbers);

// // const moreNumbers = Array(5, 2);
// // console.log(moreNumbers);

// // const yetMoreNumbers = Array.of(1, 2);
// // console.log(yetMoreNumbers);

// const listItems = document.querySelectorAll('li');
// console.log(listItems);

// const arrayListItems = Array.from(listItems);
// console.log(arrayListItems);

// const hobbies = ['Sports', 'Cooking'];
// //push and pop are fasted operations compared to unshift and shift
// hobbies.push('reading');
// console.log(hobbies);
// hobbies.pop();
// console.log(hobbies);
// //unshift puts the element at the first pos. and shift deletes the elements from the list.
// hobbies.unshift('coding');
// console.log(hobbies);
// hobbies.shift();
// console.log(hobbies);

// //js keeps the empty slots in ther array when elements entered along the index

// hobbies[1] = 'Coding';
// hobbies[5] = 'Cycling';
// console.log(hobbies);

// hobbies.splice(1, 2, 'Good Food');
// console.log(hobbies);

const prices =[10.99, 5.99, 3.99, 6.59];
const tax = 0.19;
// const taxAdjustedPrices =[];


// prices.forEach((price, idx, prices) =>{
//     const priceObj = {
//         index: idx, taxAdjPrice: price *(1 +tax)};
//         taxAdjustedPrices.push(priceObj);
// });

// const taxAdjustedPrices = prices.map((price, idx, prices) =>{
//     const priceObj = {index :idx, taxAdjPrice: price * (1 + tax)};
//     return priceObj;
// })

// console.log(taxAdjustedPrices);

// const sortedPrices = prices.sort((a,b)=>{
//     if(a>b){
//         return 1;
//     }else if(a ===b){
//         return 0;
//     }else{
//         return -1;
//     }
// });
// console.log(sortedPrices.reverse());

// const filterdArray = prices.filter((price, index, prices)=>{
//     return price >6;
// });

// console.log(filterdArray);


// const sum = prices.reduce((prevValue, curValue, curIndex, prices)=>{
// return prevValue + curValue;
// }, 0);

// console.log(sum);

const data = 'new year;10.99;2000';

const transformedData = data.split(';');

console.log(transformedData);

const nameFragments =['Max', 'Schwarz'];
const name = nameFragments.join(' ');
console.log(name);

const copiedNameFragments = [...nameFragments];
console.log(copiedNameFragments);


console.log(Math.min(1,5,-3));

