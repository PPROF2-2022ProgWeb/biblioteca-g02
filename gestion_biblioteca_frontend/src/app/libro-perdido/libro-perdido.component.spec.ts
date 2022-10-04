import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroPerdidoComponent } from './libro-perdido.component';

describe('LibroPerdidoComponent', () => {
  let component: LibroPerdidoComponent;
  let fixture: ComponentFixture<LibroPerdidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibroPerdidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibroPerdidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
