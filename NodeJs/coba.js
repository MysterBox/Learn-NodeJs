const mySet1 = new Set()

mySet1.add(1)           // Set [ 1 ]
mySet1.add(5)           // Set [ 1, 5 ]
mySet1.add(5)           // Set [ 1, 5 ]
mySet1.add('some text') // Set [ 1, 5, 'some text' ]
const o = {a: 1, b: 2}
mySet1.add(o)
mySet1.add({a: 1, b: 2})   // o is referencing a different object, so this is okay

mySet1.has(1)              // true
mySet1.has(3)              // false, since 3 has not been added to the set
mySet1.has(5)              // true
console.log(mySet1.has(Math.sqrt(25)));  // true
mySet1.has('Some Text'.toLowerCase()) // true
mySet1.has(o)       // true

mySet1.size         // 5

mySet1.delete(5)    // removes 5 from the set
mySet1.has(5)       // false, 5 has been removed

mySet1.size         // 4, since we just removed one value

console.log(mySet1)

// fuction dari Math.sqrt adalah mencari kebenaran dari akar kuadrat
console.log(Math.sqrt(49));

// Structur data Set tidak bisa di duplikasi tapi set bisa di duplikasi
// ketika mengacu pada object yang berbeda
let set1 = new Set();
set1.add(1);
set1.add(2);
set1.add(3);
const a = {a:2}
set1.add(a);
set1.add({a:2});
console.log(set1);
