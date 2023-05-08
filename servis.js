import { ClientsEvidation } from './Evidation.js';
const evidationClient=new ClientsEvidation();
const clientData=localStorage.getItem("clientData");
if(clientData!==null){
    evidationClient.clientData=JSON.parse(localStorage.getItem("clientData"));
}
else
evidationClient.printClient();