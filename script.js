function funcao(){
    num = document.getElementById("num").value;
    var result = num;

    while (num > 1) { 
        num = num -1;
        result *= num;
    }

    document.getElementById("resultado").innerHTML = result;
}