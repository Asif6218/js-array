var animals=['tiger','lion','cheetah','throne','lemurs','deer','elephant','bluebull','jackals','rinos'];
console.log(animals);

//length = no. of elements
//index =length-1

console.log(animals[0]);
console.log(animals[1]);
console.log(animals[2]);
console.log(animals[3]);
console.log(animals[4]);
console.log(animals[5]);
console.log(animals[6]);
console.log(animals[7]);
console.log(animals[8]);
console.log(animals[9]);

//adding a element at the end

animals.push('giraffe');
console.log(animals);

//removing a element from the end

animals.pop();
console.log(animals);

//adding a element at the begining

animals.unshift('zebra');
console.log(animals);

//removing element from begining

animals.shift();
console.log(animals);

//splice and slice 
//adding and removing elements to the middle
// splice modifies the existing array
// slice creats a new array

animals.splice(6,0,'yak');
console.log(animals);

//removing
animals.splice(6,1);
console.log(animals);

//MERGING TWO ARRAYS
var w=['leopard','panther'];
var d=['cow','sheep'];
var c=w.concat(d);
console.log(c);

//reversing the array

animals.reverse();
console.log(animals);

//iterating over the array

for (var i=0;i<=animals.length-1;i++){
    console.log(animals[i])
}