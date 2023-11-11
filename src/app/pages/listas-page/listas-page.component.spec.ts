import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasPageComponent } from './listas-page.component';

describe('ListasPageComponent', () => {
  let component: ListasPageComponent;
  let fixture: ComponentFixture<ListasPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListasPageComponent]
    });
    fixture = TestBed.createComponent(ListasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
