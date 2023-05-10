import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { NgmodelComponent } from './components/ngmodel/ngmodel.component';
import { ProductComponent } from './components/product/product.component';
import { VariablesComponent } from './components/variables/variables.component';
import { UserComponent } from './components/user/user.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { NgifPracticeComponent } from './components/ngif-practice/ngif-practice.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { NgForPraticeComponent } from './components/ng-for-pratice/ng-for-pratice.component';
import { NgClass } from '@angular/common';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { NgstyleComponent } from './components/ngstyle/ngstyle.component';
import { ProductsComponent } from './components/products/products.component';
import { CandidatesComponent } from './components/apiCalls/candidates/candidates.component';

const routes: Routes = [
  {
    path: "dataBinding",
    component: DataBindingComponent
  },
  {
    path: "Emp",
    component: EmployeeComponent
  },
  {
    path: 'ngModel',
    component: NgmodelComponent
  },
  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'variables',
    component: VariablesComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path:'ng-if',
    component:NgIfComponent
  },
  {
    path:'candidates',
    component:CandidatesComponent
  }, 
  {
    path:'ng-if-2',
    component:NgifPracticeComponent
  }, 
  {
    path:'ng-For',
    component:NgForComponent
  }, 
  {
    path:'ng-For-practice',
    component:NgForPraticeComponent
  }, 
  {
    path:'ng-class',
    component:NgClassComponent
  }, 
  {
    path:'ng-style',
    component:NgstyleComponent
  }, 
  {
    path:'getAPI',
    component:ProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
