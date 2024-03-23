import { Component, OnInit } from '@angular/core';
import { Istd } from 'src/app/interface/stdinterface';
import { SnackbarService } from 'src/app/scrvice/snackbar.service';
import { StdService } from 'src/app/scrvice/std.service';
import { UuidService } from 'src/app/scrvice/uuid.service';

@Component({
  selector: 'app-table-std',
  templateUrl: './table-std.component.html',
  styleUrls: ['./table-std.component.scss']
})
export class TableStdComponent implements OnInit {
  stddata!:Array<Istd>;
  
  constructor(private _std:StdService, private _uuid:UuidService, private _snackbar:SnackbarService) { }

  ngOnInit(): void {
    this.stddata=this._std.fetch()
  
  }
  onedit(stiobj:Istd){
    
    let stdobjs=this._std.stdsubject$.next(stiobj);
    this._snackbar.opensnackbar('student data is patch now on form for edit !!!','conform')

  }
  ondelete(dlt:Istd){
this._std.deletfetch(dlt)
this._snackbar.opensnackbar('std data is removed !!!','close')
  }
}
