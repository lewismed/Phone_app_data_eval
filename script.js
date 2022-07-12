const form = document.querySelector("#useradd");
const list = document.querySelector("#contact_table");
if (frm != null) {
	frm.addEventListener('submit', function (e) {
		e.preventDefault();

		//this selects the elemnnts from html file
		var nameinput = document.querySelector("#name");
		var numberinput = document.querySelector("#number");
		var emailinput = document.querySelector("#email");








if ((nameinput.value && numberinput.value&&emailinput.value )!=""){// if the input feild are not empty then I would like to add in a table datacell
  let nameadd=document.createElement("td")
  let numberadd=document.createElement("td")
  let emailadd=document.createElement("td")
	let usertable=document.createElement("td")
	let contactrow=document.createElement("tr")


}


nameadd=nameinput.value;
numberadd=numberinput.value;
emailadd=email.value;


    
  
			//Adding Classes
			delEl.classList.add('delete');

			//this should add o he able
			user.appendChild(nameadd);
			usertable.appendChild(numberadd);
			usertable.appendChild(emailadd);

			list.appendChild(usertable);