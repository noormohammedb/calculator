let num, oper;
console.log('JavaScript Running');
$(function () {
    console.log("jQuery Running");
    num = $("[data-num='1']");
    num.toArray().forEach(numberButtonElement => {
        numberButtonElement.addEventListener("click", numEvent => {
            console.log(numEvent);
            console.log(numEvent.target.innerText);
            $("#screen").val($("#screen").val() + numEvent.target.innerText)
        })
    });


    oper = $("[data-oper='1']");
    oper.toArray().forEach(operatorButtonElement => {
        operatorButtonElement.addEventListener("click", operEvent => {
            console.log(operEvent.target.id);
            $("#history").val($("#screen").val() + operEvent.target.id)
            $("#screen").val("");

        })
    });
    const equalButton = $("#eval")[0];
    equalButton.addEventListener("click", e => {
        console.log(e.target);
        let val = eval($("#history").val() + $("#screen").val())
        console.log(val);
        $("#history").val("");
        $("#screen").val(val);
    })

    $("#clear")[0].addEventListener("click", clearEvent => {
        $("#screen").val("");
    })

})
// var his;
// function display(res) {
//     var his = $("#screen").val();
//     $("#screen").val(res);
//     console.log("result print" + res);
//     $("#history").val(his);
//     console.log("history print " + his);
// }
