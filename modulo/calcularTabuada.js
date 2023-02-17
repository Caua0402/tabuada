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
        status  =  false;
    }  else  if  ( valorMinMulti  >  valorMaxMulti  ||  miniMultiFixo  >  maxiMulti )  {
        status  =  false ;
    }  else  if ( valorMinMulti  <  2  ||  valorMinMulti  >  100  ||  valorMaxMulti  <  2  ||  valorMaxMulti  >  100 ) {
        status  =  false ;
    }  else  if ( miniMultiFixo  <  1  ||  miniMultiFixo  >  50  ||  maxiMulti  <  1  ||  maxiMulti  >  50 ) {
        status  =  false ;
    } else {
        while (!(valorMinMulti > valorMaxMulti)) {
            console.log('\n\nTabuada do ' + valorMinMulti);
            let minMulti = Number(minimoMultiplicador);
            while (!(minMulti > maxiMulti)) {
                resultado = valorMinMulti * minMulti;
                console.log(valorMinMulti + ' X ' + minMulti + ' = ' + resultado);
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