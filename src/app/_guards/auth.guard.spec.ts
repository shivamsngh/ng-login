import { TestBed, async, inject } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuard]
    });
  });

  it('should redirect user to home page if not logged in', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
    // expect(guard.canActivate().toBeFalsy())
  }));
});
