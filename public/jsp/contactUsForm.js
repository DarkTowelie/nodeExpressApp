export default function createContactUs(body)
{
	let contactUs = document.getElementsByClassName('contactUs');

	let blackBox = document.createElement('div');
		blackBox.style.position = "fixed";
		blackBox.style.left = "0";
		blackBox.style.top = "0";
		blackBox.style.width = "100vw";
		blackBox.style.height = "100vh";
		blackBox.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
		blackBox.style.opacity = "0";
		blackBox.style.transition = "opacity ease 1s";
		blackBox.style.display = 'none';

	let whiteBox = document.createElement('form');
		whiteBox.innerHTML = "Contact us";
		whiteBox.style.boxShadow = "3px 3px 10px rgba(0,0,0,0.7), -3px -3px 10px rgba(0,0,0,0.7)";
		whiteBox.style.fontSize = "40px";
		whiteBox.style.position = "fixed";
		whiteBox.style.left = "25%";
		whiteBox.style.top = "25%";
		whiteBox.style.width = "50%";
		whiteBox.style.height = "50%";
		whiteBox.style.backgroundColor = "rgb(255, 255, 255)";
		whiteBox.style.borderRadius = "10px";
		whiteBox.style.opacity = "0";
		whiteBox.style.transition = "opacity ease 1s";
		whiteBox.style.flexDirection = "column";
		whiteBox.style.justifyContent = "space-around";
		whiteBox.style.alignItems = "center";
		whiteBox.method = "POST";
		whiteBox.action = "http://localhost:3001/";
		whiteBox.style.display = 'none';

	let nameI = document.createElement("input");
		nameI.setAttribute("type", "text");
		nameI.setAttribute("placeholder", "Name");
		nameI.setAttribute("name", "name");
		nameI.className = "inputCU";
		whiteBox.append(nameI);

	let sNameI = document.createElement("input");
		sNameI.setAttribute("type", "text");
		sNameI.setAttribute("placeholder", "Surname");
		sNameI.className = "inputCU";
		sNameI.setAttribute("name", "sName");
		whiteBox.append(sNameI);

	let emailI = document.createElement("input");
		emailI.setAttribute("type", "text");
		emailI.setAttribute("placeholder", "Email");
		emailI.className = "inputCU";
		emailI.setAttribute("name", "email");
		whiteBox.append(emailI);

	let buttonBox = document.createElement('div');
		buttonBox.style.display = "flex";
		buttonBox.style.width = "70%";
		buttonBox.style.justifyContent = "space-around";

	let button1 = document.createElement('input');
		button1.setAttribute("type", "submit");
		button1.setAttribute("value", "Submit");
		button1.className = "buttonCU";
		buttonBox.append(button1);

	let button2 = document.createElement('div');
		button2.style.display = 'flex';
		button2.style.justifyContent = 'center';
		button2.style.alignItems = 'center';
		button2.className = "buttonCU";
		button2.innerHTML = "Cancel";
		buttonBox.append(button2);
		whiteBox.append(buttonBox);

		button2.addEventListener ("click", removeOpacity);
		blackBox.addEventListener ("click", removeOpacity);
		body.append(blackBox);
		body.append(whiteBox);

		contactUs[0].addEventListener ("click", showCUFrom);
		whiteBox.addEventListener("submit", formSender);

	function setOpacity()
	{
		blackBox.style.opacity = "100%";
		whiteBox.style.opacity = "100%";
	}
	
	function removeOpacity()
	{
		blackBox.style.display = 'none';
		blackBox.style.opacity = "0";
		whiteBox.style.display = 'none';
		whiteBox.style.opacity = "0";
	}

	function showCUFrom()
	{
		blackBox.style.display = 'block';
		whiteBox.style.display = 'flex';
		setTimeout(setOpacity, 1, blackBox, whiteBox);
	}

	async function formSender(e)
	{
		let error = formValidate();
		let formData = new FormData(whiteBox);
	}

	function formValidate()
	{
		let error = 0;
		formRemoveError(emailI);
		formRemoveError(nameI);
		formRemoveError(sNameI);

		if(emailTest())
		{
			formAddError(emailI);
			error++;
		}

		if(nameTest())
		{
			formAddError(nameI);
			error++;
		}

		if(sNameTest())
		{
			formAddError(sNameI);
			error++;
		}

		if(error === 0)
		{
			alert('Thank you for message!!!')
			removeOpacity();
		}

		return error;
	}

	function formAddError(input)
	{
		input.classList.add('_error');
	}

	function formRemoveError(input)
	{
		input.classList.remove('_error');
	}

	function emailTest()
	{
		return !/^[A-Za-z@0-9.]+$/.test(emailI.value);
	}

	function nameTest()
	{
		return !/^[A-Za-z]+$/.test(nameI.value);
	}

	function sNameTest()
	{
		return !/^[A-Za-z]+$/.test(sNameI.value);
	}
}