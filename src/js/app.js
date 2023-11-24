// TODO: write your code here

import Character from "./class/Character"; 
import Bowerman from "./class/Bowerman"; 
import Daemon from "./class/Daemon"; 
import Magician from "./class/Magician"; 
import Swordsman from "./class/Swordsman"; 
import Undead from "./class/Undead"; 
import Zombie from "./class/Zombie";

let character = new Character('character', 'Bowman');
let bowerman = new Bowerman('bowerman');
let daemon = new Daemon('daemon');
let magician = new Magician('magician');
let swordsman = new Swordsman('swordsman');
let undead = new Undead('undead');
let zombie = new Zombie('zombie');
console.log(character, bowerman, daemon, magician, swordsman, undead, zombie);