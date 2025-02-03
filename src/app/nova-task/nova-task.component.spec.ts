import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaTaskComponent } from './nova-task.component';

describe('NovaTaskComponent', () => {
  let component: NovaTaskComponent;
  let fixture: ComponentFixture<NovaTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NovaTaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovaTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
