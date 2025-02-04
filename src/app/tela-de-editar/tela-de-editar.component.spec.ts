import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaDeEditarComponent } from './tela-de-editar.component';

describe('TelaDeEditarComponent', () => {
  let component: TelaDeEditarComponent;
  let fixture: ComponentFixture<TelaDeEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TelaDeEditarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaDeEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
