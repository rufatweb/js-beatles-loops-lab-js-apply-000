// add solution here
function theBeatlesPlay(arrayMus, arrayIns) {
  const theyPlay = [];
  for (var i = 0; (i < arrayMus.length && i < arrayIns.length); i++) {
      theyPlay.push(arrayMus[i] + ' plays ' + arrayIns[i]);
  }
  return theyPlay;
}

function johnLennonFacts(array) {
  const facts = [];
  var j = 0;
  while (j < array.length) {
    facts.push(array[j] + "!!!")
    j++;
  }
  return facts;
}

function iLoveTheBeatles(num) {
  var arr = [];
  var x = 0;
  do {
  arr.push("I love the Beatles!");
  x++;
} while (x < 16);
 return arr;
}
