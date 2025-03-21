var word ="this is a simple program to count number of vowels and consonants"

const voewls="aeiou"

var vowelCount=0

var consonantCount=0

var spaceCount=0

for(let ch of word){

    if(voewls.includes(ch)){

        vowelCount+=1
    }
    else if(ch!=" "){
        
        consonantCount+=1
    }
    else if(ch==" "){

        spaceCount+=1
    }
}
console.log("total count",word.length);

console.log("consonant count =",consonantCount);

console.log("space count =",spaceCount);

console.log("vowel count =",vowelCount);


