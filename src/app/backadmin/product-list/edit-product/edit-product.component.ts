import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Product } from 'src/app/_models/_product/product';
import { ProductService } from '../../_services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  @Input() modalEditProduct:boolean=true ;
  @Input() ProductId : any
  @Output() closeModalEditProduct=new EventEmitter<boolean>(); 
  @Output() refreshProduct=new EventEmitter<boolean>();

  product:Product = new Product();
  path: any = false;
  hideForm = false;
  submitted = false;
  editProductForm : UntypedFormGroup =this.formBuilder.group({
    image:[''],
    description:['']
  })
  constructor(private formBuilder : UntypedFormBuilder , private _productService:ProductService) { }

  ngOnInit(): void {
    this._productService.getProductById(this.ProductId).subscribe((res:any)=>{
      this.product=res.body
    })
  }

  EditProduct(){
    this._productService.EditProduct(this.product).subscribe((res:any)=>{
      console.log(this.product)
    })
  }
  cancel(){
    this.submitted = false
    this.hideForm = true;
    this.modalEditProduct = false;
    this.editProductForm.reset();
    this.closeModalEditProduct.emit(this.modalEditProduct);
  }

}