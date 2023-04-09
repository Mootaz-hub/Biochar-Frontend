import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddProductComponent } from './product-list/add-product/add-product.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'login', component:LoginComponent},
  {
    path: 'product',
    component:AdminLayoutComponent,
    children:[
      {
        path:'',
        component:ProductListComponent
      },
      {
        path:'add',
        component:AddProductComponent
      }
    ]
    },
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackadminRoutingModule { }
