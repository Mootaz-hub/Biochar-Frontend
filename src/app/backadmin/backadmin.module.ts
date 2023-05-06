import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackadminRoutingModule } from './backadmin-routing.module';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { HeaderComponent } from './shared/header/header.component';
import { TableModule } from "primeng/table";
import { ButtonModule } from 'primeng/button';
import { AddProductComponent } from './product-list/add-product/add-product.component';
import { MultiSelectModule } from "primeng/multiselect";
import { ToastModule } from "primeng/toast";
import { DropdownModule } from "primeng/dropdown";
import { DialogModule } from "primeng/dialog";
import { MenuModule } from 'primeng/menu';
import { RippleModule } from 'primeng/ripple';
import { FieldsetModule } from "primeng/fieldset";
import { SplitterModule } from "primeng/splitter";
import { CheckboxModule } from "primeng/checkbox";
import { AutoCompleteModule } from 'primeng/autocomplete';
import { AvatarModule } from "primeng/avatar";
import { CardModule } from "primeng/card";
import { SelectButtonModule } from "primeng/selectbutton";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditProductComponent } from './product-list/edit-product/edit-product.component';
import { DetailsProductComponent } from './product-list/details-product/details-product.component';
import { LoginComponent } from './login/login.component';
import { StockComponent } from './stock/stock.component';
import { TrainingAdminComponent } from './training-admin/training-admin.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { TrainingsListComponent } from './trainings-list/trainings-list.component';
import { AddStockComponent } from './stock/add-stock/add-stock.component';
import { EditStockComponent } from './stock/edit-stock/edit-stock.component';
import { DetailsStockComponent } from './stock/details-stock/details-stock.component';
import { OrderComponent } from './order/order.component';
import { PanierComponent } from './order/panier/panier.component';
import { DetailsOrderComponent } from './order/details-order/details-order.component';
import { OfferComponent } from './offer/offer.component';

@NgModule({
  declarations: [
    SideBarComponent,
    ProductListComponent,
    AdminLayoutComponent,
    HeaderComponent,
    AddProductComponent,
    EditProductComponent,
    DetailsProductComponent,
    LoginComponent,
    StockComponent,
    TrainingAdminComponent,
    SubjectsComponent,
    TrainingsListComponent,
    AddStockComponent,
    EditStockComponent,
    DetailsStockComponent,
    OrderComponent,
    PanierComponent,
    DetailsOrderComponent,
    OfferComponent
  ],
  imports: [
    CommonModule,
    BackadminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
    MultiSelectModule,
    ToastModule,
    DropdownModule,
    DialogModule,
    MenuModule,
    RippleModule,
    FieldsetModule,
    SplitterModule,
    CheckboxModule,
    AutoCompleteModule,
    AvatarModule,
    CardModule,
    SelectButtonModule
  ],
  bootstrap: [LoginComponent]
})
export class BackadminModule { }
