import {Routes } from '@angular/router';
import {PageTwoComponent} from "../components/page-two/page-two.component";
import {PageOneComponent} from '../components/page-one/page-one.component';
import {PageThreeComponent} from '../components/page-three/page-three.component';
import {ChildOneComponent} from '../components/child-one/child-one.component';
import {ChildTwoComponent} from '../components/child-two/child-two.component';
import {ChildThreeComponent} from '../components/child-three/child-three.component';
import {AuthService} from '../guards/auth.guards';

export const AppRoutes: Routes = [
    {path:"", component: PageOneComponent, children:[{path: 'child-one', component:ChildOneComponent}],
    canActivateChild: [AuthService],
    },
    {path:"page-two", component: PageTwoComponent , 
    children: [{path: 'child-two', component: ChildTwoComponent}],
    canActivate: [AuthService],
    canDeactivate: [AuthService]},
    {path:"page-three", component:PageThreeComponent, 
    children: [{path: 'child-three', component: ChildThreeComponent}],
    canActivate:[AuthService],
    canActivateChild:[AuthService]}
]
