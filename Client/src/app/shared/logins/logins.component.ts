import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'app/shared/models/user.model';

@Component({
    selector: 'app-logins',
    templateUrl: 'logins.component.html',
    styleUrls: ['logins.component.scss']
})
export class LoginsComponent {
    @Input() user: User;
    @Input() isPersonal = false
    @Input() isRemoveLoginDisabled: boolean
    @Output() disconnectFacebook = new EventEmitter()
    @Output() disconnectGoogle = new EventEmitter()
    @Output() connectFacebook = new EventEmitter()
    @Output() connectGoogle = new EventEmitter()
    @Output() disconnectLocalLogin = new EventEmitter()
}
