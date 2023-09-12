// achar elemento lista

const listaUm = ['Edu','Bia','Marcela','Pedro','Joao']
const ListaDois = ['Joaquim', 'Edu', 'Felipe', 'Diogenes']
const tamanho = listaUm.length -1
const tamanhoPenul = listaUm.length -2

console.log(listaUm[tamanho])
console.log(listaUm[tamanhoPenul])

// indicar quantos itens tem em uma lista

const lista = ['A', 'E', 'i','O']

const tamanholista = lista => {
    const n = 0
    if (lista.length === 0){
        return 0
    }else{
        lista.shift();
        return 1 + tamanholista(lista)
    }
}

console.log(tamanholista(lista))

//interseção entre duas listas -- uso do filter

const ElementosComum = listaUm.filter(i => ListaDois.includes(i))
console.log(ElementosComum)

const listaNum = [2,5,3,7,2,1,4]

// alg QUICKSORT 
const quicksort = listaNum => {
if(listaNum.length === 0) return []
if(listaNum.length === 1) return listaNum

const pivo = listaNum[0]
const cabecaQui =  listaNum.slice(1).filter(x => x <= pivo);
const calda = listaNum.slice(1).filter(x => x > pivo);
return [...quicksort(cabecaQui), pivo, ...quicksort(calda)];

}
console.log(quicksort(listaNum))


const altaordem = (arr, func) => {
    if(arr.length === 0){
        return []
    }else{
        const primeiroElemento = arr[0]
        const resultadoParcial = [func(primeiroElemento)]
        const restante = arr.slice(1)
        return resultadoParcial.concat(altaordem(restante, func))
    }
}
const dobro = (numero) => {
    return numero*2
}

console.log(altaordem(listaNum, dobro))