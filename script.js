/*console.log('Hello!');
var tableContent = "";
function  addcontent{//change
for (index = 0; index < enteredStrings.length; index++) {
    tableContent += "<tr><td>" + enteredStrings[index] + "</td>"

    + "<td>" + enteredStringsTwo[index] + "</td></tr>";

    nameCounter++;
    total.innerHTML = "Total: " + nameCounter;
}
output.innerHTML = tableContent;
}

function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
}

function addcontact(){
    let numberinput = document.getElementById("mobile").value;
    let emailinput = document.getElementById("name").value;
   let nameinput = document.getElementById("email").value;
    const num=document.getElementById('mobile').innerHTML=numberinput ;
    const email=document.getElementById('name').innerHTML=emailinput ;
    const name=document.getElementById('email').innerHTML=nameinput ;
    console.log(numberinput)
    console.log(emailinput)
    console.log(nameinput)


}*/



//import './style.css';

// Write Javascript code!
//const appDiv = document.getElementById('app');
//appDiv.innerHTML = `<h1>JS Starter</h1>`;
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

//added
if ((nameinput.value && numberinput.value&&emailinput.value )!=""){// if the input feild are not empty then I would like to add in a table datacell
  let nameadd=document.createElement("td")
  let numberadd=document.createElement("td")
  let emailadd=document.createElement("td")
  let emptyadd=document.createElement("td")
	let contactrow=document.createElement("tr")


  nameadd.textContent=nameinput.value;
numberadd.textContent=numberinput.value;
emailadd.textContent=email.value;
emptyadd.textContent= "X"

console.log(nameadd)

			//Adding in Classes 
			emptyadd.classList.add('delete');
		//	empty.classList.remove('delete');


//add to table
			//Adding to table
			contactrow.appendChild(nameadd);
			contactrow.appendChild(numberadd);
			contactrow.appendChild(emailadd);
			//conatactrow.appendChild(emptyadd);
			contact_list.appendChild(contactrow);




			nameinput.value = null;
			numberinput.value = null;
		emailinput.value = null;


			


		}
	});
}

  
      

//}})}








/*
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
			} else {tag_name[i].style.display = ;
			}
		} 
    }


    function hide(){
      if 
    }

 */
function Search() {
  // Declare variables
  var input, filter, table, tr, td, i;
  input = document.getElementById("lookupInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("contact_table");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    if (!tr[i].classList.contains('header')) {
      td = tr[i].getElementsByTagName("td"),
      match = false;
      for (j = 0; j < td.length; j++) {
        if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
          match = true;
          break;
        }
      }
      if (!match) {
        tr[i].style.display = "none";
      } else {
        tr[i].style.display = "";
      }
    }
  }
}

function sortTableByColumn(table, column, asc = true) {
  const dirModifier = asc ? 1 : -1;
  const tBody = table.tBodies[0];
  const rows = Array.from(tBody.querySelectorAll("tr"));

  // Sort each row
  const sortedRows = rows.sort((a, b) => {
      const aColText = a.querySelector(`td:nth-child(${ column + 1 })`).textContent.trim();
      const bColText = b.querySelector(`td:nth-child(${ column + 1 })`).textContent.trim();

      return aColText > bColText ? (1 * dirModifier) : (-1 * dirModifier);
  });

  // Remove all existing TRs from the table
  while (tBody.firstChild) {
      tBody.removeChild(tBody.firstChild);
  }

  // Re-add the newly sorted rows
  tBody.append(...sortedRows);

  // Remember how the column is currently sorted
  table.querySelectorAll("th").forEach(th => th.classList.remove("th-sort-asc", "th-sort-desc"));
  table.querySelector(`th:nth-child(${ column + 1})`).classList.toggle("th-sort-asc", asc);
  table.querySelector(`th:nth-child(${ column + 1})`).classList.toggle("th-sort-desc", !asc);
}

document.querySelectorAll(".table-sortable th").forEach(headerCell => {
  headerCell.addEventListener("click", () => {
      const tableElement = headerCell.parentElement.parentElement.parentElement;
      const headerIndex = Array.prototype.indexOf.call(headerCell.parentElement.children, headerCell);
      const currentIsAscending = headerCell.classList.contains("th-sort-asc");

      sortTableByColumn(tableElement, headerIndex, !currentIsAscending);
  });
});
