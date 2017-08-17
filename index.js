function getFirstSelector(selector) {
  let response = document.querySelector(selector);
  return response;
}

function nestedTarget() {
  let response = document.querySelector('#nested .target');
  return response;
}

function increaseRankBy(n) {
  const rank = document.querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < rank.length; i++) {
    rank[i].innerHTML = parseInt(rank[i].innerHTML) + n;
  }
}

function deepestChild(){
  let response = document.querySelector('div#grand-node div div div div');
  return response;
}
