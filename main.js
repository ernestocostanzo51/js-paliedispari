

let input = prompt("Inserisci la parola:");



function inversione(str) {
    let parola_rev = "";
    
    
    for (let i = str.length - 1; i >= 0; i--) {
        parola_rev += str[i];
    }
    
    return parola_rev;
}

function polindromo(originale, invertito){
    if(originale===invertito){
        return "la parola è polindroma"
    }
    else{
        return "la parola non è polindroma"
    }
}

let parola_rev = inversione(input);
let messaggioPalindromo = polindromo(input, parola_rev);

console.log(parola_rev)
console.log(messaggioPalindromo)


// secondo esercizio

function numeroRandom(){
    return Math.floor(Math.random() * 5) + 1
}

function sum(x,y){
    return Number(x)+Number(y)
}

function pair(n){
    if(n % 2===0){
        return "vince il pari"

    }
    else{
        return "vince il dispari"
    }

}



let somma
let risultato
let numeroG1 = prompt("scegli un numero")
console.log("il numero scelto dal giocatore uno è:", numeroG1)


let numeroG2 = numeroRandom()
console.log("il numero scelto da giocatore numero due è", numeroG2)

somma= sum(numeroG1 , numeroG2)
console.log("la somma dei due numeri è", somma);

risultato =pair(somma)
console.log(risultato)









