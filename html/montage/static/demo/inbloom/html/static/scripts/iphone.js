// Flot.js
(function(a){a.color={};a.color.make=function(b,c,d,e){var f={};f.r=b||0;f.g=c||0;f.b=d||0;f.a=e!=null?e:1;f.add=function(a,b){for(var c=0;c<a.length;++c){f[a.charAt(c)]+=b}return f.normalize()};f.scale=function(a,b){for(var c=0;c<a.length;++c){f[a.charAt(c)]*=b}return f.normalize()};f.toString=function(){if(f.a>=1){return"rgb("+[f.r,f.g,f.b].join(",")+")"}else{return"rgba("+[f.r,f.g,f.b,f.a].join(",")+")"}};f.normalize=function(){function a(a,b,c){return b<a?a:b>c?c:b}f.r=a(0,parseInt(f.r),255);f.g=a(0,parseInt(f.g),255);f.b=a(0,parseInt(f.b),255);f.a=a(0,f.a,1);return f};f.clone=function(){return a.color.make(f.r,f.b,f.g,f.a)};return f.normalize()};a.color.extract=function(b,c){var d;do{d=b.css(c).toLowerCase();if(d!=""&&d!="transparent"){break}b=b.parent()}while(!a.nodeName(b.get(0),"body"));if(d=="rgba(0, 0, 0, 0)"){d="transparent"}return a.color.parse(d)};a.color.parse=function(c){var d,e=a.color.make;if(d=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(c)){return e(parseInt(d[1],10),parseInt(d[2],10),parseInt(d[3],10))}if(d=/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(c)){return e(parseInt(d[1],10),parseInt(d[2],10),parseInt(d[3],10),parseFloat(d[4]))}if(d=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(c)){return e(parseFloat(d[1])*2.55,parseFloat(d[2])*2.55,parseFloat(d[3])*2.55)}if(d=/rgba\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(c)){return e(parseFloat(d[1])*2.55,parseFloat(d[2])*2.55,parseFloat(d[3])*2.55,parseFloat(d[4]))}if(d=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(c)){return e(parseInt(d[1],16),parseInt(d[2],16),parseInt(d[3],16))}if(d=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(c)){return e(parseInt(d[1]+d[1],16),parseInt(d[2]+d[2],16),parseInt(d[3]+d[3],16))}var f=a.trim(c).toLowerCase();if(f=="transparent"){return e(255,255,255,0)}else{d=b[f]||[0,0,0];return e(d[0],d[1],d[2])}};var b={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0]}})(jQuery);(function(a){function c(a,b){return b*Math.floor(a/b)}function b(b,d,e,f){function bx(b,c,d,e){if(typeof b=="string")return b;else{var f=m.createLinearGradient(0,d,0,c);for(var g=0,h=b.colors.length;g<h;++g){var i=b.colors[g];if(typeof i!="string"){var j=a.color.parse(e);if(i.brightness!=null)j=j.scale("rgb",i.brightness);if(i.opacity!=null)j.a*=i.opacity;i=j.toString()}f.addColorStop(g/(h-1),i)}return f}}function bw(b,c){n.lineWidth=b.bars.lineWidth;n.strokeStyle=a.color.parse(b.color).scale("a",.5).toString();var d=a.color.parse(b.color).scale("a",.5).toString();var e=b.bars.align=="left"?0:-b.bars.barWidth/2;bf(c[0],c[1],c[2]||0,e,e+b.bars.barWidth,0,function(){return d},b.xaxis,b.yaxis,n,b.bars.horizontal,b.bars.lineWidth)}function bv(b,c){var d=c[0],e=c[1],f=b.xaxis,g=b.yaxis;if(d<f.min||d>f.max||e<g.min||e>g.max)return;var h=b.points.radius+b.points.lineWidth/2;n.lineWidth=h;n.strokeStyle=a.color.parse(b.color).scale("a",.5).toString();var i=1.5*h,d=f.p2c(d),e=g.p2c(e);n.beginPath();if(b.points.symbol=="circle")n.arc(d,e,i,0,2*Math.PI,false);else b.points.symbol(n,d,e,i,false);n.closePath();n.stroke()}function bu(a,b){for(var c=0;c<bj.length;++c){var d=bj[c];if(d.series==a&&d.point[0]==b[0]&&d.point[1]==b[1])return c}return-1}function bt(a,b){if(a==null&&b==null){bj=[];bq()}if(typeof a=="number")a=g[a];if(typeof b=="number")b=a.data[b];var c=bu(a,b);if(c!=-1){bj.splice(c,1);bq()}}function bs(a,b,c){if(typeof a=="number")a=g[a];if(typeof b=="number"){var d=a.datapoints.pointsize;b=a.datapoints.points.slice(d*b,d*(b+1))}var e=bu(a,b);if(e==-1){bj.push({series:a,point:b,auto:c});bq()}else if(!c)bj[e].auto=false}function br(){bk=null;n.save();n.clearRect(0,0,r,s);n.translate(q.left,q.top);var a,b;for(a=0;a<bj.length;++a){b=bj[a];if(b.series.bars.show)bw(b.series,b.point);else bv(b.series,b.point)}n.restore();x(v.drawOverlay,[n])}function bq(){if(!bk)bk=setTimeout(br,30)}function bp(a,c,d){var e=l.offset(),f=c.pageX-e.left-q.left,g=c.pageY-e.top-q.top,i=E({left:f,top:g});i.pageX=c.pageX;i.pageY=c.pageY;var j=bl(f,g,d);if(j){j.pageX=parseInt(j.series.xaxis.p2c(j.datapoint[0])+e.left+q.left);j.pageY=parseInt(j.series.yaxis.p2c(j.datapoint[1])+e.top+q.top)}if(h.grid.autoHighlight){for(var k=0;k<bj.length;++k){var m=bj[k];if(m.auto==a&&!(j&&m.series==j.series&&m.point[0]==j.datapoint[0]&&m.point[1]==j.datapoint[1]))bt(m.series,m.point)}if(j)bs(j.series,j.datapoint,a)}b.trigger(a,[i,j])}function bo(a){bp("plotclick",a,function(a){return a["clickable"]!=false})}function bn(a){if(h.grid.hoverable)bp("plothover",a,function(a){return false})}function bm(a){if(h.grid.hoverable)bp("plothover",a,function(a){return a["hoverable"]!=false})}function bl(a,b,c){var d=h.grid.mouseActiveRadius,e=d*d+1,f=null,i=false,j,k;for(j=g.length-1;j>=0;--j){if(!c(g[j]))continue;var l=g[j],m=l.xaxis,n=l.yaxis,o=l.datapoints.points,p=l.datapoints.pointsize,q=m.c2p(a),r=n.c2p(b),s=d/m.scale,t=d/n.scale;if(m.options.inverseTransform)s=Number.MAX_VALUE;if(n.options.inverseTransform)t=Number.MAX_VALUE;if(l.lines.show||l.points.show){for(k=0;k<o.length;k+=p){var u=o[k],v=o[k+1];if(u==null)continue;if(u-q>s||u-q<-s||v-r>t||v-r<-t)continue;var w=Math.abs(m.p2c(u)-a),x=Math.abs(n.p2c(v)-b),y=w*w+x*x;if(y<e){e=y;f=[j,k/p]}}}if(l.bars.show&&!f){var z=l.bars.align=="left"?0:-l.bars.barWidth/2,A=z+l.bars.barWidth;for(k=0;k<o.length;k+=p){var u=o[k],v=o[k+1],B=o[k+2];if(u==null)continue;if(g[j].bars.horizontal?q<=Math.max(B,u)&&q>=Math.min(B,u)&&r>=v+z&&r<=v+A:q>=u+z&&q<=u+A&&r>=Math.min(B,v)&&r<=Math.max(B,v))f=[j,k/p]}}}if(f){j=f[0];k=f[1];p=g[j].datapoints.pointsize;return{datapoint:g[j].datapoints.points.slice(k*p,(k+1)*p),dataIndex:k,series:g[j],seriesIndex:j}}return null}function bi(){b.find(".legend").remove();if(!h.legend.show)return;var c=[],d=false,e=h.legend.labelFormatter,f,i;for(var j=0;j<g.length;++j){f=g[j];i=f.label;if(!i)continue;if(j%h.legend.noColumns==0){if(d)c.push("</tr>");c.push("<tr>");d=true}if(e)i=e(i,f);c.push('<td class="legendColorBox"><div style="border:1px solid '+h.legend.labelBoxBorderColor+';padding:1px"><div style="width:4px;height:0;border:5px solid '+f.color+';overflow:hidden"></div></div></td>'+'<td class="legendLabel">'+i+"</td>")}if(d)c.push("</tr>");if(c.length==0)return;var k='<table style="font-size:smaller;color:'+h.grid.color+'">'+c.join("")+"</table>";if(h.legend.container!=null)a(h.legend.container).html(k);else{var l="",m=h.legend.position,n=h.legend.margin;if(n[0]==null)n=[n,n];if(m.charAt(0)=="n")l+="top:"+(n[1]+q.top)+"px;";else if(m.charAt(0)=="s")l+="bottom:"+(n[1]+q.bottom)+"px;";if(m.charAt(1)=="e")l+="right:"+(n[0]+q.right)+"px;";else if(m.charAt(1)=="w")l+="left:"+(n[0]+q.left)+"px;";var o=a('<div class="legend">'+k.replace('style="','style="position:absolute;'+l+";")+"</div>").appendTo(b);if(h.legend.backgroundOpacity!=0){var p=h.legend.backgroundColor;if(p==null){p=h.grid.backgroundColor;if(p&&typeof p=="string")p=a.color.parse(p);else p=a.color.extract(o,"background-color");p.a=1;p=p.toString()}var r=o.children();a('<div style="position:absolute;width:'+r.width()+"px;height:"+r.height()+"px;"+l+"background-color:"+p+';"> </div>').prependTo(o).css("opacity",h.legend.backgroundOpacity)}}}function bh(b,c,d,e){var f=b.fill;if(!f)return null;if(b.fillColor)return bx(b.fillColor,d,e,c);var g=a.color.parse(c);g.a=typeof f=="number"?f:.4;g.normalize();return g.toString()}function bg(a){function b(b,c,d,e,f,g,h){var i=b.points,j=b.pointsize;for(var k=0;k<i.length;k+=j){if(i[k]==null)continue;bf(i[k],i[k+1],i[k+2],c,d,e,f,g,h,m,a.bars.horizontal,a.bars.lineWidth)}}m.save();m.translate(q.left,q.top);m.lineWidth=a.bars.lineWidth;m.strokeStyle=a.color;var c=a.bars.align=="left"?0:-a.bars.barWidth/2;var d=a.bars.fill?function(b,c){return bh(a.bars,a.color,b,c)}:null;b(a.datapoints,c,c+a.bars.barWidth,0,d,a.xaxis,a.yaxis);m.restore()}function bf(a,b,c,d,e,f,g,h,i,j,k,l){var m,n,o,p,q,r,s,t,u;if(k){t=r=s=true;q=false;m=c;n=a;p=b+d;o=b+e;if(n<m){u=n;n=m;m=u;q=true;r=false}}else{q=r=s=true;t=false;m=a+d;n=a+e;o=c;p=b;if(p<o){u=p;p=o;o=u;t=true;s=false}}if(n<h.min||m>h.max||p<i.min||o>i.max)return;if(m<h.min){m=h.min;q=false}if(n>h.max){n=h.max;r=false}if(o<i.min){o=i.min;t=false}if(p>i.max){p=i.max;s=false}m=h.p2c(m);o=i.p2c(o);n=h.p2c(n);p=i.p2c(p);if(g){j.beginPath();j.moveTo(m,o);j.lineTo(m,p);j.lineTo(n,p);j.lineTo(n,o);j.fillStyle=g(o,p);j.fill()}if(l>0&&(q||r||s||t)){j.beginPath();j.moveTo(m,o+f);if(q)j.lineTo(m,p+f);else j.moveTo(m,p+f);if(s)j.lineTo(n,p+f);else j.moveTo(n,p+f);if(r)j.lineTo(n,o+f);else j.moveTo(n,o+f);if(t)j.lineTo(m,o+f);else j.moveTo(m,o+f);j.stroke()}}function be(a){function b(a,b,c,d,e,f,g,h){var i=a.points,j=a.pointsize;for(var k=0;k<i.length;k+=j){var l=i[k],n=i[k+1];if(l==null||l<f.min||l>f.max||n<g.min||n>g.max)continue;m.beginPath();l=f.p2c(l);n=g.p2c(n)+d;if(h=="circle")m.arc(l,n,b,0,e?Math.PI:Math.PI*2,false);else h(m,l,n,b,e);m.closePath();if(c){m.fillStyle=c;m.fill()}m.stroke()}}m.save();m.translate(q.left,q.top);var c=a.points.lineWidth,d=a.shadowSize,e=a.points.radius,f=a.points.symbol;if(c>0&&d>0){var g=d/2;m.lineWidth=g;m.strokeStyle="rgba(0,0,0,0.1)";b(a.datapoints,e,null,g+g/2,true,a.xaxis,a.yaxis,f);m.strokeStyle="rgba(0,0,0,0.2)";b(a.datapoints,e,null,g/2,true,a.xaxis,a.yaxis,f)}m.lineWidth=c;m.strokeStyle=a.color;b(a.datapoints,e,bh(a.points,a.color),0,false,a.xaxis,a.yaxis,f);m.restore()}function bd(a){function c(a,b,c){var d=a.points,e=a.pointsize,f=Math.min(Math.max(0,c.min),c.max),g=0,h,i=false,j=1,k=0,l=0;while(true){if(e>0&&g>d.length+e)break;g+=e;var n=d[g-e],o=d[g-e+j],p=d[g],q=d[g+j];if(i){if(e>0&&n!=null&&p==null){l=g;e=-e;j=2;continue}if(e<0&&g==k+e){m.fill();i=false;e=-e;j=1;g=k=l+e;continue}}if(n==null||p==null)continue;if(n<=p&&n<b.min){if(p<b.min)continue;o=(b.min-n)/(p-n)*(q-o)+o;n=b.min}else if(p<=n&&p<b.min){if(n<b.min)continue;q=(b.min-n)/(p-n)*(q-o)+o;p=b.min}if(n>=p&&n>b.max){if(p>b.max)continue;o=(b.max-n)/(p-n)*(q-o)+o;n=b.max}else if(p>=n&&p>b.max){if(n>b.max)continue;q=(b.max-n)/(p-n)*(q-o)+o;p=b.max}if(!i){m.beginPath();m.moveTo(b.p2c(n),c.p2c(f));i=true}if(o>=c.max&&q>=c.max){m.lineTo(b.p2c(n),c.p2c(c.max));m.lineTo(b.p2c(p),c.p2c(c.max));continue}else if(o<=c.min&&q<=c.min){m.lineTo(b.p2c(n),c.p2c(c.min));m.lineTo(b.p2c(p),c.p2c(c.min));continue}var r=n,s=p;if(o<=q&&o<c.min&&q>=c.min){n=(c.min-o)/(q-o)*(p-n)+n;o=c.min}else if(q<=o&&q<c.min&&o>=c.min){p=(c.min-o)/(q-o)*(p-n)+n;q=c.min}if(o>=q&&o>c.max&&q<=c.max){n=(c.max-o)/(q-o)*(p-n)+n;o=c.max}else if(q>=o&&q>c.max&&o<=c.max){p=(c.max-o)/(q-o)*(p-n)+n;q=c.max}if(n!=r){m.lineTo(b.p2c(r),c.p2c(o))}m.lineTo(b.p2c(n),c.p2c(o));m.lineTo(b.p2c(p),c.p2c(q));if(p!=s){m.lineTo(b.p2c(p),c.p2c(q));m.lineTo(b.p2c(s),c.p2c(q))}}}function b(a,b,c,d,e){var f=a.points,g=a.pointsize,h=null,i=null;m.beginPath();for(var j=g;j<f.length;j+=g){var k=f[j-g],l=f[j-g+1],n=f[j],o=f[j+1];if(k==null||n==null)continue;if(l<=o&&l<e.min){if(o<e.min)continue;k=(e.min-l)/(o-l)*(n-k)+k;l=e.min}else if(o<=l&&o<e.min){if(l<e.min)continue;n=(e.min-l)/(o-l)*(n-k)+k;o=e.min}if(l>=o&&l>e.max){if(o>e.max)continue;k=(e.max-l)/(o-l)*(n-k)+k;l=e.max}else if(o>=l&&o>e.max){if(l>e.max)continue;n=(e.max-l)/(o-l)*(n-k)+k;o=e.max}if(k<=n&&k<d.min){if(n<d.min)continue;l=(d.min-k)/(n-k)*(o-l)+l;k=d.min}else if(n<=k&&n<d.min){if(k<d.min)continue;o=(d.min-k)/(n-k)*(o-l)+l;n=d.min}if(k>=n&&k>d.max){if(n>d.max)continue;l=(d.max-k)/(n-k)*(o-l)+l;k=d.max}else if(n>=k&&n>d.max){if(k>d.max)continue;o=(d.max-k)/(n-k)*(o-l)+l;n=d.max}if(k!=h||l!=i)m.moveTo(d.p2c(k)+b,e.p2c(l)+c);h=n;i=o;m.lineTo(d.p2c(n)+b,e.p2c(o)+c)}m.stroke()}m.save();m.translate(q.left,q.top);m.lineJoin="round";var d=a.lines.lineWidth,e=a.shadowSize;if(d>0&&e>0){m.lineWidth=e;m.strokeStyle="rgba(0,0,0,0.1)";var f=Math.PI/18;b(a.datapoints,Math.sin(f)*(d/2+e/2),Math.cos(f)*(d/2+e/2),a.xaxis,a.yaxis);m.lineWidth=e/2;b(a.datapoints,Math.sin(f)*(d/2+e/4),Math.cos(f)*(d/2+e/4),a.xaxis,a.yaxis)}m.lineWidth=d;m.strokeStyle=a.color;var g=bh(a.lines,a.color,0,u);if(g){m.fillStyle=g;c(a.datapoints,a.xaxis,a.yaxis)}if(d>0)b(a.datapoints,0,0,a.xaxis,a.yaxis);m.restore()}function bc(a){if(a.lines.show)bd(a);if(a.bars.show)bg(a);if(a.points.show)be(a)}function bb(){b.find(".tickLabels").remove();var a=['<div class="tickLabels" style="font-size:smaller">'];var c=D();for(var d=0;d<c.length;++d){var e=c[d],f=e.box;if(!e.show)continue;a.push('<div class="'+e.direction+"Axis "+e.direction+e.n+'Axis" style="color:'+e.options.color+'">');for(var g=0;g<e.ticks.length;++g){var h=e.ticks[g];if(!h.label||h.v<e.min||h.v>e.max)continue;var i={},j;if(e.direction=="x"){j="center";i.left=Math.round(q.left+e.p2c(h.v)-e.labelWidth/2);if(e.position=="bottom")i.top=f.top+f.padding;else i.bottom=s-(f.top+f.height-f.padding)}else{i.top=Math.round(q.top+e.p2c(h.v)-e.labelHeight/2);if(e.position=="left"){i.right=r-(f.left+f.width-f.padding);j="right"}else{i.left=f.left+f.padding;j="left"}}i.width=e.labelWidth;var k=["position:absolute","text-align:"+j];for(var l in i)k.push(l+":"+i[l]+"px");a.push('<div class="tickLabel" style="'+k.join(";")+'">'+h.label+"</div>")}a.push("</div>")}a.push("</div>");b.append(a.join(""))}function ba(){var b;m.save();m.translate(q.left,q.top);var c=h.grid.markings;if(c){if(a.isFunction(c)){var d=w.getAxes();d.xmin=d.xaxis.min;d.xmax=d.xaxis.max;d.ymin=d.yaxis.min;d.ymax=d.yaxis.max;c=c(d)}for(b=0;b<c.length;++b){var e=c[b],f=Z(e,"x"),g=Z(e,"y");if(f.from==null)f.from=f.axis.min;if(f.to==null)f.to=f.axis.max;if(g.from==null)g.from=g.axis.min;if(g.to==null)g.to=g.axis.max;if(f.to<f.axis.min||f.from>f.axis.max||g.to<g.axis.min||g.from>g.axis.max)continue;f.from=Math.max(f.from,f.axis.min);f.to=Math.min(f.to,f.axis.max);g.from=Math.max(g.from,g.axis.min);g.to=Math.min(g.to,g.axis.max);if(f.from==f.to&&g.from==g.to)continue;f.from=f.axis.p2c(f.from);f.to=f.axis.p2c(f.to);g.from=g.axis.p2c(g.from);g.to=g.axis.p2c(g.to);if(f.from==f.to||g.from==g.to){m.beginPath();m.strokeStyle=e.color||h.grid.markingsColor;m.lineWidth=e.lineWidth||h.grid.markingsLineWidth;m.moveTo(f.from,g.from);m.lineTo(f.to,g.to);m.stroke()}else{m.fillStyle=e.color||h.grid.markingsColor;m.fillRect(f.from,g.to,f.to-f.from,g.from-g.to)}}}var d=D(),i=h.grid.borderWidth;for(var j=0;j<d.length;++j){var k=d[j],l=k.box,n=k.tickLength,o,p,r,s;if(!k.show||k.ticks.length==0)continue;m.strokeStyle=k.options.tickColor||a.color.parse(k.options.color).scale("a",.22).toString();m.lineWidth=1;if(k.direction=="x"){o=0;if(n=="full")p=k.position=="top"?0:u;else p=l.top-q.top+(k.position=="top"?l.height:0)}else{p=0;if(n=="full")o=k.position=="left"?0:t;else o=l.left-q.left+(k.position=="left"?l.width:0)}if(!k.innermost){m.beginPath();r=s=0;if(k.direction=="x")r=t;else s=u;if(m.lineWidth==1){o=Math.floor(o)+.5;p=Math.floor(p)+.5}m.moveTo(o,p);m.lineTo(o+r,p+s);m.stroke()}m.beginPath();for(b=0;b<k.ticks.length;++b){var v=k.ticks[b].v;r=s=0;if(v<k.min||v>k.max||n=="full"&&i>0&&(v==k.min||v==k.max))continue;if(k.direction=="x"){o=k.p2c(v);s=n=="full"?-u:n;if(k.position=="top")s=-s}else{p=k.p2c(v);r=n=="full"?-t:n;if(k.position=="left")r=-r}if(m.lineWidth==1){if(k.direction=="x")o=Math.floor(o)+.5;else p=Math.floor(p)+.5}m.moveTo(o,p);m.lineTo(o+r,p+s)}m.stroke()}if(i){m.lineWidth=i;m.strokeStyle=h.grid.borderColor;m.strokeRect(-i/2,-i/2,t+i,u+i)}m.restore()}function _(){m.save();m.translate(q.left,q.top);m.fillStyle=bx(h.grid.backgroundColor,u,0,"rgba(255, 255, 255, 0)");m.fillRect(0,0,t,u);m.restore()}function Z(a,b){var c,d,e,f,g=D();for(i=0;i<g.length;++i){c=g[i];if(c.direction==b){f=b+c.n+"axis";if(!a[f]&&c.n==1)f=b+"axis";if(a[f]){d=a[f].from;e=a[f].to;break}}}if(!a[f]){c=b=="x"?o[0]:p[0];d=a[b+"1"];e=a[b+"2"]}if(d!=null&&e!=null&&d>e){var h=d;d=e;e=h}return{from:d,to:e,axis:c}}function Y(){m.clearRect(0,0,r,s);var a=h.grid;if(a.show&&a.backgroundColor)_();if(a.show&&!a.aboveData)ba();for(var b=0;b<g.length;++b){x(v.drawSeries,[m,g[b]]);bc(g[b])}x(v.draw,[m]);if(a.show&&a.aboveData)ba()}function X(a,b){if(a.options.autoscaleMargin&&b.length>0){if(a.options.min==null)a.min=Math.min(a.min,b[0].v);if(a.options.max==null&&b.length>1)a.max=Math.max(a.max,b[b.length-1].v)}}function W(b){var c=b.options.ticks,d=[];if(c==null||typeof c=="number"&&c>0)d=b.tickGenerator(b);else if(c){if(a.isFunction(c))d=c({min:b.min,max:b.max});else d=c}var e,f;b.ticks=[];for(e=0;e<d.length;++e){var g=null;var h=d[e];if(typeof h=="object"){f=+h[0];if(h.length>1)g=h[1]}else f=+h;if(g==null)g=b.tickFormatter(f,b);if(!isNaN(f))b.ticks.push({v:f,label:g})}}function V(b){var d=b.options;var e;if(typeof d.ticks=="number"&&d.ticks>0)e=d.ticks;else e=.3*Math.sqrt(b.direction=="x"?r:s);var f=(b.max-b.min)/e,g,h,i,j,k,l,m;if(d.mode=="time"){var n={second:1e3,minute:60*1e3,hour:60*60*1e3,day:24*60*60*1e3,month:30*24*60*60*1e3,year:365.2425*24*60*60*1e3};var q=[[1,"second"],[2,"second"],[5,"second"],[10,"second"],[30,"second"],[1,"minute"],[2,"minute"],[5,"minute"],[10,"minute"],[30,"minute"],[1,"hour"],[2,"hour"],[4,"hour"],[8,"hour"],[12,"hour"],[1,"day"],[2,"day"],[3,"day"],[.25,"month"],[.5,"month"],[1,"month"],[2,"month"],[3,"month"],[6,"month"],[1,"year"]];var t=0;if(d.minTickSize!=null){if(typeof d.tickSize=="number")t=d.tickSize;else t=d.minTickSize[0]*n[d.minTickSize[1]]}for(var k=0;k<q.length-1;++k)if(f<(q[k][0]*n[q[k][1]]+q[k+1][0]*n[q[k+1][1]])/2&&q[k][0]*n[q[k][1]]>=t)break;g=q[k][0];i=q[k][1];if(i=="year"){l=Math.pow(10,Math.floor(Math.log(f/n.year)/Math.LN10));m=f/n.year/l;if(m<1.5)g=1;else if(m<3)g=2;else if(m<7.5)g=5;else g=10;g*=l}b.tickSize=d.tickSize||[g,i];h=function(a){var b=[],d=a.tickSize[0],e=a.tickSize[1],f=new Date(a.min);var g=d*n[e];if(e=="second")f.setUTCSeconds(c(f.getUTCSeconds(),d));if(e=="minute")f.setUTCMinutes(c(f.getUTCMinutes(),d));if(e=="hour")f.setUTCHours(c(f.getUTCHours(),d));if(e=="month")f.setUTCMonth(c(f.getUTCMonth(),d));if(e=="year")f.setUTCFullYear(c(f.getUTCFullYear(),d));f.setUTCMilliseconds(0);if(g>=n.minute)f.setUTCSeconds(0);if(g>=n.hour)f.setUTCMinutes(0);if(g>=n.day)f.setUTCHours(0);if(g>=n.day*4)f.setUTCDate(1);if(g>=n.year)f.setUTCMonth(0);var h=0,i=Number.NaN,j;do{j=i;i=f.getTime();b.push(i);if(e=="month"){if(d<1){f.setUTCDate(1);var k=f.getTime();f.setUTCMonth(f.getUTCMonth()+1);var l=f.getTime();f.setTime(i+h*n.hour+(l-k)*d);h=f.getUTCHours();f.setUTCHours(0)}else f.setUTCMonth(f.getUTCMonth()+d)}else if(e=="year"){f.setUTCFullYear(f.getUTCFullYear()+d)}else f.setTime(i+g)}while(i<a.max&&i!=j);return b};j=function(b,c){var e=new Date(b);if(d.timeformat!=null)return a.plot.formatDate(e,d.timeformat,d.monthNames);var f=c.tickSize[0]*n[c.tickSize[1]];var g=c.max-c.min;var h=d.twelveHourClock?" %p":"";if(f<n.minute)fmt="%h:%M:%S"+h;else if(f<n.day){if(g<2*n.day)fmt="%h:%M"+h;else fmt="%b %d %h:%M"+h}else if(f<n.month)fmt="%b %d";else if(f<n.year){if(g<n.year)fmt="%b";else fmt="%b %y"}else fmt="%y";return a.plot.formatDate(e,fmt,d.monthNames)}}else{var u=d.tickDecimals;var v=-Math.floor(Math.log(f)/Math.LN10);if(u!=null&&v>u)v=u;l=Math.pow(10,-v);m=f/l;if(m<1.5)g=1;else if(m<3){g=2;if(m>2.25&&(u==null||v+1<=u)){g=2.5;++v}}else if(m<7.5)g=5;else g=10;g*=l;if(d.minTickSize!=null&&g<d.minTickSize)g=d.minTickSize;b.tickDecimals=Math.max(0,u!=null?u:v);b.tickSize=d.tickSize||g;h=function(a){var b=[];var d=c(a.min,a.tickSize),e=0,f=Number.NaN,g;do{g=f;f=d+e*a.tickSize;b.push(f);++e}while(f<a.max&&f!=g);return b};j=function(a,b){return a.toFixed(b.tickDecimals)}}if(d.alignTicksWithAxis!=null){var w=(b.direction=="x"?o:p)[d.alignTicksWithAxis-1];if(w&&w.used&&w!=b){var x=h(b);if(x.length>0){if(d.min==null)b.min=Math.min(b.min,x[0]);if(d.max==null&&x.length>1)b.max=Math.max(b.max,x[x.length-1])}h=function(a){var b=[],c,d;for(d=0;d<w.ticks.length;++d){c=(w.ticks[d].v-w.min)/(w.max-w.min);c=a.min+c*(a.max-a.min);b.push(c)}return b};if(b.mode!="time"&&d.tickDecimals==null){var y=Math.max(0,-Math.floor(Math.log(f)/Math.LN10)+1),z=h(b);if(!(z.length>1&&/\..*0$/.test((z[1]-z[0]).toFixed(y))))b.tickDecimals=y}}}b.tickGenerator=h;if(a.isFunction(d.tickFormatter))b.tickFormatter=function(a,b){return""+d.tickFormatter(a,b)};else b.tickFormatter=j}function U(a){var b=a.options,c=+(b.min!=null?b.min:a.datamin),d=+(b.max!=null?b.max:a.datamax),e=d-c;if(e==0){var f=d==0?1:.01;if(b.min==null)c-=f;if(b.max==null||b.min!=null)d+=f}else{var g=b.autoscaleMargin;if(g!=null){if(b.min==null){c-=e*g;if(c<0&&a.datamin!=null&&a.datamin>=0)c=0}if(b.max==null){d+=e*g;if(d>0&&a.datamax!=null&&a.datamax<=0)d=0}}}a.min=c;a.max=d}function T(){var b,c=D();a.each(c,function(a,b){b.show=b.options.show;if(b.show==null)b.show=b.used;b.reserveSpace=b.show||b.options.reserveSpace;U(b)});allocatedAxes=a.grep(c,function(a){return a.reserveSpace});q.left=q.right=q.top=q.bottom=0;if(h.grid.show){a.each(allocatedAxes,function(a,b){V(b);W(b);X(b,b.ticks);Q(b)});for(b=allocatedAxes.length-1;b>=0;--b)R(allocatedAxes[b]);var d=h.grid.minBorderMargin;if(d==null){d=0;for(b=0;b<g.length;++b)d=Math.max(d,g[b].points.radius+g[b].points.lineWidth/2)}for(var e in q){q[e]+=h.grid.borderWidth;q[e]=Math.max(d,q[e])}}t=r-q.left-q.right;u=s-q.bottom-q.top;a.each(c,function(a,b){P(b)});if(h.grid.show){a.each(allocatedAxes,function(a,b){S(b)});bb()}bi()}function S(a){if(a.direction=="x"){a.box.left=q.left;a.box.width=t}else{a.box.top=q.top;a.box.height=u}}function R(b){var c=b.labelWidth,d=b.labelHeight,e=b.options.position,f=b.options.tickLength,g=h.grid.axisMargin,i=h.grid.labelMargin,j=b.direction=="x"?o:p,k;var l=a.grep(j,function(a){return a&&a.options.position==e&&a.reserveSpace});if(a.inArray(b,l)==l.length-1)g=0;if(f==null)f="full";var m=a.grep(j,function(a){return a&&a.reserveSpace});var n=a.inArray(b,m)==0;if(!n&&f=="full")f=5;if(!isNaN(+f))i+=+f;if(b.direction=="x"){d+=i;if(e=="bottom"){q.bottom+=d+g;b.box={top:s-q.bottom,height:d}}else{b.box={top:q.top+g,height:d};q.top+=d+g}}else{c+=i;if(e=="left"){b.box={left:q.left+g,width:c};q.left+=c+g}else{q.right+=c+g;b.box={left:r-q.right,width:c}}}b.position=e;b.tickLength=f;b.box.padding=i;b.innermost=n}function Q(c){function l(d,e){return a('<div style="position:absolute;top:-10000px;'+e+'font-size:smaller">'+'<div class="'+c.direction+"Axis "+c.direction+c.n+'Axis">'+d.join("")+"</div></div>").appendTo(b)}var d=c.options,e,f=c.ticks||[],g=[],h,i=d.labelWidth,j=d.labelHeight,k;if(c.direction=="x"){if(i==null)i=Math.floor(r/(f.length>0?f.length:1));if(j==null){g=[];for(e=0;e<f.length;++e){h=f[e].label;if(h)g.push('<div class="tickLabel" style="float:left;width:'+i+'px">'+h+"</div>")}if(g.length>0){g.push('<div style="clear:left"></div>');k=l(g,"width:10000px;");j=k.height();k.remove()}}}else if(i==null||j==null){for(e=0;e<f.length;++e){h=f[e].label;if(h)g.push('<div class="tickLabel">'+h+"</div>")}if(g.length>0){k=l(g,"");if(i==null)i=k.children().width();if(j==null)j=k.find("div.tickLabel").height();k.remove()}}if(i==null)i=0;if(j==null)j=0;c.labelWidth=i;c.labelHeight=j}function P(a){function b(a){return a}var c,d,e=a.options.transform||b,f=a.options.inverseTransform;if(a.direction=="x"){c=a.scale=t/Math.abs(e(a.max)-e(a.min));d=Math.min(e(a.max),e(a.min))}else{c=a.scale=u/Math.abs(e(a.max)-e(a.min));c=-c;d=Math.max(e(a.max),e(a.min))}if(e==b)a.p2c=function(a){return(a-d)*c};else a.p2c=function(a){return(e(a)-d)*c};if(!f)a.c2p=function(a){return d+a/c};else a.c2p=function(a){return f(d+a/c)}}function O(){if(bk)clearTimeout(bk);l.unbind("mousemove",bm);l.unbind("mouseleave",bn);l.unbind("click",bo);x(v.shutdown,[l])}function N(){if(h.grid.hoverable){l.mousemove(bm);l.mouseleave(bn)}if(h.grid.clickable)l.click(bo);x(v.bindEvents,[l])}function M(){var c,d=b.children("canvas.base"),e=b.children("canvas.overlay");if(d.length==0||e==0){b.html("");b.css({padding:0});if(b.css("position")=="static")b.css("position","relative");K();j=J(true,"base");k=J(false,"overlay");c=false}else{j=d.get(0);k=e.get(0);c=true}m=j.getContext("2d");n=k.getContext("2d");l=a([k,j]);if(c){b.data("plot").shutdown();w.resize();n.clearRect(0,0,r,s);l.unbind();b.children().not([j,k]).remove()}b.data("plot",w)}function L(a){if(a.width!=r)a.width=r;if(a.height!=s)a.height=s;var b=a.getContext("2d");b.restore();b.save()}function K(){r=b.width();s=b.height();if(r<=0||s<=0)throw"Invalid dimensions for plot, width = "+r+", height = "+s}function J(c,d){var e=document.createElement("canvas");e.className=d;e.width=r;e.height=s;if(!c)a(e).css({position:"absolute",left:0,top:0});a(e).appendTo(b);if(!e.getContext)e=window.G_vmlCanvasManager.initElement(e);e.getContext("2d").save();return e}function I(){function t(a,b,c){if(b<a.datamin&&b!=-d)a.datamin=b;if(c>a.datamax&&c!=d)a.datamax=c}var b=Number.POSITIVE_INFINITY,c=Number.NEGATIVE_INFINITY,d=Number.MAX_VALUE,e,f,h,i,j,k,l,m,n,o,p,q,r,s;a.each(D(),function(a,d){d.datamin=b;d.datamax=c;d.used=false});for(e=0;e<g.length;++e){k=g[e];k.datapoints={points:[]};x(v.processRawData,[k,k.data,k.datapoints])}for(e=0;e<g.length;++e){k=g[e];var u=k.data,w=k.datapoints.format;if(!w){w=[];w.push({x:true,number:true,required:true});w.push({y:true,number:true,required:true});if(k.bars.show||k.lines.show&&k.lines.fill){w.push({y:true,number:true,required:false,defaultValue:0});if(k.bars.horizontal){delete w[w.length-1].y;w[w.length-1].x=true}}k.datapoints.format=w}if(k.datapoints.pointsize!=null)continue;k.datapoints.pointsize=w.length;m=k.datapoints.pointsize;l=k.datapoints.points;insertSteps=k.lines.show&&k.lines.steps;k.xaxis.used=k.yaxis.used=true;for(f=h=0;f<u.length;++f,h+=m){s=u[f];var y=s==null;if(!y){for(i=0;i<m;++i){q=s[i];r=w[i];if(r){if(r.number&&q!=null){q=+q;if(isNaN(q))q=null;else if(q==Infinity)q=d;else if(q==-Infinity)q=-d}if(q==null){if(r.required)y=true;if(r.defaultValue!=null)q=r.defaultValue}}l[h+i]=q}}if(y){for(i=0;i<m;++i){q=l[h+i];if(q!=null){r=w[i];if(r.x)t(k.xaxis,q,q);if(r.y)t(k.yaxis,q,q)}l[h+i]=null}}else{if(insertSteps&&h>0&&l[h-m]!=null&&l[h-m]!=l[h]&&l[h-m+1]!=l[h+1]){for(i=0;i<m;++i)l[h+m+i]=l[h+i];l[h+1]=l[h-m+1];h+=m}}}}for(e=0;e<g.length;++e){k=g[e];x(v.processDatapoints,[k,k.datapoints])}for(e=0;e<g.length;++e){k=g[e];l=k.datapoints.points,m=k.datapoints.pointsize;var z=b,A=b,B=c,C=c;for(f=0;f<l.length;f+=m){if(l[f]==null)continue;for(i=0;i<m;++i){q=l[f+i];r=w[i];if(!r||q==d||q==-d)continue;if(r.x){if(q<z)z=q;if(q>B)B=q}if(r.y){if(q<A)A=q;if(q>C)C=q}}}if(k.bars.show){var E=k.bars.align=="left"?0:-k.bars.barWidth/2;if(k.bars.horizontal){A+=E;C+=E+k.bars.barWidth}else{z+=E;B+=E+k.bars.barWidth}}t(k.xaxis,z,B);t(k.yaxis,A,C)}a.each(D(),function(a,d){if(d.datamin==b)d.datamin=null;if(d.datamax==c)d.datamax=null})}function H(){var b;var c=g.length,d=[],e=[];for(b=0;b<g.length;++b){var f=g[b].color;if(f!=null){--c;if(typeof f=="number")e.push(f);else d.push(a.color.parse(g[b].color))}}for(b=0;b<e.length;++b){c=Math.max(c,e[b]+1)}var i=[],j=0;b=0;while(i.length<c){var k;if(h.colors.length==b)k=a.color.make(100,100,100);else k=a.color.parse(h.colors[b]);var l=j%2==1?-1:1;k.scale("rgb",1+l*Math.ceil(j/2)*.2);i.push(k);++b;if(b>=h.colors.length){b=0;++j}}var m=0,n;for(b=0;b<g.length;++b){n=g[b];if(n.color==null){n.color=i[m].toString();++m}else if(typeof n.color=="number")n.color=i[n.color].toString();if(n.lines.show==null){var q,r=true;for(q in n)if(n[q]&&n[q].show){r=false;break}if(r)n.lines.show=true}n.xaxis=G(o,C(n,"x"));n.yaxis=G(p,C(n,"y"))}}function G(b,c){if(!b[c-1])b[c-1]={n:c,direction:b==o?"x":"y",options:a.extend(true,{},b==o?h.xaxis:h.yaxis)};return b[c-1]}function F(a){var b={},c,d,e;for(c=0;c<o.length;++c){d=o[c];if(d&&d.used){e="x"+d.n;if(a[e]==null&&d.n==1)e="x";if(a[e]!=null){b.left=d.p2c(a[e]);break}}}for(c=0;c<p.length;++c){d=p[c];if(d&&d.used){e="y"+d.n;if(a[e]==null&&d.n==1)e="y";if(a[e]!=null){b.top=d.p2c(a[e]);break}}}return b}function E(a){var b={},c,d;for(c=0;c<o.length;++c){d=o[c];if(d&&d.used)b["x"+d.n]=d.c2p(a.left)}for(c=0;c<p.length;++c){d=p[c];if(d&&d.used)b["y"+d.n]=d.c2p(a.top)}if(b.x1!==undefined)b.x=b.x1;if(b.y1!==undefined)b.y=b.y1;return b}function D(){return a.grep(o.concat(p),function(a){return a})}function C(a,b){var c=a[b+"axis"];if(typeof c=="object")c=c.n;if(typeof c!="number")c=1;return c}function B(b){var c=[];for(var d=0;d<b.length;++d){var e=a.extend(true,{},h.series);if(b[d].data!=null){e.data=b[d].data;delete b[d].data;a.extend(true,e,b[d]);b[d].data=e.data}else e.data=b[d];c.push(e)}return c}function A(a){g=B(a);H();I()}function z(b){var c;a.extend(true,h,b);if(h.xaxis.color==null)h.xaxis.color=h.grid.color;if(h.yaxis.color==null)h.yaxis.color=h.grid.color;if(h.xaxis.tickColor==null)h.xaxis.tickColor=h.grid.tickColor;if(h.yaxis.tickColor==null)h.yaxis.tickColor=h.grid.tickColor;if(h.grid.borderColor==null)h.grid.borderColor=h.grid.color;if(h.grid.tickColor==null)h.grid.tickColor=a.color.parse(h.grid.color).scale("a",.22).toString();for(c=0;c<Math.max(1,h.xaxes.length);++c)h.xaxes[c]=a.extend(true,{},h.xaxis,h.xaxes[c]);for(c=0;c<Math.max(1,h.yaxes.length);++c)h.yaxes[c]=a.extend(true,{},h.yaxis,h.yaxes[c]);if(h.xaxis.noTicks&&h.xaxis.ticks==null)h.xaxis.ticks=h.xaxis.noTicks;if(h.yaxis.noTicks&&h.yaxis.ticks==null)h.yaxis.ticks=h.yaxis.noTicks;if(h.x2axis){h.xaxes[1]=a.extend(true,{},h.xaxis,h.x2axis);h.xaxes[1].position="top"}if(h.y2axis){h.yaxes[1]=a.extend(true,{},h.yaxis,h.y2axis);h.yaxes[1].position="right"}if(h.grid.coloredAreas)h.grid.markings=h.grid.coloredAreas;if(h.grid.coloredAreasColor)h.grid.markingsColor=h.grid.coloredAreasColor;if(h.lines)a.extend(true,h.series.lines,h.lines);if(h.points)a.extend(true,h.series.points,h.points);if(h.bars)a.extend(true,h.series.bars,h.bars);if(h.shadowSize!=null)h.series.shadowSize=h.shadowSize;for(c=0;c<h.xaxes.length;++c)G(o,c+1).options=h.xaxes[c];for(c=0;c<h.yaxes.length;++c)G(p,c+1).options=h.yaxes[c];for(var d in v)if(h.hooks[d]&&h.hooks[d].length)v[d]=v[d].concat(h.hooks[d]);x(v.processOptions,[h])}function y(){for(var b=0;b<f.length;++b){var c=f[b];c.init(w);if(c.options)a.extend(true,h,c.options)}}function x(a,b){b=[w].concat(b);for(var c=0;c<a.length;++c)a[c].apply(this,b)}var g=[],h={colors:["#4D585A","#90C3B2","#D64F49","#3B8686","#0B486B"],legend:{show:true,noColumns:1,labelFormatter:null,labelBoxBorderColor:"#ccc",container:null,position:"ne",margin:5,backgroundColor:null,backgroundOpacity:.85},xaxis:{show:null,position:"bottom",mode:null,color:null,tickColor:null,transform:null,inverseTransform:null,min:null,max:null,autoscaleMargin:null,ticks:null,tickFormatter:null,labelWidth:null,labelHeight:null,reserveSpace:null,tickLength:null,alignTicksWithAxis:null,tickDecimals:null,tickSize:null,minTickSize:null,monthNames:null,timeformat:null,twelveHourClock:false},yaxis:{autoscaleMargin:.02,position:"left"},xaxes:[],yaxes:[],series:{points:{show:false,radius:3,lineWidth:2,fill:true,fillColor:"#ffffff",symbol:"circle"},lines:{lineWidth:1,fill:false,fillColor:null,steps:false},bars:{show:false,lineWidth:2,barWidth:1,fill:true,fillColor:null,align:"left",horizontal:false},shadowSize:0},grid:{show:true,aboveData:false,color:"#999",backgroundColor:null,borderColor:null,tickColor:null,labelMargin:5,axisMargin:8,borderWidth:1,minBorderMargin:null,markings:null,markingsColor:"#f4f4f4",markingsLineWidth:2,clickable:false,hoverable:false,autoHighlight:true,mouseActiveRadius:10},hooks:{}},j=null,k=null,l=null,m=null,n=null,o=[],p=[],q={left:0,right:0,top:0,bottom:0},r=0,s=0,t=0,u=0,v={processOptions:[],processRawData:[],processDatapoints:[],drawSeries:[],draw:[],bindEvents:[],drawOverlay:[],shutdown:[]},w=this;w.setData=A;w.setupGrid=T;w.draw=Y;w.getPlaceholder=function(){return b};w.getCanvas=function(){return j};w.getPlotOffset=function(){return q};w.width=function(){return t};w.height=function(){return u};w.offset=function(){var a=l.offset();a.left+=q.left;a.top+=q.top;return a};w.getData=function(){return g};w.getAxes=function(){var b={},c;a.each(o.concat(p),function(a,c){if(c)b[c.direction+(c.n!=1?c.n:"")+"axis"]=c});return b};w.getXAxes=function(){return o};w.getYAxes=function(){return p};w.c2p=E;w.p2c=F;w.getOptions=function(){return h};w.highlight=bs;w.unhighlight=bt;w.triggerRedrawOverlay=bq;w.pointOffset=function(a){return{left:parseInt(o[C(a,"x")-1].p2c(+a.x)+q.left),top:parseInt(p[C(a,"y")-1].p2c(+a.y)+q.top)}};w.shutdown=O;w.resize=function(){K();L(j);L(k)};w.hooks=v;y(w);z(e);M();A(d);T();Y();N();var bj=[],bk=null}a.plot=function(c,d,e){var f=new b(a(c),d,e,a.plot.plugins);return f};a.plot.version="0.7";a.plot.plugins=[];a.plot.formatDate=function(a,b,c){var d=function(a){a=""+a;return a.length==1?"0"+a:a};var e=[];var f=false,g=false;var h=a.getUTCHours();var i=h<12;if(c==null)c=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];if(b.search(/%p|%P/)!=-1){if(h>12){h=h-12}else if(h==0){h=12}}for(var j=0;j<b.length;++j){var k=b.charAt(j);if(f){switch(k){case"h":k=""+h;break;case"H":k=d(h);break;case"M":k=d(a.getUTCMinutes());break;case"S":k=d(a.getUTCSeconds());break;case"d":k=""+a.getUTCDate();break;case"m":k=""+(a.getUTCMonth()+1);break;case"y":k=""+a.getUTCFullYear();break;case"b":k=""+c[a.getUTCMonth()];break;case"p":k=i?""+"am":""+"pm";break;case"P":k=i?""+"AM":""+"PM";break;case"0":k="";g=true;break}if(k&&g){k=d(k);g=false}e.push(k);if(!g)f=false}else{if(k=="%")f=true;else e.push(k)}}return e.join("")}})(jQuery);

