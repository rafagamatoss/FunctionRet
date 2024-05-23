function calculaAreaRetangulo(a, b) {
  return a * b;
}

const altura = Number(prompt("Digite a altura: "));
const base = Number(prompt("Digite a base: "));

console.log("A área do retângulo é " + calculaAreaRetangulo(altura, base));
