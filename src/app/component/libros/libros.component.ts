import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  libros: Observable<any[]>;
  todosLibros: any;

  constructor(db: AngularFireDatabase) {

   this.libros = db.list('/books').valueChanges();

  }

  ngOnInit() {
  }

}
