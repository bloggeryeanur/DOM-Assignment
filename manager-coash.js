/* 
all player button = btn-select
per player const = per-player
inpur player amount field = player-field
player total cost = player-calculate
show total player cost = show-total
final calculate total btn = calculate-total
final calculate total cosnt show = show-final-cost
manager
coash
 */

document.getElementById('calculate-total').addEventListener('click', function () {

   //Mamnager
   const managetField = document.getElementById('manager');
   const managetString = managetField.value;
   const managet = parseInt(managetString);
  // managetField.value = '';

   //Coash 
   const coashField = document.getElementById('coash');
   const coashString = coashField.value;
   const coash = parseInt(coashString);
   // coashField.value = '';


   //Show all cost 
   const finalTotal = document.getElementById('show-final-cost');
   const finalTotalStirng = finalTotal.innerText;
   const finalt = parseInt(finalTotalStirng);

  // const managetAndCoashTotal = managet + coash;
//   finalTotal.innerText = managetAndCoashTotal;



   /////////Again playear //////////////////
   const perPlayerCont = document.getElementById('per-player');// default 100
   const perPlayerContString = perPlayerCont.innerText;
   const perPlayerValue = parseInt(perPlayerContString)

   //Get input per player amount 
   const inputPlayerAmount = document.getElementById('player-field');
   const inputPlayerAmountString = inputPlayerAmount.value;
   const inputValue = parseInt(inputPlayerAmountString);
   // inputPlayerAmount.value = '';

   //Show total final cost 

   const totalConst = perPlayerValue * inputValue;
   
   

   const managetAndCoashTotal = managet + coash + totalConst ;
   finalTotal.innerText = managetAndCoashTotal;





})

