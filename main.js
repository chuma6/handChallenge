//Instrucciones: https://github.com/jesus-seijas-sp/hand-challenge
//Autor : Ismail Cherfaoui

const hello = "👇🤜👇👇👇👇👇👇👇👉👆👈🤛👉👇👊👇🤜👇👉👆👆👆👆👆👈🤛👉👆👆👊👆👆👆👆👆👆👆👊👊👆👆👆👊";
const helloWorld = "👉👆👆👆👆👆👆👆👆🤜👇👈👆👆👆👆👆👆👆👆👆👉🤛👈👊👉👉👆👉👇🤜👆🤛👆👆👉👆👆👉👆👆👆🤜👉🤜👇👉👆👆👆👈👈👆👆👆👉🤛👈👈🤛👉👇👇👇👇👇👊👉👇👉👆👆👆👊👊👆👆👆👊👉👇👊👈👈👆🤜👉🤜👆👉👆🤛👉👉🤛👈👇👇👇👇👇👇👇👇👇👇👇👇👇👇👊👉👉👊👆👆👆👊👇👇👇👇👇👇👊👇👇👇👇👇👇👇👇👊👉👆👊👉👆👊";

const arrayHello = Array.from(hello);
const arrayHelloWorld = Array.from(helloWorld);

let memory = [0];
let pointer = 0;

decodificar(arrayHelloWorld);

function decodificar(array){
    for(let i = 0; i<array.length; i++){
        if(array[i] == "👉"){
            memory.push(0);
            pointer++;
        }else if(array[i] == "👈"){
            pointer--;
        }else if(array[i] == "👆"){
            memory[pointer] = incrementar(memory[pointer]);
        }else if(array[i] == "👇"){
            memory[pointer] = decrementar(memory[pointer]);
        }else if(array[i] == "👊"){
            console.log(String.fromCharCode(memory[pointer]));
        }else if(array[i] == "🤜" && memory[pointer] == 0){
            i = derecho(i,array);
        }else if(array[i] == "🤛" && memory[pointer] != 0){
            i = izquierda(i, array);
        }
    }
}

function derecho (i, array){
    let contador = 0;
    for( let z = (i); z < array.length; z++){
        if(array[z] == "🤜"){
            contador++;
        }else if(array[z] == "🤛"){
            if(contador == 1){
                return z;
            }else{
                contador--;
            }
        }
    }
}
function izquierda(i, array){
    let contador = 0;
    for(let z = (i); z >= 0; z--){
        if(array[z] == "🤛"){
            contador++;
        }else if(array[z] == "🤜"){
            if(contador == 1){
                return z;
            }else{
                contador--;
            }
        }
    }
}

function incrementar (num){
    if(num == 255){
        return 0;
    }else {
        return (num + 1);
    }
}

function decrementar (num){
    if(num == 0){
        return 255
    }else {
        return (num - 1);
    }
}