import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-licence-con',
  templateUrl: './licence-con.component.html',
  styleUrls: ['./licence-con.component.scss']
})
export class LicenceConComponent implements OnInit {
  allUsers: any = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  // type:any;
  constructor(
    private service: AdminService,
    private router: Router,
    // private activatedRoute: ActivatedRoute,
    // private indexService: IndexService
  ) {
    // this.type = activatedRoute.snapshot.queryParamMap.get('ty') ?? '';
    //  this.activatedRoute.queryParams.subscribe((data)=>{
    //    console.log("query parameter change subscribe : ",data);
    //    this.loadData(data.ty);
    //  });
    

  }


  loadData(){
    var items;
      items = JSON.parse(localStorage.getItem('form_data-con')!);

    if (items != null && items != undefined) {
      var data: any[] = [];
      items.forEach((ele) => {
        if (ele.status == 'pending') {
          data.push(ele);
        }
      });

      this.allUsers = data;
    } else {
      this.allUsers = [];
    }
    console.log('allUsers : ', this.allUsers);

  }

  ngOnInit(): void {
    console.log("ngOnInit from Pending")
    this.dtOptions = {
      pagingType: 'full_numbers',
      // pagingType: 'name',
      pageLength: 5,
      processing: true
    };
    this.loadData();
    // this.users();
  }

  // users(): void {
  //   this.service.users().subscribe((response: any) => {
  //     console.log("response from http client : ",response)
  //     this.allUsers = response;
  //   });
  // }
  users(): void {
    this.service.users().subscribe((response: any) => {
      this.allUsers = response;
      // initiate our data table
      this.dtTrigger.next();
    });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  openDetail(item, type) {
    console.log("item : ",item);
    if(type=="view"){
      this.router.navigateByUrl('admin/licence-con/detail?id='+item.id)
    }else{
      this.router.navigateByUrl('admin/licence-con/edit?id='+item.id)
    }
  }
  // Swal.fire({
  //   title: 'Do you want to delete this pending?',
  //   showDenyButton: true,  showCancelButton: true,
  //   confirmButtonText: `Yes`,
  //   denyButtonText: `No`,
  // }).then((result) => {
  //   /* Read more about isConfirmed, isDenied below */
  //     if (result.isConfirmed) {
  //       Swal.fire('this operation is not allowed for now', '', 'success')
  //     } else if (result.isDenied) {
  //       Swal.fire('Changes are not saved', '', 'info')
  //    }
  // });
}
