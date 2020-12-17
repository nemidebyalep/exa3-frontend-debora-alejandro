import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarproComponent } from './listarpro.component';

describe('ListarproComponent', () => {
  let component: ListarproComponent;
  let fixture: ComponentFixture<ListarproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarproComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
