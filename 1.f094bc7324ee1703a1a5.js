(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{Sv8u:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),t=function(){},a=u("pMnS"),d=u("ZYCi"),i=u("Ip0R"),c=u("sdOs"),o=u("vPfJ"),s=u("OQnT"),r=e["\u0275crt"]({encapsulation:2,styles:[],data:{}});function p(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"span",[["class","bs-remove-tab"]],null,[[null,"click"]],function(l,n,u){var e=!0,t=l.component;return"click"===n&&(u.preventDefault(),e=!1!==t.removeTab(l.parent.context.$implicit)&&e),e},null,null)),(l()(),e["\u0275ted"](-1,null,[" \u274c"]))],null,null)}function m(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,8,"li",[],[[2,"active",null],[2,"disabled",null]],null,null,null,null)),e["\u0275did"](1,278528,null,0,i.i,[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2],{ngClass:[0,"ngClass"]},null),e["\u0275pad"](2,2),(l()(),e["\u0275eld"](3,0,null,null,5,"a",[["class","nav-link"],["href","javascript:void(0);"]],[[1,"id",0],[2,"active",null],[2,"disabled",null]],[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=0!=(l.context.$implicit.active=!0)&&e),e},null,null)),(l()(),e["\u0275eld"](4,16777216,null,null,2,"span",[],null,null,null,null,null)),e["\u0275did"](5,16384,null,0,c.a,[e.ViewContainerRef],{ngTransclude:[0,"ngTransclude"]},null),(l()(),e["\u0275ted"](6,null,["",""])),(l()(),e["\u0275and"](16777216,null,null,1,null,p)),e["\u0275did"](8,16384,null,0,i.k,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,1,0,l(n,2,0,"nav-item",n.context.$implicit.customClass||"")),l(n,5,0,n.context.$implicit.headingRef),l(n,8,0,n.context.$implicit.removable)},function(l,n){l(n,0,0,n.context.$implicit.active,n.context.$implicit.disabled),l(n,3,0,n.context.$implicit.id?n.context.$implicit.id+"-link":"",n.context.$implicit.active,n.context.$implicit.disabled),l(n,6,0,n.context.$implicit.heading)})}function v(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,3,"ul",[["class","nav"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==u.preventDefault()&&e),e},null,null)),e["\u0275did"](1,278528,null,0,i.i,[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,m)),e["\u0275did"](3,278528,null,0,i.j,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275eld"](4,0,null,null,1,"div",[["class","tab-content"]],null,null,null,null,null)),e["\u0275ncd"](null,0)],function(l,n){var u=n.component;l(n,1,0,"nav",u.classMap),l(n,3,0,u.tabs)},null)}var f=u("NEdW"),h=[142,509,1631,3315,6200,7835,19373],g=[0,36.7,171.34,541.82,1234.22,1757.42,5795.72],y=[10,12,22,24,32,35,37],b=[444,1177,3421,6790,12560,15829,23521],C=[0,73.3,342.58,1083.76,2468.56,3514.64,6206.84],_=[10,12,22,24,32,35,37],P=u("o6Vb"),k=function(){function l(l,n){this.employeesService=l,this.route=n}return l.prototype.ngOnInit=function(){var l=this;this.route.paramMap.subscribe(function(n){l.employeeID=n.get("employeeID"),l.employeesService.getEmployee(l.employeeID).subscribe(function(n){l.employee={id:n._id,name:{first:n.name.first,last:n.name.last},phone:n.phone,email:n.email,age:n.age,imagePath:n.imagePath,baseSalary:n.baseSalary,marital_status:n.marital_status,fedral_allowances:n.fedral_allowances,health_insurance:n.health_insurance,vision_insurance:n.vision_insurance,retirement_401k:n.retirement_401k}},function(){},function(){l.doCalculation()})})},l.prototype.doCalculation=function(){var l=this.round(this.employee.baseSalary/52*2),n=this.round(this.employee.baseSalary/2080),u=this.round(.062*l),e=this.round(.0145*l),t=u+e,a=this.round(this.employee.health_insurance/100*l),d=this.round(this.employee.vision_insurance/100*l),i=this.round(this.employee.retirement_401k/100*l),c=a+d+i,o=this.round(this.fedralCal(l,c)),s=this.round(l-t-c-o);this.calculation={grossSalary:l,perHour:n,ssn:u,medicare:e,fica:t,health:a,vision:d,r401k:i,preTax:c,fedralTax:o,takeHomePay:s}},l.prototype.round=function(l){return Math.round(100*l)/100},l.prototype.fedralCal=function(l,n){var u=l-159.6*this.employee.fedral_allowances-n;return"Single"===this.employee.marital_status?this.helper(g,y,h,u):this.helper(C,_,b,u)},l.prototype.helper=function(l,n,u,e){for(var t,a=0;a<u.length;a++)if(e<=u[a]){t=a;break}return null==t&&(t=u.length),0===t?0:l[t-1]+n[t-1]/100*(e-u[t-1])},l}(),x=e["\u0275crt"]({encapsulation:0,styles:[[".container[_ngcontent-%COMP%]{padding:5%}.container[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{text-align:center}.container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]{border-left:3px solid #ded4da}.container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:15px;font-weight:700}.invoice-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .invoice-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{display:inline-block}.table[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > .no-line[_ngcontent-%COMP%]{border-top:none}.table[_ngcontent-%COMP%] > thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > .no-line[_ngcontent-%COMP%]{border-bottom:none}.table[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > .thick-line[_ngcontent-%COMP%]{border-top:2px solid}"]],data:{}});function M(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,179,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,178,"div",[["class","col-lg-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,177,"div",[["class","card"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,7,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),e["\u0275eld"](4,0,null,null,0,"i",[["class","fa fa-align-justify"]],null,null,null,null,null)),(l()(),e["\u0275eld"](5,0,null,null,5,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e["\u0275nov"](l,6).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),t},null,null)),e["\u0275did"](6,671744,null,0,d.o,[d.l,d.a,i.h],{routerLink:[0,"routerLink"]},null),e["\u0275pad"](7,1),(l()(),e["\u0275eld"](8,0,null,null,2,"button",[["class","btn btn-ghost-success"],["style","float: right;"],["type","button"]],null,null,null,null,null)),(l()(),e["\u0275eld"](9,0,null,null,0,"i",[["class","fa fa-arrow-left"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\xa0Back"])),(l()(),e["\u0275eld"](11,0,null,null,168,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),e["\u0275eld"](12,0,null,null,167,"tabset",[],[[2,"tab-container",null]],null,null,v,r)),e["\u0275did"](13,180224,null,0,o.a,[s.a,e.Renderer2],null,null),(l()(),e["\u0275eld"](14,0,null,0,52,"tab",[["heading","Profile"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),e["\u0275did"](15,212992,null,0,f.a,[o.a,e.ElementRef,e.Renderer2],{heading:[0,"heading"]},null),(l()(),e["\u0275eld"](16,0,null,null,50,"div",[["class","container"]],null,null,null,null,null)),(l()(),e["\u0275eld"](17,0,null,null,49,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](18,0,null,null,14,"div",[["class","col-md-6 img"]],null,null,null,null,null)),(l()(),e["\u0275eld"](19,0,null,null,6,"div",[["class","col-md-6"]],null,null,null,null,null)),(l()(),e["\u0275eld"](20,0,null,null,5,"div",[["class","card text-white bg-primary"]],null,null,null,null,null)),(l()(),e["\u0275eld"](21,0,null,null,4,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),e["\u0275eld"](22,0,null,null,1,"div",[["class","h4 m-0"]],null,null,null,null,null)),(l()(),e["\u0275ted"](23,null,["$ ",""])),(l()(),e["\u0275eld"](24,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Gross Pay"])),(l()(),e["\u0275eld"](26,0,null,null,6,"div",[["class","col-md-6"]],null,null,null,null,null)),(l()(),e["\u0275eld"](27,0,null,null,5,"div",[["class","card text-white bg-success"]],null,null,null,null,null)),(l()(),e["\u0275eld"](28,0,null,null,4,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),e["\u0275eld"](29,0,null,null,1,"div",[["class","h4 m-0"]],null,null,null,null,null)),(l()(),e["\u0275ted"](30,null,["$ ",""])),(l()(),e["\u0275eld"](31,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Take Home Pay"])),(l()(),e["\u0275eld"](33,0,null,null,33,"div",[["class","col-md-6 details"]],null,null,null,null,null)),(l()(),e["\u0275eld"](34,0,null,null,32,"blockquote",[],null,null,null,null,null)),(l()(),e["\u0275eld"](35,0,null,null,3,"h5",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["First Name : "])),(l()(),e["\u0275eld"](37,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](38,null,["",""])),(l()(),e["\u0275eld"](39,0,null,null,3,"h5",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Last Name : "])),(l()(),e["\u0275eld"](41,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](42,null,["",""])),(l()(),e["\u0275eld"](43,0,null,null,3,"h5",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Email : "])),(l()(),e["\u0275eld"](45,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](46,null,["",""])),(l()(),e["\u0275eld"](47,0,null,null,3,"h5",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Phone Number : "])),(l()(),e["\u0275eld"](49,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](50,null,["",""])),(l()(),e["\u0275eld"](51,0,null,null,3,"h5",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Age : "])),(l()(),e["\u0275eld"](53,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](54,null,["",""])),(l()(),e["\u0275eld"](55,0,null,null,3,"h5",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Marital Status : "])),(l()(),e["\u0275eld"](57,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](58,null,["",""])),(l()(),e["\u0275eld"](59,0,null,null,3,"h5",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Salary : "])),(l()(),e["\u0275eld"](61,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](62,null,["$ ",""])),(l()(),e["\u0275eld"](63,0,null,null,3,"h5",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Fedral Allowances : "])),(l()(),e["\u0275eld"](65,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](66,null,["",""])),(l()(),e["\u0275eld"](67,0,null,0,112,"tab",[["heading","Statements"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),e["\u0275did"](68,212992,null,0,f.a,[o.a,e.ElementRef,e.Renderer2],{heading:[0,"heading"]},null),(l()(),e["\u0275eld"](69,0,null,null,110,"div",[["class","container"]],null,null,null,null,null)),(l()(),e["\u0275eld"](70,0,null,null,12,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](71,0,null,null,3,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](72,0,null,null,2,"div",[["class","invoice-title"]],null,null,null,null,null)),(l()(),e["\u0275eld"](73,0,null,null,1,"h3",[["class","pull-right"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Payment: Bi-Weekly"])),(l()(),e["\u0275eld"](75,0,null,null,3,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](76,0,null,null,2,"div",[["class","invoice-title"]],null,null,null,null,null)),(l()(),e["\u0275eld"](77,0,null,null,1,"h3",[["class","pull-right"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Hours: 80"])),(l()(),e["\u0275eld"](79,0,null,null,3,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](80,0,null,null,2,"div",[["class","invoice-title"]],null,null,null,null,null)),(l()(),e["\u0275eld"](81,0,null,null,1,"h3",[["class","pull-right"]],null,null,null,null,null)),(l()(),e["\u0275ted"](82,null,["Per Hours Pay: $",""])),(l()(),e["\u0275eld"](83,0,null,null,96,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](84,0,null,null,95,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](85,0,null,null,94,"div",[["class","panel panel-default"]],null,null,null,null,null)),(l()(),e["\u0275eld"](86,0,null,null,3,"div",[["class","panel-heading"]],null,null,null,null,null)),(l()(),e["\u0275eld"](87,0,null,null,2,"h3",[["class","panel-title"]],null,null,null,null,null)),(l()(),e["\u0275eld"](88,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Statement"])),(l()(),e["\u0275eld"](90,0,null,null,89,"div",[["class","panel-body"]],null,null,null,null,null)),(l()(),e["\u0275eld"](91,0,null,null,88,"div",[["class","table-responsive"]],null,null,null,null,null)),(l()(),e["\u0275eld"](92,0,null,null,87,"table",[["class","table table-condensed"]],null,null,null,null,null)),(l()(),e["\u0275eld"](93,0,null,null,9,"thead",[],null,null,null,null,null)),(l()(),e["\u0275eld"](94,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),e["\u0275eld"](95,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e["\u0275eld"](96,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Taxes"])),(l()(),e["\u0275eld"](98,0,null,null,0,"td",[["class","no-line"]],null,null,null,null,null)),(l()(),e["\u0275eld"](99,0,null,null,0,"td",[["class","no-line"]],null,null,null,null,null)),(l()(),e["\u0275eld"](100,0,null,null,2,"td",[["class","text-center"]],null,null,null,null,null)),(l()(),e["\u0275eld"](101,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e["\u0275ted"](102,null,["$ ",""])),(l()(),e["\u0275eld"](103,0,null,null,76,"tbody",[],null,null,null,null,null)),(l()(),e["\u0275eld"](104,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),e["\u0275eld"](105,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Fedral"])),(l()(),e["\u0275eld"](107,0,null,null,0,"td",[],null,null,null,null,null)),(l()(),e["\u0275eld"](108,0,null,null,0,"td",[],null,null,null,null,null)),(l()(),e["\u0275eld"](109,0,null,null,1,"td",[["class","text-center"]],null,null,null,null,null)),(l()(),e["\u0275ted"](110,null,["$ ",""])),(l()(),e["\u0275eld"](111,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),e["\u0275eld"](112,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e["\u0275eld"](113,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["FICA"])),(l()(),e["\u0275eld"](115,0,null,null,0,"td",[],null,null,null,null,null)),(l()(),e["\u0275eld"](116,0,null,null,0,"td",[],null,null,null,null,null)),(l()(),e["\u0275eld"](117,0,null,null,2,"td",[["class","text-center"]],null,null,null,null,null)),(l()(),e["\u0275eld"](118,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e["\u0275ted"](119,null,["$ ",""])),(l()(),e["\u0275eld"](120,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),e["\u0275eld"](121,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Social Security"])),(l()(),e["\u0275eld"](123,0,null,null,0,"td",[],null,null,null,null,null)),(l()(),e["\u0275eld"](124,0,null,null,0,"td",[],null,null,null,null,null)),(l()(),e["\u0275eld"](125,0,null,null,1,"td",[["class","text-center"]],null,null,null,null,null)),(l()(),e["\u0275ted"](126,null,["$ ",""])),(l()(),e["\u0275eld"](127,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),e["\u0275eld"](128,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Medicare"])),(l()(),e["\u0275eld"](130,0,null,null,0,"td",[],null,null,null,null,null)),(l()(),e["\u0275eld"](131,0,null,null,0,"td",[],null,null,null,null,null)),(l()(),e["\u0275eld"](132,0,null,null,1,"td",[["class","text-center"]],null,null,null,null,null)),(l()(),e["\u0275ted"](133,null,["$ ",""])),(l()(),e["\u0275eld"](134,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),e["\u0275eld"](135,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e["\u0275eld"](136,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Pre-Tax Deduction"])),(l()(),e["\u0275eld"](138,0,null,null,0,"td",[],null,null,null,null,null)),(l()(),e["\u0275eld"](139,0,null,null,0,"td",[],null,null,null,null,null)),(l()(),e["\u0275eld"](140,0,null,null,2,"td",[["class","text-center"]],null,null,null,null,null)),(l()(),e["\u0275eld"](141,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e["\u0275ted"](142,null,["$ ",""])),(l()(),e["\u0275eld"](143,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),e["\u0275eld"](144,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Medical Insurance"])),(l()(),e["\u0275eld"](146,0,null,null,0,"td",[],null,null,null,null,null)),(l()(),e["\u0275eld"](147,0,null,null,0,"td",[],null,null,null,null,null)),(l()(),e["\u0275eld"](148,0,null,null,1,"td",[["class","text-center"]],null,null,null,null,null)),(l()(),e["\u0275ted"](149,null,["$ ",""])),(l()(),e["\u0275eld"](150,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),e["\u0275eld"](151,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Vision Insurance"])),(l()(),e["\u0275eld"](153,0,null,null,0,"td",[],null,null,null,null,null)),(l()(),e["\u0275eld"](154,0,null,null,0,"td",[],null,null,null,null,null)),(l()(),e["\u0275eld"](155,0,null,null,1,"td",[["class","text-center"]],null,null,null,null,null)),(l()(),e["\u0275ted"](156,null,["$ ",""])),(l()(),e["\u0275eld"](157,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),e["\u0275eld"](158,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["401(k)"])),(l()(),e["\u0275eld"](160,0,null,null,0,"td",[],null,null,null,null,null)),(l()(),e["\u0275eld"](161,0,null,null,0,"td",[],null,null,null,null,null)),(l()(),e["\u0275eld"](162,0,null,null,1,"td",[["class","text-center"]],null,null,null,null,null)),(l()(),e["\u0275ted"](163,null,["$ ",""])),(l()(),e["\u0275eld"](164,0,null,null,7,"tr",[],null,null,null,null,null)),(l()(),e["\u0275eld"](165,0,null,null,0,"td",[["class","thick-line"]],null,null,null,null,null)),(l()(),e["\u0275eld"](166,0,null,null,0,"td",[["class","thick-line"]],null,null,null,null,null)),(l()(),e["\u0275eld"](167,0,null,null,2,"td",[["class","thick-line text-center"]],null,null,null,null,null)),(l()(),e["\u0275eld"](168,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Gross Pay"])),(l()(),e["\u0275eld"](170,0,null,null,1,"td",[["class","thick-line text-right"]],null,null,null,null,null)),(l()(),e["\u0275ted"](171,null,["$ ",""])),(l()(),e["\u0275eld"](172,0,null,null,7,"tr",[],null,null,null,null,null)),(l()(),e["\u0275eld"](173,0,null,null,0,"td",[["class","no-line"]],null,null,null,null,null)),(l()(),e["\u0275eld"](174,0,null,null,0,"td",[["class","no-line"]],null,null,null,null,null)),(l()(),e["\u0275eld"](175,0,null,null,2,"td",[["class","no-line text-center"]],null,null,null,null,null)),(l()(),e["\u0275eld"](176,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Take Home Pay"])),(l()(),e["\u0275eld"](178,0,null,null,1,"td",[["class","no-line text-right"],["style","color: green"]],null,null,null,null,null)),(l()(),e["\u0275ted"](179,null,["$ ",""]))],function(l,n){l(n,6,0,l(n,7,0,"/list")),l(n,15,0,"Profile"),l(n,68,0,"Statements")},function(l,n){var u=n.component;l(n,5,0,e["\u0275nov"](n,6).target,e["\u0275nov"](n,6).href),l(n,12,0,e["\u0275nov"](n,13).clazz),l(n,14,0,e["\u0275nov"](n,15).id,e["\u0275nov"](n,15).active,e["\u0275nov"](n,15).addClass),l(n,23,0,null==u.calculation?null:u.calculation.grossSalary),l(n,30,0,null==u.calculation?null:u.calculation.takeHomePay),l(n,38,0,null==u.employee?null:u.employee.name.first),l(n,42,0,null==u.employee?null:u.employee.name.last),l(n,46,0,null==u.employee?null:u.employee.email),l(n,50,0,null==u.employee?null:u.employee.phone),l(n,54,0,null==u.employee?null:u.employee.age),l(n,58,0,null==u.employee?null:u.employee.marital_status),l(n,62,0,null==u.employee?null:u.employee.baseSalary),l(n,66,0,null==u.employee?null:u.employee.fedral_allowances),l(n,67,0,e["\u0275nov"](n,68).id,e["\u0275nov"](n,68).active,e["\u0275nov"](n,68).addClass),l(n,82,0,null==u.calculation?null:u.calculation.perHour),l(n,102,0,null==u.calculation?null:u.calculation.fedralTax),l(n,110,0,null==u.calculation?null:u.calculation.fedralTax),l(n,119,0,null==u.calculation?null:u.calculation.fica),l(n,126,0,null==u.calculation?null:u.calculation.ssn),l(n,133,0,null==u.calculation?null:u.calculation.medicare),l(n,142,0,null==u.calculation?null:u.calculation.preTax),l(n,149,0,null==u.calculation?null:u.calculation.health),l(n,156,0,null==u.calculation?null:u.calculation.vision),l(n,163,0,null==u.calculation?null:u.calculation.r401k),l(n,171,0,null==u.calculation?null:u.calculation.grossSalary),l(n,179,0,null==u.calculation?null:u.calculation.takeHomePay)})}var O=e["\u0275ccf"]("ng-component",k,function(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"ng-component",[],null,null,null,M,x)),e["\u0275did"](1,114688,null,0,k,[P.a,d.a],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),$=u("ueff"),w=u("lOTE"),R=u("S7LP"),S=u("6aHO"),T=u("008C"),I={title:"List"},F=function(){},D=u("z+jS"),E=u("Fq6B");u.d(n,"EmployeeViewModuleNgFactory",function(){return H});var H=e["\u0275cmf"](t,[],function(l){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[a.a,O,$.a,w.a]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,i.m,i.l,[e.LOCALE_ID,[2,i.t]]),e["\u0275mpd"](4608,R.a,R.a,[]),e["\u0275mpd"](4608,S.a,S.a,[e.ComponentFactoryResolver,e.NgZone,e.Injector,R.a,e.ApplicationRef]),e["\u0275mpd"](4608,T.a,T.a,[e.RendererFactory2,S.a]),e["\u0275mpd"](1073742336,d.p,d.p,[[2,d.v],[2,d.l]]),e["\u0275mpd"](1073742336,F,F,[]),e["\u0275mpd"](1073742336,i.c,i.c,[]),e["\u0275mpd"](1073742336,D.a,D.a,[]),e["\u0275mpd"](1073742336,E.a,E.a,[]),e["\u0275mpd"](1073742336,t,t,[]),e["\u0275mpd"](1024,d.j,function(){return[[{path:"",component:k,data:I}]]},[])])})}}]);