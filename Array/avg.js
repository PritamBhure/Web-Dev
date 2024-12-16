 let studentsmarks=[20,30,50,39,25]

console.log(studentsmarks)
let sum=0

for(let marks of studentsmarks){
sum +=marks
}

let avg=sum/studentsmarks.length+1

console.log('The avrage  marks of the Students is',avg)