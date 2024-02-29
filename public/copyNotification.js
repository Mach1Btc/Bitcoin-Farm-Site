function notifyCopied(element) {
	// Add the flash class to the clicked element
	element.classList.add('flash');

	// Create a notification element
	var notification = document.createElement('div');
	notification.innerText = 'Address Copied!';
	notification.classList.add('notification');

	document.body.appendChild(notification);

	// Remove the flash class and notification element after a delay
	setTimeout(function () {
		element.classList.remove('flash');
		notification.classList.add('fade-out');

		// Remove the notification element after the fade-out transition completes
		setTimeout(function () {
			document.body.removeChild(notification);
		}, 1500);
	}, 1500);
}

function copy(that) {
	var inp = document.createElement('input');
	document.body.appendChild(inp)
	inp.value = that.textContent
	inp.select();
	document.execCommand('copy', false); //works on PC may need to change this line to support mobile
	inp.remove();
	notifyCopied(that);
}

document.addEventListener('DOMContentLoaded', function () {
	var copyText = document.querySelector('.copy-text');

	copyText.addEventListener('click', function () {
		// Add the 'clicked' class to trigger the flash animation
		copyText.classList.add('clicked');

		// Remove the 'clicked' class after a delay
		setTimeout(function () {
			// Remove the 'clicked' class to reset the text color
			copyText.classList.remove('clicked');

		}, 1500);
	});
});