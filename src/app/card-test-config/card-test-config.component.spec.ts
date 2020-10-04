import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTestConfigComponent } from './card-test-config.component';

describe('CardTestConfigComponent', () => {
  let component: CardTestConfigComponent;
  let fixture: ComponentFixture<CardTestConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardTestConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTestConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
