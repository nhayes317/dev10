function rollDice() {
	var dice1=Math.floor(Math.random()*6)+1;
	var dice2=Math.floor(Math.random()*6)+1;
	var totalDice=dice1+dice2;
  return totalDice;
}

function validate( ){
		if ( document.lucky.bet.value <= 0)
		{
			alert ( "Starting bet must be greater than 0!" );
			return false;
		}
}
		
function playGame() {
	var bet=document.getElementById("bet").value;
	var money=bet;
	var moneyTotal=[];
	var rollTally;
	var maxMoney;
	var maxRoll;
	
	validate();
	
	while (money > 0) {
		var totalDice= rollDice();
		console.log(rollDice());
		if (totalDice==7) {
			money+=4;
		}
		else {
			money--;
		}
		
		moneyTotal.push(money);
		
	}
	
	
	rollTally=moneyTotal.length;
	maxMoney=Math.max.apply(Math,moneyTotal);
	maxRoll=moneyTotal.indexOf(maxMoney);

	
	
	document.getElementById("results").style.display = "block";
	document.getElementById("submitButton").innerHTML = "Replay";
	document.getElementById("finalBet").innerHTML = "$" + bet;
	document.getElementById("rollTally").innerHTML = rollTally;
	document.getElementById("maxMoney").innerHTML = "$" + maxMoney;
	document.getElementById("maxRoll").innerHTML = maxRoll;
	
	return false;
}
