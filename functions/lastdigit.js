function maxDigit(n1,n2){

    let lastDigit_of_n1=n1%10
    
    let lastDigit_of_n2=n2%10

    return lastDigit_of_n1>lastDigit_of_n2?n1 :n2
}

console.log(maxDigit(872,179));
