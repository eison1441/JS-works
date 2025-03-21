function iaArmstrongNumber(num){

    let DigitCount=String(num).length

    let numberCopy=num

    let result=0

    while(num!=0){

        let digit=num%10

        let digitExpo=digit**DigitCount

        result+=digitExpo

        num=Math.floor(num/10)

    }

    return result==numberCopy? true:false
}


console.log(iaArmstrongNumber(153));
