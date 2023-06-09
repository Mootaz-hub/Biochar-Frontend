import { Component, OnInit ,OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/_models/_stock/product';
import { ProductService } from '../../_services/product.service';
import { StockService } from '../../_services/stock.service';
import { Stock } from 'src/app/_models/_stock/stock';
import { Command } from 'src/app/_models/_stock/command';
import { Offer } from 'src/app/_models/_stock/offer';
import { CommandLigneService } from '../../_services/command-ligne.service';
import { CommandLigne } from 'src/app/_models/_stock/commandLigne';
import { CommandService } from '../../_services/command.service';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent implements OnInit {

  stockList: Stock[]=[]
  ListSto:Stock=new Stock()
  names:any[]=[]
  productId: any;
  stock:Stock= new Stock();
  detailedProduct : Product=new Product()
  id_stock!:number;
  selectedStock!: Stock

  quantityToadd!:any;

  quantityToOrder!:number;

  offerList : Offer[]=[]

  order:Command = new Command()

  panier:CommandLigne = new CommandLigne()

  idCmdlForProd!:any

  

  productFromCmdl!:Product

  
  constructor(
    private _route : ActivatedRoute,
    private _router: Router,
    private _productService : ProductService,
    private _stockService : StockService,
    private _cmdLiService:CommandLigneService,
    private _command:CommandService
  ) { }

  ngOnInit(): void {
    this.productId = this._route.snapshot.params['id'];
    
    this.getProductById(this.productId);

    this.getStockList();

    this.getOffersForProductDetailed();
    
    console.log(this.stock)
  }

  getProductById(id:any){
    this._productService.getProductById(this.productId).subscribe((res:any)=>{
      this.detailedProduct = res.body
    })
  }

  refresh(): void {
    window.location.reload();
  }

  getStockList(){
    this._stockService.getAll().subscribe((res:any)=>{
      this.stockList = res.body
      console.log(this.stockList)
    })
  }

  AssignProductToStock(idProd:any,idStock:any,quantity:any){
    console.log(this.stock)
    this._stockService.AssignProductToStock(idProd,idStock,quantity).subscribe((data :any)=>{
      console.log(data.body)
    })
  }

  getOffersForProductDetailed(){
    this._productService.getOfferForProduct(this.productId).subscribe((data:any)=>{
      this.offerList = data.body
      console.log(this.offerList)
    })
  }

  AddProductToCommandLigne(){
    this._cmdLiService.addCommandLigne(this.productId,this.panier).subscribe((data:any)=>{
      this.idCmdlForProd = data.body.id
      console.log(this.idCmdlForProd)
      localStorage.setItem('idCmdlForPanier',this.idCmdlForProd)
    })
  }

  getCmdlForProduct() {
    this._cmdLiService.getProductFromCmdl(this.idCmdlForProd).subscribe((data:any)=>{
      this.productFromCmdl=data.body      
      console.log(this.productFromCmdl)
    })
  }

  orderProduct(){
    //this._command.addCommand(1,this.order).subscribe
  }

}
