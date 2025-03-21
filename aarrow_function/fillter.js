var arr=[10,20,30,40,50,60,70,80,90,100,222,333,444,555,355,]


var even=arr.filter((num)=>num%2==0)

console.log(even);

var odd=arr.filter((num)=>num%2!=0)

console.log(odd);


var numGt=arr.filter((num)=>num>=25)

console.log(numGt);
