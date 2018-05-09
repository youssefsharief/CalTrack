webpackJsonp([3],{x79a:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t("WT6e"),l=function(){},d=t("Y9Rh"),u=t("TVQ9"),i=t("efkn"),o=t("QPZ0"),c=t("qOnH"),r=t("Cfpr"),m=t("bPod"),p=t("YG5c"),s=t("YMk0"),f=t("Y+4w"),v=t("bfOx"),b=t("jl5J"),h=function(){function e(e,n,t,a){this.router=e,this.authService=n,this.dataService=t,this.sb=a,this.userId=this.authService.getId()}return e.prototype.onAddClicked=function(){this.router.navigate(["/my-meals/add"])},e.prototype.onEditClicked=function(e){this.router.navigate(["/my-meals",e._id])},e}(),g=a["\u0275crt"]({encapsulation:2,styles:[],data:{}});function S(e){return a["\u0275vid"](0,[(e()(),a["\u0275eld"](0,0,null,null,1,"app-meals",[["title","My meals"]],null,[[null,"addClicked"],[null,"editClicked"]],function(e,n,t){var a=!0,l=e.component;return"addClicked"===n&&(a=!1!==l.onAddClicked()&&a),"editClicked"===n&&(a=!1!==l.onEditClicked(t)&&a),a},o.b,o.a)),a["\u0275did"](1,114688,null,0,c.a,[r.a,m.a,p.a,s.a,f.a],{userId:[0,"userId"],title:[1,"title"]},{addClicked:"addClicked",editClicked:"editClicked"})],function(e,n){e(n,1,0,n.component.userId,"My meals")},null)}var k=a["\u0275ccf"]("ng-component",h,function(e){return a["\u0275vid"](0,[(e()(),a["\u0275eld"](0,0,null,null,1,"ng-component",[],null,null,null,S,g)),a["\u0275did"](1,49152,null,0,h,[v.k,b.a,m.a,p.a],null,null)],null,null)},{},{},[]),M=t("28+m"),C=t("nTFQ"),y=t("KtPz"),R=t("9OXo"),I=t("7DMc"),O=function(){function e(e,n,t,a,l){this.authService=e,this.router=n,this.dataService=t,this.sb=a,this.caloriesTrackingSubjectService=l}return e.prototype.onSubmitted=function(e){var n=this;this.dataService.addMeal(this.authService.getId(),e).subscribe(function(e){n.sb.emitSuccessSnackBar(),n.caloriesTrackingSubjectService.updated$.next(),n.router.navigate(["/my-meals"])},function(e){return n.sb.emitErrorSnackBar(e)})},e}(),B=a["\u0275crt"]({encapsulation:2,styles:[],data:{}});function N(e){return a["\u0275vid"](0,[(e()(),a["\u0275eld"](0,0,null,null,2,"app-title",[],null,null,null,M.b,M.a)),a["\u0275did"](1,49152,null,0,C.a,[],null,null),(e()(),a["\u0275ted"](-1,0,["Add to My meals"])),(e()(),a["\u0275ted"](-1,null,["\n"])),(e()(),a["\u0275eld"](4,0,null,null,1,"app-meal-form",[],null,[[null,"submitted"]],function(e,n,t){var a=!0;return"submitted"===n&&(a=!1!==e.component.onSubmitted(t)&&a),a},y.b,y.a)),a["\u0275did"](5,114688,null,0,R.a,[I.FormBuilder,s.a],null,{submitted:"submitted"})],function(e,n){e(n,5,0)},null)}var F=a["\u0275ccf"]("ng-component",O,function(e){return a["\u0275vid"](0,[(e()(),a["\u0275eld"](0,0,null,null,1,"ng-component",[],null,null,null,N,B)),a["\u0275did"](1,49152,null,0,O,[b.a,v.k,m.a,p.a,f.a],null,null)],null,null)},{},{},[]),T=t("Xjw4"),j=(t("HUnO"),function(){function e(e,n,t,a,l,d,u){this.authService=e,this.router=n,this.route=t,this.dataService=a,this.sb=l,this.mealsService=d,this.caloriesTrackingSubjectService=u}return e.prototype.ngOnInit=function(){this.meal=this.mealsService.getSelectedMeal(),this.meal||this.fetchForMeal()},e.prototype.fetchForMeal=function(){var e=this;this.route.params.first().flatMap(function(n){return e.dataService.getMeal(e.authService.getId(),n.mealId)}).subscribe(function(n){n?e.meal=n:e.navigateBack()},function(n){return e.navigateBack()})},e.prototype.onSubmitted=function(e){var n=this;this.dataService.updateMeal(this.authService.getId(),this.meal._id,e).subscribe(function(e){n.sb.emitSuccessSnackBar(),n.navigateBack(),n.caloriesTrackingSubjectService.updated$.next()},function(e){return n.sb.emitErrorSnackBar(e)})},e.prototype.navigateBack=function(){this.router.navigate(["my-meals"])},e}()),E=a["\u0275crt"]({encapsulation:2,styles:[],data:{}});function U(e){return a["\u0275vid"](0,[(e()(),a["\u0275eld"](0,0,null,null,2,"app-title",[],null,null,null,M.b,M.a)),a["\u0275did"](1,49152,null,0,C.a,[],null,null),(e()(),a["\u0275ted"](2,0,["Update "," Meal"]))],null,function(e,n){e(n,2,0,n.component.meal.name)})}function X(e){return a["\u0275vid"](0,[(e()(),a["\u0275eld"](0,0,null,null,1,"app-meal-form",[],null,[[null,"submitted"]],function(e,n,t){var a=!0;return"submitted"===n&&(a=!1!==e.component.onSubmitted(t)&&a),a},y.b,y.a)),a["\u0275did"](1,114688,null,0,R.a,[I.FormBuilder,s.a],{meal:[0,"meal"]},{submitted:"submitted"})],function(e,n){e(n,1,0,n.component.meal)},null)}function D(e){return a["\u0275vid"](0,[(e()(),a["\u0275and"](16777216,null,null,1,null,U)),a["\u0275did"](1,16384,null,0,T.NgIf,[a.ViewContainerRef,a.TemplateRef],{ngIf:[0,"ngIf"]},null),(e()(),a["\u0275ted"](-1,null,["\n"])),(e()(),a["\u0275and"](16777216,null,null,1,null,X)),a["\u0275did"](4,16384,null,0,T.NgIf,[a.ViewContainerRef,a.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(e,n){var t=n.component;e(n,1,0,t.meal),e(n,4,0,t.meal&&t.meal.name)},null)}var w=a["\u0275ccf"]("ng-component",j,function(e){return a["\u0275vid"](0,[(e()(),a["\u0275eld"](0,0,null,null,1,"ng-component",[],null,null,null,D,E)),a["\u0275did"](1,114688,null,0,j,[b.a,v.k,v.a,m.a,p.a,r.a,f.a],null,null)],function(e,n){e(n,1,0)},null)},{},{},[]),H=t("Ir/h"),Z=t("fdm+"),A=t("NOoU"),Y=t("9Sd6"),x=t("XHgV"),q=t("1T37"),L=t("+j5Y"),V=t("Mcof"),_=t("U/+3"),z=t("p5vt"),J=t("ahs1"),P=t("v7E4"),Q=t("/CuN"),G=t("F6a+"),K=t("j+wb"),$=t("J7b6"),W=t("G4lj"),ee=t("U3BX"),ne=t("tTsl"),te=t("KYR2"),ae=t("xVG+"),le=t("2DZx"),de=t("w4d5"),ue=t("jbys"),ie=t("Ecz0"),oe=t("RUMn"),ce=t("bkcK"),re=t("Uo70"),me=t("k/JH"),pe=t("e1Eq"),se=t("1cQ4"),fe=t("fAE3"),ve=function(){},be=t("9D0e"),he=t("OaiI"),ge=t("Yc81"),Se=t("/XuX"),ke=t("jUca");t.d(n,"MyMealsModuleNgFactory",function(){return Me});var Me=a["\u0275cmf"](l,[],function(e){return a["\u0275mod"]([a["\u0275mpd"](512,a.ComponentFactoryResolver,a["\u0275CodegenComponentFactoryResolver"],[[8,[d.a,u.a,i.a,i.b,k,F,w,H.a,Z.a]],[3,a.ComponentFactoryResolver],a.NgModuleRef]),a["\u0275mpd"](4608,T.NgLocalization,T.NgLocaleLocalization,[a.LOCALE_ID,[2,T["\u0275a"]]]),a["\u0275mpd"](4608,I["\u0275i"],I["\u0275i"],[]),a["\u0275mpd"](4608,I.FormBuilder,I.FormBuilder,[]),a["\u0275mpd"](4608,A.BrowserXhr,A.BrowserXhr,[]),a["\u0275mpd"](4608,A.ResponseOptions,A.BaseResponseOptions,[]),a["\u0275mpd"](5120,A.XSRFStrategy,A["\u0275a"],[]),a["\u0275mpd"](4608,A.XHRBackend,A.XHRBackend,[A.BrowserXhr,A.ResponseOptions,A.XSRFStrategy]),a["\u0275mpd"](4608,A.RequestOptions,A.BaseRequestOptions,[]),a["\u0275mpd"](5120,A.Http,A["\u0275b"],[A.XHRBackend,A.RequestOptions]),a["\u0275mpd"](6144,Y.b,null,[T.DOCUMENT]),a["\u0275mpd"](4608,Y.c,Y.c,[[2,Y.b]]),a["\u0275mpd"](4608,x.a,x.a,[]),a["\u0275mpd"](5120,q.c,q.a,[[3,q.c],a.NgZone,x.a]),a["\u0275mpd"](5120,q.f,q.e,[[3,q.f],x.a,a.NgZone]),a["\u0275mpd"](4608,L.g,L.g,[q.c,q.f,a.NgZone,T.DOCUMENT]),a["\u0275mpd"](5120,L.c,L.h,[[3,L.c],T.DOCUMENT]),a["\u0275mpd"](4608,L.f,L.f,[q.f,T.DOCUMENT]),a["\u0275mpd"](5120,L.d,L.k,[[3,L.d],T.DOCUMENT]),a["\u0275mpd"](4608,L.a,L.a,[L.g,L.c,a.ComponentFactoryResolver,L.f,L.d,a.ApplicationRef,a.Injector,a.NgZone,T.DOCUMENT]),a["\u0275mpd"](5120,L.i,L.j,[L.a]),a["\u0275mpd"](4608,V.d,V.d,[x.a]),a["\u0275mpd"](135680,V.a,V.a,[V.d,a.NgZone]),a["\u0275mpd"](5120,_.e,_.d,[[3,_.e],[2,_.c],T.DOCUMENT]),a["\u0275mpd"](4608,z.b,z.b,[L.a,_.e,a.Injector,V.a,[3,z.b]]),a["\u0275mpd"](4608,J.a,J.a,[]),a["\u0275mpd"](4608,P.a,P.a,[]),a["\u0275mpd"](4608,Q.a,Q.a,[]),a["\u0275mpd"](4608,G.a,G.a,[a.ComponentFactoryResolver,a.NgZone,a.Injector,Q.a,a.ApplicationRef]),a["\u0275mpd"](4608,K.a,K.a,[]),a["\u0275mpd"](4608,$.a,$.a,[]),a["\u0275mpd"](4608,W.a,W.a,[]),a["\u0275mpd"](4608,ee.a,ee.a,[]),a["\u0275mpd"](4608,ne.a,ne.a,[]),a["\u0275mpd"](4608,te.a,te.a,[]),a["\u0275mpd"](4608,ae.a,ae.a,[W.a,te.a]),a["\u0275mpd"](4608,le.a,le.a,[]),a["\u0275mpd"](4608,de.a,de.a,[]),a["\u0275mpd"](4608,ue.a,ue.a,[]),a["\u0275mpd"](512,T.CommonModule,T.CommonModule,[]),a["\u0275mpd"](512,I["\u0275ba"],I["\u0275ba"],[]),a["\u0275mpd"](512,I.FormsModule,I.FormsModule,[]),a["\u0275mpd"](512,I.ReactiveFormsModule,I.ReactiveFormsModule,[]),a["\u0275mpd"](512,ie.a,ie.a,[]),a["\u0275mpd"](512,oe.a,oe.a,[]),a["\u0275mpd"](512,A.HttpModule,A.HttpModule,[]),a["\u0275mpd"](512,v.o,v.o,[[2,v.t],[2,v.k]]),a["\u0275mpd"](512,Y.a,Y.a,[]),a["\u0275mpd"](512,ce.g,ce.g,[]),a["\u0275mpd"](512,x.b,x.b,[]),a["\u0275mpd"](512,q.b,q.b,[]),a["\u0275mpd"](512,L.e,L.e,[]),a["\u0275mpd"](256,re.c,!0,[]),a["\u0275mpd"](512,re.d,re.d,[[2,re.c]]),a["\u0275mpd"](512,V.c,V.c,[]),a["\u0275mpd"](512,z.d,z.d,[]),a["\u0275mpd"](512,J.c,J.c,[]),a["\u0275mpd"](512,me.a,me.a,[]),a["\u0275mpd"](512,pe.a,pe.a,[]),a["\u0275mpd"](512,se.a,se.a,[]),a["\u0275mpd"](512,fe.a,fe.a,[]),a["\u0275mpd"](512,ve,ve,[]),a["\u0275mpd"](512,be.a,be.a,[]),a["\u0275mpd"](512,he.a,he.a,[]),a["\u0275mpd"](512,ge.a,ge.a,[]),a["\u0275mpd"](512,Se.a,Se.a,[]),a["\u0275mpd"](512,ke.a,ke.a,[]),a["\u0275mpd"](512,l,l,[]),a["\u0275mpd"](1024,v.i,function(){return[[{path:"",component:h},{path:"add",component:O},{path:":mealId",component:j}]]},[])])})}});