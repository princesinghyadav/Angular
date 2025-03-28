import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropsshareComponent } from './propsshare.component';

describe('PropsshareComponent', () => {
  let component: PropsshareComponent;
  let fixture: ComponentFixture<PropsshareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropsshareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropsshareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