// Curved lines
(function(a){function c(b){function f(a,b){var c=b.curvePointFactor*a.length;var d=new Array;var e=new Array;if(b.fit){var f=b.fitPointDist;var g=0;for(var h=0;h<a.length;h++){d[g]=a[h][0]-.1;if(h>0){e[g]=a[h-1][1]*f+a[h][1]*(1-f)}else{e[g]=a[h][1]}g++;d[g]=a[h][0];e[g]=a[h][1];g++;d[g]=a[h][0]+.1;if(h+1<a.length){e[g]=a[h+1][1]*f+a[h][1]*(1-f)}else{e[g]=a[h][1]}g++}}else{for(var h=0;h<a.length;h++){d[h]=a[h][0];e[h]=a[h][1]}}var i=d.length;var j=new Array;var k=new Array;j[0]=0;j[i-1]=0;k[0]=0;for(var h=1;h<i-1;++h){var l=d[h+1]-d[h-1];if(l==0){return null}var m=(d[h]-d[h-1])/l;var n=m*j[h-1]+2;j[h]=(m-1)/n;k[h]=(e[h+1]-e[h])/(d[h+1]-d[h])-(e[h]-e[h-1])/(d[h]-d[h-1]);k[h]=(6*k[h]/(d[h+1]-d[h-1])-m*k[h-1])/n}for(var g=i-2;g>=0;--g){j[g]=j[g]*j[g+1]+k[g]}var o=(d[i-1]-d[0])/(c-1);var p=new Array;var q=new Array;var r=new Array;p[0]=d[0];q[0]=e[0];for(g=1;g<c;++g){p[g]=p[0]+g*o;var s=i-1;var t=0;while(s-t>1){var u=Math.round((s+t)/2);if(d[u]>p[g]){s=u}else{t=u}}var v=d[s]-d[t];if(v==0){return null}var w=(d[s]-p[g])/v;var x=(p[g]-d[t])/v;q[g]=w*e[t]+x*e[s]+((w*w*w-w)*j[t]+(x*x*x-x)*j[s])*v*v/6;r.push(p[g]);r.push(q[g])}return r}function e(a,b,c,d,e){var f=2;var g=null;var h=null;var i=0;a.beginPath();for(var j=f;j<b.length;j+=f){var k=b[j-f],l=b[j-f+1];var m=b[j],n=b[j+1];if(k==null||m==null)continue;if(l<=n&&l<d.min){if(n<d.min)continue;k=(d.min-l)/(n-l)*(m-k)+k;l=d.min}else if(n<=l&&n<d.min){if(l<d.min)continue;m=(d.min-l)/(n-l)*(m-k)+k;n=d.min}if(l>=n&&l>d.max){if(n>d.max)continue;k=(d.max-l)/(n-l)*(m-k)+k;l=d.max}else if(n>=l&&n>d.max){if(l>d.max)continue;m=(d.max-l)/(n-l)*(m-k)+k;n=d.max}if(k<=m&&k<c.min){if(m<c.min)continue;l=(c.min-k)/(m-k)*(n-l)+l;k=c.min}else if(m<=k&&m<c.min){if(k<c.min)continue;n=(c.min-k)/(m-k)*(n-l)+l;m=c.min}if(k>=m&&k>c.max){if(m>c.max)continue;l=(c.max-k)/(m-k)*(n-l)+l;k=c.max}else if(m>=k&&m>c.max){if(k>c.max)continue;n=(c.max-k)/(m-k)*(n-l)+l;m=c.max}if(k!=g||l!=h)a.lineTo(c.p2c(k),d.p2c(l));if(g==null){i=n}g=m;h=n;a.lineTo(c.p2c(m),d.p2c(n))}if(e){a.lineTo(c.p2c(c.max),d.p2c(d.min));a.lineTo(c.p2c(c.min),d.p2c(d.min));a.lineTo(c.p2c(c.min),d.p2c(i));a.fill()}a.stroke()}function d(b,c){var d;var g=b.getData();var h=b.getPlotOffset();for(var i=0;i<g.length;i++){d=g[i];if(d.curvedLines.show&&d.curvedLines.lineWidth>0){axisx=d.xaxis;axisy=d.yaxis;c.save();c.translate(h.left,h.top);c.lineJoin="round";c.strokeStyle=d.color;if(d.curvedLines.fill){var j=d.curvedLines.fillColor==null?d.color:d.curvedLines.fillColor;var k=a.color.parse(j);k.a=typeof fill=="number"?fill:.4;k.normalize();c.fillStyle=k.toString()}c.lineWidth=d.curvedLines.lineWidth;var l=f(d.data,d.curvedLines);e(c,l,axisx,axisy,d.curvedLines.fill);c.restore()}}}function c(a,b){if(b.series.curvedLines.active){a.hooks.draw.push(d)}}b.hooks.processOptions.push(c)}var b={series:{curvedLines:{active:false,show:false,fit:false,fill:false,fillColor:null,lineWidth:2,curvePointFactor:20,fitPointDist:1e-4}}};a.plot.plugins.push({init:c,options:b,name:"curvedLines",version:"0.2"})})(jQuery);

