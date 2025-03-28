import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-propsshare',
  templateUrl: './propsshare.component.html',
  styleUrls: ['./propsshare.component.css']
})
export class PropsshareComponent {


@Input( 'msg') message:string='';
//  @Input() idd:number =0;
@Input()idd!:string;
//  @Input() price !:number;
@Input()price!:string;
@Input() quantity!:string;

@Output() Even = new EventEmitter<string>();
@Output() selectorr=new EventEmitter<number>();
check='this is for che ckinf '
count=0;
onsel(){
this.Even.emit(this.check)
this.count++;
this.selectorr.emit(this.count)


}


}
