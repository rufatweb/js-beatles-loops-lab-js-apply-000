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
  while (i < array.length) {
    facts.push(array[i] + "!!!")
    i++;
  }
  return facts;
}
