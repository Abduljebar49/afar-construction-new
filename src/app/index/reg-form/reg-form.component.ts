import { IndexService } from './../index.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import Swal from 'sweetalert2';
import { templateJitUrl } from '@angular/compiler';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.scss'],
})
export class RegFormComponent implements OnInit {
  type: string = '';
  countries: any;
  title: string = '';
  constructor(
    private activatedRoute: ActivatedRoute,
    private indexService: IndexService
  ) {
    this.type = activatedRoute.snapshot.queryParamMap.get('type') ?? '';
    if (this.type == 'professional') {
      this.title =
        'Professional Registration Application Form';
    } else if (this.type == 'contractor') {
      this.title =
        'Contractors Service Request Form';
    }
  }

  ngOnInit(): void {
    if (this.type == 'professional') {
      this.fields = [
        {
          fieldGroupClassName: 'mt-3 row',
          fieldGroup: [
            {
              type: 'select',
              key: 'applaidFor',
              className: 'col-6',
              templateOptions: {
                label: 'Applaid For',
                required: true,
                options: [
                  {
                    value: 'Contruction',
                    label: 'Contruction',
                  },
                  {
                    value: 'Design',
                    label: 'Design',
                  },
                ],
              },
            },
            {
              type: 'select',
              key: 'typeOfRegistration',
              className: 'col-6',
              templateOptions: {
                label: 'Type Of Registration',
                required: true,
                options: [
                  {
                    value: 'New Registration',
                    label: 'New Registration',
                  },
                  {
                    value: 'Renew',
                    label: 'Renew',
                  },
                  {
                    value: 'Upgrading',
                    label: 'Upgrading',
                  },
                ],
              },
            },
            {
              type: 'input',
              key: 'name',
              className: 'col-6',
              templateOptions: {
                required: true,
                label: 'Name',
                input: 'text',
              },
            },
            {
              type: 'select',
              key: 'sex',
              className: 'col-6',
              templateOptions: {
                label: 'Sex',
                required: true,
                options: [
                  {
                    value: 'Male',
                    label: 'Male',
                  },
                  {
                    value: 'Female',
                    label: 'Female',
                  },
                ],
              },
            },
            // <hr />
            {
              className: 'section-label',
              template:
                '<div class="mt-2 mb-2"><strong>Address:</strong></div>',
            },
            {
              fieldGroupClassName: 'row',
              fieldGroup: [
                {
                  className: 'col-6',
                  type: 'input',
                  key: 'city',
                  templateOptions: {
                    label: 'City',
                  },
                },
                {
                  className: 'col-6',
                  type: 'input',
                  key: 'woreda',
                  templateOptions: {
                    label: 'woreda',
                  },
                },
              ],
            },
            {
              fieldGroupClassName: 'row',
              fieldGroup: [
                {
                  className: 'col-4',
                  type: 'input',
                  key: 'kebele',
                  templateOptions: {
                    type: 'text',
                    label: 'Kebele',
                  },
                },
                {
                  className: 'col-4',
                  type: 'input',
                  key: 'houseNumber',
                  templateOptions: {
                    type: 'text',
                    label: 'House Number',
                  },
                },
                {
                  className: 'col-4',
                  type: 'input',
                  key: 'telPhone',
                  templateOptions: {
                    type: 'text',
                    label: 'Tel No',
                  },
                },
              ],
            },
            {
              className: 'section-label',
              template:
                '<div class="mt-2 mb-2"><strong>Ecucational Data:</strong></div>',
            },
            {
              key: 'education',
              type: 'repeat',
              // className:'row',

              templateOptions: {
                addText: 'Add Education',
              },
              fieldArray: {
                // className:'row',
                fieldGroupClassName: 'row',
                fieldGroup: [
                  {
                    key: 'educationalInstitution',
                    type: 'input',
                    className: 'col-6 mt-1',
                    templateOptions: {
                      label: 'Educational Institution',
                      required: true,
                    },
                  },
                  {
                    key: 'fieldOfStudy',
                    type: 'input',
                    className: 'col-6 mt-1',
                    templateOptions: {
                      label: 'Field of study',
                      required: true,
                    },
                  },
                  {
                    key: 'professionalTitle',
                    type: 'select',
                    className: 'col-6 mt-1',
                    templateOptions: {
                      label: 'Professional title',
                      required: true,
                      options: [
                        {
                          value: 'certificate',
                          label: 'Certificate',
                        },
                        {
                          value: 'diploma',
                          label: 'Diploma',
                        },
                        {
                          value: 'degree',
                          label: 'Degree',
                        },
                      ],
                    },
                  },
                  {
                    key: 'dateRecieved',
                    type: 'input',
                    className: 'col-6 mt-1',
                    templateOptions: {
                      label: 'Date Recieved',
                      type: 'date',
                      required: true,
                    },
                  },
                  {
                    key: 'educationFile',
                    type: 'input',
                    className: 'col-6 mt-1',
                    templateOptions: {
                      label: 'Educational File',
                      type: 'file',
                      required: true,
                    },
                  },
                ],
              },
            },
            {
              key: 'employmentRecord',
              type: 'repeat',
              templateOptions: {
                addText: 'Add Employment Record',
              },
              fieldArray: {
                fieldGroupClassName: 'row',
                fieldGroup: [
                  {
                    key: 'name',
                    type: 'input',
                    className: 'col-6',
                    templateOptions: {
                      label: 'Name of Employer',
                    },
                  },
                  {
                    key: 'from',
                    type: 'input',
                    className: 'col-6',
                    templateOptions: {
                      label: 'From',
                    },
                  },
                  {
                    key: 'upto',
                    type: 'input',
                    className: 'col-6',
                    templateOptions: {
                      label: 'Up to',
                    },
                  },
                  // {
                  //   key:'year',
                  //   type:'input',
                  //   className:'col-6',
                  //   templateOptions:{
                  //     label:'Year',
                  //     type:'number',
                  //   }
                  // },
                  // {
                  //   key:'month',
                  //   type:'input',
                  //   className:'col-6',
                  //   templateOptions:{
                  //     label:'Month',
                  //     type:'month',
                  //   }
                  // },
                  {
                    key: 'month_year',
                    type: 'input',
                    className: 'col-6',
                    templateOptions: {
                      label: 'Month-Year',
                      type: 'month',
                    },
                  },
                  {
                    key: 'employmentFile',
                    type: 'input',
                    className: 'col-6 mt-1',
                    templateOptions: {
                      label: 'Employment File',
                      type: 'file',
                      required: true,
                    },
                  },
                ],
              },
            },
          ],
        },
      ];
    } else if (this.type == 'contractor') {
      // this.title =
      //   'Afar National Regional State Bureau of Housing Development and Construction Contractor’s Service Request Form';
      // console.log('inside else');
      this.fields = [
        {
          type: 'tabs',
          fieldGroup: [
            {
              templateOptions: { label: 'Personal data' },
              fieldGroup: [
                {
                  className: 'section-label',
                  template:
                    '<div class="mt-2 mb-2"><strong>Company Information:</strong></div>',
                },
                {
                  fieldGroupClassName: 'mt-3 row',
                  fieldGroup: [
                    {
                      type: 'input',
                      key: 'companyName',
                      className: 'col-6',
                      templateOptions: {
                        label: 'Company Name',
                        required: true,
                      },
                    },
                    {
                      type: 'input',
                      key: 'ownerFirstName',
                      className: 'col-6',
                      templateOptions: {
                        label: 'Owner First Name',
                        required: true,
                      },
                    },
                    {
                      type: 'input',
                      key: 'ownerFatherName',
                      className: 'col-6',
                      templateOptions: {
                        label: 'Owner Father Name',
                        required: true,
                      },
                    },
                    {
                      type: 'select',
                      key: 'ownerSex',
                      className: 'col-6',
                      templateOptions: {
                        label: "Owner's Sex",
                        required: true,
                        options: [
                          {
                            value: 'Male',
                            label: 'Male',
                          },
                          {
                            value: 'Female',
                            label: 'Female',
                          },
                        ],
                      },
                    },
                    {
                      type: 'select',
                      key: 'nationality',
                      className: 'col-6',
                      templateOptions: {
                        required: true,
                        label: 'Owners Nationality',
                        options: this.indexService.getJSON(),
                        // propValue:'name',
                        // propLabel:'name',
                        labelProp: 'name',
                        valueProp: 'name',
                      },
                    },
                    {
                      type: 'input',
                      key: 'generalManagerName',
                      className: 'col-6',
                      templateOptions: {
                        label: 'General Manager Name',
                        required: true,
                      },
                    },
                    {
                      type: 'input',
                      key: 'constructionServiceType',
                      className: 'col-6',
                      templateOptions: {
                        label: 'Construction Service Type',
                        required: true,
                      },
                    },
                    {
                      type: 'input',
                      key: 'constructionServiceLevel',
                      className: 'col-6',
                      templateOptions: {
                        label: 'Construction Service Level',
                        required: true,
                      },
                    },
                    {
                      className: 'section-label',
                      template:
                        '<div class="mt-2 mb-2"><strong>Address:</strong></div>',
                    },
                    {
                      fieldGroupClassName: 'row',
                      key: 'address',
                      fieldGroup: [
                        {
                          className: 'col-6',
                          type: 'input',
                          key: 'region',
                          templateOptions: {
                            label: 'Region',
                          },
                        },
                        {
                          className: 'col-6',
                          type: 'input',
                          key: 'zone',
                          templateOptions: {
                            label: 'Zone',
                          },
                        },
                        {
                          className: 'col-6',
                          type: 'input',
                          key: 'woreda',
                          templateOptions: {
                            label: 'woreda',
                          },
                        },
                        {
                          className: 'col-6',
                          type: 'input',
                          key: 'city',
                          templateOptions: {
                            label: 'City',
                          },
                        },
                        {
                          className: 'col-4',
                          type: 'input',
                          key: 'subCity',
                          templateOptions: {
                            type: 'text',
                            label: 'Sub City',
                          },
                        },

                        {
                          className: 'col-4',
                          type: 'input',
                          key: 'kebele',
                          templateOptions: {
                            type: 'text',
                            label: 'Kebele',
                          },
                        },
                        {
                          className: 'col-4',
                          type: 'input',
                          key: 'houseNumber',
                          templateOptions: {
                            type: 'text',
                            label: 'House Number',
                          },
                        },
                        {
                          className: 'col-6',
                          type: 'input',
                          key: 'officePhoneNumber',
                          templateOptions: {
                            label: 'Office Phone Number',
                          },
                        },
                        {
                          className: 'col-6',
                          type: 'input',
                          key: 'cellPhoneNumber',
                          templateOptions: {
                            label: 'Cell Phone Number',
                          },
                        },
                        {
                          className: 'col-6',
                          type: 'input',
                          key: 'faxNumber',
                          templateOptions: {
                            label: 'Fax Number',
                          },
                        },
                        {
                          className: 'col-6',
                          type: 'input',
                          key: 'email',
                          templateOptions: {
                            label: 'Email',
                          },
                        },
                      ],
                    },
                    {
                      fieldGroupClassName: 'row',
                      fieldGroup: [],
                    },
                  ],
                },
                {
                  className: 'section-label',
                  template:
                    '<hr />',
                },
                {
                  key: 'personalInformationConfirm',
                  type: 'cus-checkbox',
                  className: 'inline pr-1',
                  // className:'checkbox-label',
                  templateOptions: {
                    label:
                      'I can confirm that the information that I have filled above is correct and I have an obligation to inform the organization immediately if I change my address',
                    // label: 'I accept the the following term',
                    required: true,
                    indeterminate: false,
                  },
                },
              ],
            },
            {
              templateOptions: { label: 'Company Info' },
              fieldGroup: [
                {
                  className: 'section-label',
                  template:
                    '<div class="mt-2 mb-2"><strong>Share Holder:</strong></div>',
                },
                {
                  key: 'shareholders',
                  type: 'repeat',
                  fieldGroupClassName: 'row',
                  templateOptions: {
                    addText: 'Add Share Holder',
                  },
                  fieldArray: {
                    fieldGroupClassName: 'row',
                    fieldGroup: [
                      {
                        key: 'name',
                        type: 'input',
                        className: 'col-6',
                        templateOptions: {
                          label: 'Name of Share Holder',
                          required: true,
                        },
                      },
                      {
                        key: 'shareAmount',
                        type: 'input',
                        className: 'col-6',
                        templateOptions: {
                          label: 'Share Amount',
                          type: 'number',
                          required: true,
                        },
                      },
                    ],
                  },
                },
                {
                  className: 'section-label',
                  template:
                    '<div class="mt-2 mb-2"><strong>Top 5 of Previous Projects:</strong></div>',
                },
                {
                  key: 'projects',
                  type: 'repeat',
                  templateOptions: {
                    addText: 'Add Project',
                  },
                  fieldArray: {
                    fieldGroupClassName: 'row',
                    fieldGroup: [
                      {
                        key: 'name',
                        type: 'input',
                        className: 'col-6',
                        templateOptions: {
                          label: 'Project Name',
                          required: true,
                        },
                      },
                      {
                        key: 'value',
                        type: 'input',
                        className: 'col-6',
                        templateOptions: {
                          label: 'Project Value',
                          required: true,
                        },
                      },
                    ],
                  },
                },
                {
                  className: 'section-label',
                  template:
                    '<div class="mt-2 mb-2"><strong>Prove Data Validity:</strong></div>',
                },
                {
                  key: 'serviceDay',
                  type: 'input',
                  className: 'col-6',
                  templateOptions: {
                    type: 'date',
                    label: 'Service Day',
                    required: true,
                  },
                },
                {
                  key: 'serviceTime',
                  type: 'input',
                  className: 'col-6',
                  templateOptions: {
                    type: 'time',
                    label: 'Service Time',
                    required: true,
                  },
                },
                {
                  key: 'certificateDate',
                  type: 'input',
                  className: 'col-6',
                  templateOptions: {
                    type: 'date',
                    label: 'Certificate date',
                    required: true,
                  },
                },
                {
                  key: 'certificateTime',
                  type: 'input',
                  className: 'col-6',
                  templateOptions: {
                    type: 'time',
                    label: 'Certificate Time',
                    required: true,
                  },
                },
                {
                  key: 'penalityRecordRemark',
                  type: 'input',
                  className: 'col-6',
                  templateOptions: {
                    label: 'Penality Record Remark',
                    required: true,
                  },
                },
                {
                  className: 'section-label',
                  template:
                    '<div class="mt-2 mb-2"><strong>Evidence document</strong></div>',
                },
                {
                  key: 'evidenceDoc',
                  type: 'file',
                  templateOptions: {
                    // label:'Evidence Doc',
                    required: false,
                  },
                },
              ],
            },
            {
              templateOptions: { label: 'Additional Info' },
              fieldGroup: [
                {
                  className: 'section-label',
                  template:
                    '<div class="mt-2 mb-2"><strong>Construction Equipment Owned</strong></div>',
                },
                {
                  key: 'constructionMaterial',
                  type: 'repeat',
                  templateOptions: {
                    addText: 'Add Construction Equipment',
                  },
                  fieldArray: {
                    fieldGroupClassName: 'row',
                    fieldGroup: [
                      {
                        key: 'materialType',
                        type: 'select',
                        className: 'col-6',
                        templateOptions: {
                          options: this.constructionMaterial,
                          label: 'Construction Type',
                          labelProp: 'name',
                          valueProp: 'name',
                          required: true,
                        },
                      },
                      {
                        key: 'Capacity',
                        type: 'input',
                        className: 'col-3',
                        templateOptions: {
                          label: 'Capacity',
                          required: true,
                        },
                      },
                      {
                        key: 'productionYear',
                        type: 'input',
                        className: 'col-3',
                        templateOptions: {
                          label: 'Production Year',
                          required: true,
                        },
                      },
                    ],
                  },
                },
                {
                  className: 'section-label',
                  template:
                    '<div class="mt-2 mb-2"><strong>Employees of the company</strong></div>',
                },
                {
                  key: 'employees',
                  type: 'repeat',
                  fieldGroupClassName: 'row',
                  templateOptions: {
                    addText: 'Add Employees Info',
                  },
                  fieldArray: {
                    fieldGroupClassName: 'row',
                    fieldGroup: [
                      {
                        key: 'position',
                        type: 'input',
                        className: 'col-6',
                        templateOptions: {
                          label: 'Position',
                          required: true,
                        },
                      },
                      {
                        key: 'EmploymentType',
                        type: 'select',
                        className: 'col-6',
                        templateOptions: {
                          label: 'Employment Type',
                          required: true,
                          options: [
                            {
                              label: 'Permanent',
                              value: 'Permanent',
                            },
                            {
                              label: 'Contractual',
                              value: 'Contractual',
                            },
                          ],
                        },
                      },
                      {
                        key: 'numberOfEmployee',
                        type: 'input',
                        className: "col-6",
                        templateOptions: {
                          type: 'number',
                          required: true,
                          label: 'Number of Employees',
                        },
                      },
                      {
                        key: 'remark',
                        type: 'input',
                        className: "col-6",
                        templateOptions: {
                          label: 'Remark',
                          required: true,
                        },
                      },
                    ],
                  },
                },
                {
                  className: 'section-label',
                  template:
                    '<div class="mt-2 mb-2"><strong>Attach Company information Doc</strong></div>',
                },
                {
                  key: 'companyInfo',
                  type: 'file',
                  templateOptions: {
                    required: true,
                    // label:'Attach Company information Doc'
                  },
                },
                // {
                //   className:'row',
                //   fieldGroup:[
                //     {
                //       type:'checkbox',
                //       className:'col-2',
                //       templateOptions:{
                //         pattern:'true',
                //       }
                //     },
                //     {
                //       className: 'section-label',
                //       template:
                //         '<span class="mt-2 mb-2">description about checkbox </span>',
                //     },    
                //   ]
                // },
                {
                  className: 'section-label',
                  template:
                    '<hr />',
                },
                {
                  // key: 'Checkbox',
                  type: 'cus-checkbox',
                  className: 'col-6 checkbox-label',
                  templateOptions: {
                    label:
                      'I know that the registration will not take effect and the appropriate legal action will be taken if the information provided is incorrect',
                    // description: 'In order to proceed, please accept terms',
                    // label: ' I accept the the following term',
                    pattern: 'true',
                    required: true,
                  },
                  validation: {
                    messages: {
                      pattern: 'Please accept the terms',
                    },
                  },
                },
                // {
                //   className: 'section-label',
                //   template:
                //     '<hr />',
                // },

                {
                  // key: 'Checkbox',
                  type: 'cus-checkbox',
                  className: 'col-6',
                  templateOptions: {
                    label:
                      'I can assure with my signature that evidence provided above are correct',
                    // label: 'I accept the the following term',
                    pattern: 'true',
                    required: true,
                  },
                  validation: {
                    messages: {
                      pattern: 'Please accept the terms',
                    },
                  },
                },
                {
                  // key: 'Checkbox',
                  type: 'cus-checkbox',
                  className: 'col-6',
                  templateOptions: {
                    label:
                      'I have an obligation to provide the necessary information when requested and inform the new address when I change my address',
                    // description: 'In order to proceed, please accept terms',
                    // label: 'I accept the the following term',
                    pattern: 'true',
                    required: true,
                  },
                  validation: {
                    messages: {
                      pattern: 'Please accept the terms',
                    },
                  },
                },
                {
                  className: 'section-label',
                  template:
                    '<hr />',
                },
                {
                  className: 'section-label',
                  template:
                    '<div class="mt-2 mb-2"><strong>Attach your signature</strong></div>',
                },

                {
                  key: 'approvanceSignature',
                  type: 'file',
                  templateOptions: {
                    required: true,
                    // label:'Attach your signature'
                  },
                },
              ],
            },
          ],
        },
      ];
    } else {
    }
  }

