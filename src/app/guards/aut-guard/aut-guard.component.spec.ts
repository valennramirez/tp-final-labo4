import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutGuardComponent } from './aut-guard.component';

describe('AutGuardComponent', () => {
  let component: AutGuardComponent;
  let fixture: ComponentFixture<AutGuardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutGuardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutGuardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
