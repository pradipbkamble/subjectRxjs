import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Istd } from 'src/app/interface/stdinterface';
import { StdService } from 'src/app/scrvice/std.service';
import { UuidService } from 'src/app/scrvice/uuid.service';

@Component({
  selector: 'app-std-form',
  templateUrl: './std-form.component.html',
  styleUrls: ['./std-form.component.scss']
})
export class StdFormComponent implements OnInit {
formsubmit!:FormGroup;
edtstd!:Istd
std!:any
isupdate:boolean=false
  constructor(private _std:StdService, private _uuid:UuidService) { }

  ngOnInit(): void {
    this.stdform()
    this.isupdate=true
    this._std.stdsubject$.subscribe(std=>{
      this.isupdate=false
      console.log(std);
      this.edtstd=std
     this.formsubmit.patchValue(std)
      
    })

  }
  stdform(){
    this.isupdate=false
    this.formsubmit=new FormGroup({
      fname:new FormControl(null,[Validators.required]),
      lname:new FormControl(null,[Validators.required]),
      gmail:new FormControl(null,[Validators.required]),
      contact:new FormControl(null,[Validators.required])
    })
  }
  onsubmitform(){
if(this.formsubmit.valid){
  
  this.std=this.formsubmit.value;
  console.log(this.std);
  let objstd={...this.formsubmit.value,id:this._uuid.uuid()}
  console.log(objstd);
  this._std.fetchadd(objstd)
  this.formsubmit.reset()

  
}
  }
  onupdate(){
let updateobj={...this.formsubmit.value,id:this.edtstd.id}
this.isupdate=true
this.formsubmit.reset()
this._std.formupdate(updateobj)
  }
}