// Cross hair
(function(b){var a={crosshair:{mode:null,color:"rgba(170, 0, 0, 0.80)",lineWidth:1}};function c(h){var j={x:-1,y:-1,locked:false};h.setCrosshair=function e(l){if(!l){j.x=-1}else{var k=h.p2c(l);j.x=Math.max(0,Math.min(k.left,h.width()));j.y=Math.max(0,Math.min(k.top,h.height()))}h.triggerRedrawOverlay()};h.clearCrosshair=h.setCrosshair;h.lockCrosshair=function f(k){if(k){h.setCrosshair(k)}j.locked=true};h.unlockCrosshair=function g(){j.locked=false};function d(k){if(j.locked){return}if(j.x!=-1){j.x=-1;h.triggerRedrawOverlay()}}function i(k){if(j.locked){return}if(h.getSelection&&h.getSelection()){j.x=-1;return}var l=h.offset();j.x=Math.max(0,Math.min(k.pageX-l.left,h.width()));j.y=Math.max(0,Math.min(k.pageY-l.top,h.height()));h.triggerRedrawOverlay()}h.hooks.bindEvents.push(function(l,k){if(!l.getOptions().crosshair.mode){return}k.mouseout(d);k.mousemove(i)});h.hooks.drawOverlay.push(function(m,k){var n=m.getOptions().crosshair;if(!n.mode){return}var l=m.getPlotOffset();k.save();k.translate(l.left,l.top);if(j.x!=-1){k.strokeStyle=n.color;k.lineWidth=n.lineWidth;k.lineJoin="round";k.beginPath();if(n.mode.indexOf("x")!=-1){k.moveTo(j.x,0);k.lineTo(j.x,m.height())}if(n.mode.indexOf("y")!=-1){k.moveTo(0,j.y);k.lineTo(m.width(),j.y)}k.stroke()}k.restore()});h.hooks.shutdown.push(function(l,k){k.unbind("mouseout",d);k.unbind("mousemove",i)})}b.plot.plugins.push({init:c,options:a,name:"crosshair",version:"1.0"})})(jQuery);

