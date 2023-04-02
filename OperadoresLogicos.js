// AND
function mayorYMenorYPar(num){
    if(num > 5 && num < 10)console.log (true);
    else console.log(false);
};

function mayorYMenorYPar(num) {
	if( num > 5 && num < 10 && número % 2 === 0 ) console.log(true);
	else console.log(false);
};

//OR
function operadorOr(str) {
   if (str === 'Henry' || str.length < 2) console.log(true);
   else console.log(false);
};

//NOT
function negacion(permiso){
    if (permiso) console.log ('Tiene permiso');
};

negacion(true)

// NEGACION
function negacion(permiso){
    if (!permiso) console.log ('Tiene permiso');
};

negacion(false)

//CONDICION COMPLEJA

function condicionCompleja(num){
    if(num > 9 && num  % 2 === 0 || num ===3) console.log(true);
    else console.log(false);
};

condicionCompleja(10);
condicionCompleja(6);
condicionCompleja(3);
condicionCompleja(5);