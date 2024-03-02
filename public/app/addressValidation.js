function validateAndUpdateHeader() {
	// Get the address entered by the user
	var address = document.getElementById("addressInput").value;
	
	// Validate the address
	if (address.trim() === "") {
		alert("Please enter a valid EVM address.");
		return;
	}
	if (!address.startsWith("0x")) {
		alert("Please enter a valid EVM address starting with '0x'.");
		return;
	}
	if (address.length !== 42) {
		alert("Please enter a valid EVM address with a length of 42 characters.");
		return;
	}
	
	// Truncate the address for display
    var truncatedAddress = address.substring(0, 6) + "..." + address.substring(address.length - 4);

	// Perform calculations based on the address
	// Replace the following line with your actual calculation logic
	var holderStats = "Holder Stats for " + truncatedAddress 

	// Update the displayed information
	document.getElementById("holder-stats-header").innerHTML = holderStats;
	
	localStorage.setItem('userAddress', address);
	
	fetchHolderStats(address);
}