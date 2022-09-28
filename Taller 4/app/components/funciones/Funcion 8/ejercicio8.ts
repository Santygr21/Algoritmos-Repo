let ideas : string[] = ["nice", "nice", "nice", "malarda"]

 function Calificador() { 
    let counter = 0;
    let i = 0;
    
    while ((i = ideas.indexOf("nice", i) + 1) > 0) {
        counter++;
        }   if(counter === 0){console.log("Falló")}
            if(counter === 1 || counter === 2){console.log("Publicar")}
            if(counter > 2){console.log("Fantástico")}
 } 

 module.exports = Calificador;
