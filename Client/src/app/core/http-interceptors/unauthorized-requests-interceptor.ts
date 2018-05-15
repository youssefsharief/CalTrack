import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { SnackBarService } from 'app/core/services/snackbar.service';
import { Router } from '@angular/router';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of'
import 'rxjs/add/observable/throw'

@Injectable()
export class UnAuthorizedRequestsInterceptor implements HttpInterceptor {

    constructor(
        private router: Router,
        private sb: SnackBarService
    ) { }


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).catch((res: HttpErrorResponse) => {
            if ((res.status === 401 || res.status === 403) && !res.error.code) {
                this.sb.emitErrorSnackBar('Please sign in');
                this.router.navigate(['login'])
                return Observable.of(null);
            } else {
                if (!res.error.msg) {
                    res.error.msg = 'Sorry.. An error occurred'
                }
                return Observable.throw(res.error);
            }
        });
    }
}
