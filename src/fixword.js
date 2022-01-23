const uniqueRandomRange = require("unique-random-range");
const {passwordStrength} = require('check-password-strength')

var swaps = [
  ['@','4'],
  ['8','13'],
  ['(','<'],
  ['[)'],
  ['3'],
  ['/='],
  ['6'],
  ['}{','#'],
  ['!'],
  ['_|'],
  ['|{','|<'],
  ['1'],
  ['|V|', '|\\/|', '/\\/\\'],
  ['|V', '|\\|', '/\\/'],
  ['0'],
  ['|*'],
  ['q'],
  ['r','/2'],
  ['$'],
  ['7','¯|¯'],
  ['(_)','L|'],
  ['\\/'],
  ['vv','\\^/'],
  ['x','><'],
  ['y'],
  ['7_','2']

]

function add_chars(pass) {
  return pass
}

function is_letter(letter) {
  if (letter.charCodeAt(0)>=97&&letter.charCodeAt(0)<=122) {
    return true
  }else{
    return false
  }
}

function swap_letters(pass) {
  pass=pass.toLowerCase();
  let new_pass=pass.split("")
  let letters = []
  for (let i = 0; i < pass.length; i++) {
   if (is_letter(pass.charAt(i))){
     letters.push(i)
   }
  }
  let change = 0.35
  let num_of_changes = Math.round(change*letters.length)
  for (let i=0; i<num_of_changes; i++){

    let randNum=uniqueRandomRange(0,letters.length-1) 
    let index_to_swap=letters[randNum()];
    
    let options = swaps[pass.charCodeAt(index_to_swap)-97]

    let new_letter=options[uniqueRandomRange(0,options.length-1)()]

    new_pass[index_to_swap]=new_letter;
  }
  return new_pass.join("")
}

function make_strong(pass) {
 return passwordStrength(pass).value
}





function get_alt(pass) {
  let new_pass = add_chars(swap_letters(pass));
  let final = make_strong(new_pass)
  return new_pass
}

export function get_alts(pass, num) {
  let alts = []
  for (let i = 0; i < num; i++) {
    alts.push(get_alt(pass))
  }

  return alts
}