import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiinjectComponent } from './serviinject.component';

describe('ServiinjectComponent', () => {
  let component: ServiinjectComponent;
  let fixture: ComponentFixture<ServiinjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiinjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiinjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
