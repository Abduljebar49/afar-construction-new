import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  isExpandedCon= false;
  isExpandedPro= false;
  showConSubmenu: boolean = false;
  showProSubmenu: boolean = false;
  isShowingCon = false;
  isShowingPro = false;
  showSubSubMenu: boolean = false;

  // mouseenter() {
  //   if (!this.isExpanded) {
  //     this.isShowing = true;
  //   }
  // }

  // mouseleave() {
  //   if (!this.isExpanded) {
  //     this.isShowing = false;
  //   }
  // }

  constructor(private router:Router) {}

  ngOnInit(): void {}

  expandItems(item){
    console.log("item : ",item)
    if(item=='pro')
    {
      this.showProSubmenu = !this.showProSubmenu;
      this.isExpandedPro = !this.isExpandedPro
    }else{
      this.showConSubmenu = !this.showConSubmenu;
      this.isExpandedCon = !this.isExpandedCon;      
    }
    this.router.navigateByUrl('admin/licence-'+item);
  }
}
