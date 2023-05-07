import { Client } from "./client.js";

export class ClientsEvidation {
  constructor() {
    this.form = document.getElementById("form");
    this._settingEvents();
    this.clientData = [];
  }

  _settingEvents() {
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();

      const firstName = this.form.firstName.value;
      const lastName = this.form.lastName.value;
      const age = this.form.age.value;
      const phone = this.form.phone.value;

      if (firstName && lastName && age && phone) {
        const client = new Client(firstName, lastName, age, phone);
        const dataFromStorage = localStorage.getItem("clientData");
        this.clientData = dataFromStorage ? JSON.parse(dataFromStorage) : [];
        this.clientData.push(client);
        this.saveClient();
        this.printClient();
        this.form.reset();
      } else {
        alert("Prosím vyplňte všechny údaje");
      }
    });
  }

  printClient() {
    const tableSection = document.getElementById("section_table");
    console.log(tableSection);
    let table = ` <table class=" w-100 table-sm  table-response table table-hover table-bordered" id="table">
                <thead class="thead-light">
                  <tr>
                    <th scope="col">Jméno a příjmení</th>
                    <th scope="col">Telefon</th>
                    <th scope="col">Věk</th>
                  </tr>
                </thead>
                <tbody class="w-auto">`;
    for (let i = 0; i < this.clientData.length; i++) {
      table += `<tr>
                     <td data-label="Jméno a příjmeni">${this.clientData[i].firstName} ${this.clientData[i].lastName}</td>
                     <td td data-label="Telefon">${this.clientData[i].phone}</td>
                     <td data-label="Věk">${this.clientData[i].age}</td>
                   </tr>`;
    }
    table += `</tbody>
                </table>`;
    tableSection.innerHTML = table;
  }

  saveClient() {
    console.log(this.clientData);
    localStorage.setItem("clientData", JSON.stringify(this.clientData));
  }
}
