document.getElementById('player-calculate').addEventListener('click',function(){
 
    //get per player default const value
    const perPlayerCont = document.getElementById('per-player');
    const perPlayerContString = perPlayerCont.innerText;
    const perPlayerValue = parseInt(perPlayerContString)

    //Get input per player amount 
    const inputPlayerAmount = document.getElementById('player-field');
    const inputPlayerAmountString = inputPlayerAmount.value;
    const inputValue = parseInt(inputPlayerAmountString);
    //inputPlayerAmount.value = '';
 
    //Show total input playear cost 
    const showPlayer = document.getElementById('show-total');
    const showPlayerStirng = showPlayer.innerText;
    const showplayerValeu = parseInt(showPlayerStirng);

    const totalConst = perPlayerValue * inputValue;
    showPlayer.innerText = totalConst
})