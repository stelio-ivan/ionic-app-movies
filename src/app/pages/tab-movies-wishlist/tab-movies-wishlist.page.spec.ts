import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabMoviesWishlistPage } from './tab-movies-wishlist.page';

describe('TabMoviesWishlistPage', () => {
  let component: TabMoviesWishlistPage;
  let fixture: ComponentFixture<TabMoviesWishlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabMoviesWishlistPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabMoviesWishlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