// Fill between
(function(b){var a={series:{fillBetween:null}};function c(f){function d(j,h){var g;for(g=0;g<h.length;++g){if(h[g].id==j.fillBetween){return h[g]}}if(typeof j.fillBetween=="number"){g=j.fillBetween;if(g<0||g>=h.length){return null}return h[g]}return null}function e(B,u,g){if(u.fillBetween==null){return}var p=d(u,B.getData());if(!p){return}var y=g.pointsize,E=g.points,h=p.datapoints.pointsize,x=p.datapoints.points,r=[],w,v,k,G,F,q,t=u.lines.show,o=y>2&&g.format[2].y,n=t&&u.lines.steps,D=true,C=0,A=0,z;while(true){if(C>=E.length){break}z=r.length;if(E[C]==null){for(m=0;m<y;++m){r.push(E[C+m])}C+=y}else{if(A>=x.length){if(!t){for(m=0;m<y;++m){r.push(E[C+m])}}C+=y}else{if(x[A]==null){for(m=0;m<y;++m){r.push(null)}D=true;A+=h}else{w=E[C];v=E[C+1];G=x[A];F=x[A+1];q=0;if(w==G){for(m=0;m<y;++m){r.push(E[C+m])}q=F;C+=y;A+=h}else{if(w>G){if(t&&C>0&&E[C-y]!=null){k=v+(E[C-y+1]-v)*(G-w)/(E[C-y]-w);r.push(G);r.push(k);for(m=2;m<y;++m){r.push(E[C+m])}q=F}A+=h}else{if(D&&t){C+=y;continue}for(m=0;m<y;++m){r.push(E[C+m])}if(t&&A>0&&x[A-h]!=null){q=F+(x[A-h+1]-F)*(w-G)/(x[A-h]-G)}C+=y}}D=false;if(z!=r.length&&o){r[z+2]=q}}}}if(n&&z!=r.length&&z>0&&r[z]!=null&&r[z]!=r[z-y]&&r[z+1]!=r[z-y+1]){for(m=0;m<y;++m){r[z+y+m]=r[z+m]}r[z+1]=r[z-y+1]}}g.points=r}f.hooks.processDatapoints.push(e)}b.plot.plugins.push({init:c,options:a,name:"fillbetween",version:"1.0"})})(jQuery);

