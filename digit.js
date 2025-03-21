var num=754

while(num!=0){

    let lastDigit=num%10

    console.log(lastDigit)

    num=Math.floor(num/10)

}

var num=452

var sum=0

while(num!=0){

    let lastDigit=num%10

    sum=sum+lastDigit

    num=Math.floor(num/10)
    
    
}

console.log(sum);
