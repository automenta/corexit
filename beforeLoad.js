// Beginning of the selection.
// That's our way of checking if selecting inside a text box.
function onMouseDown(event) {
	// Update the options. Need to do it here, because in mouse up it's too late
	//chrome.extension.sendRequest({command : "getOptions"}, getOptions);
	// Mark if the source click is inside a text box
	if (!event.target.nodeName)
		gClickInTextBox = false;
	else
		gClickInTextBox = (event.target.nodeName == "INPUT" || event.target.nodeName == "TEXTAREA");
}

// End of the selection
function onMouseUp(event) {
	var selection = window.getSelection();
	var selectedText = selection ? selection.toString() : "";

        //unselect
        //selection.collapseToStart();

	//if  (selectedText.length != 0) {
            chrome.extension.sendRequest({command : "sendText", text : selectedText});
	//}
        
	//gClickInTextBox = false;
 
}
