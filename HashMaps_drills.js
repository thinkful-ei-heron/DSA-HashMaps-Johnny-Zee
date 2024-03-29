const HashMaps = require('./HashMaps');

//Drill 1: 
function main() {
  let lotr = new HashMaps();
  HashMaps.MAX_LOAD_RATIO = .5;
  HashMaps.SIZE_RATIO = 3;
  lotr.set("Hobbit", "Bilbo");
  lotr.set("Hobbit", "Frodo");
  lotr.set("Wizard", "Gandolf");
  lotr.set("Human", "Aragon");
  lotr.set("Elf", "Legolas");
  lotr.set("Maiar", "The Necromancer");
  lotr.set("Maiar", "Sauron");
  lotr.set("RingBearer", "Gollum");
  lotr.set("LadyOfLight", "Galadriel");
  lotr.set("HalfElven", "Arwen");
  lotr.set("Ent", "Treebeard");

  console.log(lotr.length, lotr.get('Hobbit'), lotr.get('Maiar'), lotr._capacity)


}
//main();

//Drill 4

function removeDuplicates(string) {
  let hash = new HashMaps ();
  let newStr = '';
  for(let i = 0; i < string.length; i++) {
    try {
      hash.get(string[i]);
    } catch (e) {
      hash.set(string[i], string[i]);
      newStr += string[i]
    }
  }
  return newStr;
}
//console.log(removeDuplicates('google all that you think can think of'));

function isPalindrome(string) {
  string = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let hash = new HashMaps();

  for (let i = 0; i < string.length; i++)  {
    hash.set(string[i],i);
  }
  let count = 0;
  for (let i = 0; i < string.length; i++)  {
    if(hash.get(string[i])!==i) {
      count--;
    } else {
      count++
    }
  }
  if(count > 1) {
    return false;
  }
  return true
}
// console.log(isPalindrome('acecarr'));
// console.log(isPalindrome('north'));
// console.log(isPalindrome('tdad'));
// console.log(isPalindrome('daeed'));

//Drill 6
let input = ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'];

function anagrams(array) {
  let arr1 = [];
  let arr2 = [];
  let arr3 = [];
  let finalArr = [];
  let count = 0;

  for(let i = 0; i < array.length; i++) {
    if(array[i].split('').sort().join('') === array[count].split('').sort().join('')) {
      arr1.push(array[i]);
    } else if (array[i].split('').sort().join('') === array[1].split('').sort().join('')) {
      arr2.push(array[i]);
    } else if(array[i].split('').sort().join('') === array[2].split('').sort().join('')) {
      arr3.push(array[i]);
    }
  }
  finalArr.push(arr1, arr2, arr3);
  return finalArr;
}
  
console.log(anagrams(input));