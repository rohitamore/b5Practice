
import { Component, NgModule } from '@angular/core';
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
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { NgstyleComponent } from './components/ngstyle/ngstyle.component';
import { ProductsComponent } from './components/products/products.component';
import { CandidatesComponent } from './components/apiCalls/candidates/candidates.component';
import { ClinetsComponent } from './components/apiCalls/clinets/clinets.component';
import { CourseComponent } from './components/apiCalls/course/course.component';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { AuthGuard } from './services/auth.guard';
import { AddCandidateComponent } from './components/apiCalls/add-candidate/add-candidate.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'candidates',
        component: CandidatesComponent,
        canActivate: [AuthGuard]
      },
      {
<<<<<<< HEAD
        path: 'Clients',
        component: ClinetsComponent,
=======
        path:'editCandidate/:id',
        component:AddCandidateComponent,
        canActivate: [AuthGuard]
      }, 
      {
        path:'addCandidate',
        component:AddCandidateComponent,
        canActivate: [AuthGuard]
      }, 
      {
        path:'Clients',
        component:ClinetsComponent,
>>>>>>> 87394fd901ff3c56b98d67cda95d17c740cef440
        canActivate: [AuthGuard]
      },
      {
        path: 'Course',
        component: CourseComponent
      }
    ]
  }


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
