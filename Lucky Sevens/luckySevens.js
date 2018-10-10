function playGame() {
	var bet=document.getElementById("bet").value;
	var money=bet;
	var dice1=Math.floor(Math.random()*6)+1;
	var dice2=Math.floor(Math.random()*6)+1;
	var totalDice=dice1+dice2;
	var moneyTotal=[];
	var rollTally;
	var maxMoney;
	var maxRoll;
	var dice1;
	var dice2;
	
	while (money > 0) {
		if (totalDice==7) {
			money+=4;
		}
		else {
			money--;
		}
		moneyTotal.push(money);
		dice1=Math.floor(Math.random()*6)+1;
		dice2=Math.floor(Math.random()*6)+1;
		
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
