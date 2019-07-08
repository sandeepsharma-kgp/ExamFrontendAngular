import { Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// class HeaderComponent {
//   constructor(private route:ActivatedRoute, private router: AppRoutingModule["routes"]) {}
//   //
//   goRegister() {
//     this.router.navigate(['register']);
//   }
//
//   // goSearch() {
//   //   this.router.navigate(['search']); (3)
//   // }
// }

export class AppComponent {
  title = 'frontend';
}
