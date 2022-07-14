



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

















console.log(numberinput)


  
//added
if ((nameinput.value && numberinput.value&&emailinput.value )!=""){// if the input feild are not empty then I would like to add in a table datacell
  let nameadd=document.createElement("td")
  let numberadd=document.createElement("td")
  let emailadd=document.createElement("td")
 
	let contactrow=document.createElement("tr")


  nameadd.textContent=nameinput.value;
numberadd.textContent=numberinput.value;
emailadd.textContent=email.value;
//emptyadd.textContent= "X"

//valdations on html and javscript

function Checkvalidity(nameadd,numberadd, emailadd){
  nameadd=nameadd
  numberadd=numberadd
  emailadd=emailadd

  
  let valid_name= new RegExp("(?=^.{0,20}$)^([a-zA-Z ]+)$");
  let valid_num=new RegExp("(?=^.{10}$)^([0-9]+)$");
  let valid_email=new RegExp("(?=^.{0,40}$)^([a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,3})$");
if (valid_name.test(nameadd ){
  return false

}
if (!valid_num.test(numberadd)==true){
return false


}
if (!valid_email.test(emailadd)==true){
  return false
}

return true;
}

let valid=Checkvalidity()//check if its valid through java and html
console.log(valid)


console.log(nameadd)



console.log(numberadd)
//add to table
			//Adding new  table in
// if valid add table
if (valid==true){    
			contactrow.appendChild(nameadd);
			contactrow.appendChild(numberadd);
			contactrow.appendChild(emailadd);
			
			contact_list.appendChild(contactrow);




			nameinput.value = null;
			numberinput.value = null;
		emailinput.value = null;

}
			


		}
	});
}

  
      





//this is for the search function
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
        var noresult=
        tr[i].style.display = "none";

        
      } else {
        tr[i].style.display = "";
      }
    }
  }
}

//this is for sorting




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
