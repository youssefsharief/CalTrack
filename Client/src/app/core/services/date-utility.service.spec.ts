import { async, getTestBed, TestBed } from '@angular/core/testing';
import { SharedModule } from 'app/shared/shared.module';
import { DateUtilityService } from 'app/core/services/date-utility.service';
import { DatePipe } from '@angular/common';

describe('Service: DateUtilityService', () => {
    let service: DateUtilityService;
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                DateUtilityService,
                DatePipe
            ],
            imports: [SharedModule]
        });
        const testbed = getTestBed();
        service = testbed.get(DateUtilityService);
    });


    describe('convertDateToMediumDate method', () => {
        it('should return medium date format', () => {
            expect(service.convertDateToMediumDate(new Date('2015-05-06'))).toBe('2015-05-06')
        });
    })

    describe('convertDateToMediumTime method', () => {
        it('should return medium date format', () => {
            expect(service.convertDateToMediumTime(new Date('2015-05-06'))).toBe('02:00')
        });
    })




});
