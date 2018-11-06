import { Injectable } from '@angular/core';
import { SnackBarService } from 'app/core/services/snackbar.service';
import { MatSnackBarRef, SimpleSnackBar } from '@angular/material';
import { Observable } from 'rxjs';

@Injectable()
export class UndoDeleteService {

    private oldItems: any[]
    private label: string
    private snackBarRef: MatSnackBarRef<SimpleSnackBar>

    constructor(private sb: SnackBarService) {  }

    init(oldItems, label) {
        this.oldItems = oldItems
        this.label = label
        this.snackBarRef = this.sb.snackBar.open(`Deleteing ${label} .....`, 'Undo', { duration: 2000 });
        return this.listenToDismissal()
    }


    private listenToDismissal(): Observable<any[]> {
        return this.snackBarRef.afterDismissed().map(info => {
            if (info.dismissedByAction) {
                return this.oldItems
            } else {
                return []
            }
        });
    }



}
