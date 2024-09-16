var c = 0; //iteration counter
var foldable1 = document.getElementById('foldable1');
var foldable2 = document.getElementById('foldable2');
var showMore = document.getElementById('showMore');
function show_row() {
    var foldable1 = document.getElementById('foldable1');
    var foldable2 = document.getElementById('foldable2');
    var showMore = document.getElementById('showMore');

    if (c == 0) {
      foldable1.style.display = "flex";
      c++;  
    } else if (c == 1) {
      foldable2.style.display = "flex";
      showMore.style.display = "none"
      c++;
    }
  }