// Navigate

(function(i){i.fn.drag=function(j,k,l){if(k){this.bind("dragstart",j)}if(l){this.bind("dragend",l)}return !j?this.trigger("drag"):this.bind("drag",k?k:j)};var d=i.event,c=d.special,h=c.drag={not:":input",distance:0,which:1,dragging:false,setup:function(j){j=i.extend({distance:h.distance,which:h.which,not:h.not},j||{});j.distance=e(j.distance);d.add(this,"mousedown",f,j);if(this.attachEvent){this.attachEvent("ondragstart",a)}},teardown:function(){d.remove(this,"mousedown",f);if(this===h.dragging){h.dragging=h.proxy=false}g(this,true);if(this.detachEvent){this.detachEvent("ondragstart",a)}}};c.dragstart=c.dragend={setup:function(){},teardown:function(){}};function f(j){var k=this,l,m=j.data||{};if(m.elem){k=j.dragTarget=m.elem;j.dragProxy=h.proxy||k;j.cursorOffsetX=m.pageX-m.left;j.cursorOffsetY=m.pageY-m.top;j.offsetX=j.pageX-j.cursorOffsetX;j.offsetY=j.pageY-j.cursorOffsetY}else{if(h.dragging||(m.which>0&&j.which!=m.which)||i(j.target).is(m.not)){return}}switch(j.type){case"mousedown":i.extend(m,i(k).offset(),{elem:k,target:j.target,pageX:j.pageX,pageY:j.pageY});d.add(document,"mousemove mouseup",f,m);g(k,false);h.dragging=null;return false;case !h.dragging&&"mousemove":if(e(j.pageX-m.pageX)+e(j.pageY-m.pageY)<m.distance){break}j.target=m.target;l=b(j,"dragstart",k);if(l!==false){h.dragging=k;h.proxy=j.dragProxy=i(l||k)[0]}case"mousemove":if(h.dragging){l=b(j,"drag",k);if(c.drop){c.drop.allowed=(l!==false);c.drop.handler(j)}if(l!==false){break}j.type="mouseup"}case"mouseup":d.remove(document,"mousemove mouseup",f);if(h.dragging){if(c.drop){c.drop.handler(j)}b(j,"dragend",k)}g(k,true);h.dragging=h.proxy=m.elem=false;break}return true}function b(m,k,j){m.type=k;var l=i.event.handle.call(j,m);return l===false?false:l||m.result}function e(j){return Math.pow(j,2)}function a(){return(h.dragging===false)}function g(j,k){if(!j){return}j.unselectable=k?"off":"on";j.onselectstart=function(){return k};if(j.style){j.style.MozUserSelect=k?"":"none"}}})(jQuery);(function(f){var e=["DOMMouseScroll","mousewheel"];f.event.special.mousewheel={setup:function(){if(this.addEventListener){for(var a=e.length;a;){this.addEventListener(e[--a],d,false)}}else{this.onmousewheel=d}},teardown:function(){if(this.removeEventListener){for(var a=e.length;a;){this.removeEventListener(e[--a],d,false)}}else{this.onmousewheel=null}}};f.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}});function d(b){var h=[].slice.call(arguments,1),a=0,c=true;b=f.event.fix(b||window.event);b.type="mousewheel";if(b.wheelDelta){a=b.wheelDelta/120}if(b.detail){a=-b.detail/3}h.unshift(b,a);return f.event.handle.apply(this,h)}})(jQuery);(function(b){var a={xaxis:{zoomRange:null,panRange:null},zoom:{interactive:false,trigger:"dblclick",amount:1.5},pan:{interactive:false,cursor:"move",frameRate:20}};function c(o){function m(q,p){var r=o.offset();r.left=q.pageX-r.left;r.top=q.pageY-r.top;if(p){o.zoomOut({center:r})}else{o.zoom({center:r})}}function d(p,q){m(p,q<0);return false}var i="default",g=0,e=0,n=null;function f(p){if(p.which!=1){return false}var q=o.getPlaceholder().css("cursor");if(q){i=q}o.getPlaceholder().css("cursor",o.getOptions().pan.cursor);g=p.pageX;e=p.pageY}function j(q){var p=o.getOptions().pan.frameRate;if(n||!p){return}n=setTimeout(function(){o.pan({left:g-q.pageX,top:e-q.pageY});g=q.pageX;e=q.pageY;n=null},1/p*1000)}function h(p){if(n){clearTimeout(n);n=null}o.getPlaceholder().css("cursor",i);o.pan({left:g-p.pageX,top:e-p.pageY})}function l(q,p){var r=q.getOptions();if(r.zoom.interactive){p[r.zoom.trigger](m);p.mousewheel(d)}if(r.pan.interactive){p.bind("dragstart",{distance:10},f);p.bind("drag",j);p.bind("dragend",h)}}o.zoomOut=function(p){if(!p){p={}}if(!p.amount){p.amount=o.getOptions().zoom.amount}p.amount=1/p.amount;o.zoom(p)};o.zoom=function(q){if(!q){q={}}var x=q.center,r=q.amount||o.getOptions().zoom.amount,p=o.width(),t=o.height();if(!x){x={left:p/2,top:t/2}}var s=x.left/p,v=x.top/t,u={x:{min:x.left-s*p/r,max:x.left+(1-s)*p/r},y:{min:x.top-v*t/r,max:x.top+(1-v)*t/r}};b.each(o.getAxes(),function(z,C){var D=C.options,B=u[C.direction].min,w=u[C.direction].max,E=D.zoomRange;if(E===false){return}B=C.c2p(B);w=C.c2p(w);if(B>w){var A=B;B=w;w=A}var y=w-B;if(E&&((E[0]!=null&&y<E[0])||(E[1]!=null&&y>E[1]))){return}D.min=B;D.max=w});o.setupGrid();o.draw();if(!q.preventEvent){o.getPlaceholder().trigger("plotzoom",[o])}};o.pan=function(p){var q={x:+p.left,y:+p.top};if(isNaN(q.x)){q.x=0}if(isNaN(q.y)){q.y=0}b.each(o.getAxes(),function(s,u){var v=u.options,t,r,w=q[u.direction];t=u.c2p(u.p2c(u.min)+w),r=u.c2p(u.p2c(u.max)+w);var x=v.panRange;if(x===false){return}if(x){if(x[0]!=null&&x[0]>t){w=x[0]-t;t+=w;r+=w}if(x[1]!=null&&x[1]<r){w=x[1]-r;t+=w;r+=w}}v.min=t;v.max=r});o.setupGrid();o.draw();if(!p.preventEvent){o.getPlaceholder().trigger("plotpan",[o])}};function k(q,p){p.unbind(q.getOptions().zoom.trigger,m);p.unbind("mousewheel",d);p.unbind("dragstart",f);p.unbind("drag",j);p.unbind("dragend",h);if(n){clearTimeout(n)}}o.hooks.bindEvents.push(l);o.hooks.shutdown.push(k)}b.plot.plugins.push({init:c,options:a,name:"navigate",version:"1.3"})})(jQuery);

