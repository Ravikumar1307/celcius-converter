function convert(){
     var input=Number(document.getElementById("input").value)
    var total=input*9/5+32
    var result=document.getElementById("result")
    result.innerHTML=total.toFixed(1)+ " fahrenheit"
}
