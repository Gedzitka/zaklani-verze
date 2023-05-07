import {Client} from './client.js';
const form=document.getElementById('form');

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    
    const firstName=form[0].value;
    const lastName=form[1].value;
    const age=form[2].value;
    const phone=form[3].value;
    console.log(firstName, lastName, age, phone);
    // const dataForm=new FormData(form);
    // console.log([...dataForm]);
    const client=new Client(firstName, lastName, age, phone);
    // console.log(this.clientData);
    const clientData = [];
    clientData.push(client);
    console.log(clientData);
    console.log(client.firstName);
    // console.log(client);
    // this.saveClient();
    // this.printClient();
    // this.form.reset();
    

    console.log(clientData);

const tableSection=document.getElementById('section_table');
console.log(tableSection);
let table=
` <table class=" w-100 table-sm  table-response table table-hover table-bordered" id="table">
<thead class="thead-light">
  <tr>
    <th scope="col">Jméno a příjmení</th>
    <th scope="col">Telefon</th>
    <th scope="col">Věk</th>
  </tr>
</thead>
<tbody class="w-auto">`
for(let i=0; i<clientData.length; i++){
   table+=
   `<tr>
   
     <td data-label="Jméno a příjmeni">${clientData[i].firstName} ${clientData[i].lastName}</td>
        <td td data-label="Telefon">${clientData[i].age}</td>
        <td data-label="Věk">${clientData[i].phone}</td>
     
   </tr>`
}
table+=
`</tbody>
</table>`
tableSection.innerHTML=table;


}
);


  
