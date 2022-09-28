const Min = 1;
const Max = 6;

function TirarDados(){

   const Dado1 = Math.round(Math.random() * (Max - Min)) + Min;
   const Dado2 = Math.round(Math.random() * (Max - Min)) + Min;

   const Suma = Dado1 + Dado2;

   console.log(Suma);
}

function SumarTiros(){
   let Dos = 0; 
   let Tres = 0;
   let Cuatro = 0;
   let Cinco = 0;
   let Seis = 0;
   let Siete = 0;
   let Ocho = 0; 
   let Nueve = 0;
   let Diez = 0;
   let Once = 0;
   let Doce = 0;

   for(let i=1; i<=20; i++){
       const Dado1 = Math.round(Math.random() * (Max - Min)) + Min;
       const Dado2 = Math.round(Math.random() * (Max - Min)) + Min;

       const Suma = Dado1 + Dado2;
       switch(Suma){
           case 1:Dos++; break;
           case 2:Tres++; break;
           case 3:Cuatro++; break;
           case 4:Cinco++; break;
           case 5:Seis++; break;
           case 6:Siete++; break;
           case 7:Ocho++; break;
           case 8:Nueve++; break;
           case 9:Diez++; break;
           case 10:Once++; break;
           case 11:Doce++; break;
       }
   }

   const Resultados = ["2:", Dos, "3:", Tres, "4:", Cuatro, "5:", Cinco, "6:", Seis, "7:", Siete, "8:", Ocho, "9:", Nueve, "10:", Diez, "11:", Once, "12:", Doce];
   console.log(Resultados);
}

module.exports = TirarDados;
module.exports = SumarTiros;