import { Injectable } from '@angular/core';
import { Istd } from '../interface/stdinterface';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StdService {
  stdsubject$: Subject<Istd> = new Subject<Istd>()
  stdarray: Array<Istd> = [{
    fname: "sam",
    lname: "curren",
    contact: 2344343545,
    gmail: "abc@gmail.com",
    id: "a"
  }];
  constructor() { }

  fetch() {
    // api call to get data
    return this.stdarray
  }

  fetchadd(stdobj: Istd) {
    this.stdarray.unshift(stdobj)
  }

  formupdate(updateobj: Istd) {
    for (let i = 0; i < this.stdarray.length; i++) {
      if (this.stdarray[i].id === updateobj.id) {
        this.stdarray[i] = updateobj;
        break
      }

    }
  }
  deletfetch(dltobj:Istd){
let getindex=this.stdarray.findIndex(std=>std.id===dltobj.id);
this.stdarray.splice(getindex,1)
  }

}
