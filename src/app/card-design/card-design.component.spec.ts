import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDesignComponent } from './card-design.component';

describe('CardDesignComponent', () => {
  let component: CardDesignComponent;
  let fixture: ComponentFixture<CardDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