// Pie

(function(b){function c(D){var h=null;var L=null;var n=null;var B=null;var p=null;var M=0;var F=true;var o=10;var w=0.95;var A=0;var d=false;var z=false;var j=[];D.hooks.processOptions.push(g);D.hooks.bindEvents.push(e);function g(O,N){if(N.series.pie.show){N.grid.show=false;if(N.series.pie.label.show=="auto"){if(N.legend.show){N.series.pie.label.show=false}else{N.series.pie.label.show=true}}if(N.series.pie.radius=="auto"){if(N.series.pie.label.show){N.series.pie.radius=3/4}else{N.series.pie.radius=1}}if(N.series.pie.tilt>1){N.series.pie.tilt=1}if(N.series.pie.tilt<0){N.series.pie.tilt=0}O.hooks.processDatapoints.push(E);O.hooks.drawOverlay.push(H);O.hooks.draw.push(r)}}function e(P,N){var O=P.getOptions();if(O.series.pie.show&&O.grid.hoverable){N.unbind("mousemove").mousemove(t)}if(O.series.pie.show&&O.grid.clickable){N.unbind("click").click(l)}}function G(O){var P="";function N(S,T){if(!T){T=0}for(var R=0;R<S.length;++R){for(var Q=0;Q<T;Q++){P+="\t"}if(typeof S[R]=="object"){P+=""+R+":\n";N(S[R],T+1)}else{P+=""+R+": "+S[R]+"\n"}}}N(O);alert(P)}function q(P){for(var N=0;N<P.length;++N){var O=parseFloat(P[N].data[0][1]);if(O){M+=O}}}function E(Q,N,O,P){if(!d){d=true;h=Q.getCanvas();L=b(h).parent();a=Q.getOptions();Q.setData(K(Q.getData()))}}function I(){A=L.children().filter(".legend").children().width();n=Math.min(h.width,(h.height/a.series.pie.tilt))/2;p=(h.height/2)+a.series.pie.offset.top;B=(h.width/2);if(a.series.pie.offset.left=="auto"){if(a.legend.position.match("w")){B+=A/2}else{B-=A/2}}else{B+=a.series.pie.offset.left}if(B<n){B=n}else{if(B>h.width-n){B=h.width-n}}}function v(O){for(var N=0;N<O.length;++N){if(typeof(O[N].data)=="number"){O[N].data=[[1,O[N].data]]}else{if(typeof(O[N].data)=="undefined"||typeof(O[N].data[0])=="undefined"){if(typeof(O[N].data)!="undefined"&&typeof(O[N].data.label)!="undefined"){O[N].label=O[N].data.label}O[N].data=[[1,0]]}}}return O}function K(Q){Q=v(Q);q(Q);var P=0;var S=0;var N=a.series.pie.combine.color;var R=[];for(var O=0;O<Q.length;++O){Q[O].data[0][1]=parseFloat(Q[O].data[0][1]);if(!Q[O].data[0][1]){Q[O].data[0][1]=0}if(Q[O].data[0][1]/M<=a.series.pie.combine.threshold){P+=Q[O].data[0][1];S++;if(!N){N=Q[O].color}}else{R.push({data:[[1,Q[O].data[0][1]]],color:Q[O].color,label:Q[O].label,angle:(Q[O].data[0][1]*(Math.PI*2))/M,percent:(Q[O].data[0][1]/M*100)})}}if(S>0){R.push({data:[[1,P]],color:N,label:a.series.pie.combine.label,angle:(P*(Math.PI*2))/M,percent:(P/M*100)})}return R}function r(S,Q){if(!L){return}ctx=Q;I();var T=S.getData();var P=0;while(F&&P<o){F=false;if(P>0){n*=w}P+=1;N();if(a.series.pie.tilt<=0.8){O()}R()}if(P>=o){N();L.prepend('<div class="error">Could not draw pie with labels contained inside canvas</div>')}if(S.setSeries&&S.insertLegend){S.setSeries(T);S.insertLegend()}function N(){ctx.clearRect(0,0,h.width,h.height);L.children().filter(".pieLabel, .pieLabelBackground").remove()}function O(){var Z=5;var Y=15;var W=10;var X=0.02;if(a.series.pie.radius>1){var U=a.series.pie.radius}else{var U=n*a.series.pie.radius}if(U>=(h.width/2)-Z||U*a.series.pie.tilt>=(h.height/2)-Y||U<=W){return}ctx.save();ctx.translate(Z,Y);ctx.globalAlpha=X;ctx.fillStyle="#000";ctx.translate(B,p);ctx.scale(1,a.series.pie.tilt);for(var V=1;V<=W;V++){ctx.beginPath();ctx.arc(0,0,U,0,Math.PI*2,false);ctx.fill();U-=V}ctx.restore()}function R(){startAngle=Math.PI*a.series.pie.startAngle;if(a.series.pie.radius>1){var U=a.series.pie.radius}else{var U=n*a.series.pie.radius}ctx.save();ctx.translate(B,p);ctx.scale(1,a.series.pie.tilt);ctx.save();var Y=startAngle;for(var W=0;W<T.length;++W){T[W].startAngle=Y;X(T[W].angle,T[W].color,true)}ctx.restore();ctx.save();ctx.lineWidth=a.series.pie.stroke.width;Y=startAngle;for(var W=0;W<T.length;++W){X(T[W].angle,a.series.pie.stroke.color,false)}ctx.restore();J(ctx);if(a.series.pie.label.show){V()}ctx.restore();function X(ab,Z,aa){if(ab<=0){return}if(aa){ctx.fillStyle=Z}else{ctx.strokeStyle=Z;ctx.lineJoin="round"}ctx.beginPath();if(Math.abs(ab-Math.PI*2)>1e-9){ctx.moveTo(0,0)}else{if(b.browser.msie){ab-=0.0001}}ctx.arc(0,0,U,Y,Y+ab,false);ctx.closePath();Y+=ab;if(aa){ctx.fill()}else{ctx.stroke()}}function V(){var ac=startAngle;if(a.series.pie.label.radius>1){var Z=a.series.pie.label.radius}else{var Z=n*a.series.pie.label.radius}for(var ab=0;ab<T.length;++ab){if(T[ab].percent>=a.series.pie.label.threshold*100){aa(T[ab],ac,ab)}ac+=T[ab].angle}function aa(ap,ai,ag){if(ap.data[0][1]==0){return}var ar=a.legend.labelFormatter,aq,ae=a.series.pie.label.formatter;if(ar){aq=ar(ap.label,ap)}else{aq=ap.label}if(ae){aq=ae(aq,ap)}var aj=((ai+ap.angle)+ai)/2;var ao=B+Math.round(Math.cos(aj)*Z);var am=p+Math.round(Math.sin(aj)*Z)*a.series.pie.tilt;var af='<span class="pieLabel" id="pieLabel'+ag+'" style="position:absolute;top:'+am+"px;left:"+ao+'px;">'+aq+"</span>";L.append(af);var an=L.children("#pieLabel"+ag);var ad=(am-an.height()/2);var ah=(ao-an.width()/2);an.css("top",ad);an.css("left",ah);if(0-ad>0||0-ah>0||h.height-(ad+an.height())<0||h.width-(ah+an.width())<0){F=true}if(a.series.pie.label.background.opacity!=0){var ak=a.series.pie.label.background.color;if(ak==null){ak=ap.color}var al="top:"+ad+"px;left:"+ah+"px;";b('<div class="pieLabelBackground" style="position:absolute;width:'+an.width()+"px;height:"+an.height()+"px;"+al+"background-color:"+ak+';"> </div>').insertBefore(an).css("opacity",a.series.pie.label.background.opacity)}}}}}function J(N){if(a.series.pie.innerRadius>0){N.save();innerRadius=a.series.pie.innerRadius>1?a.series.pie.innerRadius:n*a.series.pie.innerRadius;N.globalCompositeOperation="destination-out";N.beginPath();N.fillStyle=a.series.pie.stroke.color;N.arc(0,0,innerRadius,0,Math.PI*2,false);N.fill();N.closePath();N.restore();N.save();N.beginPath();N.strokeStyle=a.series.pie.stroke.color;N.arc(0,0,innerRadius,0,Math.PI*2,false);N.stroke();N.closePath();N.restore()}}function s(Q,R){for(var S=false,P=-1,N=Q.length,O=N-1;++P<N;O=P){((Q[P][1]<=R[1]&&R[1]<Q[O][1])||(Q[O][1]<=R[1]&&R[1]<Q[P][1]))&&(R[0]<(Q[O][0]-Q[P][0])*(R[1]-Q[P][1])/(Q[O][1]-Q[P][1])+Q[P][0])&&(S=!S)}return S}function u(R,P){var T=D.getData(),O=D.getOptions(),N=O.series.pie.radius>1?O.series.pie.radius:n*O.series.pie.radius;for(var Q=0;Q<T.length;++Q){var S=T[Q];if(S.pie.show){ctx.save();ctx.beginPath();ctx.moveTo(0,0);ctx.arc(0,0,N,S.startAngle,S.startAngle+S.angle,false);ctx.closePath();x=R-B;y=P-p;if(ctx.isPointInPath){if(ctx.isPointInPath(R-B,P-p)){ctx.restore();return{datapoint:[S.percent,S.data],dataIndex:0,series:S,seriesIndex:Q}}}else{p1X=(N*Math.cos(S.startAngle));p1Y=(N*Math.sin(S.startAngle));p2X=(N*Math.cos(S.startAngle+(S.angle/4)));p2Y=(N*Math.sin(S.startAngle+(S.angle/4)));p3X=(N*Math.cos(S.startAngle+(S.angle/2)));p3Y=(N*Math.sin(S.startAngle+(S.angle/2)));p4X=(N*Math.cos(S.startAngle+(S.angle/1.5)));p4Y=(N*Math.sin(S.startAngle+(S.angle/1.5)));p5X=(N*Math.cos(S.startAngle+S.angle));p5Y=(N*Math.sin(S.startAngle+S.angle));arrPoly=[[0,0],[p1X,p1Y],[p2X,p2Y],[p3X,p3Y],[p4X,p4Y],[p5X,p5Y]];arrPoint=[x,y];if(s(arrPoly,arrPoint)){ctx.restore();return{datapoint:[S.percent,S.data],dataIndex:0,series:S,seriesIndex:Q}}}ctx.restore()}}return null}function t(N){m("plothover",N)}function l(N){m("plotclick",N)}function m(N,T){var O=D.offset(),R=parseInt(T.pageX-O.left),P=parseInt(T.pageY-O.top),V=u(R,P);if(a.grid.autoHighlight){for(var Q=0;Q<j.length;++Q){var S=j[Q];if(S.auto==N&&!(V&&S.series==V.series)){f(S.series)}}}if(V){k(V.series,N)}var U={pageX:T.pageX,pageY:T.pageY};L.trigger(N,[U,V])}function k(O,P){if(typeof O=="number"){O=series[O]}var N=C(O);if(N==-1){j.push({series:O,auto:P});D.triggerRedrawOverlay()}else{if(!P){j[N].auto=false}}}function f(O){if(O==null){j=[];D.triggerRedrawOverlay()}if(typeof O=="number"){O=series[O]}var N=C(O);if(N!=-1){j.splice(N,1);D.triggerRedrawOverlay()}}function C(P){for(var N=0;N<j.length;++N){var O=j[N];if(O.series==P){return N}}return -1}function H(Q,R){var P=Q.getOptions();var N=P.series.pie.radius>1?P.series.pie.radius:n*P.series.pie.radius;R.save();R.translate(B,p);R.scale(1,P.series.pie.tilt);for(i=0;i<j.length;++i){O(j[i].series)}J(R);R.restore();function O(S){if(S.angle<0){return}R.fillStyle="rgba(255, 255, 255, "+P.series.pie.highlight.opacity+")";R.beginPath();if(Math.abs(S.angle-Math.PI*2)>1e-9){R.moveTo(0,0)}R.arc(0,0,N,S.startAngle,S.startAngle+S.angle,false);R.closePath();R.fill()}}}var a={series:{pie:{show:false,radius:"auto",innerRadius:0,startAngle:3/2,tilt:1,offset:{top:0,left:"auto"},stroke:{color:"#FFF",width:1},label:{show:"auto",formatter:function(d,e){return'<div style="font-size:x-small;text-align:center;padding:2px;color:'+e.color+';">'+d+"<br/>"+Math.round(e.percent)+"%</div>"},radius:1,background:{color:null,opacity:0},threshold:0},combine:{threshold:-1,color:null,label:"Other"},highlight:{opacity:0.5}}}};b.plot.plugins.push({init:c,options:a,name:"pie",version:"1.0"})})(jQuery);

