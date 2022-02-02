import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-inicio-grupo10',
  templateUrl: './inicio-grupo10.page.html',
  styleUrls: ['./inicio-grupo10.page.scss'],
})
export class InicioGrupo10Page implements OnInit {

  constructor(public menuCtrl: MenuController, private navController: NavController) { 
    this.menuCtrl.enable(true);
   }

  ngOnInit() {
    let id = localStorage.getItem('usuarioAutenticado');
    if (id == "null") {
      this.navController.navigateBack('/login-grupo10');
    }
  }

}
