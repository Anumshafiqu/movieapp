import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoiveappComponent } from './moiveapp.component';

describe('MoiveappComponent', () => {
  let component: MoiveappComponent;
  let fixture: ComponentFixture<MoiveappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoiveappComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoiveappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
