let num, oper, data;
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
        $("#history").val("");
        $("#screen").val("");
    })


    $("#trim")[0].addEventListener("click", trimEvent => {
        data = $("#screen").val()

        $("#screen").val(data.slice(0, -1))
    })

})