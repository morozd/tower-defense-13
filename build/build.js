/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js*/

(function(t,n){function ct(e,t){var n;if(Array.isArray(e))for(n=0;n<e.length;n++)t.call(e[n],n);else for(n in e)t.call(e[n],n)}function ht(e,t,n,r){return"rgba("+e+","+t+","+n+","+(r||1)+")"}function pt(e,t){s[F]=e,s[I]=t,o.clearRect(0,0,e,t)}function dt(e,t,n,r){var i,s=Object.create(null);for(var o in e)t&&n?(i=t.indexOf(o),i>-1?s[o]=n[i](e,o,r):s[o]=e[o]):s[o]=e[o];return s}function vt(e){return e-50<0?0:e-50}function mt(e){if(e)return e[v.x][v.y]}function gt(e,t){e.health-=t}function yt(e){return ft[Q].round(e)}function bt(e){return ft[Q][K](e)}function wt(e,t){return yt(e*h+lt-t)}function Et(e,t){return yt(e*h+lt-t/2)}function St(e,t){return bt(ft[Q].random()*(t-e+1))+e}function xt(){var e=0;for(var t=0;t<M[J];t++)e+=M[t].priority;var n=St(0,e-1);for(var t=0;t<M[J];t++){if(n<M[t].priority)return t;n-=M[t].priority}return!1}function Tt(e,t,n){var r=[];for(var i in e)e[i][t]===n&&r[G](e[i]);return r.length?r:!1}function Nt(e,t){var n=e%t;return(e-n)/t}function Ct(e,t){return Math.random()*(t-e)+e}function kt(e,t,n){return{"red":e,"green":t,"blue":n}}function Lt(e,t,n){return n?2*e*t+2*t*n+2*e*n:e*t}function At(){s=r[X]("canvas"),s[F]=l*h,s[I]=c*h,o=s.getContext("2d"),T.push(function(e,t){o.drawImage(e.image,Et(e.x,h),Et(e.y,h))}),N.push(function(e,t){t!==0&&(o.drawImage(t.image,Et(t.x,t.width),wt(t.y,t.height)),t.weapon.name&&tr(t))}),C.push(function(){Kn(),Hn(),Fn(),Qt(),er(),Gt(),Gn(),f++,x++,O[1]?y--:O[1]||(r[X]("nextWave").setAttribute("disabled",!0),y=0);if(!O[0].length&&!O[1]&&!D.length)Mt();else if(O[0].length&&f===120){f=0;for(var e=0;e<yt(m/2);e++)Wt()}else(f===600||w)&&O[1]&&(w=!1,O[1]?y=g*120+600:(r[X]("nextWave").setAttribute("disabled",!0),y=0),m++,O.splice(0,1),g=O[0].length,f=0)}),sr("cannon",1,15,1,10,6,50,3,kt(St(200,255),St(0,100),St(0,100)),function(e){return e}),sr("spread",5,20,1,50,4,25,3,kt(St(0,100),St(0,100),St(100,255)),function(e){return Ct(e-e/2,e+e/2)}),sr("gatling",1,15,1,1,4,25,3,kt(St(0,100),St(100,255),St(0,100)),function(e){return Ct(e-e/2,e+e/2)}),sr("explode",25,120,5,50,5.5,35,3,kt(St(0,100),St(100,255),St(100,255)),function(e){return Ct(-2,2)/60}),A[G](nn("Base","none","special",1e6,1e3,[[10,15],[20,30],[10,15]],[kt(225,0,0),kt(vt(225),0,0)])),A[G](nn("Cannon","cannon","basic",50,10,[[10,15],[10,15],[5,10]],[kt(200,0,0),kt(vt(200),0,0)])),A[G](nn("Shotgun","spread","basic",250,10,[[15,20],[15,20],[10,15]],[kt(125,0,0),kt(vt(125),vt(125),0)])),A[G](nn("Explode","explode","basic",500,10,[[20,25],[20,25],[15,20]],[kt(125,0,0),kt(0,vt(125),vt(125))])),A[G](nn("Gatling","gatling","basic",1e3,10,[[25,30],[25,30],[20,25]],[kt(125,0,0),kt(0,0,125)])),M.push(_t("grass",rt,7,1,Pt([[1024,175,230,1.3,1,2],[50,200,245,1,1.3,1.5],[100,125,175,2,1,2]]))),M.push(_t("darkGrass",rt,7,1,Pt([[1024,150,205,1.3,1,2],[50,175,220,1,1.3,1.5],[100,100,150,2,1,2]]))),M.push(_t("road","fast",4,.5,Pt([[1024,0,0,1,1,1],[600,0,50,1,1,1]]))),M.push(_t("water","slow",3,1.5,Pt([[1024,100,200,1.5,1.5,1],[600,100,200,1.5,1.5,1]]))),Ut(13),Xt(13),g=O[0].length,y=g*120+600}function Ot(){selectedStructure=null,Wn=0,$n(),Wn=0,r.getElementById("gameOver").querySelector(".timeLasted").innerText=yt(x/60),r.getElementById("gameOver").querySelector(".tryAgain").onclick=function(){t.location.reload()},r.getElementById("gameOver").classList.add("show")}function Mt(){selectedStructure=null,Wn=0,$n(),Wn=0,r.getElementById("gameWon").querySelector(".timeLasted").innerText=yt(x/60),r.getElementById("gameWon").querySelector(".tryAgain").onclick=function(){t.location.reload()},r.getElementById("gameWon").classList.add("show")}function _t(e,t,n,r,i){var u=[];pt(32,32);var a=3;for(var f=0;f<a;f++){var d=St(i[0].fromColor,i[0].toColor);o.fillStyle=ht(yt(d/i[0].redFactor),yt(d/i[0].greenFactor),yt(d/i[0].blueFactor)),o.fillRect(0,0,h,h);for(var v=0;v<i[J];v++)Dt(i[v]);var m=new Image;m[it]=s[et](),u[G](m),pt(l*h,c*h)}var g=p;return p++,s[F]=l*h,s[I]=c*h,{"name":e,"is":"terrain","type":t,"x":0,"y":0,"image":u,"images":u[J],"priority":n,"id":g,"speed":r}}function Dt(e){var t,n,r=0,i=0;for(t=0;t<e.pixels;t++)r=St(0,h-1),i=St(0,h-1),n=St(e.fromColor,e.toColor),o.fillStyle=ht(yt(n/e.redFactor),yt(n/e.greenFactor),yt(n/e.blueFactor)),o.fillRect(r,i,1,1)}function Pt(e){var t=[];for(var n=0;n<e.length;n++)t.push({"pixels":e[n][0],"fromColor":e[n][1],"toColor":e[n][2],"redFactor":e[n][3],"greenFactor":e[n][4],"blueFactor":e[n][5]});return t}function Ht(e,t,n){return e[t][St(0,e.images-1)]}function Bt(e,t,n){return n[0]}function jt(e,t,n){return n[1]}function Ft(e,t){for(var n=0;n<e;n++){k[n]=k[n]||[],L[n]=L[n]||[];for(var r=0;r<t;r++){var i=xt(),s=dt(M[i],["image","x","y"],[Ht,Bt,jt],[n,r]);k[n][r]=s,L[n][r]=0}}a=dt(A[0]),a.x=St(e/2-1,t/2+1),a.y=St(e/2-1,t/2+1),L[a.x][a.y]=a}function It(){var e,t,n,r;for(e=0;e<k[J];e++)for(t=0;t<k[e][J];t++)for(n=0;n<T[J];n++)T[n](k[e][t],L[e][t]);for(e=0;e<k[J];e++)for(t=0;t<k[e][J];t++)for(n=0;n<N[J];n++)N[n](k[e][t],L[e][t]);for(r=0;r<C[J];r++)C[r]()}function qt(e,t){var r=[];for(var i=0;i<k.length;i++){r[i]=r[i]||[];for(var s=0;s<k[i].length;s++){var o=dt(M[k[i][s].id],["image","x","y"],[Ht,Bt,jt],[i,s]);L[i][s]&&L[i][s][j].toLowerCase()!=="base"&&(o.speed=0),r[i][s]=o}}return e!==n&&t!==n&&(r[e][t]=dt(M[r[e][t].id],["image","x","y"],[Ht,Bt,jt],[e,t]),r[e][t].speed=0),r}function Rt(e){var t=[];for(var n=0;n<e.length;n++)for(var r=0;r<e[n].length;r++)if(n===0||n===e.length-1||r===0||r===e[n].length-1)if(e[n][r].speed!==0&&a){var i=Sn.search(e,e[n][r],e[a.x][a.y]);i.length&&t.push(!0)}else t.push(!1);return t}function Ut(e){for(var t=1;t<e+1;t++){var n=t/2,r=7;n*2>r&&(r=n*2),_.push({"level":t,"size":r,"speed":n*.5,"health":t*10,"fullHealth":n*10,"targetX":null,"targetY":null,"path":null,"x":null,"y":null,"pixelX":null,"pixelY":null,"pathIndex":0,"color":"rgb(0,0,0)","red":0,"green":0,"blue":0})}}function zt(e){var t,n=0;do{do{var r=0,i=0;if(side===0||side===2)r=St(0,l-1),side===2&&(i=l-1);else if(side===1||side===3)i=St(0,c-1),side===1&&(r=c-1);n++;var s=qt()}while(s[r][i].speed===0);data.x=r,data.y=i,data.pixelX=Et(r,data.size),data.pixelY=Et(i,data.size),t=Zt([data],s)}while(!t.length);return data.path=t,data.targetX=t[0].x,data.targetY=t[0].y,data.pathIndex=0,e}function Wt(){if(O[0]&&a){var e=O[0].splice(0,1)[0],t,n=0;do{do{var r=St(0,3),i=0,s=0;if(r===0||r===2)i=St(0,l-1),r===2&&(s=l-1);else if(r===1||r===3)s=St(0,c-1),r===1&&(i=c-1);n++;var o=qt()}while(o[i][s].speed===0);e.x=i,e.y=s,e.pixelX=Et(i,e.size),e.pixelY=Et(s,e.size),t=Zt([e],o)}while(!t.length);e.path=t,e.targetX=t[0].x,e.targetY=t[0].y,e.pathIndex=0,D.push(e)}}function Xt(e){for(var t=1;t<e+1;t++){var n=[],r=0;for(var i=t;i>0;i--){for(var s=0;s<i*2;s++){var o=dt(_[r]);n.push(o)}r=yt(t/e*(_.length-1))}O.push(n)}}function Vt(e,t,n){return n[0]}function $t(e,t,n){return n[1]}function Jt(e,t,n){return Et(n[0],e.size)}function Kt(e,t,n){return Et(n[1],e.size)}function Qt(){ct(D,function(e){var t=this;t.health<1?Yt(t,e):(o.beginPath(),o.strokeStyle="white",o.lineWidth=2,o.strokeRect(t.pixelX,t.pixelY,t.size,t.size),o.fillStyle=t.color,o.fillRect(t.pixelX,t.pixelY,t.size,t.size),o.fill(),o.closePath())})}function Gt(){ct(D,function(e){var t=this;if(a&&t.pathIndex<t[rt][J]){var n=t[rt][t.pathIndex];t.x=Nt(t.pixelX+t.size/2,h),t.y=Nt(t.pixelY+t.size/2,h),t.targetX=n.x,t.targetY=n.y;var r=k[t.x][t.y],i=t[at]/r[at],s=Et(t.targetX,t.size),o=Et(t.targetY,t.size);yt(t.pixelX)<s?t.pixelX+i>s?t.pixelX=s:t.pixelX+=i:yt(t.pixelY)<o?t.pixelY+i>o?t.pixelY=o:t.pixelY+=i:yt(t.pixelX)>s?t.pixelX-i<s?t.pixelX=s:t.pixelX-=i:yt(t.pixelY)>o&&(t.pixelY-i<o?t.pixelY=o:t.pixelY-=i),yt(t.pixelX)===Et(t.targetX,t.size)&&yt(t.pixelY)===Et(t.targetY,t.size)&&t.pathIndex++}a&&t.x===a.x&&t.y===a.y&&(cn(t),Yt(t,e))})}function Yt(e,t){var n=e.pixelX,r=e.pixelY,i=e.size/2;Yn(bt(e.health/e.fullHealth*e.size)+1,60,[2,7],[-2,2,-2,2],[n,r-i,n+i,r+i],[ht(e.red,e.green,e.blue),ht(vt(e.red),vt(e.green),vt(e.blue))]),Xn(e.fullHealth*10/m),D.splice(t,1)}function Zt(e,t){if(a){var n=[],r,i,s;return ct(e,function(e){i=this,s=t||qt(),r=Sn.search(s,s[i.x][i.y],s[a.x][a.y]),n[G](!!r.length)}),n.indexOf(!1)>-1?!1:r}}function en(e){ct(e,function(e){var t=this,n=Zt([t]);t.path=n,t.pathIndex=0,t.targetX=n[0].x,t.targetY=n[0].y})}function tn(){if(!O[1])r[X]("nextWave").setAttribute("disabled",!0),jn(r.getElementById("nextWave"),"click",tn);else{w=!0;for(var e=0;e<O[0].length;e++)O[1].push(O[0][e])}}function nn(e,t,n,r,i,s,o){var u=rn(t,s,o);return{"is":"tower","name":e,"weapon":t,"width":u.width,"height":u.height,"depth":u.depth,"path":u.path,"colors":u.colors,"image":sn(u),"x":u.x,"y":u.y,"level":1,"type":n,"cost":r,"health":i,"fullHealth":i}}function rn(e,t,n){var r=St(t[0][0],t[0][1]),i=St(t[1][0],t[1][1]),s=St(t[2][0],t[2][1]),o="rectangle";return e!=="none"&&(o="triangle"),{"x":0,"y":0,"width":r,"height":i,"depth":s,"colors":n,"path":o}}function sn(e){var t=s[F],n=s[I];pt(e.width,e.height+e.depth),an[e.path](e);var r=new Image;return r[it]=s[et](),pt(t,n),r}function on(e,t,n,r,i,s){o.beginPath(),o.rect(e,t,n,r),o.fillStyle=i,o.fill(),o.closePath()}function un(e,t,n,r,i,s,u){o.beginPath(),o.moveTo(e,t),o.lineTo(i,s),o.lineTo(n,r),o.closePath(),o.fillStyle=u,o.fill(),o.closePath()}function fn(){if(a!==null)return a;if(a===null){var e=ln();if(e)return a=L[e.x][e.y],a}return!1}function ln(){for(var e=0;e<L[J];e++)for(var t=0;t<L[e][J];t++)if(L[e][t][j]==="base")return{"x":e,"y":t};return!1}function cn(e){Vn(e.health),gt(a,e.health);if(a.health<1){hn(a.x,a.y),a=null;var t=fn();t||Ot()}}function hn(e,t){var n=L[e][t],r=Et(t,h),i=r-n.height/2,s=r+n.height,o=Et(e,h),u=o+lt-n.width/2,a=o+n.width,f=[];for(var l=0;l<n.colors.length;l++){var c=n.colors[l];f.push(ht(c.red,c.green,c.blue))}Yn(20,50,[2,7],[-2,2,-2,2],[u,i,a,s],f,!0),L[e][t]=0}function pn(e,t){var n=L[e][t];Xn(n.cost*(n.health/n.fullHealth)*.75),hn(e,t)}function dn(){var e=bn().cost;d=null,Xn(e)}function vn(e,t,n){return dt(B[e.weapon])}function mn(e,t){if(gn()){var n=L[e][t];Vn(ar(n)),n.level++,or(n)}}function gn(){return b&&Wn>=ar(b)?!0:!1}function yn(){return bn()?!0:!1}function bn(){return d===tt?!1:Tt(A,j,d)[0]}function wn(e){if(JSON.stringify(v)!==E||e){E=JSON.stringify(v),r.body.style.cursor="default";if(mt(L)!==0)return r.body.style.cursor="pointer",S=null,tt;if(!yn())return S=!0,!0;var t=qt(v.x,v.y);if(Rt(t).indexOf(!0)===-1)return S=!1,!1;if(D[J]){var n=Tt(D,"x",v.x);if(Tt(n,"y",v.y)[J])return S=!1,!1;var n=Tt(D,"targetX",v.x);if(Tt(n,"targetY",v.y)[J])return S=!1,!1;var t=qt(v.x,v.y);if(!Zt(D,t))return S=!1,!1}return bn().is==="terrain"?(S=!0,!0):mt(k).type===rt?(S=!0,!0):bn().is==="trap"&&mt(k).type==="fast"?(S=!0,!0):(S=!1,!1)}return S}function En(){r[X](nt).children[J]>0&&(r[X](nt)[W]="");var e=[];for(var t=1;t<A[J];t++){var n=A[t],i="",s="",o=q+">"+n[j]+z,u=q+" class='cost'>$"+n.cost+z,a="<img src='"+n.image.src+"'>",f=R+" data-name='"+n.name+"' class='container"+i+s+"' title='"+n.is+": "+n[j]+" ($"+n.cost+")"+"'>"+a+o+u+U;e.push(""+f+"")}r[X](nt)[W]=e.join(""),Ln()}function xn(e){this.content=[],this.scoreFunction=e}function Tn(){Nn(),u=requestAnimationFrame(Tn)}function Nn(){pt(l*h,c*h),It()}function Cn(){r[X]("loadingText")[Z].add("hidden"),r[X]("message")[Z].remove("hidden")}function kn(){r[X]("loading")[Z].add("hidden"),Tn()}function Ln(){var e=r[$](".container");for(var t=0;t<e[J];t++)Bn(e[t],"click",On)}function An(e){e.preventDefault()}function On(e){An(e);var t=this;!t[Z].contains("expensive")&&!yn()&&(b=null,d=t.getAttribute("data-name"),Vn(Tt(A,j,d)[0].cost))}function Mn(e){An(e),(a.x!==v.x||a.y!==v.y)&&pn(b.x,b.y),b=null}function _n(e){An(e),(a.x!==v.x||a.y!==v.y)&&mn(b.x,b.y)}function Dn(e){An(e),b=null;if(yn()&&wn())if(e.which===2)dn();else{var t=dt(bn(),["x","y","weapon"],[Bt,jt,vn],[v.x,v.y]);L[v.x][v.y]=t,d=null,$n(),D.length&&en(D)}wn()===null&&(e.which===2?(a.x!==v.x||a.y!==v.y)&&pn(v.x,v.y):L[v.x][v.y]===0?b=null:b=L[v.x][v.y])}function Pn(e){v.x=e.pageX-s.offsetLeft,v.y=e.pageY-s.offsetTop,v.x=Nt(v.x,h),v.y=Nt(v.y,h)}function Hn(){strokeColor="black",wn()&&yn()?strokeColor="green":wn()===tt?strokeColor="blue":wn()||(strokeColor="red")}function Bn(e,t,n){jn(e,t,n),e.addEventListener(t,n,!0)}function jn(e,t,n){e.removeEventListener(t,n)}function Fn(){var e=v.x*32,t=v.y*32;o.strokeStyle=strokeColor,o.lineWidth=2,o.strokeRect(e,t,32,32),o.strokeStyle="#FFF",o.strokeRect(e-2,t-2,36,36)}function In(){Bn(r,"keydown",qn)}function qn(e){var t=0;e.keyCode-48>=1&&e.keyCode-48<=5?t=e.keyCode-48:e.keyCode-96>=1&&e.keyCode-96<=5&&(t=e.keyCode-96);if(t>0){An(e);var n=r[$](".container"),i=n[t-1];!i[Z].contains("expensive")&&!yn()&&(b=null,d=i[V]("span").innerText,Vn(Tt(A,j,d)[0].cost))}}function Rn(){for(i=0;i<_[J];i++){var t=_[i];for(e=0;e<t.path.length;e++){var n=t.path[e];o.beginPath(),o.fillStyle="rgba(100,100,100,0.5)",o.fillRect(n.x*h,n.y*h,h,h),o.fill(),o.closePath()}}}function Un(){for(i=0;i<_[J];i++){var t=_[i],n=qt(v.x,v.y),r=getBaseCoords(),s=Sn.search(n,n[t.x][t.y],n[r.x][r.y]);for(e=0;e<s.length;e++){var u=s[e];o.beginPath(),o.fillStyle="rgba(0,255,0,0.5)",o.fillRect(u.x*h,u.y*h,h,h),o.fill(),o.closePath()}}}function zn(){cancelAnimationFrame(u)}function Xn(e){Wn+=yt(e),$n()}function Vn(e){Wn-=yt(e),$n()}function $n(){var e=r[$](".container");for(var t=0;t<e[J];t++){var n=e[t],i=A[t+1];n[Z].remove("expensive"),n[Z].remove("building"),i.cost>Wn&&n[Z].add("expensive"),bn()&&n[Z].add("building")}Jn()}function Jn(){gn()?r.getElementById("upgrade").setAttribute("disabled",!0):r.getElementById("upgrade").removeAttribute("disabled")}function Kn(){var e=fn().health||0,t="<li>",n="</li>",i="<code>",s="</code>",o=[];o[G]("Base Health: "+i+e+s),o[G]("Wave: "+i+m+s),o[G]("Enemies: "+i+g+s),o[G]("Enemies Remaining: "+i+(O[0].length+D.length)+s),o[G]("Time until Next Wave: "+i+y+s),o[G]("money: "+i+Wn+s),r[X]("data")[W]="<ul>"+t+o.join(n+t)+n+"</ul>";var o=[];o[G]("Mouse Position: "+i+v.x+", "+v.y+s),o[G]("Tile: "+i+mt(k).name+s),o[G]("Can Build: "+i+wn()+s),r[X]("selection")[W]="<ul>"+t+o.join(n+t)+n+"</ul>";if(b!==null){var o=[];o.push("Name: "+i+b.name+s),o.push("Level: "+i+b.level+s),o.push("Health: "+i+b.health/b.fullHealth*100+"%"+s),o.push("Weapon Stats:"),o.push("Name: "+i+b.weapon.name+s),o.push("Range: "+i+b.weapon.range+s),o.push("Bullets Per Shot: "+i+b.weapon.amount+s),o.push("Delay: "+i+b.weapon.delay+s),o.push("Damage: "+i+b.weapon.damage+s),r[X]("tower")[W]="<ul>"+t+o.join(n+t)+n+"</ul>",b.name!=="Base"&&(r[X]("sell").removeAttribute("disabled"),Bn(r[X]("sell"),"click",Mn),r[X]("upgrade").value="Upgrade Tower ($"+ar(b)+")",gn()?(r[X]("upgrade").removeAttribute("disabled"),Bn(r[X]("upgrade"),"click",_n)):(r[X]("upgrade").setAttribute("disabled",!0),jn(r[X]("upgrade"),"click",_n)))}else r[X]("tower")[W]="",r[X]("upgrade").setAttribute("disabled",!0),r[X]("sell").setAttribute("disabled",!0),jn(r[X]("sell"),"click",Mn),jn(r[X]("upgrade"),"click",_n)}function Qn(e,t,n,r,i,s,o,u,a,f,l,c){var p=i/3,d=h/60*St(i+p,i-p),v=St(0,c.length-1);return{"x":St(e,n),"y":St(t,r),"w":St(s,o),"h":St(s,o),"dx":Ct(u,a),"dy":Ct(f,l),"life":d,"lifespan":d,"color":c[v]}}function Gn(){for(var e=0;e<P.length;e++){var t=P[e];o.beginPath(),o.fillStyle=t.color,o.fillRect(t.x,t.y,t.w,t.h),o.fill(),o.closePath(),t.life=t.life-1,t.life>0?(t.x=t.x+t.dx,t.y=t.y+t.dy):P.splice(e,1)}}function Yn(e,t,n,r,i,s){for(var o=0;o<e;o++)P.push(Qn(i[0],i[1],i[2],i[3],t,n[0],n[1],r[0],r[1],r[2],r[3],s))}function Zn(e){var t=0,n=e.length;waitForParticles}function er(){for(var e=0;e<H.length;e++){var t=H[e];if(t.x+t.radius>s.width||t.y+t.radius>s.height||t.x<0||t.y<0)H.splice(e,1);else{var n=ir(t);if(n){H.splice(e,1),gt(n,t.damage);var r=n.pixelX,i=n.pixelY,u=n.size/2;Yn(bt(t.damage/n.fullHealth*n.size)+1,60,[2,7],[-2,2,-2,2],[r,i-u,r+u,i+u],[ht(n.red,n.green,n.blue),ht(vt(n.red),vt(n.green),vt(n.blue))])}else{o.beginPath(),o.fillStyle="rgba("+t.red+","+t.green+","+t.blue+","+t.life/t.maxLife+")",o.arc(t.x,t.y,t.radius,0,2*Math.PI,!1),o.fill(),o.closePath();if(t.life>0||t.life<0)t.targetX>0&&t.targetY>0?(t.x-=t.speed*t.dx,t.y-=t.speed*t.dy):t.targetX<0&&t.targetY>0?(t.x-=t.speed*t.dx,t.y-=t.speed*t.dy):(t.x+=t.speed*t.dx,t.y+=t.speed*t.dy),t.life--;t.life===0&&H.splice(e,1)}}}}function tr(e){e.weapon.timer>=e.weapon.delay&&ct(D,function(t){var n=this,r=Et(e.x,1),i=Et(e.y,1,e.size)-e.height,s=e.weapon.range*h;if(nr(r,i,s,n.pixelX,n.pixelY,n.size/2)&&e.weapon.timer>=e.weapon.delay){e.weapon.timer=0;var o=r-n.pixelX,u=i-n.pixelY,a=Math.atan(o/u),f=e.weapon.speed/60*Math.sin(a),l=e.weapon.speed/60*Math.cos(a);ur(e,r,i,f,l,o,u)}}),e.weapon.timer++}function nr(e,t,n,r,i,s){var o=e-r,u=t-i,a=n+s;return o*o+u*u<=a*a}function rr(e,t,n,r,i,s,o,u,a,f,l,c,h,p,d){if(e==="cannon")H.push({"radius":i,"x":o,"y":u,"dx":a,"dy":f,"red":l,"green":c,"blue":h,"alpha":p,"life":r,"maxLife":r,"speed":s,"targetX":t,"targetY":n,"damage":d||1});else if(e==="spread")for(var v=0;v<5;v++){var l=St(0,100),c=St(0,100),h=St(100,255);rr("cannon",t,n,25,3,s,o,u,Ct(a-a/2,a+a/2),Ct(f-f/2,f+f/2),l,c,h,p,2)}else if(e==="beam")H.push({"radius":i,"x":o,"y":u,"dx":Ct(a-a/2,a+a/2),"dy":Ct(f-f/2,f+f/2),"red":l,"green":c,"blue":h,"alpha":p,"life":1e3,"maxLife":100,"speed":20,"targetX":t,"targetY":n,"damage":1});else if(e==="explode")for(var v=0;v<25;v++)H.push({"radius":i,"x":o,"y":u,"dx":Ct(-2,2)/60,"dy":Ct(-2,2)/60,"red":l,"green":c,"blue":h,"alpha":p,"life":35,"maxLife":35,"speed":120,"targetX":t,"targetY":n,"damage":5})}function ir(e){for(var t=0;t<D.length;t++){var n=D[t];if(nr(n.pixelX,n.pixelY,n.size/2,e.x,e.y,e.radius))return n}return!1}function sr(e,t,n,r,i,s,o,u,a,f){B[e]={"name":e,"radius":u,"amount":t,"directionFunction":f,"x":null,"y":null,"dx":null,"dy":null,"level":1,"red":a.red,"green":a.green,"blue":a.blue,"alpha":1,"life":o,"maxLife":o,"speed":n,"targetX":null,"targetY":null,"range":s,"delay":i,"timer":0,"damage":r||1}}function or(e){if(e.level!==e.weapon.level){if(e.weapon.name==="spread"||e.weapon.name==="gatling"||e.weapon.name==="explode")var t=function(t){return t+e.level};else var t=function(e){return e};var n=function(e){return e};e.weapon=fr(e.weapon,{"amount":t,"range":function(t){return t+e.level*.5},"life":function(t){return t+e.level*10},"maxLife":function(t){return t+e.level*10},"damage":function(t){return t+e.level},"delay":function(t){return t-e.level>-1?t-e.level:0},"speed":n})}}function ur(e,t,n,r,i,s,o){for(var u=0;u<e.weapon.amount;u++){var a=dt(e.weapon);H.push(fr(a,{"x":t,"y":n,"dx":e.weapon.directionFunction(r),"dy":e.weapon.directionFunction(i),"targetX":s,"targetY":o}))}}function ar(e){return e.cost*e.level*2}function fr(e,t){for(var r in t)e[r]!==n&&(typeof t[r]=="function"?e[r]=t[r](B[e.name][r]):e[r]=t[r]);return e}var r=t.document,s,o,u=null,a=null,f=0,l=20,c=20,h=32,p=0,d=null,v={"x":0,"y":0},m=1,g=0,y=0,b=null,w=!1,E="",S=!0,x=0,T=[],N=[],C=[],k=[],L=[],A=[],O=[],M=[],A=[],_=[],D=[],P=[],H=[],B={},j="name",F="width",I="height",q="<span",R="<div",U="</div>",z="</span>",W="innerHTML",X="getElementById",V="querySelector",$=V+"All",J="length",K="floor",Q="Math",G="push",Y="rgb(",Z="classList",et="toDataURL",tt=null,nt="towers",rt="path",it="src",st="cost",ot="next",ut="color",at="speed",ft=t,lt=h/2;ft.addEventListener("DOMContentLoaded",function(){At(),En(),Ft(l,c),Xn(500),Bn(s,"mousemove",Pn),Bn(s,"mousedown",Dn),Bn(s,"contextmenu",An),Bn(r.getElementById("startGame"),"click",kn),Bn(r.getElementById("nextWave"),"click",tn),Bn(r.getElementById("nextWave"),"click",tn),Cn(),In()});var an={"triangle":function(e){var t=e.x,n=e.y,r=e.depth,i=e.width,s=e.height,o=i/2,u=e.colors;un(o+t,n,t,n+s,t+o,n+s+r,ht(u[0].red,u[0].green,u[0].blue)),un(o+t-1,n,o+t-1,n+s+r,t+i,n+s,ht(u[1].red,u[1].green,u[1].blue))},"rectangle":function(e){var t=e.colors;on(e.x,e.y+e.depth/2,e.width,e.height,ht(t[0].red,t[0].green,t[0].blue)),on(e.x,e.y,e.width,e.depth,ht(t[1].red,t[1].green,t[1].blue))}},Sn={"init":function(e){for(var t=0,n=e[J];t<n;t++)for(var r=0,i=e[t][J];r<i;r++){var s=e[t][r];s.f=0,s.g=0,s.h=0,s[st]=s[at],s.visited=!1,s.closed=!1,s.parent=tt}},"heap":function(){return new xn(function(e){return e.f})},"search":function(e,t,n){Sn.init(e),heuristic=Sn.manhattan;var r=Sn.heap();r[G](t);while(r.size()>0){var i=r.pop();if(i===n){var s=i,o=[];while(s.parent)o[G](s),s=s.parent;return o.reverse()}i.closed=!0;var u=Sn.neighbors(e,i);for(var a=0,f=u[J];a<f;a++){var l=u[a];if(l.closed||l[at]===0)continue;var c=i.g+l[st],h=l.visited;if(!h||c<l.g)l.visited=!0,l.parent=i,l.h=l.h||heuristic(l.x,l.y,n.x,n.y),l.g=c,l.f=l.g+l.h,h?r.rescoreElement(l):r[G](l)}}return[]},"manhattan":function(e,t,n,r){var i=ft[Q].abs(n-e),s=ft[Q].abs(r-t);return i+s},"neighbors":function(e,t){var n=[],r=t.x,i=t.y;return e[r-1]&&e[r-1][i]&&n[G](e[r-1][i]),e[r+1]&&e[r+1][i]&&n[G](e[r+1][i]),e[r]&&e[r][i-1]&&n[G](e[r][i-1]),e[r]&&e[r][i+1]&&n[G](e[r][i+1]),n}};xn.prototype={"push":function(e){this.content[G](e),this.sinkDown(this.content[J]-1)},"pop":function(){var e=this.content[0],t=this.content.pop();return this.content[J]>0&&(this.content[0]=t,this.bubbleUp(0)),e},"size":function(){return this.content[J]},"rescoreElement":function(e){this.sinkDown(this.content.indexOf(e))},"sinkDown":function(e){var t=this.content[e];while(e>0){var n=(e+1>>1)-1,r=this.content[n];if(!(this.scoreFunction(t)<this.scoreFunction(r)))break;this.content[n]=t,this.content[e]=r,e=n}},"bubbleUp":function(e){var t=this.content[J],n=this.content[e],r=this.scoreFunction(n);for(;;){var i=e+1<<1,s=i-1,o=tt;if(s<t){var u=this.content[s],a=this.scoreFunction(u);a<r&&(o=s)}if(i<t){var f=this.content[i],l=this.scoreFunction(f);l<(o===tt?r:a)&&(o=i)}if(o===tt)break;this.content[e]=this.content[o],this.content[o]=n,e=o}}};var Wn=0;(function(){var e=0,t=["ms","moz","webkit","o"];for(var n=0;n<t[J]&&!ft.requestAnimationFrame;++n)ft.requestAnimationFrame=ft[t[n]+"RequestAnimationFrame"],ft.cancelAnimationFrame=ft[t[n]+"CancelAnimationFrame"]||ft[t[n]+"CancelRequestAnimationFrame"];ft.requestAnimationFrame||(ft.requestAnimationFrame=function(t,n){var r=(new Date).getTime(),i=ft[Q].max(0,16-(r-e)),s=ft.setTimeout(function(){t(r+i)},i);return e=r+i,s}),ft.cancelAnimationFrame||(ft.cancelAnimationFrame=function(e){clearTimeout(e)})})(),typeof r!="undefined"&&!("classList"in r.createElement("a"))&&function(e){"use strict";var t="classList",n="prototype",r=(e.HTMLElement||e.Element)[n],i=Object,s=String[n].trim||function(){return this.replace(/^\s+|\s+$/g,"")},o=Array[n].indexOf||function(e){var t=0,n=this.length;for(;t<n;t++)if(t in this&&this[t]===e)return t;return-1},u=function(e,t){this.name=e,this.code=DOMException[e],this.message=t},a=function(e,t){if(t==="")throw new u("SYNTAX_ERR","An invalid or illegal string was specified");if(/\s/.test(t))throw new u("INVALID_CHARACTER_ERR","String contains an invalid character");return o.call(e,t)},f=function(e){var t=s.call(e.className),n=t?t.split(/\s+/):[],r=0,i=n.length;for(;r<i;r++)this.push(n[r]);this._updateClassName=function(){e.className=this.toString()}},l=f[n]=[],c=function(){return new f(this)};u[n]=Error[n],l.item=function(e){return this[e]||null},l.contains=function(e){return e+="",a(this,e)!==-1},l.add=function(e){e+="",a(this,e)===-1&&(this.push(e),this._updateClassName())},l.remove=function(e){e+="";var t=a(this,e);t!==-1&&(this.splice(t,1),this._updateClassName())},l.toggle=function(e){e+="",a(this,e)===-1?this.add(e):this.remove(e)},l.toString=function(){return this.join(" ")};if(i.defineProperty){var h={"get":c,"enumerable":!0,"configurable":!0};try{i.defineProperty(r,t,h)}catch(p){p.number===-2146823252&&(h.enumerable=!1,i.defineProperty(r,t,h))}}else i[n].__defineGetter__&&r.__defineGetter__(t,c)}(self);var lr={}})(window)