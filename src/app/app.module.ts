import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import {AngularFireModule} from '@angular/fire/compat'
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { TableComponent } from './table/table.component';
import { NgxPaginationModule } from 'ngx-pagination';



import { NodeitemComponent } from './nodeitem/nodeitem.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InsertNodeItemComponent } from './insert-node-item/insert-node-item.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { provideFirebaseApp } from '@angular/fire/app';
import { initializeApp } from 'firebase/app';
import { HotToastModule } from '@ngneat/hot-toast';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TableComponent,
    NodeitemComponent,
    InsertNodeItemComponent,
    LoginComponent,
    NavComponent,
    MainLayoutComponent,
    LoginLayoutComponent,
    FooterComponent,
    RegisterComponent,
    CreateComponent,
    EditComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
		AngularFirestoreModule,
		AngularFireAuthModule, // imports firebase/auth, only needed for auth features=> dùng cho chức năng update
    NgxPaginationModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    HotToastModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
