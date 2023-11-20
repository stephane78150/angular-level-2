"use strict";(self.webpackChunksoccer_tracker=self.webpackChunksoccer_tracker||[]).push([[741],{741:(C,p,o)=>{o.r(p),o.d(p,{default:()=>v});var m=o(6913),c=o(4366),n=o(7398),l=o(7921),i=o(6814),t=o(9291);function d(a,A){if(1&a&&(t.TgZ(0,"tr")(1,"td"),t._UZ(2,"img",10),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._UZ(12,"img",10),t.qZA()()),2&a){const e=A.$implicit;t.xp6(2),t.Q6J("src",e.homeTeam.logo,t.LSH),t.xp6(2),t.Oqu(e.homeTeam.name),t.xp6(2),t.Oqu(e.homeScore),t.xp6(2),t.Oqu(e.awayScore),t.xp6(2),t.Oqu(e.awayTeam.name),t.xp6(2),t.Q6J("src",e.awayTeam.logo,t.LSH)}}const g=function(a){return["/country",a,"top-league"]};let Z=(()=>{class a{constructor(e){this.route=e,this.selectedTeamId$=c.C,this.selectedTeamName$=c.C,this.selectedCountry$=c.C,this.lastSoccerMatches$=c.C}ngOnInit(){this.selectedTeamId$=this.route.params.pipe((0,n.U)(e=>e.teamId),(0,l.O)(this.route.snapshot.params.teamId)),this.selectedTeamName$=this.route.params.pipe((0,n.U)(e=>e.teamName),(0,l.O)(this.route.snapshot.params.teamName)),this.selectedCountry$=this.route.parent.parent.params.pipe((0,n.U)(e=>e.country),(0,l.O)(this.route.parent.parent.snapshot.params.country)),this.lastSoccerMatches$=this.route.data.pipe((0,n.U)(e=>e.lastMatches))}static#t=this.\u0275fac=function(s){return new(s||a)(t.Y36(m.gz))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-team-results"]],standalone:!0,features:[t.jDz],decls:31,vars:14,consts:[[1,"card","my-5"],[1,"card-header"],[1,"display-6"],[1,"text-primary"],[1,"btn","btn-xl","btn-primary","float-end","mt-1",3,"routerLink"],[1,"card-body"],[1,"table","table-striped","table-hover","border"],["title","Home team logo"],["title","Away team logo"],[4,"ngFor","ngForOf"],["alt","team logo",1,"tiny-team-logo",3,"src"]],template:function(s,r){1&s&&(t.TgZ(0,"div",0)(1,"div",1)(2,"span",2),t._uU(3,"Last 10 matches for team "),t.TgZ(4,"span",3),t._uU(5),t.ALo(6,"async"),t.qZA()(),t.TgZ(7,"a",4),t.ALo(8,"async"),t._uU(9,"Back to "),t.TgZ(10,"em"),t._uU(11),t.ALo(12,"async"),t.qZA(),t._uU(13," league results"),t.qZA()(),t.TgZ(14,"div",5)(15,"table",6)(16,"thead")(17,"tr"),t._UZ(18,"th",7),t.TgZ(19,"th"),t._uU(20,"Home team"),t.qZA(),t.TgZ(21,"th"),t._uU(22,"Home score"),t.qZA(),t.TgZ(23,"th"),t._uU(24,"Away score"),t.qZA(),t.TgZ(25,"th"),t._uU(26,"Away team"),t.qZA(),t._UZ(27,"th",8),t.qZA()(),t.TgZ(28,"tbody"),t.YNc(29,d,13,6,"tr",9),t.ALo(30,"async"),t.qZA()()()()),2&s&&(t.xp6(5),t.Oqu(t.lcZ(6,4,r.selectedTeamName$)),t.xp6(2),t.Q6J("routerLink",t.VKq(12,g,t.lcZ(8,6,r.selectedCountry$))),t.xp6(4),t.Oqu(t.lcZ(12,8,r.selectedCountry$)),t.xp6(18),t.Q6J("ngForOf",t.lcZ(30,10,r.lastSoccerMatches$)))},dependencies:[m.Bz,m.rH,i.ez,i.sg,i.Ov]})}return a})();var y=o(8292),T=o(9862);let h=(()=>{class a extends y.K{constructor(e){super(),this.httpClient=e}GetLastGames(e,s=10){return console.log("Get last ",s," games for team ",e),this.httpClient.get("https://v3.football.api-sports.io/fixtures",{headers:super.GetApiHeaders(),params:{team:e,last:s}}).pipe((0,n.U)(({response:U})=>U.map(f=>this.MapFixtureToMatch(f))))}MapFixtureToMatch(e){return{homeTeam:{id:e.teams.home.id,name:e.teams.home.name,logo:e.teams.home.logo},awayScore:e.goals.away,homeScore:e.goals.home,awayTeam:{id:e.teams.away.id,name:e.teams.away.name,logo:e.teams.away.logo}}}static#t=this.\u0275fac=function(s){return new(s||a)(t.LFG(T.eN))};static#e=this.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})(),u=(()=>{class a{constructor(e){this.teamService=e}resolve(e,s){return this.teamService.GetLastGames(e.params.teamId,10)}static#t=this.\u0275fac=function(s){return new(s||a)(t.LFG(h))};static#e=this.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();const v=[{path:":teamId/:teamName",component:Z,resolve:{lastMatches:u},providers:[h,u]}]}}]);