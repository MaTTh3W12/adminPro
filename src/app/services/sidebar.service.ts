import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Dashboard', url: '/'},
        { titulo: 'Progress Bar', url: 'progress'},
        { titulo: 'Chart', url: 'chart1'}
      ]
    },
  ]

  constructor() { }
}
