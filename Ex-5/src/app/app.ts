import {Component} from '@angular/core';
import {CommonModule} from'@angular/common'
import {FormsModule} from '@angular/forms'
@Component({
    selector:'app-root',
    standalone:true,
    imports:[CommonModule,FormsModule],
    templateUrl:'./app.html',
    styleUrl:'./app.css'
})
export class App{
    products=[
        {name:'Laptop',prize:50000},
        {name:'Mobile',prize:15000},
        {name:'Airpods',prize:2000}
    ];
    selectedProduct=this.products[0];
    quantity=1;

    get total(){
        return this.selectedProduct.prize*this.quantity;
    }
}