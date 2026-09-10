import { Directive, ElementRef, HostListener, inject, input  } from '@angular/core';

@Directive({
  selector: '[appResaltarTarjeta]',
  standalone: true
})
export class ResaltarTarjetaDirective {
  private el = inject(ElementRef);

  colorBorde = input<string>('#ffff00');

  @HostListener('mouseenter') onMouseEnter(){

    this.aplicarEfecto(`3px solid ${this.colorBorde()} `, 'scale(1.03)')
  }

  @HostListener('mouseleave') onMouseLeave(){

    this.aplicarEfecto(`3px solid #00000f `, 'scale(1)')
  }
  
  private aplicarEfecto(borde: string, transformacion: string){
    this.el.nativeElement.styles.borde = borde;
    this.el.nativeElement.styles.transform = transformacion;
    this.el.nativeElement.styles.transition = 'all 0.3s ease-in-out 0.2s';
  }
}
