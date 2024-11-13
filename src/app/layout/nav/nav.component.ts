import { Component } from '@angular/core';
import {Link} from '../../shared/models/link';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
links : Link[] = [
  {
    title : 'Home',
    url : '/home',
  },
  {
    title : 'About',
    url : '/about',
  },
  {
    title : 'Demo',
    isChildrenVisible : true,
    children: [
      {
        title : 'Bindings',
        url : '/demo/demo01',
      },
      {
        title : 'Pipes',
        url : '/demo/demo02',
      },
      {
        title : 'Directives',
        url : '/demo/demo03',
      },
      {
        title : 'Input Output',
        url : '/demo/demo04',
      },
    ]
  },
  {
    title : 'Exo',
    // url : '/exo',
    isChildrenVisible: true,
    children: [
      {
        title : 'Timer',
        url : '/exo/exo01',
      },
    ]
  },
]

setVisibility(link: Link) : void {
  link.isChildrenVisible = !link.isChildrenVisible;
}
}
