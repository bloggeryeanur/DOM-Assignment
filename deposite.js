/* 
previous amount = deposite-total
withdraw amount = withdraw-total
previous Balance total amount = balace-total

get deposite field = deposite-field
deposite button = btn-deposte

get withdraw field = withdrwa-filed
withdrea button = btn-withdraw

*/

document.getElementById('btn-deposte').addEventListener('click',function(){

    const depositeField = document.getElementById('deposite-field');
    const depositeAmountString = depositeField.value;
    const depositeAmount = parseFloat(depositeAmountString)

    depositeField.value = '';

    const previousAmount = document.getElementById('deposite-total');
    const allAmountString = previousAmount.innerText;
    const allAmount = parseFloat(allAmountString)

    const setAmount = allAmount + depositeAmount;
    previousAmount.innerText = setAmount;

    //Balance Total Set
    const previousBalance = document.getElementById('balace-total');
    const previousBalanceValue = previousBalance.innerText;
    const previousBalanceNow = parseFloat(previousBalanceValue);
   
    const addBalance = previousBalanceNow + depositeAmount;
    previousBalance.innerText = addBalance


    
    
})