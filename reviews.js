function changeStars(num) {
  var stars = document.getElementById("star-rating").children;
  for (var i = 0; i < stars.length; i++) {
    if (i < num) {
      stars[i].className = "fa fa-star checked";
    }
    else {
      stars[i].className = "fa fa-star";
    }
  }
}