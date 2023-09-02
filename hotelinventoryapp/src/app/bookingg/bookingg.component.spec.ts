import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookinggComponent } from './bookingg.component';

describe('BookinggComponent', () => {
  let component: BookinggComponent;
  let fixture: ComponentFixture<BookinggComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookinggComponent]
    });
    fixture = TestBed.createComponent(BookinggComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
