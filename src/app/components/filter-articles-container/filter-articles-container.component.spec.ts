import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterArticlesContainerComponent } from './filter-articles-container.component';

describe('FilterArticlesContainerComponent', () => {
  let component: FilterArticlesContainerComponent;
  let fixture: ComponentFixture<FilterArticlesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterArticlesContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterArticlesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
