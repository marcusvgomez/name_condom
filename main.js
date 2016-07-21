/**
 * Listens for the app launching then creates the window
 *
 * @see http://developer.chrome.com/apps/app.runtime.html
 * @see http://developer.chrome.com/apps/app.window.html
 */
if (document.body.innerHTML.indexOf("Chai") != -1) {
	//Creating Elements
	var btn = document.createElement("BUTTON");
	var t = document.createTextNode("CLICK ME");
	btn.appendChild(t);
	//Appending to DOM
	document.body.appendChild(btn);
    document.body.innerHTML = document.body.innerHTML.replace(/Chaitanya/g, 'Dickface');

    document.body.innerHTML = document.body.innerHTML.replace(/Chai/g, 'Dickface');
}
