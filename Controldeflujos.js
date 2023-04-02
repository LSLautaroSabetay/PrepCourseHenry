function viajar (destino) {
    if(destino === "Brasil"){
        console.log("Gire a la IZQUIERDA");
    } else if(destino === 'Argentina') {
        console.log('Gire a la DERECHA');
    } else {
        console.log('Nos perdimos');
    }
}

viajar('Argentina');

// EJECMPLO CON OPERADORES DE COMPARACION

function puedeManejar (edad) {
    if(edad >= 18) {
        console.log(true);
    } else {
        console.log(false);
    }
}

puedeManejar(17)


//MATEMATICAS.POW : Este método nos permite potenciar un número
Math.pow(2,3);

//MATH.ROUND : redondeará el número decimal al entero más próximo
Math.round(0.49)

//MATH.FLOOR : redondeará el número decimal al entero de menor valor
Math.floor(5.93)

//MATH.CEIL : este método, al contrario que el anterior, redondeará un número al siguiente entero
Math.ceil(3.27)

//MATH.MAX : nos permitirán conocer el valor máximo de un conjunto de números
Math.max(1,2,3,4,5);

//Math.min : nos permitirán conocer el valor mínimo de un conjunto de números
Math.min(1,2,3,4,5);

//MATH.RANDOM : Este método nos permitirá generar un número aleatorio decimal entre el 0 y el 1
Math.random();
