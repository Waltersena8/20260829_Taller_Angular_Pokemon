import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface PokemonTarjeta {

  id: number;
  name: string;
  image: string;
  type: string;
  baseExperience: number;
  esFavorito?: boolean;

}

@Injectable({
  providedIn: 'root'
})

export class PokemonStorageService {
  private http = inject(HttpClient);
  private readonly STORAGE_KEY = 'equipo_pokemon_registrado';
  
  misPokemons = signal<PokemonTarjeta[]>([]);
  
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(){
    this.cargarDesdeStorage();
  }

  private cargarDesdeStorage() {
    const Data = localStorage.getItem(this.STORAGE_KEY);
    
    if (Data) {
      this.misPokemons.set(JSON.parse(data));
    }
  }
}