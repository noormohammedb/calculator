let num
console.log('JavaScript Running');
$(function () {
    console.log("jQuery Running");
    num = $("[data-num='1']");
    console.log(num);
    num.toArray().forEach(numberButtonElement => {
        numberButtonElement.addEventListener("click", numEvent => {
            console.log(numEvent);
            console.log(numEvent.target.innerText);
            $("#screen").val($("#screen").val() + numEvent.target.innerText)
        })
    });







})
// var his;
// function display(res) {
//     var his = $("#screen").val();
//     $("#screen").val(res);
//     console.log("result print" + res);
//     $("#history").val(his);
//     console.log("history print " + his);
// }
