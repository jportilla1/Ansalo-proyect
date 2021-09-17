
const botones = document.getElementsByClassName("btnNumLet");
Array.from(botones).forEach(boton => boton.addEventListener('click', accionBotones));


function accionBotones(event) {
    const id = event.target.id;
    const elementoNumeros = document.getElementById("output1");
    const elementoLetras = document.getElementById("output2");
    const numeros = elementoNumeros.textContent;
    const ultimoNumero = numeros.charAt(numeros.length -1);
    const elemento = ultimoNumero === "0" ? elementoLetras : elementoNumeros;
    const token = ultimoNumero === "0" ? id.charAt(0) : id.charAt(1);
    const texto = elemento.textContent;
    const ultimoToken = texto ? texto.charAt(texto.length - 1) : "";
    if (esValidoEscribir (token,ultimoToken) ) {
        elemento.textContent += token;
        
    }
    


  }

  function esValidoEscribir(token, ultimoToken) {
    if (ultimoToken.length === 0) {
      if (token === "1" || token === "A") {
         return true;
      } else {
         alert("El primer token no es el correcto debe ser 1 o A pero es : " + token);
         return false;
      }
    } else {
      if (ultimoToken === "9") {
        if (token === "0") {
          return true;
        } else {
          alert("El ultimo token es 9, el siguiente debe ser 0 pero es " + token);
          return false;
        }
      } else {
        if (token.charCodeAt(0) === ultimoToken.charCodeAt(0) + 1) {
          return true;
        } else {
          alert("El token debería ser " + String.fromCharCode(ultimoToken.charCodeAt(0) + 1) + " pero es " + token);
          return false;
        } 
      }
    }
  }
  
  
  
  function limpiarCampos() {
    document.getElementById("output1").textContent = "";
    document.getElementById("output2").textContent = "";
  }
  
  const botonClear = document.getElementById("clear");
  botonClear.addEventListener("click", limpiarCampos);