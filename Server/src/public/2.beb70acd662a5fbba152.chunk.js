webpackJsonp([2],{B47g:function(n,l,o){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var u=o("WT6e"),e=function(){},t=o("7DMc"),i=o("30EH"),a=o("qvSy"),r=o("sSgw"),s=o("bFQv"),d=o("SEee"),c=o("QyeC"),g=o("YXM4"),m=o("D8SP"),p=o("cotG"),v=o("NvNn"),C=o("anrO"),f=o("rHeZ"),h=o("rcvH"),b=o("54PK"),E=o("NAls"),y=u["\u0275crt"]({encapsulation:2,styles:[],data:{}});function S(n){return u["\u0275vid"](0,[],null,null)}var N=o("EHK6"),_=o("Xjw4"),R=o("bj+B"),V=o("xWTG"),A=o("IJ+s"),D=o("bPod"),F=o("bfOx"),O=o("jl5J"),P=o("YG5c"),I=o("psrt"),k=o("0kUk"),M=(o("HUnO"),function(){function n(n,l,o,u,e,t,i){this.fb=n,this.dataService=l,this.sb=o,this.router=u,this.publicInfoService=e,this.authService=t,this.route=i}return n.prototype.ngOnInit=function(){this.buildForm(),this.getEmailFromParams()},n.prototype.getEmailFromParams=function(){var n=this;this.route.queryParams.first().subscribe(function(l){return n.form.get("email").setValue(l.email)})},n.prototype.buildForm=function(){var n={name:["",t.Validators.compose([t.Validators.required,t.Validators.maxLength(20),t.Validators.minLength(3)])],email:["",t.Validators.compose([t.Validators.required,t.Validators.email])],password:["",t.Validators.compose([t.Validators.required,t.Validators.pattern(k.j)])],confirmPassword:["",t.Validators.required],maxCalories:[2250,t.Validators.compose([t.Validators.required,t.Validators.min(500),t.Validators.max(8e3)])],isTrackingDisplayed:[!0]};n["g-recaptcha-response"]=[null,t.Validators.required],this.form=this.fb.group(n,{validator:this.areEqual})},n.prototype.areEqual=function(n){return n.get("password").value===n.get("confirmPassword").value?null:{areEqual:!0}},n.prototype.signup=function(){var n=this,l=Object.assign(this.form.value,{});delete l.confirmPassword,this.dataService.signup(l).subscribe(function(l){n.authService.saveToken(l.token),n.authService.saveProfile(l.user),n.router.navigate(["my-profile"])},function(l){return n.sb.emitErrorSnackBar(l)})},n.prototype.signupSecurely=function(){var n=this,l=Object.assign(this.form.value,{});delete l.confirmPassword,this.dataService.signupSecurely(l).subscribe(function(l){n.publicInfoService.setEmail(n.form.value.email),n.publicInfoService.setPass(n.form.value.password),n.router.navigate(["/signup/activate"])},function(l){n.sb.emitErrorSnackBar(l)})},n}()),T=u["\u0275crt"]({encapsulation:2,styles:[],data:{}});function L(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,89,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(n,l,o){var e=!0;return"submit"===l&&(e=!1!==u["\u0275nov"](n,2).onSubmit(o)&&e),"reset"===l&&(e=!1!==u["\u0275nov"](n,2).onReset()&&e),e},null,null)),u["\u0275did"](1,16384,null,0,t["\u0275bf"],[],null,null),u["\u0275did"](2,540672,null,0,t.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},null),u["\u0275prd"](2048,null,t.ControlContainer,null,[t.FormGroupDirective]),u["\u0275did"](4,16384,null,0,t.NgControlStatusGroup,[t.ControlContainer],null,null),(n()(),u["\u0275ted"](-1,null,["\n\n    "])),(n()(),u["\u0275eld"](6,0,null,null,9,"app-name-input-layout",[],null,null,null,i.b,i.a)),u["\u0275did"](7,49152,null,0,a.a,[],{isDisplayingErrorMessage:[0,"isDisplayingErrorMessage"]},null),(n()(),u["\u0275ted"](-1,0,["\n        "])),(n()(),u["\u0275eld"](9,0,null,0,5,"input",[["class","form-control"],["formControlName","name"],["name","name"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,o){var e=!0;return"input"===l&&(e=!1!==u["\u0275nov"](n,10)._handleInput(o.target.value)&&e),"blur"===l&&(e=!1!==u["\u0275nov"](n,10).onTouched()&&e),"compositionstart"===l&&(e=!1!==u["\u0275nov"](n,10)._compositionStart()&&e),"compositionend"===l&&(e=!1!==u["\u0275nov"](n,10)._compositionEnd(o.target.value)&&e),e},null,null)),u["\u0275did"](10,16384,null,0,t.DefaultValueAccessor,[u.Renderer2,u.ElementRef,[2,t.COMPOSITION_BUFFER_MODE]],null,null),u["\u0275prd"](1024,null,t.NG_VALUE_ACCESSOR,function(n){return[n]},[t.DefaultValueAccessor]),u["\u0275did"](12,671744,null,0,t.FormControlName,[[3,t.ControlContainer],[8,null],[8,null],[2,t.NG_VALUE_ACCESSOR]],{name:[0,"name"]},null),u["\u0275prd"](2048,null,t.NgControl,null,[t.FormControlName]),u["\u0275did"](14,16384,null,0,t.NgControlStatus,[t.NgControl],null,null),(n()(),u["\u0275ted"](-1,0,["\n    "])),(n()(),u["\u0275ted"](-1,null,["\n\n    "])),(n()(),u["\u0275eld"](17,0,null,null,9,"app-email-input-layout",[],null,null,null,r.b,r.a)),u["\u0275did"](18,49152,null,0,s.a,[],{isDisplayingErrorMessage:[0,"isDisplayingErrorMessage"]},null),(n()(),u["\u0275ted"](-1,0,["\n        "])),(n()(),u["\u0275eld"](20,0,null,0,5,"input",[["class","form-control"],["formControlName","email"],["name","email"],["type","email"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,o){var e=!0;return"input"===l&&(e=!1!==u["\u0275nov"](n,21)._handleInput(o.target.value)&&e),"blur"===l&&(e=!1!==u["\u0275nov"](n,21).onTouched()&&e),"compositionstart"===l&&(e=!1!==u["\u0275nov"](n,21)._compositionStart()&&e),"compositionend"===l&&(e=!1!==u["\u0275nov"](n,21)._compositionEnd(o.target.value)&&e),e},null,null)),u["\u0275did"](21,16384,null,0,t.DefaultValueAccessor,[u.Renderer2,u.ElementRef,[2,t.COMPOSITION_BUFFER_MODE]],null,null),u["\u0275prd"](1024,null,t.NG_VALUE_ACCESSOR,function(n){return[n]},[t.DefaultValueAccessor]),u["\u0275did"](23,671744,null,0,t.FormControlName,[[3,t.ControlContainer],[8,null],[8,null],[2,t.NG_VALUE_ACCESSOR]],{name:[0,"name"]},null),u["\u0275prd"](2048,null,t.NgControl,null,[t.FormControlName]),u["\u0275did"](25,16384,null,0,t.NgControlStatus,[t.NgControl],null,null),(n()(),u["\u0275ted"](-1,0,["\n    "])),(n()(),u["\u0275ted"](-1,null,["\n\n    "])),(n()(),u["\u0275eld"](28,0,null,null,9,"app-password-input-layout",[],null,null,null,d.b,d.a)),u["\u0275did"](29,49152,null,0,c.a,[],{isDisplayingErrorMessage:[0,"isDisplayingErrorMessage"]},null),(n()(),u["\u0275ted"](-1,0,["\n        "])),(n()(),u["\u0275eld"](31,0,null,0,5,"input",[["class","form-control"],["formControlName","password"],["name","password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,o){var e=!0;return"input"===l&&(e=!1!==u["\u0275nov"](n,32)._handleInput(o.target.value)&&e),"blur"===l&&(e=!1!==u["\u0275nov"](n,32).onTouched()&&e),"compositionstart"===l&&(e=!1!==u["\u0275nov"](n,32)._compositionStart()&&e),"compositionend"===l&&(e=!1!==u["\u0275nov"](n,32)._compositionEnd(o.target.value)&&e),e},null,null)),u["\u0275did"](32,16384,null,0,t.DefaultValueAccessor,[u.Renderer2,u.ElementRef,[2,t.COMPOSITION_BUFFER_MODE]],null,null),u["\u0275prd"](1024,null,t.NG_VALUE_ACCESSOR,function(n){return[n]},[t.DefaultValueAccessor]),u["\u0275did"](34,671744,null,0,t.FormControlName,[[3,t.ControlContainer],[8,null],[8,null],[2,t.NG_VALUE_ACCESSOR]],{name:[0,"name"]},null),u["\u0275prd"](2048,null,t.NgControl,null,[t.FormControlName]),u["\u0275did"](36,16384,null,0,t.NgControlStatus,[t.NgControl],null,null),(n()(),u["\u0275ted"](-1,0,["\n    "])),(n()(),u["\u0275ted"](-1,null,["\n\n    "])),(n()(),u["\u0275eld"](39,0,null,null,9,"app-confirm-password-input-layout",[],null,null,null,g.b,g.a)),u["\u0275did"](40,49152,null,0,m.a,[],{isDisplayingErrorMessage:[0,"isDisplayingErrorMessage"]},null),(n()(),u["\u0275ted"](-1,0,["\n        "])),(n()(),u["\u0275eld"](42,0,null,0,5,"input",[["class","form-control"],["formControlName","confirmPassword"],["name","confirmPassword"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,o){var e=!0;return"input"===l&&(e=!1!==u["\u0275nov"](n,43)._handleInput(o.target.value)&&e),"blur"===l&&(e=!1!==u["\u0275nov"](n,43).onTouched()&&e),"compositionstart"===l&&(e=!1!==u["\u0275nov"](n,43)._compositionStart()&&e),"compositionend"===l&&(e=!1!==u["\u0275nov"](n,43)._compositionEnd(o.target.value)&&e),e},null,null)),u["\u0275did"](43,16384,null,0,t.DefaultValueAccessor,[u.Renderer2,u.ElementRef,[2,t.COMPOSITION_BUFFER_MODE]],null,null),u["\u0275prd"](1024,null,t.NG_VALUE_ACCESSOR,function(n){return[n]},[t.DefaultValueAccessor]),u["\u0275did"](45,671744,null,0,t.FormControlName,[[3,t.ControlContainer],[8,null],[8,null],[2,t.NG_VALUE_ACCESSOR]],{name:[0,"name"]},null),u["\u0275prd"](2048,null,t.NgControl,null,[t.FormControlName]),u["\u0275did"](47,16384,null,0,t.NgControlStatus,[t.NgControl],null,null),(n()(),u["\u0275ted"](-1,0,["\n    "])),(n()(),u["\u0275ted"](-1,null,["\n\n    "])),(n()(),u["\u0275eld"](50,0,null,null,10,"app-max-calories-input-layout",[],null,null,null,p.b,p.a)),u["\u0275did"](51,49152,null,0,v.a,[],{isDisplayingErrorMessage:[0,"isDisplayingErrorMessage"]},null),(n()(),u["\u0275ted"](-1,0,["\n        "])),(n()(),u["\u0275eld"](53,0,null,0,6,"input",[["class","form-control"],["formControlName","maxCalories"],["id",""],["name","maxCalories"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(n,l,o){var e=!0;return"input"===l&&(e=!1!==u["\u0275nov"](n,54)._handleInput(o.target.value)&&e),"blur"===l&&(e=!1!==u["\u0275nov"](n,54).onTouched()&&e),"compositionstart"===l&&(e=!1!==u["\u0275nov"](n,54)._compositionStart()&&e),"compositionend"===l&&(e=!1!==u["\u0275nov"](n,54)._compositionEnd(o.target.value)&&e),"change"===l&&(e=!1!==u["\u0275nov"](n,55).onChange(o.target.value)&&e),"input"===l&&(e=!1!==u["\u0275nov"](n,55).onChange(o.target.value)&&e),"blur"===l&&(e=!1!==u["\u0275nov"](n,55).onTouched()&&e),e},null,null)),u["\u0275did"](54,16384,null,0,t.DefaultValueAccessor,[u.Renderer2,u.ElementRef,[2,t.COMPOSITION_BUFFER_MODE]],null,null),u["\u0275did"](55,16384,null,0,t["\u0275bc"],[u.Renderer2,u.ElementRef],null,null),u["\u0275prd"](1024,null,t.NG_VALUE_ACCESSOR,function(n,l){return[n,l]},[t.DefaultValueAccessor,t["\u0275bc"]]),u["\u0275did"](57,671744,null,0,t.FormControlName,[[3,t.ControlContainer],[8,null],[8,null],[2,t.NG_VALUE_ACCESSOR]],{name:[0,"name"]},null),u["\u0275prd"](2048,null,t.NgControl,null,[t.FormControlName]),u["\u0275did"](59,16384,null,0,t.NgControlStatus,[t.NgControl],null,null),(n()(),u["\u0275ted"](-1,0,["\n    "])),(n()(),u["\u0275ted"](-1,null,["\n\n    "])),(n()(),u["\u0275eld"](62,0,null,null,9,"app-display-tracking-input-checkbox-layout",[],null,null,null,C.b,C.a)),u["\u0275did"](63,49152,null,0,f.a,[],null,null),(n()(),u["\u0275ted"](-1,0,["\n        "])),(n()(),u["\u0275eld"](65,0,null,0,5,"input",[["class","form-check-input"],["formControlName","isTrackingDisplayed"],["name","isTrackingDisplayed"],["type","checkbox"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"change"],[null,"blur"]],function(n,l,o){var e=!0;return"change"===l&&(e=!1!==u["\u0275nov"](n,66).onChange(o.target.checked)&&e),"blur"===l&&(e=!1!==u["\u0275nov"](n,66).onTouched()&&e),e},null,null)),u["\u0275did"](66,16384,null,0,t.CheckboxControlValueAccessor,[u.Renderer2,u.ElementRef],null,null),u["\u0275prd"](1024,null,t.NG_VALUE_ACCESSOR,function(n){return[n]},[t.CheckboxControlValueAccessor]),u["\u0275did"](68,671744,null,0,t.FormControlName,[[3,t.ControlContainer],[8,null],[8,null],[2,t.NG_VALUE_ACCESSOR]],{name:[0,"name"]},null),u["\u0275prd"](2048,null,t.NgControl,null,[t.FormControlName]),u["\u0275did"](70,16384,null,0,t.NgControlStatus,[t.NgControl],null,null),(n()(),u["\u0275ted"](-1,0,["\n    "])),(n()(),u["\u0275ted"](-1,null,["\n\n    "])),(n()(),u["\u0275eld"](73,0,null,null,6,"re-captcha",[["formControlName","g-recaptcha-response"]],[[1,"id",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"resolved"]],function(n,l,o){var e=!0;return"resolved"===l&&(e=!1!==u["\u0275nov"](n,75).onResolve(o)&&e),e},S,y)),u["\u0275did"](74,4374528,null,0,h.RecaptchaComponent,[u.ElementRef,b.RecaptchaLoaderService,u.NgZone,[2,E.RECAPTCHA_SETTINGS]],null,{resolved:"resolved"}),u["\u0275did"](75,16384,null,0,N.RecaptchaValueAccessorDirective,[h.RecaptchaComponent],null,null),u["\u0275prd"](1024,null,t.NG_VALUE_ACCESSOR,function(n){return[n]},[N.RecaptchaValueAccessorDirective]),u["\u0275did"](77,671744,null,0,t.FormControlName,[[3,t.ControlContainer],[8,null],[8,null],[2,t.NG_VALUE_ACCESSOR]],{name:[0,"name"]},null),u["\u0275prd"](2048,null,t.NgControl,null,[t.FormControlName]),u["\u0275did"](79,16384,null,0,t.NgControlStatus,[t.NgControl],null,null),(n()(),u["\u0275ted"](-1,null,["\n\n    "])),(n()(),u["\u0275eld"](81,0,null,null,7,"div",[["class","mb-4 mt-4"]],null,null,null,null,null)),(n()(),u["\u0275ted"](-1,null,["\n        "])),(n()(),u["\u0275eld"](83,0,null,null,1,"button",[["class","btn btn-default"],["type","submit"]],[[8,"disabled",0]],[[null,"click"]],function(n,l,o){var u=!0;return"click"===l&&(u=!1!==n.component.signup()&&u),u},null,null)),(n()(),u["\u0275ted"](-1,null,["Signup"])),(n()(),u["\u0275ted"](-1,null,["\n        "])),(n()(),u["\u0275eld"](86,0,null,null,1,"button",[["class","btn btn-default"],["id","secure-signup-button"],["type","submit"]],[[8,"disabled",0]],[[null,"click"]],function(n,l,o){var u=!0;return"click"===l&&(u=!1!==n.component.signupSecurely()&&u),u},null,null)),(n()(),u["\u0275ted"](-1,null,["Signup securely"])),(n()(),u["\u0275ted"](-1,null,["\n    "])),(n()(),u["\u0275ted"](-1,null,["\n"]))],function(n,l){var o=l.component;n(l,2,0,o.form),n(l,7,0,o.form.get("name").dirty&&o.form.get("name").invalid),n(l,12,0,"name"),n(l,18,0,o.form.get("email").dirty&&o.form.get("email").invalid),n(l,23,0,"email"),n(l,29,0,o.form.get("password").dirty&&o.form.get("password").invalid),n(l,34,0,"password"),n(l,40,0,o.form.get("confirmPassword").dirty&&o.form.getError("areEqual")),n(l,45,0,"confirmPassword"),n(l,51,0,o.form.get("maxCalories").dirty&&o.form.get("maxCalories").invalid),n(l,57,0,"maxCalories"),n(l,68,0,"isTrackingDisplayed"),n(l,77,0,"g-recaptcha-response")},function(n,l){var o=l.component;n(l,0,0,u["\u0275nov"](l,4).ngClassUntouched,u["\u0275nov"](l,4).ngClassTouched,u["\u0275nov"](l,4).ngClassPristine,u["\u0275nov"](l,4).ngClassDirty,u["\u0275nov"](l,4).ngClassValid,u["\u0275nov"](l,4).ngClassInvalid,u["\u0275nov"](l,4).ngClassPending),n(l,9,0,u["\u0275nov"](l,14).ngClassUntouched,u["\u0275nov"](l,14).ngClassTouched,u["\u0275nov"](l,14).ngClassPristine,u["\u0275nov"](l,14).ngClassDirty,u["\u0275nov"](l,14).ngClassValid,u["\u0275nov"](l,14).ngClassInvalid,u["\u0275nov"](l,14).ngClassPending),n(l,20,0,u["\u0275nov"](l,25).ngClassUntouched,u["\u0275nov"](l,25).ngClassTouched,u["\u0275nov"](l,25).ngClassPristine,u["\u0275nov"](l,25).ngClassDirty,u["\u0275nov"](l,25).ngClassValid,u["\u0275nov"](l,25).ngClassInvalid,u["\u0275nov"](l,25).ngClassPending),n(l,31,0,u["\u0275nov"](l,36).ngClassUntouched,u["\u0275nov"](l,36).ngClassTouched,u["\u0275nov"](l,36).ngClassPristine,u["\u0275nov"](l,36).ngClassDirty,u["\u0275nov"](l,36).ngClassValid,u["\u0275nov"](l,36).ngClassInvalid,u["\u0275nov"](l,36).ngClassPending),n(l,42,0,u["\u0275nov"](l,47).ngClassUntouched,u["\u0275nov"](l,47).ngClassTouched,u["\u0275nov"](l,47).ngClassPristine,u["\u0275nov"](l,47).ngClassDirty,u["\u0275nov"](l,47).ngClassValid,u["\u0275nov"](l,47).ngClassInvalid,u["\u0275nov"](l,47).ngClassPending),n(l,53,0,u["\u0275nov"](l,59).ngClassUntouched,u["\u0275nov"](l,59).ngClassTouched,u["\u0275nov"](l,59).ngClassPristine,u["\u0275nov"](l,59).ngClassDirty,u["\u0275nov"](l,59).ngClassValid,u["\u0275nov"](l,59).ngClassInvalid,u["\u0275nov"](l,59).ngClassPending),n(l,65,0,u["\u0275nov"](l,70).ngClassUntouched,u["\u0275nov"](l,70).ngClassTouched,u["\u0275nov"](l,70).ngClassPristine,u["\u0275nov"](l,70).ngClassDirty,u["\u0275nov"](l,70).ngClassValid,u["\u0275nov"](l,70).ngClassInvalid,u["\u0275nov"](l,70).ngClassPending),n(l,73,0,u["\u0275nov"](l,74).id,u["\u0275nov"](l,79).ngClassUntouched,u["\u0275nov"](l,79).ngClassTouched,u["\u0275nov"](l,79).ngClassPristine,u["\u0275nov"](l,79).ngClassDirty,u["\u0275nov"](l,79).ngClassValid,u["\u0275nov"](l,79).ngClassInvalid,u["\u0275nov"](l,79).ngClassPending),n(l,83,0,!o.form.valid),n(l,86,0,!o.form.valid)})}function U(n){return u["\u0275vid"](0,[(n()(),u["\u0275and"](16777216,null,null,1,null,L)),u["\u0275did"](1,16384,null,0,_.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),u["\u0275ted"](-1,null,["\n\n"])),(n()(),u["\u0275eld"](3,0,null,null,1,"app-social-sign-in",[],null,null,null,R.b,R.a)),u["\u0275did"](4,180224,null,0,V.a,[A.a,D.a,F.k,O.a,P.a],null,null),(n()(),u["\u0275ted"](-1,null,["\n\n\n"])),(n()(),u["\u0275eld"](6,0,null,null,8,"div",[["class","mt-4"]],null,null,null,null,null)),(n()(),u["\u0275ted"](-1,null,["\n    "])),(n()(),u["\u0275eld"](8,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),u["\u0275ted"](-1,null,["Already have an account?"])),(n()(),u["\u0275ted"](-1,null,["\n    "])),(n()(),u["\u0275eld"](11,0,null,null,2,"button",[["class","btn btn-default"],["routerLink","/login"]],null,[[null,"click"]],function(n,l,o){var e=!0;return"click"===l&&(e=!1!==u["\u0275nov"](n,12).onClick()&&e),e},null,null)),u["\u0275did"](12,16384,null,0,F.l,[F.k,F.a,[8,null],u.Renderer2,u.ElementRef],{routerLink:[0,"routerLink"]},null),(n()(),u["\u0275ted"](-1,null,["Login"])),(n()(),u["\u0275ted"](-1,null,["\n"])),(n()(),u["\u0275ted"](-1,null,["\n"]))],function(n,l){n(l,1,0,l.component.form),n(l,12,0,"/login")},null)}var G=u["\u0275ccf"]("ng-component",M,function(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,1,"ng-component",[],null,null,null,U,T)),u["\u0275did"](1,114688,null,0,M,[t.FormBuilder,D.a,P.a,F.k,I.a,O.a,F.a],null,null)],function(n,l){n(l,1,0)},null)},{},{},[]),w=o("jMGo"),x=o("YD79"),B=function(){function n(n,l,o,u,e,t){this.fb=n,this.dataService=l,this.sb=o,this.publicInfoService=u,this.router=e,this.authService=t}return n.prototype.ngOnInit=function(){this.buildForm()},n.prototype.buildForm=function(){this.form=this.fb.group({email:[this.publicInfoService.getEmail()||"",t.Validators.compose([t.Validators.required,t.Validators.email])],activationCode:["",t.Validators.compose([t.Validators.required,t.Validators.minLength(20),t.Validators.maxLength(20)])]})},n.prototype.submit=function(n){var l=this;this.dataService.activateFromBackEnd(n.activationCode,n.email).subscribe(function(n){l.authService.saveProfile(n.user),l.router.navigate(["my-profile"])},function(n){return l.sb.emitErrorSnackBar(n)})},n}(),q=u["\u0275crt"]({encapsulation:2,styles:[],data:{}});function j(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,30,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(n,l,o){var e=!0;return"submit"===l&&(e=!1!==u["\u0275nov"](n,2).onSubmit(o)&&e),"reset"===l&&(e=!1!==u["\u0275nov"](n,2).onReset()&&e),e},null,null)),u["\u0275did"](1,16384,null,0,t["\u0275bf"],[],null,null),u["\u0275did"](2,540672,null,0,t.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},null),u["\u0275prd"](2048,null,t.ControlContainer,null,[t.FormGroupDirective]),u["\u0275did"](4,16384,null,0,t.NgControlStatusGroup,[t.ControlContainer],null,null),(n()(),u["\u0275ted"](-1,null,["\n\n    "])),(n()(),u["\u0275eld"](6,0,null,null,9,"app-email-input-layout",[],null,null,null,r.b,r.a)),u["\u0275did"](7,49152,null,0,s.a,[],{isDisplayingErrorMessage:[0,"isDisplayingErrorMessage"]},null),(n()(),u["\u0275ted"](-1,0,["\n        "])),(n()(),u["\u0275eld"](9,0,null,0,5,"input",[["class","form-control"],["formControlName","email"],["name","email"],["type","email"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,o){var e=!0;return"input"===l&&(e=!1!==u["\u0275nov"](n,10)._handleInput(o.target.value)&&e),"blur"===l&&(e=!1!==u["\u0275nov"](n,10).onTouched()&&e),"compositionstart"===l&&(e=!1!==u["\u0275nov"](n,10)._compositionStart()&&e),"compositionend"===l&&(e=!1!==u["\u0275nov"](n,10)._compositionEnd(o.target.value)&&e),e},null,null)),u["\u0275did"](10,16384,null,0,t.DefaultValueAccessor,[u.Renderer2,u.ElementRef,[2,t.COMPOSITION_BUFFER_MODE]],null,null),u["\u0275prd"](1024,null,t.NG_VALUE_ACCESSOR,function(n){return[n]},[t.DefaultValueAccessor]),u["\u0275did"](12,671744,null,0,t.FormControlName,[[3,t.ControlContainer],[8,null],[8,null],[2,t.NG_VALUE_ACCESSOR]],{name:[0,"name"]},null),u["\u0275prd"](2048,null,t.NgControl,null,[t.FormControlName]),u["\u0275did"](14,16384,null,0,t.NgControlStatus,[t.NgControl],null,null),(n()(),u["\u0275ted"](-1,0,["\n    "])),(n()(),u["\u0275ted"](-1,null,["\n\n    "])),(n()(),u["\u0275eld"](17,0,null,null,9,"app-code-input-layout",[],null,null,null,w.b,w.a)),u["\u0275did"](18,49152,null,0,x.a,[],{isDisplayingErrorMessage:[0,"isDisplayingErrorMessage"]},null),(n()(),u["\u0275ted"](-1,0,["\n        "])),(n()(),u["\u0275eld"](20,0,null,0,5,"input",[["class","form-control"],["formControlName","activationCode"],["label","Activation Code"],["name","activationCode"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,o){var e=!0;return"input"===l&&(e=!1!==u["\u0275nov"](n,21)._handleInput(o.target.value)&&e),"blur"===l&&(e=!1!==u["\u0275nov"](n,21).onTouched()&&e),"compositionstart"===l&&(e=!1!==u["\u0275nov"](n,21)._compositionStart()&&e),"compositionend"===l&&(e=!1!==u["\u0275nov"](n,21)._compositionEnd(o.target.value)&&e),e},null,null)),u["\u0275did"](21,16384,null,0,t.DefaultValueAccessor,[u.Renderer2,u.ElementRef,[2,t.COMPOSITION_BUFFER_MODE]],null,null),u["\u0275prd"](1024,null,t.NG_VALUE_ACCESSOR,function(n){return[n]},[t.DefaultValueAccessor]),u["\u0275did"](23,671744,null,0,t.FormControlName,[[3,t.ControlContainer],[8,null],[8,null],[2,t.NG_VALUE_ACCESSOR]],{name:[0,"name"]},null),u["\u0275prd"](2048,null,t.NgControl,null,[t.FormControlName]),u["\u0275did"](25,16384,null,0,t.NgControlStatus,[t.NgControl],null,null),(n()(),u["\u0275ted"](-1,0,["\n    "])),(n()(),u["\u0275ted"](-1,null,["\n\n    "])),(n()(),u["\u0275eld"](28,0,null,null,1,"button",[["class","btn btn-default"],["type","submit"]],[[8,"disabled",0]],[[null,"click"]],function(n,l,o){var u=!0,e=n.component;return"click"===l&&(u=!1!==e.submit(e.form.value)&&u),u},null,null)),(n()(),u["\u0275ted"](-1,null,["Activate"])),(n()(),u["\u0275ted"](-1,null,["\n"]))],function(n,l){var o=l.component;n(l,2,0,o.form),n(l,7,0,o.form.get("email").dirty&&o.form.get("email").invalid),n(l,12,0,"email"),n(l,18,0,o.form.get("activationCode").dirty&&o.form.get("activationCode").invalid),n(l,23,0,"activationCode")},function(n,l){var o=l.component;n(l,0,0,u["\u0275nov"](l,4).ngClassUntouched,u["\u0275nov"](l,4).ngClassTouched,u["\u0275nov"](l,4).ngClassPristine,u["\u0275nov"](l,4).ngClassDirty,u["\u0275nov"](l,4).ngClassValid,u["\u0275nov"](l,4).ngClassInvalid,u["\u0275nov"](l,4).ngClassPending),n(l,9,0,u["\u0275nov"](l,14).ngClassUntouched,u["\u0275nov"](l,14).ngClassTouched,u["\u0275nov"](l,14).ngClassPristine,u["\u0275nov"](l,14).ngClassDirty,u["\u0275nov"](l,14).ngClassValid,u["\u0275nov"](l,14).ngClassInvalid,u["\u0275nov"](l,14).ngClassPending),n(l,20,0,u["\u0275nov"](l,25).ngClassUntouched,u["\u0275nov"](l,25).ngClassTouched,u["\u0275nov"](l,25).ngClassPristine,u["\u0275nov"](l,25).ngClassDirty,u["\u0275nov"](l,25).ngClassValid,u["\u0275nov"](l,25).ngClassInvalid,u["\u0275nov"](l,25).ngClassPending),n(l,28,0,!o.form.valid)})}function H(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,7,"div",[["class","jumbotron"]],null,null,null,null,null)),(n()(),u["\u0275ted"](-1,null,["\n    "])),(n()(),u["\u0275eld"](2,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),u["\u0275ted"](-1,null,["Activation"])),(n()(),u["\u0275ted"](-1,null,["\n    "])),(n()(),u["\u0275eld"](5,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),u["\u0275ted"](-1,null,["You have registerd successfully. Please check your email for an activation code "])),(n()(),u["\u0275ted"](-1,null,["\n"])),(n()(),u["\u0275ted"](-1,null,["\n\n\n"])),(n()(),u["\u0275and"](16777216,null,null,1,null,j)),u["\u0275did"](10,16384,null,0,_.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,10,0,l.component.form)},null)}var K=u["\u0275ccf"]("ng-component",B,function(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,1,"ng-component",[],null,null,null,H,q)),u["\u0275did"](1,114688,null,0,B,[t.FormBuilder,D.a,P.a,I.a,F.k,O.a],null,null)],function(n,l){n(l,1,0)},null)},{},{},[]),Y=function(){},J=u["\u0275crt"]({encapsulation:2,styles:[],data:{}});function X(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,11,"div",[["class","jumbotron"]],null,null,null,null,null)),(n()(),u["\u0275ted"](-1,null,["\n    "])),(n()(),u["\u0275eld"](2,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),u["\u0275ted"](-1,null,["Congratz"])),(n()(),u["\u0275ted"](-1,null,["\n    "])),(n()(),u["\u0275eld"](5,0,null,null,5,"p",[],null,null,null,null,null)),(n()(),u["\u0275ted"](-1,null,["You have registerd successfully.\n        "])),(n()(),u["\u0275eld"](7,0,null,null,2,"a",[["routerLink","/"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,o){var e=!0;return"click"===l&&(e=!1!==u["\u0275nov"](n,8).onClick(o.button,o.ctrlKey,o.metaKey,o.shiftKey)&&e),e},null,null)),u["\u0275did"](8,671744,null,0,F.n,[F.k,F.a,_.LocationStrategy],{routerLink:[0,"routerLink"]},null),(n()(),u["\u0275ted"](-1,null,[" Click here to login "])),(n()(),u["\u0275ted"](-1,null,["\n    "])),(n()(),u["\u0275ted"](-1,null,["\n"]))],function(n,l){n(l,8,0,"/")},function(n,l){n(l,7,0,u["\u0275nov"](l,8).target,u["\u0275nov"](l,8).href)})}var z=u["\u0275ccf"]("ng-component",Y,function(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,1,"ng-component",[],null,null,null,X,J)),u["\u0275did"](1,49152,null,0,Y,[],null,null)],null,null)},{},{},[]),W=o("oh0W"),Q=function(){},Z=o("k/JH"),$=o("/XuX"),nn=o("7gRN"),ln=o("nD62"),on=o("aat6");o.d(l,"SignupModuleNgFactory",function(){return un});var un=u["\u0275cmf"](e,[],function(n){return u["\u0275mod"]([u["\u0275mpd"](512,u.ComponentFactoryResolver,u["\u0275CodegenComponentFactoryResolver"],[[8,[G,K,z]],[3,u.ComponentFactoryResolver],u.NgModuleRef]),u["\u0275mpd"](4608,t["\u0275i"],t["\u0275i"],[]),u["\u0275mpd"](4608,t.FormBuilder,t.FormBuilder,[]),u["\u0275mpd"](4608,_.NgLocalization,_.NgLocaleLocalization,[u.LOCALE_ID,[2,_["\u0275a"]]]),u["\u0275mpd"](4608,b.RecaptchaLoaderService,b.RecaptchaLoaderService,[u.PLATFORM_ID,[2,b.RECAPTCHA_LANGUAGE]]),u["\u0275mpd"](512,W.a,W.a,[]),u["\u0275mpd"](512,F.o,F.o,[[2,F.t],[2,F.k]]),u["\u0275mpd"](512,Q,Q,[]),u["\u0275mpd"](512,t["\u0275ba"],t["\u0275ba"],[]),u["\u0275mpd"](512,t.FormsModule,t.FormsModule,[]),u["\u0275mpd"](512,t.ReactiveFormsModule,t.ReactiveFormsModule,[]),u["\u0275mpd"](512,_.CommonModule,_.CommonModule,[]),u["\u0275mpd"](512,Z.a,Z.a,[]),u["\u0275mpd"](512,$.a,$.a,[]),u["\u0275mpd"](512,nn.RecaptchaCommonModule,nn.RecaptchaCommonModule,[]),u["\u0275mpd"](512,ln.RecaptchaModule,ln.RecaptchaModule,[]),u["\u0275mpd"](512,on.RecaptchaFormsModule,on.RecaptchaFormsModule,[]),u["\u0275mpd"](512,e,e,[]),u["\u0275mpd"](1024,F.i,function(){return[[{path:"",component:M},{path:"activate",component:B},{path:"success",component:Y}]]},[])])})}});