function selectDollar() {
	console.log('dollar');
	document.getElementById("dollar-label").style.backgroundColor = "#4CAF50";
	document.getElementById("bitcoin-label").style.backgroundColor = "#ccc";
	document.getElementById('denominationSwitch').checked = true;
	isDefault = false;
	updateStats(true);
}

function selectBitcoin() {
	console.log('btc');
	document.getElementById("bitcoin-label").style.backgroundColor = "#FF6500";
	document.getElementById("dollar-label").style.backgroundColor = "#ccc";
	document.getElementById('denominationSwitch').checked = false;
	isDefault = false;
	updateStats(true);
}

function resetToDefault(event) {
	console.log('reset');
	event.preventDefault();
	document.getElementById("bitcoin-label").style.backgroundColor = "#FF6500";
	document.getElementById("dollar-label").style.backgroundColor = "#4CAF50";
	isDefault = true;
	updateStats(true);
}




