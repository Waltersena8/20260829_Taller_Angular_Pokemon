import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PokemonService } from './pokemon.service';
import { Pokemon } from './pokemon.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  query = '';
  pokemon: Pokemon | null = null;
  loading = false;
  error: string | null = null;

  constructor(private pokemonService: PokemonService) {}

  buscar(): void {
    const term = this.query.trim();
    if (!term) {
      this.error = 'Escribe el nombre o número de un Pokémon.';
      this.pokemon = null;
      return;
    }

    this.loading = true;
    this.error = null;

    this.pokemonService.search(term).subscribe({
      next: (data) => {
        this.pokemon = data;
        this.loading = false;
      },
      error: () => {
        this.pokemon = null;
        this.loading = false;
        this.error = `No se encontró ningún Pokémon con "${term}". Verifica el nombre o número.`;
      },
    });
  }

  padId(id: number): string {
    return '#' + id.toString().padStart(3, '0');
  }
}
