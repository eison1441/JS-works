var arr=[100,200,300,400]

var k=2

// step 1 : fetch last Object

// step 2 : insert the last object into the begining of the array


for(i=1;i<=k;i++){

    let lastobject=arr.pop()

    arr.unshift(lastobject)
}

console.log(arr);
