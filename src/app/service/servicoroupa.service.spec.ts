import { TestBed } from '@angular/core/testing';

import { ServicoroupaService } from './servicoroupa.service';

describe('ServicoroupaService', () => {
  let service: ServicoroupaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicoroupaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
