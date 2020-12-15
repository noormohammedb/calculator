let num, oper, data, periodFlag = true;
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

    $("[data-period='1']")[0].addEventListener("click", numEvent => {
        if (periodFlag) {
            $("#screen").val($("#screen").val() + numEvent.target.innerText)
            periodFlag = false;
        }
    })

    oper = $("[data-oper='1']");
    oper.toArray().forEach(operatorButtonElement => {
        operatorButtonElement.addEventListener("click", operEvent => {
            periodFlag = true;
            if (($("#history").val() && $("#screen").val())) {
                $("#history").val(eval($("#history").val() + $("#screen").val()) + operEvent.target.id)
                $("#screen").val("");
                console.log("hist");
            } else if (($("#history").val() && !$("#screen").val())) {
                console.log("homst");
                data = $("#history").val();
                let ndata = data.slice(0, -1)
                $("#history").val(ndata + operEvent.target.id)
            } else if ($("#screen").val()) {
                console.log("host");
                $("#history").val($("#screen").val() + operEvent.target.id)
                $("#screen").val("");
            }

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
        periodFlag = true;
    })


    $("#trim")[0].addEventListener("click", trimEvent => {
        data = $("#screen").val()
        if (data) {
            $("#screen").val(data.slice(0, -1))
        } else {
            $("#screen").val($("#history").val())
            $("#history").val("")
        }
    })

})