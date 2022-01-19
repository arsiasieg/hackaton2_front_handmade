import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTutorialComponent } from './list-tutorial.component';

describe('ListTutorialComponent', () => {
  let component: ListTutorialComponent;
  let fixture: ComponentFixture<ListTutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTutorialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
