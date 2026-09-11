import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioPokemon } from './inventario-pokemon';

describe('InventarioPokemon', () => {
  let component: InventarioPokemon;
  let fixture: ComponentFixture<InventarioPokemon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventarioPokemon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventarioPokemon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
