import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_MASTER ='http://localhost:8085/master/test'
const API_MASTER_TEMP ='http://localhost:8085/master/'
const API_IMPORT_MASTER ='http://localhost:8085/master/AllMaster/'
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  
  constructor(private http:HttpClient) { }
  importInvoice(){
    return this.http.get(API_IMPORT_MASTER + 'invoice');
  }

  getRecord(obj:any){
    return this.http.post(API_MASTER,obj)
  }
  getRecordCount(obj:any){
    return this.http.post(API_MASTER,obj)
  }


}