// Resize
(function(n,p,u){var w=n([]),s=n.resize=n.extend(n.resize,{}),o,l="setTimeout",m="resize",t=m+"-special-event",v="delay",r="throttleWindow";s[v]=250;s[r]=true;n.event.special[m]={setup:function(){if(!s[r]&&this[l]){return false}var a=n(this);w=w.add(a);n.data(this,t,{w:a.width(),h:a.height()});if(w.length===1){q()}},teardown:function(){if(!s[r]&&this[l]){return false}var a=n(this);w=w.not(a);a.removeData(t);if(!w.length){clearTimeout(o)}},add:function(b){if(!s[r]&&this[l]){return false}var c;function a(d,h,g){var f=n(this),e=n.data(this,t);e.w=h!==u?h:f.width();e.h=g!==u?g:f.height();c.apply(this,arguments)}if(n.isFunction(b)){c=b;return a}else{c=b.handler;b.handler=a}}};function q(){o=p[l](function(){w.each(function(){var d=n(this),a=d.width(),b=d.height(),c=n.data(this,t);if(a!==c.w||b!==c.h){d.trigger(m,[c.w=a,c.h=b])}});q()},s[v])}})(jQuery,this);(function(b){var a={};function c(f){function e(){var h=f.getPlaceholder();if(h.width()==0||h.height()==0){return}f.resize();f.setupGrid();f.draw()}function g(i,h){i.getPlaceholder().resize(e)}function d(i,h){i.getPlaceholder().unbind("resize",e)}f.hooks.bindEvents.push(g);f.hooks.shutdown.push(d)}b.plot.plugins.push({init:c,options:a,name:"resize",version:"1.0"})})(jQuery);

// Selection
(function(a){function b(k){var p={first:{x:-1,y:-1},second:{x:-1,y:-1},show:false,active:false};var m={};var r=null;function e(s){if(p.active){l(s);k.getPlaceholder().trigger("plotselecting",[g()])}}function n(s){if(s.which!=1){return}document.body.focus();if(document.onselectstart!==undefined&&m.onselectstart==null){m.onselectstart=document.onselectstart;document.onselectstart=function(){return false}}if(document.ondrag!==undefined&&m.ondrag==null){m.ondrag=document.ondrag;document.ondrag=function(){return false}}d(p.first,s);p.active=true;r=function(t){j(t)};a(document).one("mouseup",r)}function j(s){r=null;if(document.onselectstart!==undefined){document.onselectstart=m.onselectstart}if(document.ondrag!==undefined){document.ondrag=m.ondrag}p.active=false;l(s);if(f()){i()}else{k.getPlaceholder().trigger("plotunselected",[]);k.getPlaceholder().trigger("plotselecting",[null])}return false}function g(){if(!f()){return null}var u={},t=p.first,s=p.second;a.each(k.getAxes(),function(v,w){if(w.used){var y=w.c2p(t[w.direction]),x=w.c2p(s[w.direction]);u[v]={from:Math.min(y,x),to:Math.max(y,x)}}});return u}function i(){var s=g();k.getPlaceholder().trigger("plotselected",[s]);if(s.xaxis&&s.yaxis){k.getPlaceholder().trigger("selected",[{x1:s.xaxis.from,y1:s.yaxis.from,x2:s.xaxis.to,y2:s.yaxis.to}])}}function h(t,u,s){return u<t?t:(u>s?s:u)}function d(w,t){var v=k.getOptions();var u=k.getPlaceholder().offset();var s=k.getPlotOffset();w.x=h(0,t.pageX-u.left-s.left,k.width());w.y=h(0,t.pageY-u.top-s.top,k.height());if(v.selection.mode=="y"){w.x=w==p.first?0:k.width()}if(v.selection.mode=="x"){w.y=w==p.first?0:k.height()}}function l(s){if(s.pageX==null){return}d(p.second,s);if(f()){p.show=true;k.triggerRedrawOverlay()}else{q(true)}}function q(s){if(p.show){p.show=false;k.triggerRedrawOverlay();if(!s){k.getPlaceholder().trigger("plotunselected",[])}}}function c(s,w){var t,y,z,A,x=k.getAxes();for(var u in x){t=x[u];if(t.direction==w){A=w+t.n+"axis";if(!s[A]&&t.n==1){A=w+"axis"}if(s[A]){y=s[A].from;z=s[A].to;break}}}if(!s[A]){t=w=="x"?k.getXAxes()[0]:k.getYAxes()[0];y=s[w+"1"];z=s[w+"2"]}if(y!=null&&z!=null&&y>z){var v=y;y=z;z=v}return{from:y,to:z,axis:t}}function o(t,s){var v,u,w=k.getOptions();if(w.selection.mode=="y"){p.first.x=0;p.second.x=k.width()}else{u=c(t,"x");p.first.x=u.axis.p2c(u.from);p.second.x=u.axis.p2c(u.to)}if(w.selection.mode=="x"){p.first.y=0;p.second.y=k.height()}else{u=c(t,"y");p.first.y=u.axis.p2c(u.from);p.second.y=u.axis.p2c(u.to)}p.show=true;k.triggerRedrawOverlay();if(!s&&f()){i()}}function f(){var s=5;return Math.abs(p.second.x-p.first.x)>=s&&Math.abs(p.second.y-p.first.y)>=s}k.clearSelection=q;k.setSelection=o;k.getSelection=g;k.hooks.bindEvents.push(function(t,s){var u=t.getOptions();if(u.selection.mode!=null){s.mousemove(e);s.mousedown(n)}});k.hooks.drawOverlay.push(function(v,D){if(p.show&&f()){var t=v.getPlotOffset();var s=v.getOptions();D.save();D.translate(t.left,t.top);var z=a.color.parse(s.selection.color);D.strokeStyle=z.scale("a",0.8).toString();D.lineWidth=1;D.lineJoin="round";D.fillStyle=z.scale("a",0.4).toString();var B=Math.min(p.first.x,p.second.x),A=Math.min(p.first.y,p.second.y),C=Math.abs(p.second.x-p.first.x),u=Math.abs(p.second.y-p.first.y);D.fillRect(B,A,C,u);D.strokeRect(B,A,C,u);D.restore()}});k.hooks.shutdown.push(function(t,s){s.unbind("mousemove",e);s.unbind("mousedown",n);if(r){a(document).unbind("mouseup",r)}})}a.plot.plugins.push({init:b,options:{selection:{mode:null,color:"#e8cfac"}},name:"selection",version:"1.1"})})(jQuery);

// Stack
(function(b){var a={series:{stack:null}};function c(f){function d(k,j){var h=null;for(var g=0;g<j.length;++g){if(k==j[g]){break}if(j[g].stack==k.stack){h=j[g]}}return h}function e(C,v,g){if(v.stack==null){return}var p=d(v,C.getData());if(!p){return}var z=g.pointsize,F=g.points,h=p.datapoints.pointsize,y=p.datapoints.points,t=[],x,w,k,J,I,r,u=v.lines.show,G=v.bars.horizontal,o=z>2&&(G?g.format[2].x:g.format[2].y),n=u&&v.lines.steps,E=true,q=G?1:0,H=G?0:1,D=0,B=0,A;while(true){if(D>=F.length){break}A=t.length;if(F[D]==null){for(m=0;m<z;++m){t.push(F[D+m])}D+=z}else{if(B>=y.length){if(!u){for(m=0;m<z;++m){t.push(F[D+m])}}D+=z}else{if(y[B]==null){for(m=0;m<z;++m){t.push(null)}E=true;B+=h}else{x=F[D+q];w=F[D+H];J=y[B+q];I=y[B+H];r=0;if(x==J){for(m=0;m<z;++m){t.push(F[D+m])}t[A+H]+=I;r=I;D+=z;B+=h}else{if(x>J){if(u&&D>0&&F[D-z]!=null){k=w+(F[D-z+H]-w)*(J-x)/(F[D-z+q]-x);t.push(J);t.push(k+I);for(m=2;m<z;++m){t.push(F[D+m])}r=I}B+=h}else{if(E&&u){D+=z;continue}for(m=0;m<z;++m){t.push(F[D+m])}if(u&&B>0&&y[B-h]!=null){r=I+(y[B-h+H]-I)*(x-J)/(y[B-h+q]-J)}t[A+H]+=r;D+=z}}E=false;if(A!=t.length&&o){t[A+2]+=r}}}}if(n&&A!=t.length&&A>0&&t[A]!=null&&t[A]!=t[A-z]&&t[A+1]!=t[A-z+1]){for(m=0;m<z;++m){t[A+z+m]=t[A+m]}t[A+1]=t[A-z+1]}}g.points=t}f.hooks.processDatapoints.push(e)}b.plot.plugins.push({init:c,options:a,name:"stack",version:"1.2"})})(jQuery);

// @PLUGIN Maps Pastel plugin by me
(function($){
	$.fn.maps = function(options) {
	var defaults = {  
		coordinates: "55.680839,12.585955",
		place: undefined,
		type: "satellite",
		zoom: 16,
		marker: true,
		geo: false,
		caption: undefined,
		html: false
	};  
	var obj = this;
	var options = $.extend(defaults, options); 
	var coords = defaults.coordinates;
	var zoom = defaults.zoom;
	var type = defaults.type;
	if(defaults.place!=undefined) {
		coords = $.trim(defaults.place).split(' ').join('+');
	}
	if(defaults.geo==true) {
		if (navigator.geolocation) {  
			navigator.geolocation.getCurrentPosition(
				function(position) {  
					coords = position.coords.latitude + "," + position.coords.longitude;
					return create();  
		  		}, 
		  		function(error) {
		  			var content;
					switch(error.code) {
						case error.TIMEOUT:
							content = "Timeout.";
							break;
						case error.POSITION_UNAVAILABLE:
							content = "Position unavailable"
						case error.PERMISSION_DENIED:
							content = "Permission denied.";
							break;
						case error.UNKNOWN_ERROR:
							content = "Unknown error";
							break;
					}		  			
		  			$.notification( 
		  				{
		  					title: "Your location could not be determined",
		  					content: content,
		  					error: true
		  				}
		  			);
		  		},
		  		{
					enableHighAccuracy: true,
					timeout: 10000
		  		}
		  		
		  	);
		} else {
			$.notification( 
				{
					title: "Your location could not be determined",
					content: "Your browser doesn't support geolocation.",
					error: true
				}
			);
		}
	} else {
		return create();
	}
	function create() {
		var url = "http://maps.googleapis.com/maps/api/staticmap?center=" + coords + "&zoom=" + zoom + "&maptype=" + type + "&size=640x640&sensor=false&scale=2&language=en";
		var con = $("<div>");
		var map = $("<div>");
		map.addClass("map").css("background-image", "url("+url+")");
		if(defaults.marker==true) {
			var marker = $("<div>");
			var glow = $("<div>");
			marker.addClass("marker animated up");
			glow.addClass("glow").appendTo(marker);	
			marker.appendTo(map);
		}
		if(defaults.caption!=undefined) {
			var outer = $("<div>");
			var caption = $("<div>");
			outer.addClass("outer");
			caption.addClass("caption animated bounceInDown").html(defaults.caption).appendTo(outer);	
			outer.appendTo(map);
		}
		map.appendTo(con);
		if($(obj).length>0) {
			$(obj).html( con.html() );
		} else if (defaults.html==true) {
			return con.html();
		}
	}
};
})(jQuery);
var ScrollFix = function(elem) {
	// Variables to track inputs
	var startY, startTopScroll;

	elem = elem || document.querySelector(elem);

	// If there is no element, then do nothing	
	if(!elem)
		return;

	// Handle the start of interactions
	elem.addEventListener('touchstart', function(event){
		startY = event.touches[0].pageY;
		startTopScroll = elem.scrollTop;

		if(startTopScroll <= 0)
			elem.scrollTop = 1;

		if(startTopScroll + elem.offsetHeight >= elem.scrollHeight)
			elem.scrollTop = elem.scrollHeight - elem.offsetHeight - 1;
	}, false);
};

