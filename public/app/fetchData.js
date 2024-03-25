const rpcEndpoint = 'https://avalanche-mainnet.s.chainbase.online/v1/2ctNBmfKfyF4HgugICVvYRlGA0V/ext/bc/C/rpc';


const network_id = 43114;
const token_addr = '0x4c9dD74459AeA876Bc34b323c780D77b79fAD29F';
const token_abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"InvalidOwner","type":"error"},{"inputs":[],"name":"Unauthorized","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"bool","name":"status","type":"bool"}],"name":"AccountExcludeFromFee","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"pair","type":"address"},{"indexed":false,"internalType":"bool","name":"value","type":"bool"}],"name":"AutomatedMarketMakerPairUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"SwapTokensAmountUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"btcDotB","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"distributionEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"distributorAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"distributorGas","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"bool","name":"status","type":"bool"}],"name":"excludeFromFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isAutomatedMarketMakerPairs","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isExcludedFromFee","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"joePair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"joeRouter","outputs":[{"internalType":"contract IJoeRouter","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"leftOverBurnt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"liquidityTokensSent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"reflectionFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"reflectionsEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"revokeOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"pair","type":"address"},{"internalType":"bool","name":"value","type":"bool"}],"name":"setAutomatedMarketMakerPair","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"minPeriod","type":"uint256"},{"internalType":"uint256","name":"minDistribution","type":"uint256"}],"name":"setDistributionCriteria","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"status","type":"bool"}],"name":"setDistributionStatus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"gas","type":"uint256"}],"name":"setDistributorGas","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"holder","type":"address"},{"internalType":"bool","name":"status","type":"bool"}],"name":"setIsDividendExempt","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"setSwapTokensAtAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"swapTokensAtAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"taxesFeeTotal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}];
const distr_addr = '0x3bb9d750C7810544efF42805080C892f25AE5792';
const distr_abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"minPeriod","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"minDistribution","type":"uint256"}],"name":"DistributionCriteriaUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"NewFundDeposit","type":"event"},{"inputs":[],"name":"claimReflection","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"dividendsPerShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"dividendsPerShareAccuracyFactor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"shareholder","type":"address"}],"name":"getUnpaidEarnings","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minDistribution","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minPeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"gas","type":"uint256"}],"name":"process","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_minPeriod","type":"uint256"},{"internalType":"uint256","name":"_minDistribution","type":"uint256"}],"name":"setDistributionCriteria","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"shareholder","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"setShare","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"shareholderClaims","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"shareholderIndexes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"shares","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"totalExcluded","type":"uint256"},{"internalType":"uint256","name":"totalRealised","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalDistributed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalDividends","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalShares","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}];
const btcb_token_addr = '0x152b9d0FdC40C096757F570A51E494bd4b943E50';
let machOneCurrentPrice = localStorage.getItem('prevPrice');
let btcBCurrentPrice = localStorage.getItem('prevBtcBPrice');
let isDefault = true;
let data = {};

async function fetchDataFromAvalanche() {
    // Add logic to fetch data from the Avalanche C-Chain
    // For example, use the fetch API or other relevant methods
    // ...
	const web3 = new Web3(new Web3.providers.HttpProvider(rpcEndpoint));
	
	let address = document.getElementById("addressInput").value;
	data = fetchHoldersData(address)	
	data['holders'] = await fetchHoldersData();
	data['distrRewards'] = await fetchRewardsData(web3);
	data['liqData'] = await fetchLiquidityData();
	data['btcData'] = await fetchBtcLiquidityData();
	data['burned'] = await fetchBurnedTokenData();
	
    // Update the stats container with the fetched data
    updateStats(true);
}

function updateHolders(){
	const holdersStatElement = document.getElementById('holders-stat');
	// Check if data['holders'] is null or undefined
	holdersStatElement.innerHTML = data['holders'] !== null && data['holders'] !== undefined
		? formatNumber(data['holders'],0)
		: "###";
}
function updateSupply(){
	const supplyElement = document.getElementById('supply-stat');
	// Check if data['burned'] is null or undefined or 0 (data failed to fetch)
	supplyElement.innerHTML = data['burned'] !== null && data['burned'] !== undefined && data['burned'] !== 0
		? '10M / ' + formatNumber(addDecimal(data['burned'],24),2) + 'M'
		: '10M / 0.53M';
}
function updateBalance(){
	const balanceElement = document.getElementById("holder-balance-stat");
    // Check if data['balanceOf'] is null or undefined
    balanceElement.innerHTML = data['balanceOf'] !== null && data['balanceOf'] !== undefined
        ? Number(formatNumber(+addDecimal(data['balanceOf'], 18))).toLocaleString()
        : "###";
}
function updateDistributedRewards(switchState){
	btcBCurrentPrice = data['btcData'].pairs[0].priceUsd;
	localStorage.setItem('prevBtcBPrice', btcBCurrentPrice);
	const distrRewardsLabelElement = document.getElementById('distrRewards-label');
	const distrRewardsStatElement = document.getElementById('distrRewards-stat');
	if (isDefault || !switchState){
		distrRewardsLabelElement.innerHTML = 'Total Rewards (₿)';
		// Check if data['distrRewards'] is null or undefined
		distrRewardsStatElement.innerHTML = data['distrRewards'] !== null && data['distrRewards'] !== undefined
			? addDecimal(data['distrRewards'].toString(), 8) + ' Btc.b'
			: '#.######## Btc.b';
	} else {
		//$
		distrRewardsLabelElement.innerHTML = 'Total Rewards ($)';
		distrRewardsStatElement.innerHTML = data['distrRewards'] !== null && data['distrRewards'] !== undefined
			? '$' + formatNumber(parseFloat(parseFloat(addDecimal(data['distrRewards'].toString(), 8)) * parseFloat(btcBCurrentPrice)),2)
			: '$###.##';
	}
}
function updatePrice(switchState){
	machOneCurrentPrice = data['liqData'].pairs[0].priceUsd;
	localStorage.setItem('prevPrice', machOneCurrentPrice);
	btcBCurrentPrice = data['btcData'].pairs[0].priceUsd;
	localStorage.setItem('prevBtcBPrice', btcBCurrentPrice);
	const priceLabelElement = document.getElementById('price-label');
	const priceStatElement = document.getElementById('price-stat');
	if (isDefault || switchState){
		priceLabelElement.innerHTML = 'Price ($)';
		priceStatElement.innerHTML = '$' + machOneCurrentPrice.toString();
	} else {
		//₿
		priceLabelElement.innerHTML = 'Price (₿)';
		priceStatElement.innerHTML =  '₿' + formatNumber(parseFloat(machOneCurrentPrice)/parseFloat(btcBCurrentPrice),8);
		
	}
}
function updateVolume(switchState){
	volume = data['liqData'].pairs[0].volume.h24;
	localStorage.setItem('prevVol', volume);
	btcBCurrentPrice = data['btcData'].pairs[0].priceUsd;
	localStorage.getItem('prevBtcBPrice', btcBCurrentPrice);
	const volumeLabelElement = document.getElementById('24h-volume-label');
	const volumeStatElement = document.getElementById('24h-volume-stat');
	if (isDefault || switchState){
		volumeLabelElement.innerHTML = '24H Volume ($)';
		if (volume == 0){
			volumeStatElement.innerHTML = ':(';
		} else {
			volumeStatElement.innerHTML = '$' + formatNumber(volume,2);
		}
	} else {
		//₿
		volumeLabelElement.innerHTML = '24H Volume (₿)';
		if (volume == 0){
			volumeStatElement.innerHTML = ':(';
		} else {
			volumeStatElement.innerHTML = '₿' + formatNumber(volume/parseFloat(btcBCurrentPrice),8);
		}
	}
}
function updateValue(switchState) {
	const valueLabelElement = document.getElementById('holder-value-label');
	const valueElement = document.getElementById("holder-value-stat");
	btcBCurrentPrice = data['btcData'].pairs[0].priceUsd;
	localStorage.setItem('prevBtcBPrice', btcBCurrentPrice);
	if (isDefault || switchState){
		valueLabelElement.innerHTML = 'Value ($)';
		// Check if data['balanceOf'] is null or undefined
		valueElement.innerHTML = data['balanceOf'] !== null && data['balanceOf'] !== undefined
        ? '$' + formatNumber(parseFloat(addDecimal(data['balanceOf'],18)) * parseFloat(machOneCurrentPrice))
        : "###";
	} else {
		//₿
		valueLabelElement.innerHTML = '$MACH1 Value (₿)';
		// Check if data['balanceOf'] is null or undefined
		valueElement.innerHTML = data['balanceOf'] !== null && data['balanceOf'] !== undefined
        ? '₿' + formatNumber((parseFloat(addDecimal(data['balanceOf'],18)) * parseFloat(machOneCurrentPrice))/parseFloat(btcBCurrentPrice),8)
        : "###";
		
	}
}

function updateTotalRewards(switchState) {
	btcBCurrentPrice = data['btcData'].pairs[0].priceUsd;
	localStorage.getItem('prevBtcBPrice', btcBCurrentPrice);
	const cumRewardsLabelElement = document.getElementById('holder-cumm-rewards-label');
	const cumRewardsStatElement = document.getElementById('holder-cumm-rewards-stat');
	if (isDefault || !switchState){
		cumRewardsLabelElement.innerHTML = 'Total Rewards (₿)';
		// Check if data['cummRewards'] is null or undefined
		cumRewardsStatElement.innerHTML = data['cummRewards'] !== null && data['cummRewards'] !== undefined
			? addDecimal(data['cummRewards'].toString(), 8) + ' Btc.b'
			: '#.######## Btc.b';
	} else {
		//$
		cumRewardsLabelElement.innerHTML = 'Total Rewards ($)';
		cumRewardsStatElement.innerHTML = data['cummRewards'] !== null && data['cummRewards'] !== undefined
			? '$' + formatNumber(parseFloat(addDecimal(data['cummRewards'].toString(), 8)) * parseFloat(btcBCurrentPrice))
			: '$###.##';
	}
}

function updateUnpaidRewards(switchState) {
	btcBCurrentPrice = data['btcData'].pairs[0].priceUsd;
	localStorage.setItem('prevBtcBPrice', btcBCurrentPrice);
	const unclaimedRewardsStatElement = document.getElementById("unclaimed-reward-container");
	if (data['unclaimRewards'] == 0) {
		unclaimedRewardsStatElement.style.display = "none";
	} else {
		unclaimedRewardsStatElement.style.display = "flex";
	}
	const unclaimRewardsLabelElement = document.getElementById('holder-unclaimed-rewards-label');
	const unclaimRewardsStatElement = document.getElementById('holder-unclaimed-rewards-stat');
	
	if (isDefault || !switchState){
		unclaimRewardsLabelElement.innerHTML = 'Unclaimed Rewards (₿)';
		// Check if data['unclaimRewards'] is null or undefined	
		unclaimRewardsStatElement.innerHTML = data['unclaimRewards'] !== null && data['unclaimRewards'] !== undefined
			? addDecimal(data['unclaimRewards'].toString(), 8) + ' Btc.b'
			:  '#.######## Btc.b';
	} else {
		//$
		unclaimRewardsLabelElement.innerHTML = 'Unclaimed Rewards ($)';
		unclaimRewardsStatElement.innerHTML = data['unclaimRewards'] !== null && data['unclaimRewards'] !== undefined
			? '$' + formatNumber(parseFloat(addDecimal(data['unclaimRewards'].toString(), 8)) * parseFloat(btcBCurrentPrice), 8)
			: '$###.##';
	}
}

function updateStats(holders=false) {
	const switchState = document.getElementById('denominationSwitch').checked;
	updateHolders();
	updateSupply();
	updateDistributedRewards(switchState);
	updatePrice(switchState);
	updateVolume(switchState);
	if(holders){
		updateBalance();
		updateValue(switchState);
		updateTotalRewards(switchState);
		updateUnpaidRewards(switchState);
	}
}

async function fetchHoldersData() {
	
	const options = {method: 'GET', headers: {accept: 'application/json', 'x-api-key': '2ctNBmfKfyF4HgugICVvYRlGA0V'}};
	
	try{
		const response = await fetch(`https://api.chainbase.online/v1/token/holders?chain_id=${network_id}&contract_address=${token_addr}&page=1&limit=1`, options);
		const data = await response.json();
		console.log('Holder data from token contract:', data.count);
		return data.count;
	} catch (error) {
		console.error(error);
		return null;
	}
	
}

async function fetchRewardsData(web3) {
	
	const distributorContract = new web3.eth.Contract(distr_abi, distr_addr);
	
	try {
		const result = await distributorContract.methods.totalDistributed().call();
		console.log('Rewards data from distributor contract:', result);
		return result;
	} catch (error) {
		console.error('Error fetching rewards data:', error);
		throw error;
	}
}

async function fetchLiquidityData() {
	try {
		const response = await fetch(`https://api.dexscreener.com/latest/dex/tokens/${token_addr}`);
		const data = await response.json();
		console.log('Liquidity data from Mach1 lp contract:', data);
		return data;
	} catch (error){
		console.error('Error fetching Mach1 liquidity data:', error);
		throw error;
	}
}

async function fetchBtcLiquidityData() {
	try {
		const response = await fetch(`https://api.dexscreener.com/latest/dex/tokens/${btcb_token_addr}`);
		const data = await response.json();
		console.log('Liquidity data from Btc.b lp contract:', data);
		return data;
	} catch (error){
		console.error('Error fetching Btc.b liquidity data:', error);
		throw error;
	}
}

async function fetchBurnedTokenData() {
	const web3 = new Web3(new Web3.providers.HttpProvider(rpcEndpoint));
	const tokenContract = new web3.eth.Contract(token_abi, token_addr);
	burned = 0;
	try {
		const dead = await tokenContract.methods.balanceOf('0x000000000000000000000000000000000000dEaD').call();
		const zero = await tokenContract.methods.balanceOf('0x0000000000000000000000000000000000000000').call();
		const total = dead + zero;
		console.log('Burned token data from token contract:', total);
		return total;
	} catch (error){
		console.error('Error fetching burned token data:', error);
		throw error;
	}
	return burned;
}

async function fetchHolderStats(address){
	const web3 = new Web3(new Web3.providers.HttpProvider(rpcEndpoint));
	const tokenContract = new web3.eth.Contract(token_abi, token_addr);
	const distributorContract = new web3.eth.Contract(distr_abi, distr_addr);
	data['btcData'] = await fetchBtcLiquidityData();
	try{
		data['balanceOf'] = await tokenContract.methods.balanceOf(address).call();
		console.log('Holders balance from token contract:', data['balanceOf']);
	} catch (error){
		console.error('Error fetching holder\'s balance:', error);
		throw error;
	}
	try{
		data['unclaimRewards'] = await distributorContract.methods.getUnpaidEarnings(address).call();
		console.log('Holders unclaimed balance from distributor contract:', data['unclaimRewards']);
		try{
			const shares = await distributorContract.methods.shares(address).call();
			const realizedRewards = shares.totalRealised;
			
			data['cummRewards'] = data['unclaimRewards'] + realizedRewards;
			console.log('Holders reward balance from distributor contract:', data['cummRewards']);
		} catch (error) {
			console.error('Error fetching holder\'s cummulative rewards:', error);
			throw error;
		}
	} catch (error) {
		console.error('Error fetching holder\'s unclaimed rewards:', error);
		throw error;
	}
	
	updateStats(true);
	return data
}

function updateHolderStats(data){

	updateBalance(data);
		
	const cummRewardsElement = document.getElementById("holder-cumm-rewards-stat");

    // Check if data['cummRewards'] is null or undefined
    cummRewardsElement.innerHTML = data['cummRewards'] !== null && data['cummRewards'] !== undefined
        ? addDecimal(data['cummRewards'].toString(), 8) + ' Btc.b'
        :  '#.######## Btc.b';
		
	const unclaimedRewardsElement = document.getElementById("holder-unclaimed-rewards-stat");

    // Check if data['unclaimRewards'] is null or undefined	
    unclaimedRewardsElement.innerHTML = data['unclaimRewards'] !== null && data['unclaimRewards'] !== undefined
        ? addDecimal(data['unclaimRewards'].toString(), 8) + ' Btc.b'
        :  '#.######## Btc.b';
	if (data['unclaimRewards'] == 0) {
		const unclaimedRewardsStatElement = document.getElementById("unclaimed-reward-container");
		unclaimedRewardsStatElement.style.display = "none";
	}
}	


//UTIL
//this shit is literally probably the stupidest way to do this, idc lol
function addDecimal(stringValue, decimalPlaces) {
  const parts = String(stringValue).split('');
  let length = parts.length;
  // Calculate the position of the decimal point
  const decimalIndex = length - decimalPlaces;
  
  if (decimalIndex == 0) { 
	parts.unshift('.');
	parts.unshift(0);
	return parts.join('');
  }
  
  if (decimalIndex < 0 ) {
	let i = decimalIndex;
	while(i != 0 ){
		parts.unshift(0);
		i++;
	}
	parts.unshift('.');
	parts.unshift(0);

  } else {
	  // Insert the decimal point at the appropriate position
	  parts.splice(decimalIndex, 0, '.');
  }
  return parts.join('');
}

function formatNumber(number, decimalPlaces = 2) {
  // Ensure the input is a valid number
  if (isNaN(number)) {
    return "Invalid Number";
  }

  // Round the number to the specified decimal places
  const roundedNumber = Number(number).toFixed(decimalPlaces);

  // Add commas for thousands separator
  const formattedNumber = roundedNumber.toLocaleString();

  return formattedNumber;
}

function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

// Trigger the data fetching when the DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    fetchDataFromAvalanche();
	
	// Check if the address is stored in localStorage
    const cachedAddress = localStorage.getItem('userAddress');
	const urlTarget = getParameterByName('target');
	if (cachedAddress && urlTarget == null) {
        document.getElementById('addressInput').value = cachedAddress;
		validateAndUpdateHeader();
    } else if (urlTarget != ''){
		document.getElementById('addressInput').value = urlTarget;
		validateAndUpdateHeader();
		if(cachedAddress == null) {
			localStorage.setItem('userAddress', urlTarget);
		}
	}
	
	const unit = getParameterByName('unit');
	if (unit != null) {
		if ( unit == 'BTC') {
			selectBitcoin();
		} else if ( unit == 'USD') {
			selectDollar();
		}
	}
	
	const addressInput = document.getElementById('addressInput');

    // Automatically select all text when the input gets focus
    addressInput.addEventListener('focus', function () {
        this.select();
    });
	
});


