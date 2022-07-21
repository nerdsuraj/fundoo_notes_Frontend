import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconslistComponent } from './iconslist.component';

describe('IconslistComponent', () => {
  let component: IconslistComponent;
  let fixture: ComponentFixture<IconslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
