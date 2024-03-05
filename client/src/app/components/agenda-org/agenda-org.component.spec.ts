import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaOrgComponent } from './agenda-org.component';

describe('AgendaOrgComponent', () => {
  let component: AgendaOrgComponent;
  let fixture: ComponentFixture<AgendaOrgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgendaOrgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgendaOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
