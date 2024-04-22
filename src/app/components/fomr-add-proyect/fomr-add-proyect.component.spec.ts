import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FomrAddProyectComponent } from './fomr-add-proyect.component';

describe('FomrAddProyectComponent', () => {
  let component: FomrAddProyectComponent;
  let fixture: ComponentFixture<FomrAddProyectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FomrAddProyectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FomrAddProyectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
