import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { AgregarLibroComponent } from './component/agregar-libro/agregar-libro.component';
import { LibroComponent } from './component/libro/libro.component';
import { LibrosComponent } from './component/libros/libros.component';
import { BorrarLibroComponent } from './component/borrar-libro/borrar-libro.component';
import { EditarLibroComponent } from './component/editar-libro/editar-libro.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';


// Forms
import { FormsModule } from '@angular/forms';

// Rutas
import { Routes , RouterModule } from '@angular/router';

// Firebase configuracion
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';



const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'libros', component: LibrosComponent},
  {path: 'libro/:id', component: LibroComponent},
  {path: 'agregar-libro', component: AgregarLibroComponent},
  {path: 'editar-libro/:id', component: EditarLibroComponent},
  {path: 'borrar-libro/:id', component: BorrarLibroComponent},

];





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AgregarLibroComponent,
    LibroComponent,
    LibrosComponent,
    BorrarLibroComponent,
    EditarLibroComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase, 'libros-app'),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
