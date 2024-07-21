import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrls } from '../apiUrl';

@Injectable({
  providedIn: 'root'
})

export class AddExamService{
    constructor(private http: HttpClient) { }   
    
    addExamService(addObj: any){
        return this.http.post(`${apiUrls.examUrl}exam`,addObj)                                                                                  
    }
                                                                                          
}
// export class addExamService {

//   constructor(private http: HttpClient) { }

//   addExamService(addObj: any)
//   {
//     return this.http.post(`${apiUrls.examUrl}exam`, addObj)
//   }

// }
