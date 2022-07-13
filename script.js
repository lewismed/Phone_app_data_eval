const btn = document.querySelector(".btnNav");
btn.addEventListener('click', function (e) {
	e.preventDefault();

})

	const data = document.querySelector(".showEntry");
	const entry = document.querySelector(".addEntry");



  const useraddinfo = document.querySelector("#useraddinfo");


  const contact_list = document.querySelector("#contact_table");







  if (useraddinfo != null) {
    useraddinfo.addEventListener('submit', function (e) {
      e.preventDefault();//The preventDefault() method of the Event interface tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be.
  
      //this selects the elemnnts from html the file
      var nameinput = document.querySelector("#name");
      var numberinput = document.querySelector("#number");
      var emailinput = document.querySelector("#email");
  console.log(nameinput)
  console.log(numberinput)


if ((nameinput.value && numberinput.value&&emailinput.value )!=""){// if the input feild are not empty then I would like to add in a table datacell
  let nameadd=document.createElement("td")
  let numberadd=document.createElement("td")
  let emailadd=document.createElement("td")
  let emptyadd=document.createElement("td")
	let contactrow=document.createElement("tr")


  nameadd.innerText=nameinput.value;
numberadd.innerText=numberinput.value;
emailadd.innerText=email.value;
emptyadd.innertext= "X"

console.log(nameadd)

			//Adding Classes
			emptyadd.classList.add('delete');
		//	empty.classList.remove('delete');


//add to table
			//Adding to table
			contactrow.appendChild(nameadd);
			contactrow.appendChild(numberadd);
			contactrow.appendChild(emailadd);
			//conatactrow.appendChild(emptyadd);
			contact_list.appendChild(contactrow);

}})}

//loops through tables and rows to retrive the value
function search() {
  var td,inputvalue;
    var search=document.getElementById("lookupInput")
    //console.log(search)
    var filterinfo=search.value.toUpperCase()
    var contact_table=document.getElementById("contact_table")
    var tag_name=contact_table.getElementsByTagName("tr")
      console.log(tag_name)
      console.log(contact_table)
    for (let i=0;i>tag_name.length;i++)
    
     td = tr[i].getElementsByTagName("td")[0];
    console.log(td)
		if (td) {
			inputvalue = td.textContent || td.inputvalue;
			if (inputvalue.toUpperCase().indexOf(filterinfo) > -1) {
				tag_name[i].style.display = "";
			} else {tag_name[i].style.display = "none" ;
			}
		} 
    }