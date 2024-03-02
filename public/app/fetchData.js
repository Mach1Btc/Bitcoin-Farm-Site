const rpcEndpoint = 'https://avalanche-mainnet.s.chainbase.online/v1/2ctNBmfKfyF4HgugICVvYRlGA0V/ext/bc/C/rpc';


const network_id = 43114;
const token_addr = '0x4c9dD74459AeA876Bc34b323c780D77b79fAD29F';
const token_abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"InvalidOwner","type":"error"},{"inputs":[],"name":"Unauthorized","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"bool","name":"status","type":"bool"}],"name":"AccountExcludeFromFee","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"pair","type":"address"},{"indexed":false,"internalType":"bool","name":"value","type":"bool"}],"name":"AutomatedMarketMakerPairUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"SwapTokensAmountUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"btcDotB","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"distributionEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"distributorAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"distributorGas","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"bool","name":"status","type":"bool"}],"name":"excludeFromFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isAutomatedMarketMakerPairs","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isExcludedFromFee","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"joePair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"joeRouter","outputs":[{"internalType":"contract IJoeRouter","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"leftOverBurnt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"liquidityTokensSent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"reflectionFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"reflectionsEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"revokeOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"pair","type":"address"},{"internalType":"bool","name":"value","type":"bool"}],"name":"setAutomatedMarketMakerPair","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"minPeriod","type":"uint256"},{"internalType":"uint256","name":"minDistribution","type":"uint256"}],"name":"setDistributionCriteria","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"status","type":"bool"}],"name":"setDistributionStatus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"gas","type":"uint256"}],"name":"setDistributorGas","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"holder","type":"address"},{"internalType":"bool","name":"status","type":"bool"}],"name":"setIsDividendExempt","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"setSwapTokensAtAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"swapTokensAtAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"taxesFeeTotal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}];
const distr_addr = '0x3bb9d750C7810544efF42805080C892f25AE5792';
const distr_abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"minPeriod","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"minDistribution","type":"uint256"}],"name":"DistributionCriteriaUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"NewFundDeposit","type":"event"},{"inputs":[],"name":"claimReflection","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"dividendsPerShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"dividendsPerShareAccuracyFactor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"shareholder","type":"address"}],"name":"getUnpaidEarnings","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minDistribution","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minPeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"gas","type":"uint256"}],"name":"process","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_minPeriod","type":"uint256"},{"internalType":"uint256","name":"_minDistribution","type":"uint256"}],"name":"setDistributionCriteria","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"shareholder","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"setShare","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"shareholderClaims","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"shareholderIndexes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"shares","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"totalExcluded","type":"uint256"},{"internalType":"uint256","name":"totalRealised","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalDistributed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalDividends","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalShares","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}];

var currentPrice = localStorage.getItem('prevPrice');


async function fetchDataFromAvalanche() {
    // Add logic to fetch data from the Avalanche C-Chain
    // For example, use the fetch API or other relevant methods
    // ...
	let data= {};
	const web3 = new Web3(new Web3.providers.HttpProvider(rpcEndpoint));
	
	
	
	data['holders'] = await fetchHoldersData();
	data['distrRewards'] = await fetchRewardsData(web3);
	data['liqData'] = await fetchLiquidityData();
	
    // Update the stats container with the fetched data
    updateStats(data);
}

function updateStats(data) {
    const holdersStatElement = document.getElementById("holders-stat");

    // Check if data['holders'] is null or undefined
    holdersStatElement.innerHTML = data['holders'] !== null && data['holders'] !== undefined
        ? data['holders']
        : "###";
	
	const distrRewardsElement = document.getElementById("distrRewards-stat");
	
	// Check if data['distrRewards'] is null or undefined
    distrRewardsElement.innerHTML = data['distrRewards'] !== null && data['distrRewards'] !== undefined
        ? formatWithDecimal(data['distrRewards'].toString(), 8) + ' Btc.b'
        : '#.######## Btc.b';
		
	const priceStatElement = document.getElementById("price-stat");
	currentPrice = data['liqData'].pairs[0].priceUsd;
	priceStatElement.innerHTML = '$' + currentPrice.toString();
	localStorage.setItem('prevPrice', currentPrice);
	
}

async function fetchHoldersData() {
	
	const options = {method: 'GET', headers: {accept: 'application/json', 'x-api-key': '2ctNBmfKfyF4HgugICVvYRlGA0V'}};
	
	try{
		const response = await fetch(`https://api.chainbase.online/v1/token/holders?chain_id=${network_id}&contract_address=${token_addr}&page=1&limit=1`, options);
		const data = await response.json();
		console.log('Holder data from smart contract:', data.count);
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
		console.log('Rewards data from smart contract:', result);
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
		console.log('Liquidity data from smart contract:', data);
		return data;
	} catch (error){
		console.error('Error fetching liquidity data:', error);
		throw error;
	}
}

async function fetchHolderStats(address){
	let data= {};
	const web3 = new Web3(new Web3.providers.HttpProvider(rpcEndpoint));
	const tokenContract = new web3.eth.Contract(token_abi, token_addr);
	const distributorContract = new web3.eth.Contract(distr_abi, distr_addr);
	try{
		data['balanceOf'] = await tokenContract.methods.balanceOf(address).call();
	} catch (error){
		console.error('Error fetching holder\'s balance:', error);
		throw error;
	}
	try{
		const divPerShare = await distributorContract.methods.dividendsPerShare().call();
		const shareAcc = await distributorContract.methods.dividendsPerShareAccuracyFactor().call();
		const shares = await distributorContract.methods.shares(address).call();
		const amount = shares.amount;
		
		data['cummRewards'] = amount * divPerShare / shareAcc;
	} catch (error) {
		console.error('Error fetching holder\'s cummulative rewards:', error);
		throw error;
	}
	try{
		data['unclaimRewards'] = await distributorContract.methods.getUnpaidEarnings(address).call();
	} catch (error) {
		console.error('Error fetching holder\'s unclaimed rewards:', error);
		throw error;
	}
	
	updateHolderStats(data);
}

function updateHolderStats(data){
	const balanceElement = document.getElementById("holder-balance-stat");

    // Check if data['balanceOf'] is null or undefined
    balanceElement.innerHTML = data['balanceOf'] !== null && data['balanceOf'] !== undefined
        ? truncateNafterDecimal(formatWithDecimal(data['balanceOf'],18),2)
        : "###";

	const valueElement = document.getElementById("holder-value-stat");

    // Check if data['balanceOf'] is null or undefined
    valueElement.innerHTML = data['balanceOf'] !== null && data['balanceOf'] !== undefined
        ? '$' + truncateNafterDecimal(parseFloat(formatWithDecimal(data['balanceOf'],18)) * parseFloat(currentPrice),2)
        : "###";
		
	const cummRewardsElement = document.getElementById("holder-cumm-rewards-stat");

    // Check if data['cummRewards'] is null or undefined
    cummRewardsElement.innerHTML = data['cummRewards'] !== null && data['cummRewards'] !== undefined
        ? formatWithDecimal(data['cummRewards'].toString(), 8) + ' Btc.b'
        :  '#.######## Btc.b';
		
	const unclaimedRewardsElement = document.getElementById("holder-unclaimed-rewards-stat");

    // Check if data['unclaimRewards'] is null or undefined
    unclaimedRewardsElement.innerHTML = data['unclaimRewards'] !== null && data['unclaimRewards'] !== undefined
        ? formatWithDecimal(data['unclaimRewards'].toString(), 8) + ' Btc.b'
        :  '#.######## Btc.b';
}


//UTIL

function formatWithDecimal(stringValue, decimalPlaces) {
  const parts = String(stringValue).split('');
  const length = parts.length;

  // Calculate the position of the decimal point
  const decimalIndex = length - decimalPlaces;
  
  if (decimalIndex == 0) { return parts.join('');}
  
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

function truncateNafterDecimal(stringValue, decimalPlaces) {
	const parts = String(stringValue).split('');
	const length = parts.length;
	let indexOfDecimal = -1;
	let n = -1;
	for (let i = 0; i < length; i++){
		if( parts[i] == '.'){
			indexOfDecimal = i;
			n = indexOfDecimal + decimalPlaces
			break;
		}
	}
	if (indexOfDecimal < 0 || n + 1 >= length){
		return stringValue;
	} else {
		parts.splice(n + 1, length - n);
		return parts.join('');
	}
	
	
}




// Trigger the data fetching when the DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    fetchDataFromAvalanche();
	
	// Check if the address is stored in localStorage
    const cachedAddress = localStorage.getItem('userAddress');
	
	if (cachedAddress) {
        document.getElementById('addressInput').value = cachedAddress;
		validateAndUpdateHeader();
    }
	
	const addressInput = document.getElementById('addressInput');

    // Automatically select all text when the input gets focus
    addressInput.addEventListener('focus', function () {
        this.select();
    });
	
});


