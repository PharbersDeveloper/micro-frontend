function component() {
	var element = document.createElement('div');

	element.innerHTML = "<span>Hello World</span>"

	return element;
}

document.body.appendChild(component());
