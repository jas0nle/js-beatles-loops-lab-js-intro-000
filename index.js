// add solution here
function theBeatlesPlay(musicians, instruments) {
  var BeatlesArray = [];
  var i = 0;
  for (i = 0; i < musicians.length; i++) {
    BeatlesArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return BeatlesArray;
}

function johnLennonFacts(facts) {
  var i = 0;
  var factsArray = [];
  while (i < facts.length) {
    factsArray.push(facts[i] + '!!!');
    i++;
  }
  return factsArray;
}

function iLoveTheBeatles(n) {
  var LoveArray = [];
  do {
    LoveArray.push("I love the Beatles!");
    n++;
  } 
  while (n < 15);
  return LoveArray;
}