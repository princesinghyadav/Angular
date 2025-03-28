import { Component, OnInit } from '@angular/core';
// import { jsonService } from './json.service';
import { jsonService } from './json.service';
@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.css']
})
export class JsonComponent {
  idd = ""
  name=""
  quantity=""
  price=""
  fakedata=[
    {
      "id":0,
      "name":"mango",
      "quantity":"5kg",
      "price":30

    },
    {
      "id":1,
      "name":"guava",
      "quantity":"6kg",
      "price":20

    }, {
      "id":2,
      "name":"orange",
      "quantity":"1kg",
      "price":40

    }, {
      "id":3,
      "name":"pomegranate",
      "quantity":"1kg",
      "price":300

    }, {
      "id":4,
      "name":"apple",
      "quantity":"3kg",
      "price":210

    }, {
      "id":5,
      "name":"green apple",
      "quantity":"1kg",
      "price":30

    }, {
      "id":6,
      "name":"banana",
      "quantity":"4dozen",
      "price":39

    }, {
      "id":7,
      "name":"lichi",
      "quantity":"200piece",
      "price":3

    }
  ]
normol:string='';
  //  constructor(public jsonService : jsonService){
  //   this.normol  =this.jsonService.getindat()
  //  }
  // arra:string[] =[];

  Data = this.fakedata.map(user => ({
    Name: `${user.name}`,
    quantity:`${user.quantity} `,
    price:` ${user.price}`,
    id:`${user.id}`
  }));


  getItemm(){
    //  let oneview :string | null |any =localStorage.getItem("user")
  //    console.log(JSON.parse(oneview)) ;

  // console.log(oneview?.id)
  const storedData = localStorage.getItem('user');
const parsedData = storedData ? JSON.parse(storedData) : null;
  this.idd = parsedData.id
  this.quantity=parsedData.quantity
  this.name=parsedData.name
  this.price=parsedData.price

console.log(typeof(parsedData?.id))

  }
  ngOnInit() {
    this.getItemm(); // Call function inside ngOnInit
  }
cou=0
handle(count:number){
this.cou=count;

}
ch="s"
checkk(check :string){
this.ch=check;

}
// constructor( public jsonService :jsonService){
// this.arra= this.jsonService.getdata()

// }

}

