webpackJsonp([3],{x79a:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var l=t("WT6e"),a=function(){},d=t("Y9Rh"),u=t("TVQ9"),i=t("efkn"),o=t("28+m"),c=t("nTFQ"),r=t("QPZ0"),m=t("qOnH"),p=t("Cfpr"),s=t("bPod"),f=t("YG5c"),v=t("YMk0"),b=t("Y+4w"),h=t("3tpO"),g=t("bfOx"),S=t("jl5J"),k=function(){function e(e,n,t,l){this.router=e,this.authService=n,this.dataService=t,this.sb=l,this.userId=this.authService.getId()}return e.prototype.onAddClicked=function(){this.router.navigate(["/my-meals/add"])},e.prototype.onEditClicked=function(e){this.router.navigate(["/my-meals",e._id])},e}(),M=l["\u0275crt"]({encapsulation:2,styles:[],data:{}});function C(e){return l["\u0275vid"](0,[(e()(),l["\u0275eld"](0,0,null,null,2,"app-title",[],null,null,null,o.b,o.a)),l["\u0275did"](1,49152,null,0,c.a,[],null,null),(e()(),l["\u0275ted"](-1,0,[" My meals "])),(e()(),l["\u0275ted"](-1,null,["\n\n\n\n"])),(e()(),l["\u0275eld"](4,0,null,null,7,"app-meals",[["emptyMealsText","You have no meals yet :("]],null,[[null,"addClicked"],[null,"editClicked"]],function(e,n,t){var l=!0,a=e.component;return"addClicked"===n&&(l=!1!==a.onAddClicked()&&l),"editClicked"===n&&(l=!1!==a.onEditClicked(t)&&l),l},r.b,r.a)),l["\u0275did"](5,114688,null,0,m.a,[p.a,s.a,f.a,v.a,b.a,h.a,l.ChangeDetectorRef],{userId:[0,"userId"],emptyMealsText:[1,"emptyMealsText"]},{addClicked:"addClicked",editClicked:"editClicked"}),(e()(),l["\u0275ted"](-1,0,["\n    "])),(e()(),l["\u0275eld"](7,0,null,0,3,"button",[["class","btn btn-default"]],null,[[null,"click"]],function(e,n,t){var a=!0;return"click"===n&&(a=!1!==l["\u0275nov"](e,8).onClick()&&a),a},null,null)),l["\u0275did"](8,16384,null,0,g.m,[g.l,g.a,[8,null],l.Renderer2,l.ElementRef],{routerLink:[0,"routerLink"]},null),l["\u0275pad"](9,2),(e()(),l["\u0275ted"](-1,null,["Add meal"])),(e()(),l["\u0275ted"](-1,0,["\n"]))],function(e,n){e(n,5,0,n.component.userId,"You have no meals yet :("),e(n,8,0,e(n,9,0,"/my-meals","add"))},null)}var y=l["\u0275ccf"]("ng-component",k,function(e){return l["\u0275vid"](0,[(e()(),l["\u0275eld"](0,0,null,null,1,"ng-component",[],null,null,null,C,M)),l["\u0275did"](1,49152,null,0,k,[g.l,S.a,s.a,f.a],null,null)],null,null)},{},{},[]),R=t("KtPz"),I=t("9OXo"),O=t("7DMc"),B=function(){function e(e,n,t,l,a){this.authService=e,this.router=n,this.dataService=t,this.sb=l,this.caloriesTrackingSubjectService=a}return e.prototype.onSubmitted=function(e){var n=this;this.dataService.addMeal(this.authService.getId(),e).subscribe(function(e){n.sb.emitSuccessSnackBar(),n.caloriesTrackingSubjectService.updated$.next(),n.router.navigate(["/my-meals"])},function(e){return n.sb.emitErrorSnackBar(e.msg)})},e}(),N=l["\u0275crt"]({encapsulation:2,styles:[],data:{}});function T(e){return l["\u0275vid"](0,[(e()(),l["\u0275eld"](0,0,null,null,2,"app-title",[],null,null,null,o.b,o.a)),l["\u0275did"](1,49152,null,0,c.a,[],null,null),(e()(),l["\u0275ted"](-1,0,["Add to My meals"])),(e()(),l["\u0275ted"](-1,null,["\n"])),(e()(),l["\u0275eld"](4,0,null,null,1,"app-meal-form",[],null,[[null,"submitted"]],function(e,n,t){var l=!0;return"submitted"===n&&(l=!1!==e.component.onSubmitted(t)&&l),l},R.b,R.a)),l["\u0275did"](5,114688,null,0,I.a,[O.FormBuilder,v.a],null,{submitted:"submitted"})],function(e,n){e(n,5,0)},null)}var F=l["\u0275ccf"]("ng-component",B,function(e){return l["\u0275vid"](0,[(e()(),l["\u0275eld"](0,0,null,null,1,"ng-component",[],null,null,null,T,N)),l["\u0275did"](1,49152,null,0,B,[S.a,g.l,s.a,f.a,b.a],null,null)],null,null)},{},{},[]),j=t("Xjw4"),E=(t("HUnO"),function(){function e(e,n,t,l,a,d,u){this.authService=e,this.router=n,this.route=t,this.dataService=l,this.sb=a,this.mealsService=d,this.caloriesTrackingSubjectService=u}return e.prototype.ngOnInit=function(){this.meal=this.mealsService.getSelectedMeal(),this.meal||this.fetchForMeal()},e.prototype.fetchForMeal=function(){var e=this;this.route.params.first().flatMap(function(n){return e.dataService.getMeal(e.authService.getId(),n.mealId)}).subscribe(function(n){n?e.meal=n:e.navigateBack()},function(n){return e.navigateBack()})},e.prototype.onSubmitted=function(e){var n=this;this.dataService.updateMeal(this.authService.getId(),this.meal._id,e).subscribe(function(e){n.sb.emitSuccessSnackBar(),n.navigateBack(),n.caloriesTrackingSubjectService.updated$.next()},function(e){return n.sb.emitErrorSnackBar(e.msg)})},e.prototype.navigateBack=function(){this.router.navigate(["my-meals"])},e}()),U=l["\u0275crt"]({encapsulation:2,styles:[],data:{}});function X(e){return l["\u0275vid"](0,[(e()(),l["\u0275eld"](0,0,null,null,2,"app-title",[],null,null,null,o.b,o.a)),l["\u0275did"](1,49152,null,0,c.a,[],null,null),(e()(),l["\u0275ted"](2,0,["Update "," Meal"]))],null,function(e,n){e(n,2,0,n.component.meal.name)})}function D(e){return l["\u0275vid"](0,[(e()(),l["\u0275eld"](0,0,null,null,1,"app-meal-form",[],null,[[null,"submitted"]],function(e,n,t){var l=!0;return"submitted"===n&&(l=!1!==e.component.onSubmitted(t)&&l),l},R.b,R.a)),l["\u0275did"](1,114688,null,0,I.a,[O.FormBuilder,v.a],{meal:[0,"meal"]},{submitted:"submitted"})],function(e,n){e(n,1,0,n.component.meal)},null)}function w(e){return l["\u0275vid"](0,[(e()(),l["\u0275and"](16777216,null,null,1,null,X)),l["\u0275did"](1,16384,null,0,j.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(e()(),l["\u0275ted"](-1,null,["\n"])),(e()(),l["\u0275and"](16777216,null,null,1,null,D)),l["\u0275did"](4,16384,null,0,j.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(e,n){var t=n.component;e(n,1,0,t.meal),e(n,4,0,t.meal&&t.meal.name)},null)}var H=l["\u0275ccf"]("ng-component",E,function(e){return l["\u0275vid"](0,[(e()(),l["\u0275eld"](0,0,null,null,1,"ng-component",[],null,null,null,w,U)),l["\u0275did"](1,114688,null,0,E,[S.a,g.l,g.a,s.a,f.a,p.a,b.a],null,null)],function(e,n){e(n,1,0)},null)},{},{},[]),x=t("Ir/h"),Y=t("fdm+"),A=t("NOoU"),Z=t("9Sd6"),L=t("XHgV"),q=t("1T37"),V=t("+j5Y"),_=t("Mcof"),z=t("U/+3"),J=t("p5vt"),P=t("ahs1"),Q=t("v7E4"),G=t("/CuN"),K=t("F6a+"),$=t("j+wb"),W=t("J7b6"),ee=t("G4lj"),ne=t("U3BX"),te=t("tTsl"),le=t("KYR2"),ae=t("xVG+"),de=t("2DZx"),ue=t("w4d5"),ie=t("jbys"),oe=t("Ecz0"),ce=t("RUMn"),re=t("bkcK"),me=t("Uo70"),pe=t("k/JH"),se=t("e1Eq"),fe=t("1cQ4"),ve=t("fAE3"),be=function(){},he=t("9D0e"),ge=t("OaiI"),Se=t("Yc81"),ke=t("/XuX"),Me=t("jUca");t.d(n,"MyMealsModuleNgFactory",function(){return Ce});var Ce=l["\u0275cmf"](a,[],function(e){return l["\u0275mod"]([l["\u0275mpd"](512,l.ComponentFactoryResolver,l["\u0275CodegenComponentFactoryResolver"],[[8,[d.a,u.a,i.a,i.b,y,F,H,x.a,Y.a]],[3,l.ComponentFactoryResolver],l.NgModuleRef]),l["\u0275mpd"](4608,j.NgLocalization,j.NgLocaleLocalization,[l.LOCALE_ID,[2,j["\u0275a"]]]),l["\u0275mpd"](4608,O["\u0275i"],O["\u0275i"],[]),l["\u0275mpd"](4608,O.FormBuilder,O.FormBuilder,[]),l["\u0275mpd"](4608,A.BrowserXhr,A.BrowserXhr,[]),l["\u0275mpd"](4608,A.ResponseOptions,A.BaseResponseOptions,[]),l["\u0275mpd"](5120,A.XSRFStrategy,A["\u0275a"],[]),l["\u0275mpd"](4608,A.XHRBackend,A.XHRBackend,[A.BrowserXhr,A.ResponseOptions,A.XSRFStrategy]),l["\u0275mpd"](4608,A.RequestOptions,A.BaseRequestOptions,[]),l["\u0275mpd"](5120,A.Http,A["\u0275b"],[A.XHRBackend,A.RequestOptions]),l["\u0275mpd"](6144,Z.b,null,[j.DOCUMENT]),l["\u0275mpd"](4608,Z.c,Z.c,[[2,Z.b]]),l["\u0275mpd"](4608,L.a,L.a,[]),l["\u0275mpd"](5120,q.c,q.a,[[3,q.c],l.NgZone,L.a]),l["\u0275mpd"](5120,q.f,q.e,[[3,q.f],L.a,l.NgZone]),l["\u0275mpd"](4608,V.g,V.g,[q.c,q.f,l.NgZone,j.DOCUMENT]),l["\u0275mpd"](5120,V.c,V.h,[[3,V.c],j.DOCUMENT]),l["\u0275mpd"](4608,V.f,V.f,[q.f,j.DOCUMENT]),l["\u0275mpd"](5120,V.d,V.k,[[3,V.d],j.DOCUMENT]),l["\u0275mpd"](4608,V.a,V.a,[V.g,V.c,l.ComponentFactoryResolver,V.f,V.d,l.ApplicationRef,l.Injector,l.NgZone,j.DOCUMENT]),l["\u0275mpd"](5120,V.i,V.j,[V.a]),l["\u0275mpd"](4608,_.d,_.d,[L.a]),l["\u0275mpd"](135680,_.a,_.a,[_.d,l.NgZone]),l["\u0275mpd"](5120,z.e,z.d,[[3,z.e],[2,z.c],j.DOCUMENT]),l["\u0275mpd"](4608,J.b,J.b,[V.a,z.e,l.Injector,_.a,[3,J.b]]),l["\u0275mpd"](4608,P.a,P.a,[]),l["\u0275mpd"](4608,Q.a,Q.a,[]),l["\u0275mpd"](4608,G.a,G.a,[]),l["\u0275mpd"](4608,K.a,K.a,[l.ComponentFactoryResolver,l.NgZone,l.Injector,G.a,l.ApplicationRef]),l["\u0275mpd"](4608,$.a,$.a,[]),l["\u0275mpd"](4608,W.a,W.a,[]),l["\u0275mpd"](4608,ee.a,ee.a,[]),l["\u0275mpd"](4608,ne.a,ne.a,[]),l["\u0275mpd"](4608,te.a,te.a,[]),l["\u0275mpd"](4608,le.a,le.a,[]),l["\u0275mpd"](4608,ae.a,ae.a,[ee.a,le.a]),l["\u0275mpd"](4608,de.a,de.a,[]),l["\u0275mpd"](4608,ue.a,ue.a,[]),l["\u0275mpd"](4608,ie.a,ie.a,[]),l["\u0275mpd"](4608,h.a,h.a,[f.a]),l["\u0275mpd"](512,j.CommonModule,j.CommonModule,[]),l["\u0275mpd"](512,O["\u0275ba"],O["\u0275ba"],[]),l["\u0275mpd"](512,O.FormsModule,O.FormsModule,[]),l["\u0275mpd"](512,O.ReactiveFormsModule,O.ReactiveFormsModule,[]),l["\u0275mpd"](512,oe.a,oe.a,[]),l["\u0275mpd"](512,ce.a,ce.a,[]),l["\u0275mpd"](512,A.HttpModule,A.HttpModule,[]),l["\u0275mpd"](512,g.p,g.p,[[2,g.u],[2,g.l]]),l["\u0275mpd"](512,Z.a,Z.a,[]),l["\u0275mpd"](512,re.g,re.g,[]),l["\u0275mpd"](512,L.b,L.b,[]),l["\u0275mpd"](512,q.b,q.b,[]),l["\u0275mpd"](512,V.e,V.e,[]),l["\u0275mpd"](256,me.c,!0,[]),l["\u0275mpd"](512,me.d,me.d,[[2,me.c]]),l["\u0275mpd"](512,_.c,_.c,[]),l["\u0275mpd"](512,J.d,J.d,[]),l["\u0275mpd"](512,P.c,P.c,[]),l["\u0275mpd"](512,pe.a,pe.a,[]),l["\u0275mpd"](512,se.a,se.a,[]),l["\u0275mpd"](512,fe.a,fe.a,[]),l["\u0275mpd"](512,ve.a,ve.a,[]),l["\u0275mpd"](512,be,be,[]),l["\u0275mpd"](512,he.a,he.a,[]),l["\u0275mpd"](512,ge.a,ge.a,[]),l["\u0275mpd"](512,Se.a,Se.a,[]),l["\u0275mpd"](512,ke.a,ke.a,[]),l["\u0275mpd"](512,Me.a,Me.a,[]),l["\u0275mpd"](512,a,a,[]),l["\u0275mpd"](1024,g.j,function(){return[[{path:"",component:k},{path:"add",component:B},{path:":mealId",component:E}]]},[])])})}});