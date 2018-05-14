import { SnackBarService } from './snackbar.service';
import { async, getTestBed, TestBed } from '@angular/core/testing';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SharedModule } from 'app/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('Service: Snack bar Service', () => {
    let service: SnackBarService;
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                SnackBarService,
            ],
            imports: [SharedModule, BrowserAnimationsModule]
        });
        const testbed = getTestBed();
        service = testbed.get(SnackBarService);
    });



    it('should emit error snack bar when message argument is not provided', () => {
        service.emitErrorSnackBar()
    });
    it('should emit error snack bar when message argument provided', () => {
        service.emitErrorSnackBar('Error!')
    });
    it('should emit error snack bar when action text is not provided', () => {
        service.emitErrorSnackBar(null)
    });
    it('should emit error snack bar when action text is provided', () => {
        service.emitErrorSnackBar(null, 'Ok')
    });

    it('should emit error snack bar when config is provided', () => {
        service.emitErrorSnackBar(null, null, { duration: 500 })
    });
    it('should emit error snack bar when config is not provided', () => {
        service.emitErrorSnackBar(null, null)
    });





    it('should emit success snack bar when message argument is not provided', () => {
        service.emitSuccessSnackBar()
    });
    it('should emit success snack bar when message argument provided', () => {
        service.emitSuccessSnackBar('Success!')
    });
    it('should emit success snack bar when action text is not provided', () => {
        service.emitSuccessSnackBar(null)
    });
    it('should emit success snack bar when action text is provided', () => {
        service.emitSuccessSnackBar(null, 'Ok')
    });

    it('should save location of map data points if user data is available', () => {
        service.emitSuccessSnackBar()

    });

    it('should emit success snack bar when config is provided', () => {
        service.emitSuccessSnackBar(null, null)
    });
    it('should emit success snack bar when config is not provided', () => {
        service.emitSuccessSnackBar(null, null)
    });




});
