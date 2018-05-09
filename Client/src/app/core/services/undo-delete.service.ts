import { Injectable } from '@angular/core';
import { SnackBarService } from 'app/core/services/snackbar.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UndoDeleteService {

    private oldItems: any[]
    private label: string
    private snackBarRef: any
    private undo$ = <any>new Subject()

    constructor(private sb: SnackBarService) {

    }

    init(oldItems, label) {
        this.oldItems = oldItems
        this.label = label
        this.snackBarRef = this.sb.snackBar.open(`Deleteing ${label} in 2 seconds`, 'Undo', { duration: 2000 });
        this.listenToDismissal()
        return this.undo$
    }


    private listenToDismissal() {
        this.snackBarRef.afterDismissed().subscribe(info => {
            if (info.dismissedByAction) {
                this.undo$.next(this.oldItems)
            } else {
                this.undo$.next(false)
            }
        });
    }



}
