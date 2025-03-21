function is_Prime(num){

    let is_Prime=true

    for(let i=2;i<num;i++){

        if (num%i==0){

            is_Prime=false
            break
        }
        
    }
    return is_Prime

}



function nextPrime(num){

    num=num+1

    let currentNumberisPrime=is_Prime(num)

    while(!currentNumberisPrime){

        num=num+1
        currentNumberisPrime=is_Prime(num)
    }

    console.log("next prime number is ==>",num);
    
    
}


nextPrime(13)
