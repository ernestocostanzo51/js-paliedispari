

let input = prompt("Inserisci la parola:");
let poli


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




