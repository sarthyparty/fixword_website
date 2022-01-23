function get_unique_nums(count, range) {
  const numbers = Array(range).fill().map((_, index) => index + 1);
  numbers.sort(() => Math.random() - 0.5);
  return numbers.slice(0, count);
}


function uniqueRandomRange(min, max) {
  var RANGE = [];
  for (var i = min; i <= max; ++i) {
    RANGE.push(i);
  }
  var _ = [];
  var rand = function rand() {
    if (!_.length) {
      rand.reset();
    }
    var index = Math.floor(Math.random() * _.length);
    var r = _[index];
    _.splice(index, 1);
    return r;
  };
  rand.reset = function() {
    _ = RANGE.concat([]);
  };
  return rand;
};

var swaps = [
  ['@', '4'],
  ['8', '13'],
  ['(', '<'],
  ['[)'],
  ['3'],
  ['/='],
  ['6'],
  ['}{', '#'],
  ['!'],
  ['_|'],
  ['|{', '|<'],
  ['1'],
  ['|V|', '|\\/|', '/\\/\\'],
  ['|V', '|\\|', '/\\/'],
  ['0'],
  ['|*'],
  ['q'],
  ['r', '/2'],
  ['$'],
  ['7', '-|-'],
  ['(_)', 'L|'],
  ['\\/'],
  ['vv', '\\^/'],
  ['x', '><'],
  ['y'],
  ['7_', '2']

]

function add_chars(pass) {
  return pass
}

function is_letter(letter) {
  if (letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122) {
    return true
  } else {
    return false
  }
}

function swap_letters(pass, change) {
  pass = pass.toLowerCase();
  let new_pass = pass.split("")
  let letters = []
  for (let i = 0; i < pass.length; i++) {
    if (is_letter(pass.charAt(i))) {
      letters.push(i)
    }
  }
  let num_of_changes = Math.round(change * letters.length)
  let indices = get_unique_nums(num_of_changes, letters.length)
  for (let i = 0; i < num_of_changes; i++) {

    let index_to_swap = letters[indices[i]];
    let options = swaps[pass.charCodeAt(index_to_swap) - 97]

    let new_letter = options[Math.floor(Math.random() * options.length)]

    new_pass[index_to_swap] = new_letter;
  }
  return new_pass.join("")
}

function lengthen(pass) {
  let alphabet="abcdefghijklmnopqrstuvwxyz"
  if (pass.length > 7) {
    return pass
  }
  let new_pass = pass
  let intOrChar = 0
  let randLetter = uniqueRandomRange(0, 25)
  let randInt = uniqueRandomRange(0, 9)
  for (let i = 0; i < (8 - pass.length); i++) {
    intOrChar = Math.random()
    if (intOrChar <= 0.2) {
      new_pass += alphabet.charAt(randLetter())
    }
    else {
      new_pass += randInt()
    }
  }
  return new_pass
}

let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))')

export function StrengthChecker(PasswordParameter) {
  if (strongPassword.test(PasswordParameter)) {
    return "Strong"
  } else if (mediumPassword.test(PasswordParameter)) {
    return "Medium"
  } else {
    return "Weak"
  }
}

function capitalize(pass) {
  let num_letters=0
  for(let i=0; i<pass.length; i++){
    if(is_letter(pass.charAt(i))){
      num_letters++
    }
  }
  let num_of_caps = Math.ceil((Math.random()*0.5) * num_letters)
  let num_changed = 0
  let index = 0
  let new_pass = pass.split("")
  while (num_changed < num_of_caps && index < pass.length) {
    if (is_letter(new_pass[index])) {
      new_pass[index] = new_pass[index].toUpperCase()
      num_changed++
    }
    index++
  }
  return new_pass.join("")
}

function get_alt(pass, percent) {
  if (pass == "") {
    return "";
  }
  let new_pass = capitalize(lengthen(swap_letters(pass, percent)));
  return new_pass
}
export function get_alts(pass, num, percent) {
  let alts = []
  for (let i = 0; i < num; i++) {
    let new_pass=get_alt(pass, percent)
    let alt=new_pass
    alts.push(alt)
  }

  return alts
}