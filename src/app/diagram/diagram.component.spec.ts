import { GojsAngularModule } from 'gojs-angular';
import { DiagramComponent } from './diagram.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('AppComponent', () => {
  let fixture: ComponentFixture<DiagramComponent>;
  let component: DiagramComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GojsAngularModule],
      declarations: [DiagramComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DiagramComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
});
