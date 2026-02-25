import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWatch } from './my-watch';

describe('MyWatch', () => {
  let component: MyWatch;
  let fixture: ComponentFixture<MyWatch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyWatch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyWatch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
