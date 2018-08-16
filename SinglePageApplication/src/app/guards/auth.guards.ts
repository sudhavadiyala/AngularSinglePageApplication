import {Injectable} from '@angular/core';
import {PageTwoComponent} from '../components/page-two/page-two.component';
import {CanActivate, CanDeactivate, CanActivateChild} from "@angular/router";

@Injectable()
export class AuthService implements CanActivate, 
                                    CanActivateChild, 
                                    CanDeactivate<PageTwoComponent> {

    canActivate(): boolean {
        return confirm("Do you want to enter into  Page?");
    }

    canActivateChild(): boolean {
        return confirm("Do you want to enter into child ?");
    }

    canDeactivate(): boolean {
        return confirm("Do you want to leave page ?");
    }

}