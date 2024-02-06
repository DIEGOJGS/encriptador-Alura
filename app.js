function encriptar() {
  var texto = document.getElementById("inputtexto").value.toLowerCase();
  var txtcifrado = texto.replace(/e/igm, "enter")
                        .replace(/o/igm, "ober")
                        .replace(/i/igm, "imes")
                        .replace(/a/igm, "ai")
                        .replace(/u/igm, "ufat");

  // Ocultar elementos y mostrar el resultado
  document.getElementById("imgM").style.display = "none";
  document.getElementById("texto").style.display = "none";
  document.getElementById("copiar").style.display = "inherit";
  document.getElementById("texto2").innerHTML = txtcifrado;
}
  
function desencriptar() {
  var texto = document.getElementById("inputtexto").value.toLowerCase();
  var txtcifrado = texto.replace(/enter/igm, "e")
                        .replace(/ober/igm, "o")
                        .replace(/imes/igm, "i")
                        .replace(/ai/igm, "a")
                        .replace(/ufat/igm, "u");

  // Ocultar elementos y mostrar el resultado
  document.getElementById("imgM").style.display = "none";
  document.getElementById("texto").style.display = "none";
  document.getElementById("copiar").style.display = "inherit";
  document.getElementById("texto2").innerHTML = txtcifrado;
  document.getElementById("reset").style.display = "inherit";
}
  
  function copia() {
    var contenido = document.querySelector("#texto2");
    contenido.select();
    document.execCommand('copy');
    alert("Copied!");
  }


  function limpiarCaja(){
    document.querySelector('#inputtexto').value ='';
    document.querySelector('#texto2').innerHTML = ''; 
    document.getElementById("reset").style.display = "none";
    document.getElementById("copiar").style.display = "none";
    document.getElementById("imgM").style.display = "inherit";

    
   
 }

