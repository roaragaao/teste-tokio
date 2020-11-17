import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss']
})
export class ListaUsuariosComponent implements OnInit {

  users$: any;
  panelOpenState: boolean = true;
  lat: number = -23.8779431;
  lng: number = -49.8046873;
  zoom: number = 15;


  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    let resp = this.http.get("https://jsonplaceholder.typicode.com/users");
    resp.subscribe(data=> console.log(this.users$ = data));
  }

}
