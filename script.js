import {Client} from './client.js';



export class ClientsEvidation{
    constructor (){
            this.form=document.getElementById('form');
            this._setingEvents();
        }
        _setingEvents(){
           
            this.form.addEventListener('submit', (e)=> {
                if(this.form.value !== '' && this.form.value !== null){
                e.preventDefault();
                const firstName=this.form[0].value;
                const lastName=this.form[1].value;
                const age=this.form[2].value;
                const phone=this.form[3].value;
                console.log(firstName, lastName, age, phone);
                const client=new Client(firstName, lastName, age, phone)
                const dataFromStorage = localStorage.getItem('clientData');
                this.clientData = dataFromStorage ? JSON.parse(dataFromStorage) : [];
                this.clientData.push(client);
                console.log(this.clientData);
                console.log(client);
                this.saveClient();
                this.printClient();
                this.form.reset();
            } else
                alert('Prosím vyplňte všechny údaje');
            });
            };
            printClient(){
               
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
               for(let i=0; i<this.clientData.length; i++){
                   table+=
                   `<tr>
                   
                     <td data-label="Jméno a příjmeni">${this.clientData[i].firstName} ${this.clientData[i].lastName}</td>
                        <td td data-label="Telefon">${this.clientData[i].age}</td>
                        <td data-label="Věk">${this.clientData[i].phone}</td>
                     
                   </tr>`
                }
                table+=
                `</tbody>
                </table>`
                tableSection.innerHTML=table;   
            }
            saveClient(){
                console.log(this.clientData)
                localStorage.setItem('clientData', JSON.stringify (this.clientData  ))
            }
        }