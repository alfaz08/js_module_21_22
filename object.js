//  const person = {
//     name:"mehedy",
//    age: 25,
//   address: "Rajshahi",
//     phone: "1234322332"
// }

// const keys = Object.keys(person)
// const values = Object.values(person)
// console.log(keys)
// console.log(values)

// for(let key of keys){
//   console.log(person[key])
// }

// for (let i in person){
  
// }

// function sum(a,b){
//   return a+b;
// }
// let a=10;
// let b=10;
// let c;
// c=sum(a,b);
// console.log(c);

// const array1 = [1, 2, 3];

// console.log(array1.includes(2));
// // Expected output: true

// const pets = ['cat', 'dog', 'bat'];

// console.log(pets.includes('cat'));
// // Expected output: true

// console.log(pets.includes('at'));
// // Expected output: false

// const arr='i love you'
// console.log(arr.includes('love'));
// console.log(arr.indexOf('love'));
// console.log(arr.indexOf('loved'));

// const lyrics = 'Tumi bondhu kala pakhi ami jeno ki.bosonto kale tomai bolte pari ni'
// const parts = lyrics.split(' ');
// const sentence = lyrics.split('.');
// const chars= lyrics.split('');
// console.log(chars);
// console.log(parts);
// console.log(sentence);
// const partial = lyrics.slice(2,20)
// console.log(partial)

// const partials = lyrics.substring(2, 20);
// console.log(partials)

// const result = console.log(Math.pow(2,3));

// const num1=15;
// const num2 = 45;
// const gap = (num1-num2)
// console.log(gap);

// const number = 2.5598858;
// const fullnumber = Math.round(number)
// console.log(fullnumber)

// let first = 5;
// let second = 7;
// let temp;
// console.log(first,second)
// temp=first;
// first=second;
// second =temp;
// console.log(first,second)

// let first = 5;
// let second = 7;
// console.log(first,second);
// [first,second] = [second,first];
// console.log(first,second);

// let jim =200;
// let dela=99;
// let chinku=77;
// function highestNumber(){
//   if(jim>dela){
//     if(jim>chinku){
//      console.log('jim')
//     }
//     else{
//      console.log('chinku')
//     }
//  }
//  else{
//    if(dela>chinku){
//      console.log('dela');
//    }
//    else{
//      console.log('chinku')
//    }
//  }
// }



// highestNumber()
// console.log(Math.max(45,69,89,556,113))

// function maxinarray(array){
//   let taller = array[0];
//   for(let i=1;i<=array.length;i++){
//     if(array[i]>taller){
//       taller =array[i];
//     }
//   }
//   return taller;
// }
// const height = [167,190,120,165,137];
// const tallest = maxinarray(height);
// console.log(tallest)

// function reverseString(text){
//   let reversed ='';
//   for(let i=text.length-1;i>=0;i--){
//       const element = text[i];
//       reversed = reversed + element;
//       console.log(element, reversed);
//   }
//   return reversed

// }


// const myString = 'I am a good boy';
// const reversed= reverseString(myString);
// console.log(reversed)

// function reverseString(str){
//   const words = str.split(' ');
//   const result=[];
//   for(let i =words.length-1;i>=0;i--){
//     const element = words[i];
//      result.push(element)
//   }
//   const reversed = result.join(' ')
//   return reversed;
// }


// const myString = 'I am a good boy';
// reverseString(myString);

const fibo=[0,1];
for(let i=2;i<=10;i++){
   fibo[i] = fibo[i-1] + fibo[i-2];
}
console.log(fibo);
