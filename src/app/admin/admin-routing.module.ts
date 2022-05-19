import { EditConComponent } from './layouts/edit-con/edit-con.component';
import { EditProComponent } from './layouts/edit-pro/edit-pro.component';
import { CertificateConComponent } from './layouts/certificate-con/certificate-con.component';
import { CertificateProComponent } from './layouts/certificate-pro/certificate-pro.component';
import { DetailConComponent } from './layouts/detail-con/detail-con.component';
import { DetailProComponent } from './layouts/detail-pro/detail-pro.component';
import { LicenceConComponent } from './layouts/licence-con/licence-con.component';
import { LicenceProComponent } from './layouts/licence-pro/licence-pro.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'posts',
        component: PostsComponent,
      },
      {
        path: 'licence-pro',
        component: LicenceProComponent,
      },
      {
        path: 'licence-con',
        component: LicenceConComponent,
      },
      {
        path: 'licence-pro/detail',
        component: DetailProComponent,
      },
      {
        path: 'licence-con/detail',
        component: DetailConComponent,
      },
      {
        path: 'licence-pro/certificate',
        component: CertificateProComponent,
      },
      {
        path: 'licence-con/certificate',
        component: CertificateConComponent,
      },
      {
        path: 'licence-pro/edit',
        component: EditProComponent,
      },
      {
        path: 'licence-con/edit',
        component: EditConComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
