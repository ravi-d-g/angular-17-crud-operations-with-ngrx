import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IPostCardComponent } from './i-post-card.component';

describe('IPostCardComponent', () => {
  let component: IPostCardComponent;
  let fixture: ComponentFixture<IPostCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IPostCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IPostCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
