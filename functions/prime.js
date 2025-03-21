// function is_Prime(num){

//     let is_Prime=true

//     for(let i=2;i<num;i++){

//         if (num%i==0){

//             is_Prime=false
//             break
//         }
        
//     }
//     return is_Prime

// }

// console.log(is_Prime(7));


// return num%i==0?false:is_Prime



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
console.log(is_Prime(7));
