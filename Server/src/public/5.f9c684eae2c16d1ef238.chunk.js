webpackJsonp([5],{VRu4:function(l,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=u("WT6e"),e=function(){},t=u("7DMc"),i=u("sSgw"),r=u("bFQv"),a=u("SEee"),d=u("QyeC"),s=u("MGTJ"),c=u("zaeL"),m=u("Xjw4"),p=u("28+m"),g=u("nTFQ"),v=u("bfOx"),f=u("bj+B"),C=u("xWTG"),b=u("IJ+s"),h=u("bPod"),y=u("jl5J"),S=u("YG5c"),R=function(){function l(l,n,u,o,e){this.fb=l,this.dataService=n,this.sb=u,this.router=o,this.authService=e}return l.prototype.ngOnInit=function(){this.buildForm()},l.prototype.buildForm=function(){this.form=this.fb.group({email:["",t.Validators.compose([t.Validators.email,t.Validators.required])],password:["",t.Validators.compose([t.Validators.required])]})},l.prototype.onSubmit=function(l){var n=this;this.dataService.login(l).subscribe(function(l){n.authService.saveToken(l.token),n.authService.saveProfile(l.user),n.router.navigate(["my-profile"])},function(l){return n.sb.emitErrorSnackBar(l)})},l}(),F=o["\u0275crt"]({encapsulation:2,styles:[],data:{}});function N(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,7,"div",[["class","jumbotron"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["\n    "])),(l()(),o["\u0275eld"](2,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["Oh Oh"])),(l()(),o["\u0275ted"](-1,null,["\n    "])),(l()(),o["\u0275eld"](5,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["Your account is registered but it is not active yet. Please check your email for activation code. If you did not find\n        the email in our inbox or spam folder, send an email to admin@test.com for support\n    "])),(l()(),o["\u0275ted"](-1,null,["\n"]))],null,null)}function E(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,30,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,u){var e=!0,t=l.component;return"submit"===n&&(e=!1!==o["\u0275nov"](l,2).onSubmit(u)&&e),"reset"===n&&(e=!1!==o["\u0275nov"](l,2).onReset()&&e),"ngSubmit"===n&&(e=!1!==t.onSubmit(t.form.value)&&e),e},null,null)),o["\u0275did"](1,16384,null,0,t["\u0275bf"],[],null,null),o["\u0275did"](2,540672,null,0,t.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),o["\u0275prd"](2048,null,t.ControlContainer,null,[t.FormGroupDirective]),o["\u0275did"](4,16384,null,0,t.NgControlStatusGroup,[t.ControlContainer],null,null),(l()(),o["\u0275ted"](-1,null,["\n    "])),(l()(),o["\u0275eld"](6,0,null,null,9,"app-email-input-layout",[],null,null,null,i.b,i.a)),o["\u0275did"](7,49152,null,0,r.a,[],{isDisplayingErrorMessage:[0,"isDisplayingErrorMessage"]},null),(l()(),o["\u0275ted"](-1,0,["\n        "])),(l()(),o["\u0275eld"](9,0,null,0,5,"input",[["class","form-control"],["formControlName","email"],["name","email"],["type","email"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0;return"input"===n&&(e=!1!==o["\u0275nov"](l,10)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==o["\u0275nov"](l,10).onTouched()&&e),"compositionstart"===n&&(e=!1!==o["\u0275nov"](l,10)._compositionStart()&&e),"compositionend"===n&&(e=!1!==o["\u0275nov"](l,10)._compositionEnd(u.target.value)&&e),e},null,null)),o["\u0275did"](10,16384,null,0,t.DefaultValueAccessor,[o.Renderer2,o.ElementRef,[2,t.COMPOSITION_BUFFER_MODE]],null,null),o["\u0275prd"](1024,null,t.NG_VALUE_ACCESSOR,function(l){return[l]},[t.DefaultValueAccessor]),o["\u0275did"](12,671744,null,0,t.FormControlName,[[3,t.ControlContainer],[8,null],[8,null],[2,t.NG_VALUE_ACCESSOR]],{name:[0,"name"]},null),o["\u0275prd"](2048,null,t.NgControl,null,[t.FormControlName]),o["\u0275did"](14,16384,null,0,t.NgControlStatus,[t.NgControl],null,null),(l()(),o["\u0275ted"](-1,0,["\n    "])),(l()(),o["\u0275ted"](-1,null,["\n    "])),(l()(),o["\u0275eld"](17,0,null,null,9,"app-password-input-layout",[],null,null,null,a.b,a.a)),o["\u0275did"](18,49152,null,0,d.a,[],{isDisplayingErrorMessage:[0,"isDisplayingErrorMessage"]},null),(l()(),o["\u0275ted"](-1,0,["\n        "])),(l()(),o["\u0275eld"](20,0,null,0,5,"input",[["class","form-control"],["formControlName","password"],["name","password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0;return"input"===n&&(e=!1!==o["\u0275nov"](l,21)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==o["\u0275nov"](l,21).onTouched()&&e),"compositionstart"===n&&(e=!1!==o["\u0275nov"](l,21)._compositionStart()&&e),"compositionend"===n&&(e=!1!==o["\u0275nov"](l,21)._compositionEnd(u.target.value)&&e),e},null,null)),o["\u0275did"](21,16384,null,0,t.DefaultValueAccessor,[o.Renderer2,o.ElementRef,[2,t.COMPOSITION_BUFFER_MODE]],null,null),o["\u0275prd"](1024,null,t.NG_VALUE_ACCESSOR,function(l){return[l]},[t.DefaultValueAccessor]),o["\u0275did"](23,671744,null,0,t.FormControlName,[[3,t.ControlContainer],[8,null],[8,null],[2,t.NG_VALUE_ACCESSOR]],{name:[0,"name"]},null),o["\u0275prd"](2048,null,t.NgControl,null,[t.FormControlName]),o["\u0275did"](25,16384,null,0,t.NgControlStatus,[t.NgControl],null,null),(l()(),o["\u0275ted"](-1,0,["\n    "])),(l()(),o["\u0275ted"](-1,null,["\n    "])),(l()(),o["\u0275eld"](28,0,null,null,1,"app-submit-button",[],null,null,null,s.b,s.a)),o["\u0275did"](29,49152,null,0,c.a,[],{isDisabled:[0,"isDisabled"]},null),(l()(),o["\u0275ted"](-1,null,["\n"]))],function(l,n){var u=n.component;l(n,2,0,u.form),l(n,7,0,u.form.get("email").dirty&&u.form.get("email").invalid),l(n,12,0,"email"),l(n,18,0,!1),l(n,23,0,"password"),l(n,29,0,!u.form.valid)},function(l,n){l(n,0,0,o["\u0275nov"](n,4).ngClassUntouched,o["\u0275nov"](n,4).ngClassTouched,o["\u0275nov"](n,4).ngClassPristine,o["\u0275nov"](n,4).ngClassDirty,o["\u0275nov"](n,4).ngClassValid,o["\u0275nov"](n,4).ngClassInvalid,o["\u0275nov"](n,4).ngClassPending),l(n,9,0,o["\u0275nov"](n,14).ngClassUntouched,o["\u0275nov"](n,14).ngClassTouched,o["\u0275nov"](n,14).ngClassPristine,o["\u0275nov"](n,14).ngClassDirty,o["\u0275nov"](n,14).ngClassValid,o["\u0275nov"](n,14).ngClassInvalid,o["\u0275nov"](n,14).ngClassPending),l(n,20,0,o["\u0275nov"](n,25).ngClassUntouched,o["\u0275nov"](n,25).ngClassTouched,o["\u0275nov"](n,25).ngClassPristine,o["\u0275nov"](n,25).ngClassDirty,o["\u0275nov"](n,25).ngClassValid,o["\u0275nov"](n,25).ngClassInvalid,o["\u0275nov"](n,25).ngClassPending)})}function _(l){return o["\u0275vid"](0,[(l()(),o["\u0275and"](16777216,null,null,1,null,N)),o["\u0275did"](1,16384,null,0,m.NgIf,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),o["\u0275ted"](-1,null,["\n\n"])),(l()(),o["\u0275eld"](3,0,null,null,2,"app-title",[],null,null,null,p.b,p.a)),o["\u0275did"](4,49152,null,0,g.a,[],null,null),(l()(),o["\u0275ted"](-1,0,["Login"])),(l()(),o["\u0275ted"](-1,null,["\n"])),(l()(),o["\u0275and"](16777216,null,null,1,null,E)),o["\u0275did"](8,16384,null,0,m.NgIf,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),o["\u0275ted"](-1,null,["\n"])),(l()(),o["\u0275eld"](10,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["\n"])),(l()(),o["\u0275eld"](12,0,null,null,2,"button",[["class","btn btn-default mb-4"],["id","forget-password-button"],["routerLink","/email_password_recovery"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==o["\u0275nov"](l,13).onClick()&&e),e},null,null)),o["\u0275did"](13,16384,null,0,v.l,[v.k,v.a,[8,null],o.Renderer2,o.ElementRef],{routerLink:[0,"routerLink"]},null),(l()(),o["\u0275ted"](-1,null,["Forgotten password?"])),(l()(),o["\u0275ted"](-1,null,["\n"])),(l()(),o["\u0275eld"](16,0,null,null,0,"br",[["class","mb-4"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["\n\n"])),(l()(),o["\u0275eld"](18,0,null,null,8,"div",[["class","mb-4"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["\n    "])),(l()(),o["\u0275eld"](20,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["Do not have an account?"])),(l()(),o["\u0275ted"](-1,null,["\n    "])),(l()(),o["\u0275eld"](23,0,null,null,2,"button",[["class","btn btn-default "],["id","signup-button"],["routerLink","/signup"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==o["\u0275nov"](l,24).onClick()&&e),e},null,null)),o["\u0275did"](24,16384,null,0,v.l,[v.k,v.a,[8,null],o.Renderer2,o.ElementRef],{routerLink:[0,"routerLink"]},null),(l()(),o["\u0275ted"](-1,null,["Sign Up"])),(l()(),o["\u0275ted"](-1,null,["\n"])),(l()(),o["\u0275ted"](-1,null,["\n\n"])),(l()(),o["\u0275eld"](28,0,null,null,1,"app-social-sign-in",[],null,null,null,f.b,f.a)),o["\u0275did"](29,180224,null,0,C.a,[b.a,h.a,v.k,y.a,S.a],null,null)],function(l,n){var u=n.component;l(n,1,0,u.isRegisteredButNotActive),l(n,8,0,u.form),l(n,13,0,"/email_password_recovery"),l(n,24,0,"/signup")},null)}var k=o["\u0275ccf"]("ng-component",R,function(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,1,"ng-component",[],null,null,null,_,F)),o["\u0275did"](1,114688,null,0,R,[t.FormBuilder,h.a,S.a,v.k,y.a],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),D=function(){},I=u("oh0W"),M=u("k/JH"),V=u("/XuX"),L=u("1cQ4");u.d(n,"LoginModuleNgFactory",function(){return O});var O=o["\u0275cmf"](e,[],function(l){return o["\u0275mod"]([o["\u0275mpd"](512,o.ComponentFactoryResolver,o["\u0275CodegenComponentFactoryResolver"],[[8,[k]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o["\u0275mpd"](4608,t["\u0275i"],t["\u0275i"],[]),o["\u0275mpd"](4608,t.FormBuilder,t.FormBuilder,[]),o["\u0275mpd"](4608,m.NgLocalization,m.NgLocaleLocalization,[o.LOCALE_ID,[2,m["\u0275a"]]]),o["\u0275mpd"](512,v.o,v.o,[[2,v.t],[2,v.k]]),o["\u0275mpd"](512,D,D,[]),o["\u0275mpd"](512,I.a,I.a,[]),o["\u0275mpd"](512,t["\u0275ba"],t["\u0275ba"],[]),o["\u0275mpd"](512,t.FormsModule,t.FormsModule,[]),o["\u0275mpd"](512,t.ReactiveFormsModule,t.ReactiveFormsModule,[]),o["\u0275mpd"](512,m.CommonModule,m.CommonModule,[]),o["\u0275mpd"](512,M.a,M.a,[]),o["\u0275mpd"](512,V.a,V.a,[]),o["\u0275mpd"](512,L.a,L.a,[]),o["\u0275mpd"](512,e,e,[]),o["\u0275mpd"](1024,v.i,function(){return[[{path:"",component:R}]]},[])])})}});