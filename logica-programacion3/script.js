function calcularFactorial(numero) {
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
      factorial *= i;
    }
    return factorial;
  }
  

  function calcularFactorialUsuario() {
    let input = prompt("Por favor, ingresa un número para calcular su factorial:");
  

    let numero = parseFloat(input);
  
    if (!isNaN(numero) && Number.isInteger(numero) && numero >= 0) {
      let resultado = calcularFactorial(numero);
      console.log(`El factorial de ${numero} es ${resultado}.`);
      document.getElementById("resultado").textContent = `El factorial de ${numero} es ${resultado}.`;
    } else {
      console.error("Entrada inválida. Por favor, ingresa un número entero no negativo.");
      document.getElementById("resultado").textContent = "Entrada inválida. Por favor, ingresa un número entero no negativo.";
      calcularFactorialUsuario(); //
    }
  }
  
  calcularFactorialUsuario();
  