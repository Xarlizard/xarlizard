var c = 0; //iteration counter

function toggle_row() {
    var foldable0 = document.getElementById('foldable0');
    var foldable1 = document.getElementById('foldable1');
    var foldable2 = document.getElementById('foldable2');
    var showMore = document.getElementById('showMore');
    var showLess = document.getElementById('showLess');

    if (c == 0) {
      foldable0.style.display = "none";
      foldable1.style.display = "flex";
      foldable1.style.flexDirection = "row";
      c++;  
    } else if (c == 1) {
      foldable1.style.display = "none";
      foldable2.style.display = "flex";
      foldable2.style.flexDirection = "row";
      showMore.style.display = "none"
      showLess.style.display = "flex"
      c++;
    } else if (c == 2) {
      foldable0.style.display = "flex";
      foldable0.style.flexDirection = "row";
      foldable1.style.display = "none";
      foldable2.style.display = "none";
      c = 0;
      showMore.style.display = "flex"
      showLess.style.display = "none"
    }
}
