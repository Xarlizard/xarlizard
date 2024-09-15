function show_image(image) {
    var x = image.querySelector('.values');
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }