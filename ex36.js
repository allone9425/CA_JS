//구구단 출력
/*
for(let i = 0; i < 10; i++){
console.log(2 * i); 
}
for(let i = 0; i < 10; i++){
console.log(3 * i); 
}
for(let i = 0; i < 10; i++){
console.log(4 * i); 
}
*/
for(let j= 2; j < 10; j++){
for(let i = 0; i < 10; i++){
  console.log(`${j}단 : ${j} x ${i} = ${j * i}`); 
  }
}