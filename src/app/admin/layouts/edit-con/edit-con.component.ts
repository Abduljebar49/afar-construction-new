import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { IndexService } from 'src/app/index/index.service';

@Component({
  selector: 'app-edit-con',
  templateUrl: './edit-con.component.html',
  styleUrls: ['./edit-con.component.scss']
})
export class EditConComponent implements OnInit {

  id: any;
  type: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private indexService: IndexService
  ) {
    this.id = this.activatedRoute.snapshot.queryParamMap.get('id');
    this.type = this.activatedRoute.snapshot.queryParamMap.get('type');
  }
  form = new FormGroup({});
  model: any = {
    education: [{}],
    id: 1,
  };
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [];

  ngOnInit(): void {
    // const temp = JSON.parse(localStorage.getItem('form_data')!);
    var temp;
    temp = JSON.parse(localStorage.getItem('form_data-con')!);
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
                          label: 'Email Phone Number',
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
            ],
          },
          {
            templateOptions: { label: 'Additional Info' },
            fieldGroup: [
              {
                className: 'section-label',
                template:
                  '<div class="mt-2 mb-2"><strong>Construction Material that is owned by the company</strong></div>',
              },
              {
                key: 'constructionMaterial',
                type: 'repeat',
                templateOptions: {
                  addText: 'Add Contruction Material',
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
                      className: 'col-6',
                      templateOptions: {
                        label: 'Capacity',
                        required: true,
                      },
                    },
                    {
                      key: 'productionYear',
                      type: 'input',
                      className: 'col-6',
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
                templateOptions: {
                  addText: 'Add Employee',
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
                  ],
                },
              },
              {
                className: 'section-label',
                template:
                  '<div class="mt-2 mb-2"><strong>Employees of the company</strong></div>',
              },
            ],
          },
        ],
      },
    ];
    var data;
    if (temp != null && temp != undefined) {
      temp.forEach((ele) => {
        if (ele.id == this.id) {
          data = ele;
        }
      });
    }

    this.model = {
      id: 1,
      status: data.status,
      address: {
        region: data.address.region,
        zone: data.address.zone,
        woreda: data.address.woreda,
        city: data.address.city,
        subCity: data.address.subCity,
        kebele: data.address.kebele,
        houseNumber: data.address.houseNumber,
        officePhoneNumber: data.address.officePhoneNumber,
        cellPhoneNumber: data.address.cellPhoneNumber,
        faxNumber: data.address.faxNumber,
        email: data.address.email,
      },
      shareholders: data.shareholders,
      projects: data.projects,
      constructionMaterial: data.constructionMaterial,
      employees: data.employees,
      companyName: data.companyName,
      ownerFirstName: data.ownerFirstName,
      ownerFatherName: data.ownerFatherName,
      ownerSex: data.ownerSex,
      nationality: data.nationality,
      generalManagerName: data.generalManagerName,
      constructionServiceType: data.constructionServiceType,
      constructionServiceLevel: data.constructionServiceLevel,
      serviceDay: data.serviceDay,
      serviceTime: data.serviceTime,
      certificateDate: data.certificateDate,
      certificateTime: data.certificateTime,
      penalityRecordRemark: data.penalityRecordRemark,
    };

    // console.log('this.model : ', this.model);
  }

  submit() {
    if (this.form.valid) {
      console.log('valid submitted data : ', this.model);
    }
  }

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
}
