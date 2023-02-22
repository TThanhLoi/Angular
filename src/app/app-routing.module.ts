import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppModule } from './app.module';
import { CreateComponent } from './create/create.component';

import { EditComponent } from './edit/edit.component';
import { AuthGuard } from './guards/auth.guard';
import { InsertNodeItemComponent } from './insert-node-item/insert-node-item.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { LoginComponent } from './login/login.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { NodeitemComponent } from './nodeitem/nodeitem.component';
import { RegisterComponent } from './register/register.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  
  {
    path:'login',component:LoginLayoutComponent
  },
  {
    path:'register',component:RegisterComponent
  },
 
  {
    path:'admin',component:MainLayoutComponent,
    canActivate:[AuthGuard],//khai báo guard dùng để ràng buộc phải đăng nhập mới được vào
    children:[
      {path:'booklist',component:TableComponent},
      {path:'',component:TableComponent},
      {path:'nodeitem',component:NodeitemComponent},
      {path:'insertnode',component:InsertNodeItemComponent},
      {path:'create',component:CreateComponent},
      {path:'edit/:id',component:EditComponent},
      ]
  },
  {path:'**',component:LoginLayoutComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
