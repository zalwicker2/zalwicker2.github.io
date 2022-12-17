import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSpotlightComponent } from './project-spotlight.component';

describe('ProjectSpotlightComponent', () => {
  let component: ProjectSpotlightComponent;
  let fixture: ComponentFixture<ProjectSpotlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectSpotlightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectSpotlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
