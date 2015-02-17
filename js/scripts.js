$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();

    var side1 = parseInt($('input#new-side1').val());
    var side2 = parseInt($('input#new-side2').val());
    var side3 = parseInt($('input#new-side3').val());

    var newTriangle = { side1: side1,
                     side2: side2,
                     side3: side3,
                     type: function() {
                             var side1 = this.side1;
                             var side2 = this.side2;
                             var side3 = this.side3;
                             var triangle = "";

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

                             if (((side1 + side2) <= side3) ||
                                ((side1 + side3) <= side2) ||
                                ((side2 + side3) <= side1)) {
                               triangle = "Not a triangle.";
                             }
                             return triangle;
                           }
                   };


    $('input#new-side1').val("");
    $('input#new-side2').val("");
    $('input#new-side3').val("");

    $('ul#' + newTriangle.type() + '-triangles').append('<li><span class="tri"> [' +
                                                        newTriangle.side1 + ', ' +
                                                        newTriangle.side2 + ', ' +
                                                        newTriangle.side3 + ']' +
                                                        '</span></li>');

  });
});
