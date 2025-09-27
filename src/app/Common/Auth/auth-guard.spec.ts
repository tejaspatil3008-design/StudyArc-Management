import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthGuard } from './auth-guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(() => {
    // Create a spy for Router
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        { provide: Router, useValue: routerSpy }
      ]
    });

    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  // Example test for canActivate
  it('should block access if user not logged in', () => {
    spyOn(localStorage, 'getItem').and.returnValue(null);
    const result = guard.canActivate();
    expect(result).toBeFalse();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/login']);
  });

  it('should allow access if user is logged in', () => {
    spyOn(localStorage, 'getItem').and.returnValue('token123');
    const result = guard.canActivate();
    expect(result).toBeTrue();
  });
});
