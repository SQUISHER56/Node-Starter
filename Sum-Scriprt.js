function sommma(a,b){
    return  a + b;
}

const num1 = parseFloat(process.argv[2])
const num2 = parseFloat(process.argv[3])

//------------------------------------------------------------
// Pocess: 
// In Node.js, process è un oggetto globale che fornisce informazioni 
// e controllo sul processo in esecuzione di Node.js. Con process, puoi accedere 
// a una serie di proprietà e metodi che ti permettono di interagire con l'ambiente 
// in cui il tuo script è in esecuzione.
//-------------------------------------------------------------
// Argv: 
// argv sta per "argument vector" e rappresenta un array che contiene gli argomenti 
// passati a Node.js al momento dell'esecuzione di uno script.
// Quando esegui un programma Node.js dalla riga di comando, puoi passare degli 
// argomenti che il programma può utilizzare. Questi argomenti vengono conservati in process.argv. 
//--------------------------------------------------------------
// ES:node .\Sum-Scriprt.js 12 23
//--------------------------------------------------------------

if(isNaN(num1) || isNaN(num2)){
    console.log("Inserisci dei numeri per favore");
}else{
    const risultato = sommma(num1,num2)
    console.log(`La somma dei numeri ${num1} e ${num2} è: ${risultato}!`);
    
}