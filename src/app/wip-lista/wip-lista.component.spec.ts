import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WipListaComponent } from './wip-lista.component';

describe('WipListaComponent', () => {
  let component: WipListaComponent;
  let fixture: ComponentFixture<WipListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WipListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WipListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
