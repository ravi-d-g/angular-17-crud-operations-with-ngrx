import { Routes } from '@angular/router';
import { BasicComponent } from './components/basic/basic.component';
import { AdvanceComponent } from './components/advance/advance.component';

export const routes: Routes = [
    { path: "", component: BasicComponent, pathMatch: "full" },
    { path: "basic", component: BasicComponent },
    { path: "advance", component: AdvanceComponent }
];
