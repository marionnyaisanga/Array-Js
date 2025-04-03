let x = [3,7,34,90,12];
let lastItem = x[x.length - 1];
console.log({lastItem});

let y = [true, "green","where",12,56]
let lastElement = y[y.length - 1];
console.log({lastElement});

let myPets = ["Cow", "Bird", "Snake", "Dog"]
let p = myPets.toString();
console.log({p});

let m = [-5,9,5,3,2,-3,6,8,4,1];
let sorted = m.sort()
console.log(sorted);

let dup = ["boy","man","girl","school","girl","woman"]
let  k = []
dup.forEach(element=>{
    if (!k.includes(element)){
        k.push(element)
    }
})
console.log(k);

function removeDuplicate(array){
    return[...newSet(array)];
}

let arr = ["boy", "man", "girl", "school", "girl", "woman"];
let uniqueArr = [];
let duplicatesArr = [];

arr.forEach(item => {
    if (uniqueArr.includes(item)) {
        if (!duplicatesArr.includes(item)) {
            duplicatesArr.push(item);
        }
    } else {
        uniqueArr.push(item);
    }
});

console.log("Array without duplicates:", uniqueArr);
console.log("Array with duplicates:", duplicatesArr);




const arr5 = ["the","way","x",4];
const word = "food"

if (arr5.includes(word)){
    console.log(word);
}
else{
    console.log("the word was not found");
    
}
let n = "renniw"
let sortedname = n.split('').sort().join('')
console.log(sortedname)

let fruits = ["apple","banana","strawberry","watermelon","grapes","Thorn melon","orange","guava","pawpaw","kiwi"]
fruits.splice(4,0,"Tomato");
console.log(fruits);
