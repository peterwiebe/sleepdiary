import {RouterOutlet, Router, ComponentInstruction} from "angular2/router";
import {Directive, ElementRef, DynamicComponentLoader, Attribute} from "angular2/core";
import {AuthService} from "./auth.service";

@Directive({
  selector: 'auth-router-outlet'
})
export class AuthRouterOutlet extends RouterOutlet {
    private _protectedRoutes = {
        'entry/new': true,
        'getdata': true
    };

    constructor(_elementRef:ElementRef, _loader:DynamicComponentLoader, private _parRouter:Router, @Attribute('name') _nameAttr:string,
                private _authService: AuthService) {
        super(_elementRef, _loader, _parRouter, _nameAttr);
    }

    activate(nextInstruction: ComponentInstruction): Promise<any> {
        const url = nextInstruction.urlPath;
        if (this._protectedRoutes[url] && !this._authService.isAuthenticated()) {
            this._parRouter.navigate(['Signin']);
        }
        return super.activate(nextInstruction);
    }

}
