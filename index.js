// add solution here
function theBeatlesPlay(arrayMus, arrayIns) {
  const facts = [];
  for (var i = 0; (i < arrayMus.length && i < arrayIns.length); i++) {
      facts.push(arrayMus[i] + ' plays ' + arrayIns[i]);
  }
  return facts;
}
