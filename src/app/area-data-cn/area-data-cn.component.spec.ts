import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaDataCnComponent } from './area-data-cn.component';

describe('AreaDataCnComponent', () => {
  let component: AreaDataCnComponent;
  let fixture: ComponentFixture<AreaDataCnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaDataCnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaDataCnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
