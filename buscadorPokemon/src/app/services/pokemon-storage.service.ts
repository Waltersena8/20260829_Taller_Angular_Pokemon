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
  


  constructor(){
    this.cargarDesdeStorage();

  }

  private cargarDesdeStorage() {
    const Data = localStorage.getItem(this.STORAGE_KEY);
    
    if (Data) {
      this.misPokemons.set(JSON.parse(Dataata));
    }
  }

  //-1. Obtener datos de la API

  buscarEnAPI(nombreOId: string){
    return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${nombreOId.toLocaleLowerCase}`)


  };

  //-2. Guardar/Crear nuevo Pokemon dentro del el maleto.

  guardarPokemon(nuevo: PokemonTarjeta){
    const actualizados= [ ...this.misPokemons(), nuevo ];
    this.misPokemons.set(actualizados);
    localStorage.setItem(this.STORAGE_KEY,  JSON.stringify(actualizados));


  };

  //.3 Actualizar Pokemon Favorito.

  actualizarFavorito(id: number){
      const actualizados = this.misPokemons().map(poke => {
        if (poke.id === id){
            return { ...poke, esFavorito: !poke.esFavorito }
        }
        return poke
      });
      this.misPokemons.set(actualizados);
      localStorage.setItem(this.STORAGE_KEY,  JSON.stringify(actualizados));
  };


  //.4 Eliminar Pokemon del malet

  eliminarPokemon(id: number){
      const filtrados = this.misPokemons().filter( poke => poke.id !== id );
      this.misPokemons.set(filtrados);
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(filtrados));


  }


}