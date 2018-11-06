import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { of, throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { SnackBarService } from 'app/core/services/snackbar.service';
import { Router } from '@angular/router';

@Injectable()
export class UnAuthorizedRequestsInterceptor implements HttpInterceptor {

    constructor(
        private router: Router,
        private sb: SnackBarService
    ) { }


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError((res: HttpErrorResponse) => {
                if ((res.status === 401 || res.status === 403) && !res.error.code) {
                    this.sb.emitErrorSnackBar('Please sign in');
                    this.router.navigate(['login'])
                    return of(null);
                } else {
                    if (!res.error.msg) {
                        res.error.msg = 'Sorry.. An error occurred'
                    }
                    return throwError(res.error);
                }
            })
        )
    }
}
