function getFirstSelector(n){
  return document.querySelector(n);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function deepestChild(){
  var grandDivs = document.querySelectorAll("#grand-node div");
  var current = "";
  for (let i = 0; i < grandDivs.length; i++){
    current = grandDivs[i].innerHTML;
    if (current.includes("<div>") === false){
      return grandDivs[i-1];
    }
  }
}

function increaseRankBy(n){
  var rankedLists = document.querySelectorAll('.ranked-list');
  for (let i = 0; i < rankedLists.length; i++){
    rankedLists[i].innerHTML = parseInt(rankedLists[i].innerHTML) + n;
  }
}
