


//N-ésimo termo da sequência (multiplos de 2)
    
const nenesimo = (n) => {
    if(n === 1){
        return 3
    }else{
        return 2* nenesimo(n-1)
    }
}
console.log(nenesimo(5))

//Fibonacci

const fib = (n) => {
    if(n === 0){
        return 0
    }if(n === 1){
        return 1
    }else{
        return fib(n-1) + fib(n-2)
    }
}
console.log(fib(8))


//soma de N numeros naturais

const somaNat = (n) => {
    if(n === 0){
        return 0
    }
    if (n === 1){
        return 1
    }
    else{
        return somaNat(n-1) + n
    }
}
console.log(somaNat(3))


//fatorial de um numero N
const fat = (n) => {
    if(n === 0){  
        return 1
    }if(n === 1) {
        return 1
    }else {
        return n*fat(n-1)
    }

}
console.log(fat(4))


//potencia
const poten = (n, p) =>{
    if(p === 0){
        return 1
    }
    if((p === 1)){
        return n
    }
    else{
        return n * poten(n, p -1)
    }
}
console.log(poten(2, 3))

// resto divisao
const resDivi = (n, m) => {
 if(n<m){
    return n
 }else{
    return resDivi(n - m, m)
 }
}
console.log(resDivi(10, 3))

//quociente div
//n = dividendo m= divisor
const div = (n, m) =>{
    if (n< m){
        return 0;
    }
    else{
        return 1+ div(n-m, m)
    }
}
console.log(div(9, 3))



//MDC

const mdc = (a, b) => {
    if (b === 0) {
      return a;
    } else {
      const remainder = a - Math.floor(a / b) * b;
      return mdc(b, remainder);
    }
  };
  

console.log(mdc(12, 6))

const mmc = (a, b) => {
    return (a * b) / mdc(a, b);
  };
  console.log(mmc(16, 64))

// tamanho

const tamanho = (palavra) => {
    if(palavra === ""){
        return 0
    }else{
        return 1+ tamanho(palavra.slice(1))
    }
}
console.log(tamanho("Jogador"))

//

const multiSoma = (numero, indice = 1, soma = 0) => {
    if (indice <= 10) {
      return multiSoma(numero, indice + 1, soma + numero * indice);
    } else {
      return soma;
    }
  };

console.log(multiSoma(5))

const inverterString = (str) => {
    if (str.length <= 1) {
      return str;
    } else {
      const ultimoCaractere = str.slice(-1);
      const restoDaString = str.slice(0, -1);
      return ultimoCaractere + inverterString(restoDaString);
    }
  };

console.log(inverterString("Hello, World"))

// soma dos quadrados

const somaQuadrados = (n) =>{
    if(n <= 0){
        return 0
    }
    else{
        return n*n + somaQuadrados(n-1)
    }
}

console.log(somaQuadrados(12))

//repetidor
const repita = (n, m) => {
if(m <= 0){
    return ""
}else{
    return n + repita(n, m-1)
}
}

console.log(repita("Hello", 5))


// Calculo caminhos Vendedor -- Fatorial

const caminhos = (citys) => {
if(citys == 1){
    return 1
}else{
    return citys*caminhos(citys -1)
}
}
console.log(caminhos(3))

//dec2

const dec2 = (n, m) => {
    const DigitosHex = "0123456789ABCDEF"

    const converter = (numero) => {
        if(numero < m){
            return DigitosHex[numero];
        }else{
            const resto = numero % m;
            const quoci = Math.floor(numero / m);
            return converter(quoci) +DigitosHex[resto]
        }
    }
    if(n < 0 || m < 2 || m > 16){
        return "Invalido"

    } if( n=== 0){
        return "0"
    }
    
    return converter(n)
}

console.log(dec2(20, 10))


//collatz

const collatz = (n, qtdePassos = 0) => {
    if(n <= 0){
        return " entrada invalida"
    }
    if(n === 1){
        return qtdePassos;
    }
    if(n%2 === 0){
        return collatz(n/2, ++qtdePassos)
    }else{
        return collatz(n*3 +1, ++qtdePassos)
    }
}

console.log(collatz(10))

//verificador de Palindromos

const ehPalindromo = (pali) => {

    const cleanstr = (s) => {
        return s
        .toLowerCase()
        .replace(/[^a-z]/g, '')
        
    }
    const checarPalindromo = (s) => {
        if(s.length <= 1){
            return true
        }
        if(s[0] !== s[s.length-1]){
            return false;
        }else{
            return checarPalindromo(s.slice(1, -1))
        }

    }
    const cleanedStr = cleanstr(pali)
    return(checarPalindromo(cleanedStr))
}

console.log(ehPalindromo("Socorram-me, subi no ônibus em marrocos!"))

// permutações 

const ndigitospermut = (n) => {
    if(n <= 0){
        return "Entrada Invalida"
    }
    const fat = (numero) => {
        if(numero === 0 || numero === 1){
            return 1
        }
        else{
            return numero * fat(numero-1)
        }
    }
    const valorfatorial = fat(n)
    const numeroDigitos = String(valorfatorial).length

    return numeroDigitos;

}
console.log(ndigitospermut(10))

//deslocamento bits a direita(shift right)

const desloca = (n, m) => {
    const baseTwo = (two) => {

    }
}



//testes ARRAY

const lista = [
{nome: 'Libidi', qtde: '4', preco: 16, fragil: true},
{nome: 'slova', qtde: '2', preco: 12, fragil: true},
{nome: 'sprite', qtde: '1', preco: 9, fragil: true}
]

//filter -- Filtração de atributo/ informação de uma lista EX:
const Listapreco = lista.filter(lista => (lista.preco > 10))

console.log(Listapreco)

//map // percorre e transforma arrays sem interferir no primario(imultavel)

const exibicao = lista.map(lista => '${lista.nome}' + 'preco' + '${lista.preco}');
console.log(exibicao)
//reduce ação de cascata

const totalvalor = lista.reduce((resultado, quantidade) => {
    return (resultado + quantidade.preco)
}) 

console.log(totalvalor)
