import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParaFazerListaComponent } from './para-fazer-lista.component';

describe('ParaFazerListaComponent', () => {
  let component: ParaFazerListaComponent;
  let fixture: ComponentFixture<ParaFazerListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParaFazerListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParaFazerListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
