import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectedTasksPage } from './selected-tasks.page';

describe('SelectedTasksPage', () => {
  let component: SelectedTasksPage;
  let fixture: ComponentFixture<SelectedTasksPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedTasksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
