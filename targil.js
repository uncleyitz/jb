function enterPressed(){
	var screenValue = document.getElementById("screen").value;
	if (screenValue.trim().length  == 0) {
		return;
	}
	document.getElementById("screen").value = '';
	var historyList = document.querySelector(".historyFrame > ul");
	var newLi = document.createElement("li");
	newLi.innerHTML = escape(screenValue);
	historyList.appendChild(newLi);
}

function clicked(text) {
	document.getElementById("screen").value += text;
}