// @PLUGIN Owl Notifications | http://std.li/07 | Made by me | You are only allowed to use the script in this project
(function ($) {
    $.notification = function (settings) {
       	var con, notification, image, right, left, inner;
        
        settings = $.extend({
        	title: undefined,
        	content: undefined,
            timeout: 0,
            img: undefined,
            border: true,
            fill: false,
            showTime: false,
            click: undefined,
            icon: undefined,
            color: undefined,
            error: false
        }, settings);
        
        con = $("#notifications");
        if (!con.length) {
            con = $("<div>", { id: "notifications" }).appendTo($("#overlays"));
        }
        
		notification = $("<div>");
        notification.addClass("notification animated fadeInLeftMiddle fast");
        
        if(settings.error == true) {
        	notification.addClass("error");
        }
        
        if( $("#notifications .notification").length > 0 ) {
        	notification.addClass("more");
        } else {
        	con.addClass("animated flipInX").delay(1000).queue(function(){ 
        	    con.removeClass("animated flipInX");
        			con.clearQueue();
        	});
        }

		left = $("<div class='left'>");
		right = $("<div class='right'>");
		
		if(settings.title != undefined) {
			var htmlTitle = "<h2>" + settings.title + "</h2>";
		} else {
			var htmlTitle = "";
		}
		
		if(settings.content != undefined) {
			var htmlContent = settings.content;
		} else {
			var htmlContent = "";
		}
		
		inner = $("<div>", { html: htmlTitle + htmlContent });
		inner.addClass("inner");
		
		inner.appendTo(right);
		
		if (settings.img != undefined) {
			image = $("<div>", {
				style: "background-image: url('"+settings.img+"')"
			});
		
			image.addClass("img");
			image.appendTo(left);
			
			if(settings.border==false) {
				image.addClass("border")
			}
			
			if(settings.fill==true) {
				image.addClass("fill");
			}
			
		} else {
			if (settings.icon != undefined) {
				var iconType = settings.icon;
			} else {
				if(settings.error!=true) {
					var iconType = '"';
				} else {
					var iconType = '!';
				}
			}	
			icon = $('<div class="icon">').html(iconType);
			
			if (settings.color != undefined) {
				icon.css("color", settings.color);
			}
			
			icon.appendTo(left);
		}

        left.appendTo(notification);
        right.appendTo(notification);
        
        function timeSince(time){
        	var time_formats = [
        	  [2, "One second", "1 second from now"], // 60*2
        	  [60, "seconds", 1], // 60
        	  [120, "One minute", "1 minute from now"], // 60*2
        	  [3600, "minutes", 60], // 60*60, 60
        	  [7200, "One hour", "1 hour from now"], // 60*60*2
        	  [86400, "hours", 3600], // 60*60*24, 60*60
        	  [172800, "One day", "tomorrow"], // 60*60*24*2
        	  [604800, "days", 86400], // 60*60*24*7, 60*60*24
        	  [1209600, "One week", "next week"], // 60*60*24*7*4*2
        	  [2419200, "weeks", 604800], // 60*60*24*7*4, 60*60*24*7
        	  [4838400, "One month", "next month"], // 60*60*24*7*4*2
        	  [29030400, "months", 2419200], // 60*60*24*7*4*12, 60*60*24*7*4
        	  [58060800, "One year", "next year"], // 60*60*24*7*4*12*2
        	  [2903040000, "years", 29030400], // 60*60*24*7*4*12*100, 60*60*24*7*4*12
        	  [5806080000, "One century", "next century"], // 60*60*24*7*4*12*100*2
        	  [58060800000, "centuries", 2903040000] // 60*60*24*7*4*12*100*20, 60*60*24*7*4*12*100
        	];
        	
        	var seconds = (new Date - time) / 1000;
        	var token = "ago", list_choice = 1;
        	if (seconds < 0) {
        		seconds = Math.abs(seconds);
        		token = "from now";
        		list_choice = 1;
        	}
        	var i = 0, format;
        	
        	while (format = time_formats[i++]) if (seconds < format[0]) {
        		if (typeof format[2] == "string")
        			return format[list_choice];
        	    else
        			return Math.floor(seconds / format[2]) + " " + format[1];
        	}
        	return time;
        };
        
        if(settings.showTime != false) {
        	var timestamp = Number(new Date());
        	
        	timeHTML = $("<div>", { html: "<strong>" + timeSince(timestamp) + "</strong> ago" });
        	timeHTML.addClass("time").attr("title", timestamp);
        	timeHTML.appendTo(right);
        	
        	setInterval(
	        	function() {
	        		$(".time").each(function () {
	        			var timing = $(this).attr("title");
	        			$(this).html("<strong>" + timeSince(timing) + "</strong> ago");
	        		});
	        	}, 4000)
        	
        }
        var xPos;
        notification.bind('touchmove', function(e) {
        	xPos = e.originalEvent.touches[0].pageX;
        	notification.css("-webkit-transform", "translateX(" + xPos + "px)");
        	$("#overlays").addClass("full");
        });
        
        notification.bind('touchend', function(e) {
        	if(xPos>200) {
        		notification.css("-webkit-transform", "translateX(700px) translate3d(0,0,0)").delay(100).queue(function(){ 
        			if($(this).is(':last-child')) {
        			    $(this).remove();
        			    $("#overlays").removeClass("full");
        			    $('#notifications .notification:last-child').removeClass("more");
        			} else {
        				$(this).remove();
        				$("#overlays").removeClass("full");
        			}
        		});
        	} else {
	        	notification.css("-webkit-transform", "translateX(0px) translate3d(0,0,0)");
	        	$("#overlays").removeClass("full");
        	}
        });
        
        notification.prependTo(con);
		notification.show();

        if (settings.timeout) {
            setTimeout(function () {
            	var prev = notification.prev();
            	if(prev.hasClass("more")) {
            		if(prev.is(":first-child") || notification.is(":last-child")) {
            			prev.removeClass("more");
            		}
            	}
	        	notification.remove();
            }, settings.timeout)
        }
        
        if (settings.click != undefined) {
        	notification.addClass("click");
            notification.bind("tap", function (event) {
                settings.click.call(this)
            })
        }
        return this
    }
})(jQuery);
jQuery.event.special.tap = {
    setup: function (a, b) {
        var c = this,
            d = jQuery(c);
        if (window.Touch) {
            d.bind("touchstart", jQuery.event.special.tap.onTouchStart);
            d.bind("touchmove", jQuery.event.special.tap.onTouchMove);
            d.bind("touchend", jQuery.event.special.tap.onTouchEnd)
        } else {
            d.bind("click", jQuery.event.special.tap.click)
        }
    },
    click: function (a) {
        a.type = "tap";
        jQuery.event.handle.apply(this, arguments)
    },
    teardown: function (a) {
        if (window.Touch) {
            $elem.unbind("touchstart", jQuery.event.special.tap.onTouchStart);
            $elem.unbind("touchmove", jQuery.event.special.tap.onTouchMove);
            $elem.unbind("touchend", jQuery.event.special.tap.onTouchEnd)
        } else {
            $elem.unbind("click", jQuery.event.special.tap.click)
        }
    },
    onTouchStart: function (a) {
        this.moved = false
    },
    onTouchMove: function (a) {
        this.moved = true
    },
    onTouchEnd: function (a) {
        if (!this.moved) {
            a.type = "tap";
            jQuery.event.handle.apply(this, arguments)
        }
    }
};
$(document).ready(function() {
	$("body").append('<div id="overlays"></div>');
	
	window.addEventListener("load", function (a) {
	    window.applicationCache.addEventListener("updateready", function (a) {
	        if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
	            window.applicationCache.swapCache();
	            
	            $.notification( 
	            	{
	            		title: 'An update has been installed!',
	            		content: 'Tap here to reload.',
	            		icon: "u",
	            		click: function() {
	            			window.location.reload();
	            		}
	            	}
	            );
	            
	        } else {};
	    }, false)
	}, false);
	
	var scrollable = document.getElementById("scroll");
	new ScrollFix(scrollable);
	
	
	$(".toolbar, #toolbar, #bottom").bind('touchstart', function(e) {
		e.preventDefault();
	});
	
	$("#create").bind("tap", function() {
		$.notification( 
			{
				title: 'A notification!',
				content: 'Just swipe to delete it.',
				img: "../static/demo/boy_avatar.jpg",
				fill: true
			}
		);
	});
	
	
	$("a").bind("tap", function(e) {
		if(!$(this).hasClass("disabled")) {
			var section = $(this).attr("href");
			
			if($(section).length>0) {
				
				if($(this).parent().attr("id")=="bottom")  {
				
					if(!$(section).hasClass("current")) {
						$("#scroll, #toolbar, #bottom").removeAttr("class");
						
						if($(this).attr("data-scroll")) {
							$("#scroll, #toolbar, #bottom").addClass($(this).attr("data-scroll"));
						}
						
						$("#toolbar h2").html($(this).html());
						
						$("section.current").removeClass("current");
						$(section).addClass("current");
						
						$("#bottom a.active").removeClass("active");
						$(this).addClass("active");
					}
				
				} else {
					if(!$(section).hasClass("active")) {
						$(section).addClass("active").wrapInner("<div class='scroll' />");
						$("#modals").addClass("full");
						$("#modals").prepend('<div class="toolbar"><h2>'+$(this).html()+'</h2><a class="button right">Close</a></div>')
						$("#modals a.button").live("tap", function() {
							$("#modals").removeAttr("class");
							$("#modals section.active").html( $("#modals section.active .scroll").html() ).removeClass("active");
							$("#modals .toolbar").remove();
						});
					}
				}
			
			} else {
				$.notification( 
					{
						title: 'Section does not exist',
						content: 'The link <strong>' + section + '</strong> is not valid.' ,
						error: true
					}
				);
			}
		};	
		e.preventDefault();
		return false;
	
	});
	
	$("#update").bind("tap", function() {
		graph();
	});
	
	
	
	
	
	$("li.layer > ul").bind("tap", function() {
		if( !$(this).hasClass("turn") ) {
			$("li.layer > ul.turn").addClass("back").delay(800).queue(function(){ 
				$(this).removeClass("turn");
				$(this).removeClass("back");
				$(this).clearQueue();
			});
			$(this).addClass("turn");
		} else {
			$(this).addClass("back").delay(800).queue(function(){ 
				$(this).removeClass("turn");
				$(this).removeClass("back");
				$(this).clearQueue();
			});
		}
	});
	$("li.todo").each(function() {
		$(this).prepend('<span class="box" />').prepend('<span class="fill" />');
	});
	$("li.todo span").bind("tap", function() {
		if( !$(this).parent("li.todo").hasClass("unchecked") ) {
			$(this).parent("li.todo").removeClass("checked").addClass("unchecked");
		} else {
			$(this).parent("li.todo").removeClass("unchecked").addClass("checked");
		}
		return false;	
	});

	document.addEventListener('touchmove', function(event) {
	   if(event.target.parentNode.className.indexOf('noBounce') != -1
	|| event.target.className.indexOf('noBounce') != -1 ) {
		event.preventDefault(); }
	}, false);	        
	
	var options =	{
						place: "kongens nytorv, copenhagen", 
						zoom: 16, 
						caption: "King's New Square, <span>Copenhagen</span>"
					};
	
	$("#maps").maps(options);
	
	graph();
	
	function graph() {
	
		var d1 = [];
	    for (var i = 0; i <= 10; i += 1)
	        d1.push([i, parseInt(Math.random() * 250)]);
	
	    var d2 = [];
	    for (var i = 0; i <= 10; i += 1)
	        d2.push([i, parseInt(Math.random() * 200)]);
	
	    var d3 = [];
	    for (var i = 0; i <= 10; i += 0.4)
	        d3.push([i, parseInt(Math.random() * 140)]);
	        
		var d4 = [];
	    for (var i = 0; i <= 10; i += 0.1)
	        d4.push([i, Math.sqrt(i * 10)]);
	    
	    var d5 = [];
	    for (var i = 0; i <= 10; i += 1)
	        d5.push([i, Math.sqrt(i*40) + Math.random() * 55 + 20  ]);
	
	    var d6 = [];
	    for (var i = 0; i <= 10; i += 0.5 + Math.random())
	        d6.push([i, Math.sqrt(2*i + Math.sin(i) + 5)]);      
	
	    var stack = 1, bars = false, lines = true, steps = false;
	    
	    
	    d5 = [ [0, 42], [1, 50], [2, 65], [3, 76], [4, 77], [5, 180], [6, 199], [7, 220], [8, 240], [9, 340], [10, 398] ];
	    //d2 = [ [0, 2], [1, 30], [2, 25], [3, 186], [4, 150], [5, 200], [6, 189], [7, 120], [8, 140], [9, 200], [10, 198] ];
	    
	    
	    $.plot($("#chart_linear"), 
	    	[
	    		{label: "DR NU", data: d5, lines: {show: true, fill: 0.8 }, color: "#355C7D"},
	    		{label: "Pattern.dk", data: d1, lines: { show: true, lineWidth: 4 }, color: "#F67280"},
	    		{label: "Pouteria", data: d3, lines: { show: true, lineWidth: 2 }, color: "#F8B195"},
	    		{label: "Halifaxed.com", data: d2, lines: { show: true, lineWidth: 2 }, color: "#6C5B7B"}
	    	], 
	    	{	
	    		series	:	{ lines: { show: true }, points: { show: true }, curvedLines: { active: true } },
	    		grid	:	{ hoverable: true, clickable: true },
	    		legend 	:	{ show: false }
	    	}
	    );
	
	}
	
});