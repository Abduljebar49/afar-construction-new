import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detail-con',
  templateUrl: './detail-con.component.html',
  styleUrls: ['./detail-con.component.scss']
})
export class DetailConComponent implements OnInit {
  data: any;
  id: any;
  hideDetailView:boolean = false;
  loading:boolean = false;
	public expendableFacilityCategoriesIndex: boolean[] = [false, false, false];

  // type: any;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.queryParamMap.get('id');
    // this.type = this.activatedRoute.snapshot.queryParamMap.get('type');
  }
  ngOnInit(): void {
    var temp;
      temp = JSON.parse(localStorage.getItem('form_data-con')!);

    if (temp != null && temp != undefined) {
      temp.forEach((ele) => {
        if (ele.id == this.id) {
          this.data = ele;
        }
      });
    }

    console.log('data : ', this.data);
    console.log('data : ', JSON.stringify(this.data));
  }

  deleteData() {
    const item = this.data;
    var index = 0;
    Swal.fire({
      title: 'Do you want to delete this licence request',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `Yes`,
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.deleteConfirmed(item);
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info');
      }
    });
  }

  approveData() {
    const item = this.data;
    Swal.fire({
      title: 'Do you want to delete this licence request',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `Yes`,
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.approveConfirmed(item);
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info');
      }
    });
  }

  approveConfirmed(item) {
    console.log("inside confirm")
    var list;
      list = JSON.parse(localStorage.getItem('form_data-con')!);
    // console.log("new list : ",list, " type : ",this.type);

    // const list = JSON.parse(localStorage.getItem('form_data')!);
    var index = 0;
    if (list != null && list != undefined) {
      for (let i = 0; i < list.length; i++) {
        if (list[i].id == item.id) {
          index = i;
        }
      }
      list[index].status = 'approved';
        localStorage.setItem('form_data-con', JSON.stringify(list));
      console.log("new list : ",list);
      Swal.fire('Successfully approved', '', 'success');
      console.log('updatedList : ', list);
    }
    window.location.reload();
  }

  deleteConfirmed(item) {
    // const list = JSON.parse(localStorage.getItem('form_data')!);
    var list;
      list = JSON.parse(localStorage.getItem('form_data-con')!);

    if (list != null && list != undefined) {
      // for(let i=0;i<list.length;i++){
      //   if(list[i].id == item.id){
      //     index = i;
      //   }
      // }

      var listNew = list as [];
      // listNew.indexOf(item);
      console.log('listeNesw : ', listNew);
    }
    Swal.fire('deleted successfully!', '', 'success');
  }

  openGenerateCertificate() {
    this.router.navigateByUrl(
      'admin/licence-con/certificate-con' + '?id=' + this.data.id
    );
  }

  openEditPage() {
    this.router.navigateByUrl(
      'admin/licence-con/edit' + '?id=' + this.data.id
    );
  }

  toggleExpandableFacilityCategories(index: number): void {
		this.expendableFacilityCategoriesIndex[index] = !this
			.expendableFacilityCategoriesIndex[index];
	}
  openDetail(type) {
    console.log("item : ",this.data);
    if(type=="view"){
      this.router.navigateByUrl('admin/licence-con/detail?id='+this.data.id)
    }else{
      this.router.navigateByUrl('admin/licence-con/edit?id='+this.data.id)
    }
  }

}
