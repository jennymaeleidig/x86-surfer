import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Surfer } from './surfer';

describe('Surfer', () => {
  let component: Surfer;
  let fixture: ComponentFixture<Surfer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Surfer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Surfer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
