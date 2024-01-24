import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePostCardComponent } from './CreatePostCardComponent';

describe('CreatePostCardComponent', () => {
  let component: CreatePostCardComponent;
  let fixture: ComponentFixture<CreatePostCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePostCardComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CreatePostCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
