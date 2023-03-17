"use strict";
let result;

//task1

{
  result = (a,b,c) => (a-b)/c;
  console.log(result(10,1,3));
}

//task2

{
  result = (a) => {
    return (`Квадрат числа: ${a**2}, Куб числа: ${a**3}`);
  }
  console.log(result(2));
}

//task3

{
  function min(a,b) {
    console.log(`Numbers for min function: ${a},${b}`);
    return a < b ? a:b;
  }
  function max(a,b) {
    console.log(`Numbers for max function: ${a},${b}`);
    return a > b ? a : b;
  }
  console.log(`Min num: ${min(1,2)}`);
  console.log(`Max num: ${max(3,2)}`)
}

//task4

{
  let arr = [];
  let firstnum;
  function getArray(size) {
    for(let i = 0; i < size;i++) {
     firstnum = +prompt('Enter array number:');
     arr[i] = firstnum;
    }
    return arr;
  }

  function showArray() {
     let array = getArray(+prompt('Size:'));
     console.log(array);
  }
  showArray();
}

//task5


  let isEven = (num) => {
    if(num % 2 === 0){return true;}
    else{return false;}
  }
  console.log(isEven(2));


//task6

{
  let array = [];
  function getEqual(arr) {
    array = arr.filter((num) => isEven(num));
    return array;
}
console.log(getEqual([2,5,7,9,20,25,67,41,42,56,48,66]));

}

//task7

{
  let symbol = prompt('Enter the symbol:');
  function drawPyramid(n){
  for(let i = 1; i <= n; i++){
    let m = '';
    for(let j = 0; j < i; j++){
      m+= symbol == undefined || symbol.length-1 || symbol == ' ' ? i : symbol;
    };
    console.log(m+'\n')
  }
};
drawPyramid(prompt('Enter the number:'))
}

//task8

{
  function drawTriangle(number) {
  let str = "";
  let space = "";
  let i = 0;
  let j = 0;
  while (i < number) {
  space = "";
  str = "";
  for (j = 0; j < number - i; j++) {space += " ";}
  for (j = 0; j < 2 * i + 1; j++) {str += "*";}
  console.log(space + str);
  i++;
}
}
drawTriangle(prompt('Введите высоту: '));

function drawTriangleReverse(number) {
  let sym = "*";
  let arr = [];
  let count = number - 1;

  for(let i = 1; i <= number; i++){
      let space = " ".repeat(count);
      count--;
      arr.push(space + sym + space);
      sym += "**";
  }

  arr.reverse();

  for(let i = 0; i < arr.length; i++){
      console.log(arr[i])
  }
}
drawTriangleReverse(prompt('Введите высоту: '));
}

//task9

{

  function fib(n) {
    let arr = [];
    for (let i = 0; i < n; i++){
      if (i === 0 || i === 1) {arr[i] = 1}
      else arr[i] = arr[i-1] + arr[i-2];
    }
      return arr;
  }
  console.log(fib(16));
}

//task10

{
  function getSum (n) {
    let sum = 0;
    for (let i = 0; i < n.length;i++) {
      sum += +n[i];
    }
    if (sum > 9) {
     return getSum(String((sum)));
    }
    return sum;
  }
  console.log(getSum(prompt('Введите число:')))
}

//task11

{
  let arr = [9, 8, 7, 4, 3, 1];
  function getArray(arr,i){
    if (i == arr.length) {
      return
    }
    console.log(arr[i]);
    getArray(arr, i+1)
  }
  getArray(arr, 0)

//   function func(i){
//     console.log(arr[i++]);
//     if(i<arr.length){
//         func(i);
//     }
// }
// func(0);

}

//task12

{
  let arr = [];
  let framelength = 0;
  function getFrame(length){
    let frame = "";
    for (let i = 0; i < length; i++){
      frame += "*";
    }
  console.log(frame);
  }

  function getInfo(name,surname,secondname,group) {
    let person = `${surname} ${name} ${secondname}`;
    arr.push("Домашняя работа «Функции»");
    arr.push("Выполнил студент гр." + group);
    arr.push(person);
    }
  getInfo(
  prompt('Enter your name: '),
  prompt('Enter your surname: '),
  prompt('Enter your secondname: '),
  prompt('Enter your group: ')
  );
  function getFrameLength() {
  for (let i=0; i<arr.length;i++){
    if (framelength < arr[i].length){
      framelength = arr[i].length;
    }
  }
  framelength += 2;
  getFrame(framelength);
}
getFrameLength();

  function getFrameLengthBottom() {
    for(let i=0; i<arr.length; i++){
      let result = "*";
      for (let j=0; j < framelength;j++){
          if (arr[i][j] === undefined){
              if (j === framelength-2){
                  result += '*';
              }
              else {
                  result += ' ';
              }
          }
          else {
              result += arr[i][j];
          }
      }
      console.log(result);
    }
  getFrame(framelength);
}
getFrameLengthBottom();
}
