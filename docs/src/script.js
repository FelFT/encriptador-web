function encriptar(){
    var text = document.getElementById("inputText").value.toLowerCase();
    var txtCifrado = text.replace(/e/igm, "enter");
    
    txtCifrado = txtCifrado.replace(/o/igm, "ober")
    txtCifrado = txtCifrado.replace(/i/igm, "imes")
    txtCifrado = txtCifrado.replace(/a/igm, "ai")
    txtCifrado = txtCifrado.replace(/u/igm, "ufat")

    document.getElementById("imgDer").style.display = "none";
    document.getElementById("textDer").style.display = "none";
    document.getElementById("textDer1").style.display = "none";
    document.getElementById("texto").innerHTML = txtCifrado;
    document.getElementById("texto").style.marginTop = "10%";
    document.getElementById("texto").style.display = "show";
    document.getElementById("texto").style.display = "inherit";
    document.getElementById("copy").style.display = "show";
    document.getElementById("copy").style.display = "inherit";
}

function desencriptar(){
    var text = document.getElementById("inputText").value.toLowerCase();
    var txtCifrado = text.replace(/enter/igm, "e");
    
    txtCifrado = txtCifrado.replace(/ober/igm, "o")
    txtCifrado = txtCifrado.replace(/imes/igm, "i")
    txtCifrado = txtCifrado.replace(/ai/igm, "a")
    txtCifrado = txtCifrado.replace(/ufat/igm, "u")

    document.getElementById("imgDer").style.display = "none";
    document.getElementById("textDer").style.display = "none";
    document.getElementById("textDer1").style.display = "none";
    document.getElementById("texto").innerHTML = txtCifrado;
    document.getElementById("texto").style.marginTop = "10%";
    document.getElementById("texto").style.display = "show";
    document.getElementById("texto").style.display = "inherit";
    document.getElementById("copy").style.display = "show";
    document.getElementById("copy").style.display = "inherit";
}

function copiar(){
    var contenido = document.querySelector("#texto")
    contenido.select();
    document.execCommand("copy");
    alert("Se copió!");
}