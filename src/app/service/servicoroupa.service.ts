import { Injectable, importProvidersFrom } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Roupa } from '../product/Roupa';

@Injectable({
  providedIn: 'root'
})
export class ServicoroupaService {


  private apiUrl = 'http://localhost:3000/produto'

  constructor(private http: HttpClient) { }

  getAll(): Observable<Roupa[]>{
    return this.http.get<Roupa[]>(this.apiUrl)

  } 
}