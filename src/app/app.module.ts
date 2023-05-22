import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ProductComponent } from './components/product/product.component';
import { VariablesComponent } from './components/variables/variables.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';

import { FormsModule } from '@angular/forms';
import { NgmodelComponent } from './components/ngmodel/ngmodel.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { NgifPracticeComponent } from './components/ngif-practice/ngif-practice.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { NgForPraticeComponent } from './components/ng-for-pratice/ng-for-pratice.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { NgstyleComponent } from './components/ngstyle/ngstyle.component';
import { UsersComponent } from './components/users/users.component';
import { ProductsComponent } from './components/products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { CandidatesComponent } from './components/apiCalls/candidates/candidates.component';
import { ClinetsComponent } from './components/apiCalls/clinets/clinets.component';
import { CourseComponent } from './components/apiCalls/course/course.component';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { AuthGuard } from './services/auth.guard';
import { NaPipe } from './pipes/na.pipe';
import { AlertBoxComponent } from './reusableComponents/alert-box/alert-box.component';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    EmployeeComponent,
    ProductComponent,
    VariablesComponent,
    DataBindingComponent,
    NgmodelComponent,
    NgIfComponent,
    NgifPracticeComponent,
    NgForComponent,
    NgForPraticeComponent,
    NgClassComponent,
    NgstyleComponent,
    UsersComponent,
    ProductsComponent,
    CandidatesComponent,
    ClinetsComponent,
    CourseComponent,
    LoginComponent,
    LayoutComponent,
    NaPipe,
    AlertBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
