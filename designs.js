
const $canvas = $("#pixel_canvas");
const $createBtn = $("input[type=submit]");

let $paintColor;
let $canvasWidth;
let $canvasHeight;

function makeGrid() {

  $canvasWidth = $("#input_width").val();
  $canvasHeight = $("#input_height").val();
  $canvas.html(('<tr>'+('<td></td>').repeat($canvasWidth)+'</tr>').repeat($canvasHeight));

}

$createBtn.on("click", function (e) {

  makeGrid();
  e.preventDefault();

});

$canvas.on("click", "td", function() {

  $paintColor = $("input[type=color]").val();
  $(this).css("background-color", $paintColor)

});

//reset the canvas drawing

$("#resetButton").on("click", function() {

  $paintColor = "#fff";
  $("td").css("background-color", $paintColor)

});
