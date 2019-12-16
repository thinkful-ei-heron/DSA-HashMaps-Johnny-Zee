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
main();

//Drill 4

function delete(string) {
    let hash = new HashMaps ();
    for(let i = 0; i < String.length; i++) {
        hash.set(string.charCodeAt(i)


    }

}