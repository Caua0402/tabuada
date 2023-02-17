/********************************** 
 * Objetivo: Criar um app de tabuada
 * Autor: Cauã Felipe
 * Data: 13/02/2023
 * Versão: 1.0
 **********************************/

const calcularTabuada = function (minimoMultiplicador, maximoMultiplicador, minimoMultiplicando, maximoMultiplicando ){
    let miniMultiFixo = Number(minimoMultiplicador);
    let maxiMulti = Number(maximoMultiplicador);
    let valorMinMulti = Number(minimoMultiplicando);
    let valorMaxMulti = Number(maximoMultiplicando);
    let status = true;
    let resultado;

    if  ( isNaN ( valorMinMulti )  ||  isNaN ( valorMaxMulti )  ||  isNaN ( maximoMultiplicador )  ||  isNaN ( miniMultiFixo ) )  {
        estado  =  falso ;
    }  else  if  ( valorMinMulti  >  valorMaxMulti  ||  miniMultiFixo  >  maxiMulti )  {
        estado  =  falso ;
    }  else  if ( valorMinMulti  <  2  ||  valorMinMulti  >  100  ||  valorMaxMulti  <  2  ||  valorMaxMulti  >  100 ) {
        estado  =  falso ;
    }  else  if ( miniMultiFixo  <  1  ||  miniMultiFixo  >  50  ||  maxiMulti  <  1  ||  maxiMulti  >  50 ) {
        estado  =  falso ;
    } else {
        while (!(valorMin > valorMax)) {
            console.log('\n\nTabuada do ' + valorMin);
            let minMulti = Number(minMultiplicador);
            while (!(minMulti > maxMulti)) {
                resultado = valorMin * minMulti;
                console.log(valorMin + ' X ' + minMulti + ' = ' + resultado);
                minMulti++;
            }
            valorMin++;
        }
    }
    return status;
};

module.exports = {
    calcularTabuada
}