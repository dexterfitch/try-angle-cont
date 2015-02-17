var triangleType = function(side1, side2, side3) {
  var triangle = ""
  if ((side1 === side2) && (side1 === side3)) {
    triangle += "equilateral";
  }
  if (((side1 === side2) && (side1 !== side3)) || 
      ((side2 === side3) && (side2 !== side1)) || 
      ((side1 === side3) && (side1 !== side2))) {
    triangle += "isosceles";
  }
  if ((side1 !== side2) && (side1 !== side3) && (side2 !== side3)) {
    triangle += "scalene";
  }

  if (((side1 + side2) <= side3) || ((side1 + side3) <= side2) || ((side2 + side3) <= side1)) {
    triangle = "Not a triangle.";
  }
  return triangle;
};

$(document).ready(function() {
  $('input').keyup(function() {
    var side1 = parseInt($('input#side1').val());
    var side2 = parseInt($('input#side2').val());
    var side3 = parseInt($('input#side3').val());
    var triangle = triangleType(side1, side2, side3);

    $('.triangle-type').text(triangle);
    if (side1 && side2 && side3) {

    } else {
      $('.triangle-type').text("Not yet a triangle.");
    }
  });
});