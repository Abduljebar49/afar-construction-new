import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LicenceProComponent } from './layouts/licence-pro/licence-pro.component';
import { LicenceConComponent } from './layouts/licence-con/licence-con.component';
import { DetailProComponent } from './layouts/detail-pro/detail-pro.component';
import { DetailConComponent } from './layouts/detail-con/detail-con.component';
import { DataTablesModule } from 'angular-datatables';
import { CertificateProComponent } from './layouts/certificate-pro/certificate-pro.component';
import { CertificateConComponent } from './layouts/certificate-con/certificate-con.component';
import { EditProComponent } from './layouts/edit-pro/edit-pro.component';
import { EditConComponent } from './layouts/edit-con/edit-con.component';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyFieldTabs } from '../tabs.component';
import { RepeatTypeComponent } from '../repitition-section.component';
import { FormlyFieldCustomInput } from '../inline-text.component';
import { PanelWrapperComponent } from '../panel-wrapper.component';
import { FormlyModule } from '@ngx-formly/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LicenceProComponent,
    LicenceConComponent,
    DetailProComponent,
    DetailConComponent,
    CertificateProComponent,
    CertificateConComponent,
    EditProComponent,
    EditConComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    DataTablesModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    FormlyModule.forRoot({
      extras: { lazyRender: true },
      validationMessages: [
        { name: 'required', message: 'This field is required' },
      ],
      wrappers: [
        { name: 'panel', component: PanelWrapperComponent },
      ],
      types: [
        {
          name: 'custom',
          component: FormlyFieldCustomInput,
          wrappers: ['form-field'],
        },
        { name: 'repeat', component: RepeatTypeComponent, },
        { name: 'tabs', component: FormlyFieldTabs, },        
      ],
    }),
    FormlyBootstrapModule,
  ]
})
export class AdminModule { }
