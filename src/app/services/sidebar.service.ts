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
        { titulo: 'Chart', url: 'chart1'},
        { titulo: 'Dashboard', url: '/'},
        { titulo: 'Progress Bar', url: 'progress'},
        { titulo: 'Promesas', url: 'promesas'},
        { titulo: 'Rxjs', url: 'rxjs'},
      ]
    },
    {
      titulo: 'Transferencias',
      icono: 'mdi mdi-angular',
      submenu: [
        {
          titulo: 'Dashboard',
          sub: [
            { titulo: 'algo', url: 'algo'},
            { titulo: 'algo2', url: 'algo2'},
          ]
        },
      ]
    },
  ]

  constructor() { }
}