  form = new FormGroup({});
  model: any = {
    education: [{}],
    id: 1,
    status: 'pending',
  };
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [];
  constructionMaterial = [
    {
      name: 'Bulldozer',
    },
    {
      name: 'Dump Trucks',
    },
    {
      name: 'Compactor',
    },
    {
      name: 'Front Loader',
    },
    {
      name: 'Backhoes',
    },
    {
      name: 'Cranes',
    },
    {
      name: 'Excavators',
    },
    {
      name: 'Trenchers',
    },
    {
      name: 'Mixer',
    },
    {
      name: 'Motor Grader',
    },
    {
      name: 'Bucket Truck',
    },
    {
      name: 'Forklift',
    },
  ];

  submit() {
    if (this.form.valid) {
      // alert(JSON.stringify(this.model));
      // Swal.fire('Registered',"Successfully Registered",'success');
      var items;
      if (this.type == 'professional') {
        var items = JSON.parse(localStorage.getItem('form_data-pro')!);
      } else if (this.type == 'contractor') {
        var items = JSON.parse(localStorage.getItem('form_data-con')!);
      }

      // var items = JSON.parse(localStorage.getItem('form_data')!);
      console.log('items ; ', items);

      if (items == null && items == undefined) {
        var data: any[] = [];
        data.push(this.model);
        if (this.type == 'professional') {
          localStorage.setItem('form_data-pro', JSON.stringify(data));
        } else if (this.type == 'contractor') {
          localStorage.setItem('form_data-con', JSON.stringify(data));
        }

        // localStorage.setItem('form_data', JSON.stringify(data));
      } else {
        var num = Math.random() * 1000;
        var isExist = false;
        items.forEach((ele) => {
          if (ele.id == num) {
            isExist = true;
          }
        });
        if (!isExist) {
          this.model.id = parseInt(num.toString());
          console.log('model : ', this.model);

          items.push(this.model);
          if (this.type == 'professional') {
            localStorage.setItem('form_data-pro', JSON.stringify(items));
          } else if (this.type == 'contractor') {
            localStorage.setItem('form_data-con', JSON.stringify(items));
          }

          // localStorage.setItem('form_data', JSON.stringify(items));
        }
      }
      Swal.fire('Registered', 'Successfully Registered', 'success');
    }
  }

  // private buildGroups(response: any) {
  //   return response.reduce(
  //     (obj: any, value: any) => ({
  //       ...obj,
  //       [value.group]: [
  //         ...(obj[value.group] || []),
  //         { key: value.name, value: value.name },
  //       ],
  //     }),
  //     {}
  //   );
  // }
  // private buildFields(groups: any) {
  //   return (<any>Object)
  //     .entries(groups)
  //     .map(([key, value]: [string, string]) => ({
  //       type: 'multicheckbox',
  //       key,
  //       templateOptions: {
  //         label: key,
  //         options: value,
  //       },
  //     }));
  // }

  public getCapitalizedTitle(type: string) {
    var charAt = type.charAt(0).toUpperCase();
    return charAt + type.substring(1, type.length);
  }
}
