import { TestBed } from '@angular/core/testing';
import { AuthenticateService } from './authentication.service';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';


describe('AuthenticateService', () => {
  let service: AuthenticateService;

  beforeEach(() => {
    TestBed.configureTestingModule({ 
      imports: [AngularFireModule.initializeApp(environment.firebase)]
    });
    service = TestBed.inject(AuthenticateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
