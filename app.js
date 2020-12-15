console.log('JavaScript Running');
$(function () {
    console.log("jQuery Running");

    $("#history").val();








})
// var his;
function display(res) {
    var his = $("#screen").val();
    $("#screen").val(res);
    console.log("result print" + res);
    $("#history").val(his);
    console.log("history print " + his);
}
