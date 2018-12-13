var keysdiv =document.getElementById("keys")
var inputNum = document.getElementById("numOne")
var input = "789/456*123-0C=+"

for (var i=0; i<input.length;i++){
    var btn = document.createElement("button")
    btn.innerText = input[i]
    btn.value = input[i]
    btn.addEventListener ("click", function (e){
        
        if("+-*/=".indexOf(e.target.innerText)!= -1){
            num = inputNum.value.split("+")
            if (num.length==2 && num[1]!=""){
                inputNum.value = parseInt(num[0])+parseInt(num[1])
            }
            num = inputNum.value.split("-")
            if (num.length==2 && num[1]!=""){
                inputNum.value = parseInt(num[0])-parseInt(num[1])
            }
            num = inputNum.value.split("*")
            if (num.length==2 && num[1]!=""){
                inputNum.value = parseInt(num[0])*parseInt(num[1])
            }
            num = inputNum.value.split("/")
            if (num.length==2 && num[1]!=""){
                inputNum.value = parseInt(num[0])/parseInt(num[1])
            }
            if (e.target.innerText != "="){
                inputNum.value +=(e.target.innerText)
            }
        }else if (e.target.innerText == "C"){
            inputNum.value=""
        }else{
            inputNum.value +=(e.target.innerText)
        }
    })
    keysdiv.append(btn)
}

