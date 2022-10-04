import { TestBed } from '@angular/core/testing';

import { LibroPerdidoService } from './libro-perdido.service';

describe('LibroPerdidoService', () => {
  let service: LibroPerdidoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibroPerdidoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
