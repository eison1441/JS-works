function isPalindrome(word){

    let wordLength=word.length-1

    let result=""

    for(let i=wordLength;i>=0;i--){

        let ch=word.charAt(i)

        result+=ch
    }

    return word==result

}

console.log(isPalindrome("malayalam"));
