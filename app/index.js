System.registerDynamic("app/environment.js",[],!0,function(a,b,c){"use strict";return b.environment={production:!0},c.exports}),System.registerDynamic("app/header/header.component.js",["@angular/core","@angular/router"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=a("@angular/router"),h=function(){function a(){}return a.prototype.ngOnInit=function(){},a=d([f.Component({moduleId:c.id,selector:"app-header",templateUrl:"header.component.html",directives:[g.ROUTER_DIRECTIVES]}),e("design:paramtypes",[])],a)}();return b.HeaderComponent=h,c.exports}),System.registerDynamic("app/header/index.js",["./header.component"],!0,function(a,b,c){"use strict";var d=a("./header.component");return b.HeaderComponent=d.HeaderComponent,c.exports}),System.registerDynamic("app/data.service.js",["@angular/core","@angular/http","rxjs/add/operator/map"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=a("@angular/http");a("rxjs/add/operator/map");var h=function(){function a(a){this.http=a}return a.prototype.getGdpData=function(){return this.http.get("GDP-data.json").map(function(a){return a.json()}).map(function(a){return a.data})},a=d([f.Injectable(),e("design:paramtypes",[g.Http])],a)}();return b.DataService=h,c.exports}),System.registerDynamic("app/bar-chart/bar-chart.component.js",["@angular/core","d3"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=a("d3"),h=function(){function a(a){this.elementRef=a,this.margin={left:55,right:20,bottom:30,top:20},this.transitionTime=500,this.container=g.select(a.nativeElement)}return a.prototype.ngOnInit=function(){this.canvas=this.container.select("#canvas"),this.chartArea=this.canvas.append("g").attr("class","chart").attr("transform","translate("+this.margin.left+" "+this.margin.top+")"),this.chartAreaWidth=this.width-this.margin.left-this.margin.right,this.chartAreaHeight=this.height-this.margin.top-this.margin.bottom,this.chartAreaClip=this.canvas.append("defs").append("clipPath").attr("id","clip").append("rect").attr("x",this.margin.left).attr("y",this.margin.top).attr("width",this.chartAreaWidth).attr("height",this.chartAreaHeight),this.dataArea=this.chartArea.append("g").attr("id","data").attr("clip-path","url(#clip)"),this.toolTip=g.select("#tooltip")},a.prototype.ngOnChanges=function(){var a=this;if(console.log("data changed "+(this.data?this.data.length:"null")),this.data){var b=this.data.map(function(a){return a.value}),c=g.scale.linear().domain([0,g.max(b)]).range([0,this.chartAreaHeight].reverse()).nice(),d=g.svg.axis().scale(c).ticks(10).orient("left"),e=this.data.map(function(a){return a.date});this.xScale=g.scale.ordinal().domain(e.map(function(b){return a.toQuarter(b)})).rangeBands([0,this.chartAreaWidth],.2);for(var f=20,h=e.map(function(b){return a.toQuarter(b)}).filter(function(a){return a.startsWith("Q1")});h.length>f;)h=h.filter(function(a,b){return b%2!=1});var i=g.svg.axis().scale(this.xScale).tickValues(h).tickFormat(function(a){return a.substr(3)}).orient("bottom"),j=this.dataArea.selectAll("rect").data(this.data,function(a){return a.date.toUTCString()});j.enter().append("rect").attr("x",function(b){return a.xScale(a.toQuarter(b.date))}).attr("y",c(c.domain()[0])).attr("width",this.xScale.rangeBand()).attr("height",0).on("mouseover",function(b,c){a.toolTip.style("visibility","visible"),a.toolTip.html(a.toQuarter(b.date)+"<br/>"+b.value+" Billion US$");var d=+a.dataArea.selectAll("rect").filter(function(a){return a==b}).attr("x");d+=a.xScale.rangeBand()/2;var e=+a.dataArea.selectAll("rect").filter(function(a){return a==b}).attr("y");e=a.chartAreaHeight-e+90,a.toolTip.style("left",d+"px"),a.toolTip.style("bottom",e+"px")}).on("mouseout",function(b){a.toolTip.style("visibility","hidden")}),j.transition().duration(this.transitionTime).ease("linear").attr("x",function(b){return a.xScale(a.toQuarter(b.date))}).attr("y",function(a){return c(a.value)}).attr("width",this.xScale.rangeBand()).attr("height",function(b){return a.chartAreaHeight-c(b.value)}),this.chartArea.select("#y-axis").remove(),this.chartArea.append("g").attr("id","y-axis").attr("class","axis y").call(d),this.chartArea.select("#x-axis").remove(),this.chartArea.append("g").attr("id","x-axis").attr("class","axis x").attr("transform","translate(0, "+this.chartAreaHeight+")").call(i);var k=j.exit().size(),l=j.exit().filter(function(b){return b.date<=a.data[0].date}).size()>0,m=this.xScale(this.toQuarter(this.data[1].date))-this.xScale(this.toQuarter(this.data[0].date));j.exit().transition().duration(this.transitionTime).ease("linear").attr("y",function(a){return c(a.value)}).attr("height",function(b){return a.chartAreaHeight-c(b.value)}).attr("x",function(b,c){var d=(a.data[Math.round(a.data.length/2)].date,b.date,l?-(k-c):c-a.data.length+1),e=l?0:a.chartAreaWidth;return e+d*m}).remove()}},a.prototype.ngAfterViewInit=function(){console.log("after view init"),console.log(this.elementRef.nativeElement.parentElement.offsetWidth)},a.prototype.toQuarter=function(a){var b="Q";return b+=a.getUTCMonth()/3+1,b+=" ",b+=a.getUTCFullYear()},d([f.Input(),e("design:type",Array)],a.prototype,"data",void 0),d([f.Input(),e("design:type",Number)],a.prototype,"width",void 0),d([f.Input(),e("design:type",Number)],a.prototype,"height",void 0),a=d([f.Component({moduleId:c.id,selector:"app-bar-chart",templateUrl:"bar-chart.component.html"}),e("design:paramtypes",[f.ElementRef])],a)}();return b.BarChartComponent=h,c.exports}),System.registerDynamic("app/+gdp/gdp.component.js",["@angular/core","@angular/common","rxjs/Observable","rxjs/add/observable/combineLatest","rxjs/add/operator/debounceTime","../data.service","../bar-chart/bar-chart.component"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=a("@angular/common"),h=a("rxjs/Observable");a("rxjs/add/observable/combineLatest"),a("rxjs/add/operator/debounceTime");var i=a("../data.service"),j=a("../bar-chart/bar-chart.component"),k=function(){function a(a){this.dataService=a,this.yearFrom=new g.Control,this.yearTo=new g.Control}return a.prototype.ngOnInit=function(){var a=this;this.dataService.getGdpData().subscribe(function(b){var c=b.map(function(a){var b={value:a[1],date:new Date(a[0])};return b});a.data=c,a.years=a.data.map(function(a){return a.date.getUTCFullYear()}).filter(function(a,b,c){return c.indexOf(a)==b}),a.yearFrom.valueChanges.subscribe(function(b){a.yearTo.value<b&&a.yearTo.updateValue(b)}),a.yearTo.valueChanges.subscribe(function(b){a.yearFrom.value>b&&a.yearFrom.updateValue(b)}),h.Observable.combineLatest(a.yearFrom.valueChanges,a.yearTo.valueChanges).debounceTime(50).subscribe(function(b){var c=b[0],d=b[1];a.filteredData=a.data.filter(function(a){return a.date.getUTCFullYear()>=c&&a.date.getUTCFullYear()<=d})}),a.showAllData()})},a.prototype.showAllData=function(){this.years&&(this.yearFrom.updateValue(this.years[0]),this.yearTo.updateValue(this.years[this.years.length-1]))},a=d([f.Component({moduleId:c.id,selector:"app-gdp",templateUrl:"gdp.component.html",directives:[j.BarChartComponent]}),e("design:paramtypes",[i.DataService])],a)}();return b.GdpComponent=k,c.exports}),System.registerDynamic("app/+gdp/index.js",["./gdp.component"],!0,function(a,b,c){"use strict";var d=a("./gdp.component");return b.GdpComponent=d.GdpComponent,c.exports}),System.registerDynamic("app/+home/home.component.js",["@angular/core","@angular/router"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=a("@angular/router"),h=function(){function a(){}return a.prototype.ngOnInit=function(){},a=d([f.Component({moduleId:c.id,selector:"app-home",templateUrl:"home.component.html",directives:[g.ROUTER_DIRECTIVES]}),e("design:paramtypes",[])],a)}();return b.HomeComponent=h,c.exports}),System.registerDynamic("app/+home/index.js",["./home.component"],!0,function(a,b,c){"use strict";var d=a("./home.component");return b.HomeComponent=d.HomeComponent,c.exports}),System.registerDynamic("app/+test/test.component.js",["@angular/core","@angular/router"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=a("@angular/router"),h=function(){function a(){}return a.prototype.ngOnInit=function(){},a=d([f.Component({moduleId:c.id,selector:"app-test",templateUrl:"test.component.html",directives:[g.ROUTER_DIRECTIVES]}),e("design:paramtypes",[])],a)}();return b.TestComponent=h,c.exports}),System.registerDynamic("app/+test/index.js",["./test.component"],!0,function(a,b,c){"use strict";var d=a("./test.component");return b.TestComponent=d.TestComponent,c.exports}),System.registerDynamic("app/d3-playground.component.js",["@angular/core","@angular/router","./data.service","./header","./+gdp","./+home","./+test"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=a("@angular/router"),h=a("./data.service"),i=a("./header"),j=a("./+gdp"),k=a("./+home"),l=a("./+test"),m=function(){function a(a){this.router=a}return a=d([f.Component({moduleId:c.id,selector:"d3-playground-app",templateUrl:"d3-playground.component.html",providers:[g.ROUTER_PROVIDERS,h.DataService],directives:[g.ROUTER_DIRECTIVES,i.HeaderComponent]}),g.Routes([{path:"/",component:k.HomeComponent},{path:"/gdp",component:j.GdpComponent},{path:"/test",component:l.TestComponent}]),e("design:paramtypes",[g.Router])],a)}();return b.D3PlaygroundAppComponent=m,c.exports}),System.registerDynamic("app/index.js",["./environment","./d3-playground.component"],!0,function(a,b,c){"use strict";var d=a("./environment");b.environment=d.environment;var e=a("./d3-playground.component");return b.D3PlaygroundAppComponent=e.D3PlaygroundAppComponent,c.exports});