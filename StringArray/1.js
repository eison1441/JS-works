var words=["am","pm","goodmorning","evening","afternoon"]


var upperCase=words.map((w)=>w.toUpperCase())

console.log(upperCase);

var Length2=words.filter((w)=>w.length==2)

console.log(Length2);


var LengthGT5=words.filter((w)=>w.length>=5)

console.log(LengthGT5);


const vowels="aeiou"

var vstr=words.filter((w)=>vowels.includes(w[0]))

console.log(vstr);
