import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyNftComponent } from './modify-nft.component';

describe('ModifyNftComponent', () => {
  let component: ModifyNftComponent;
  let fixture: ComponentFixture<ModifyNftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyNftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyNftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
