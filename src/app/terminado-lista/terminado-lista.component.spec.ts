import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminadoListaComponent } from './terminado-lista.component';

describe('TerminadoListaComponent', () => {
  let component: TerminadoListaComponent;
  let fixture: ComponentFixture<TerminadoListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TerminadoListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerminadoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
