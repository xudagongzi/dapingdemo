webpackJsonp([1],{565:function(t,i,s){"use strict";function e(t){s(605)}Object.defineProperty(i,"__esModule",{value:!0});var a=s(577),o=s(596),n=s(223),h=e,l=n(a.a,o.a,!1,h,null,null);i.default=l.exports},571:function(t,i,s){"use strict";var e=s(572),a=s.n(e);i.a={data:function(){return{}},props:{canvasId:{type:String,default:""},width:{type:[String,Number],default:500},height:{type:[String,Number],default:400},type:{type:String,default:"bar"},data:{type:Array,default:[]},options:{type:Object,required:!1}},mounted:function(){this.renderChart()},methods:{renderChart:function(){var t=this;new a.a(t.canvasId,t.type,t.data,t.options)}},watch:{data:function(){this.renderChart()},options:{handler:function(t,i){this.renderChart()},deep:!0},type:function(){this.renderChart()},width:function(){var t=this;t.$nextTick(function(){t.renderChart()})},height:function(){var t=this;t.$nextTick(function(){t.renderChart()})}}}},572:function(t,i,s){var e;/*!
 * sChart JavaScript Library v1.0.2
 * http://test.omwteam.com/sChart/ | Released under the MIT license
 * Date: 2017-07-12T18:59Z
 */
!function(a,o){void 0!==(e=function(){return o(a)}.call(i,s,i,t))&&(t.exports=e)}(this,function(t){"use strict";function i(t,i,s,e){this.canvas=document.getElementById(t),this.ctx=this.canvas.getContext("2d"),this.type=i,this.data=s,this.dataLength=this.data.length,this.width=this.canvas.width,this.height=this.canvas.height,this.padding=50,this.yEqual=5,this.yLength=0,this.xLength=0,this.yFictitious=0,this.yRatio=0,this.bgColor="#ffffff",this.fillColor="#1E9FFF",this.axisColor="#666666",this.contentColor="#eeeeee",this.titleColor="#000000",this.title="",this.titlePosition="top",this.looped=null,this.current=0,this.radius=100,this.innerRadius=70,this.colorList=["#1E9FFF","#13CE66","#F7BA2A","#FF4949","#72f6ff","#199475","#e08031","#726dd1"],this.legendColor="#000000",this.legendTop=40,this.totalValue=this.getTotalValue(),this.init(e)}return function(){window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame,window.requestAnimationFrame||(window.requestAnimationFrame=function(t){return window.setTimeout(t,1e3/60)}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}(),i.prototype={init:function(t){if(0===this.dataLength)return!1;if(t)for(var i in t)"colorList"===i&&Array.isArray(t[i])?this[i]=t[i].concat(this[i]):this[i]=t[i];"bar"===this.type||"line"===this.type?(this.yLength=Math.floor((this.height-2*this.padding-10)/this.yEqual),this.xLength=Math.floor((this.width-1.5*this.padding-10)/this.dataLength),this.yFictitious=this.getYFictitious(this.data),this.yRatio=this.yLength/this.yFictitious,this.looping()):this.drawPieUpdate()},looping:function(){this.looped=window.requestAnimationFrame(this.looping.bind(this)),this.current<100?(this.current=this.current+3>100?100:this.current+3,this.drawAnimation()):(window.cancelAnimationFrame(this.looped),this.looped=null)},drawAnimation:function(){for(var t=0;t<this.dataLength;t++){var i=Math.ceil(this.data[t].value*this.current/100*this.yRatio),s=this.height-this.padding-i;this.data[t].left=this.padding+this.xLength*(t+.25),this.data[t].top=s,this.data[t].right=this.padding+this.xLength*(t+.75),this.data[t].bottom=this.height-this.padding,this.drawBarUpdate()}},drawBarUpdate:function(){this.ctx.fillStyle=this.bgColor,this.ctx.fillRect(0,0,this.width,this.height),this.drawAxis(),this.drawPoint(),this.drawTitle(),this.drawBarChart()},drawPieUpdate:function(){this.ctx.fillStyle=this.bgColor,this.ctx.fillRect(0,0,this.width,this.height),this.drawLegend(),this.drawTitle(),this.drawPieChart()},drawBarChart:function(){this.ctx.fillStyle=this.fillColor,this.ctx.strokeStyle=this.fillColor;for(var t=0;t<this.dataLength;t++)"line"===this.type?(this.ctx.beginPath(),this.ctx.arc(this.data[t].left+this.xLength/4,this.data[t].top,2,0,2*Math.PI,!0),this.ctx.fill(),t!==this.dataLength-1&&(this.ctx.moveTo(this.data[t].left+this.xLength/4,this.data[t].top),this.ctx.lineTo(this.data[t+1].left+this.xLength/4,this.data[t+1].top)),this.ctx.stroke()):"bar"===this.type&&this.ctx.fillRect(this.data[t].left,this.data[t].top,this.data[t].right-this.data[t].left,this.data[t].bottom-this.data[t].top),this.ctx.font="12px Arial",this.ctx.fillText(this.data[t].value*this.current/100,this.data[t].left+this.xLength/4,this.data[t].top-5)},drawPieChart:function(){for(var t=this.width/2,i=this.height/2,s=0,e=0,a=0;a<this.dataLength;a++)this.ctx.beginPath(),this.ctx.fillStyle=this.colorList[a],this.ctx.moveTo(t,i),this.data[a].start=0===a?-Math.PI/2:this.data[a-1].end,this.data[a].end=this.data[a].start+this.data[a].value/this.totalValue*2*Math.PI,this.ctx.arc(t,i,this.radius,this.data[a].start,this.data[a].end),this.ctx.closePath(),this.ctx.fill(),this.data[a].middle=(this.data[a].start+this.data[a].end)/2,s=Math.ceil(Math.abs(this.radius*Math.cos(this.data[a].middle))),e=Math.floor(Math.abs(this.radius*Math.sin(this.data[a].middle))),this.ctx.strokeStyle=this.colorList[a],this.data[a].middle<=0?(this.ctx.textAlign="left",this.ctx.moveTo(t+s,i-e),this.ctx.lineTo(t+s+10,i-e-10),this.ctx.moveTo(t+s+10,i-e-10),this.ctx.lineTo(t+s+this.radius/2,i-e-10),this.ctx.stroke(),this.ctx.fillText(this.data[a].value,t+s+5+this.radius/2,i-e-5)):this.data[a].middle>0&&this.data[a].middle<=Math.PI/2?(this.ctx.textAlign="left",this.ctx.moveTo(t+s,i+e),this.ctx.lineTo(t+s+10,i+e+10),this.ctx.moveTo(t+s+10,i+e+10),this.ctx.lineTo(t+s+this.radius/2,i+e+10),this.ctx.stroke(),this.ctx.fillText(this.data[a].value,t+s+5+this.radius/2,i+e+15)):this.data[a].middle>Math.PI/2&&this.data[a].middle<Math.PI?(this.ctx.textAlign="right",this.ctx.moveTo(t-s,i+e),this.ctx.lineTo(t-s-10,i+e+10),this.ctx.moveTo(t-s-10,i+e+10),this.ctx.lineTo(t-s-this.radius/2,i+e+10),this.ctx.stroke(),this.ctx.fillText(this.data[a].value,t-s-5-this.radius/2,i+e+15)):(this.ctx.textAlign="right",this.ctx.moveTo(t-s,i-e),this.ctx.lineTo(t-s-10,i-e-10),this.ctx.moveTo(t-s-10,i-e-10),this.ctx.lineTo(t-s-this.radius/2,i-e-10),this.ctx.stroke(),this.ctx.fillText(this.data[a].value,t-s-5-this.radius/2,i-e-5));"ring"===this.type&&(this.ctx.beginPath(),this.ctx.fillStyle=this.bgColor,this.ctx.arc(t,i,this.innerRadius,0,2*Math.PI),this.ctx.fill())},drawAxis:function(){this.ctx.beginPath(),this.ctx.strokeStyle=this.axisColor,this.ctx.moveTo(this.padding+.5,this.height-this.padding+.5),this.ctx.lineTo(this.padding+.5,this.padding+.5),this.ctx.moveTo(this.padding+.5,this.height-this.padding+.5),this.ctx.lineTo(this.width-this.padding/2+.5,this.height-this.padding+.5),this.ctx.stroke()},drawPoint:function(){this.ctx.beginPath(),this.ctx.font="12px Microsoft YaHei",this.ctx.textAlign="center",this.ctx.fillStyle=this.axisColor;for(var t=0;t<this.dataLength;t++){var i=this.data[t].name,s=this.xLength*(t+1);this.ctx.moveTo(this.padding+s+.5,this.height-this.padding+.5),this.ctx.lineTo(this.padding+s+.5,this.height-this.padding+5.5),this.ctx.fillText(i,this.padding+s-this.xLength/2,this.height-this.padding+15)}this.ctx.stroke(),this.ctx.beginPath(),this.ctx.font="12px Microsoft YaHei",this.ctx.textAlign="right",this.ctx.fillStyle=this.axisColor,this.ctx.moveTo(this.padding+.5,this.height-this.padding+.5),this.ctx.lineTo(this.padding-4.5,this.height-this.padding+.5),this.ctx.fillText(0,this.padding-10,this.height-this.padding+5);for(var t=0;t<this.yEqual;t++){var e=this.yFictitious*(t+1),a=this.yLength*(t+1);this.ctx.beginPath(),this.ctx.strokeStyle=this.axisColor,this.ctx.moveTo(this.padding+.5,this.height-this.padding-a+.5),this.ctx.lineTo(this.padding-4.5,this.height-this.padding-a+.5),this.ctx.stroke(),this.ctx.fillText(e,this.padding-10,this.height-this.padding-a+5),this.ctx.beginPath(),this.ctx.strokeStyle=this.contentColor,this.ctx.moveTo(this.padding+.5,this.height-this.padding-a+.5),this.ctx.lineTo(this.width-this.padding/2+.5,this.height-this.padding-a+.5),this.ctx.stroke()}},drawTitle:function(){this.title&&(this.ctx.beginPath(),this.ctx.textAlign="center",this.ctx.fillStyle=this.titleColor,this.ctx.font="16px Microsoft YaHei","bottom"===this.titlePosition&&this.padding>=40?this.ctx.fillText(this.title,this.width/2,this.height-5):this.ctx.fillText(this.title,this.width/2,this.padding/2))},drawLegend:function(){for(var t=0;t<this.dataLength;t++)this.ctx.fillStyle=this.colorList[t],this.ctx.fillRect(10,this.legendTop+20*t,20,11),this.ctx.fillStyle=this.legendColor,this.ctx.font="12px Microsoft YaHei",this.ctx.textAlign="left",this.ctx.fillText(this.data[t].name,35,50+20*t)},getYFictitious:function(t){var i=t.slice(0);i.sort(function(t,i){return-(t.value-i.value)});var s=Math.ceil(i[0].value/this.yEqual),e=s.toString().length-1;return e=e>2?2:e,Math.ceil(s/Math.pow(10,e))*Math.pow(10,e)},getTotalValue:function(){for(var t=0,i=0;i<this.dataLength;i++)t+=this.data[i].value;return t}},i})},573:function(t,i,s){"use strict";var e=s(571),a=s(574),o=s(223),n=o(e.a,a.a,!1,null,null,null);i.a=n.exports},574:function(t,i,s){"use strict";var e=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",[s("canvas",{attrs:{id:t.canvasId,width:t.width,height:t.height}})])},a=[],o={render:e,staticRenderFns:a};i.a=o},577:function(t,i,s){"use strict";var e=s(573),a=s(595);i.a={components:{Schart:e.a,settings:a.a},data:function(){return{close:!1,items:this.$store.state.items}},beforeMount:function(){},mounted:function(){},update:function(){},methods:{renderChart:function(){var t=this;new sChart(t.canvasId,t.type,t.data,t.options)},handleClick:function(t,i){},closeModal:function(t){this.close=!0,this.activeItem=t},vclose:function(){this.close=!1,this.$store.commit("close",this.activeItem)},createItem:function(t){this.$store.commit("createItem",t)},load:function(){},back:function(){this.$store.commit("back"),this.$router.push("/daping")},draw:function(t){this.$store.commit("draw",t)}}}},579:function(t,i,s){"use strict";var e=s(225),a=s.n(e);i.a={data:function(){return{item:this.$store.state.items[this.$store.state.index],activeName:"first",init:!1,pageConfig:!0,num1:1200,num2:700,image:this.$store.state.image}},mounted:function(){this.screenCapture()},methods:{increment:function(){},handleClick:function(t,i){},handleChange:function(){},screenCapture:function(){var t=this;a()(document.querySelector("#dialogWrap")).then(function(i){t.image=i.toDataURL()}),this.$store.commit("screenCapture",this.image)}},computed:{getItem:function(){return this.$store.state.items[this.$store.state.index]}},watch:{getItem:function(t){this.item=t,void 0!==this.item?(this.init=!0,this.pageConfig=!1):(this.init=!1,this.pageConfig=!0)}}}},584:function(t,i,s){i=t.exports=s(98)(void 0),i.push([t.i,"@import url(/static/css/drag.css);",""]),i.push([t.i,".screen-wrap{width:100%;height:100%}.dialog-wrap{width:1200px;height:700px;position:absolute;left:200px;top:120px;background-color:#173347}.sheader{width:100%;height:60px;background:#f4f6fa;display:flex;border-bottom:2px solid #b5bcc3;box-shadow:0 0 15px grey}.header-img{display:flex;width:350px;align-items:center}.img-wrap img{width:80px;height:80px}.img-wrap div{height:20px;line-height:10px;font-size:14px;text-align:center}",""])},585:function(t,i,s){i=t.exports=s(98)(void 0),i.push([t.i,".settings{position:absolute;right:0;top:62px;width:400px;height:100%;border:1px solid #ccc;background:#fbfdffdb;box-shadow:0 0 5px #ccc;font-size:18px}.block{padding:8px;display:flex;align-items:center;border-bottom:1px dotted #ccc}.block>span{display:inline-block;margin-right:20px;width:30%}.settingWrap{width:90%;margin:15px auto}.el-upload--text,.el-upload-dragger{width:250px}.el-color-picker__trigger{width:120px}",""])},595:function(t,i,s){"use strict";function e(t){s(606)}var a=s(579),o=s(597),n=s(223),h=e,l=n(a.a,o.a,!1,h,null,null);i.a=l.exports},596:function(t,i,s){"use strict";var e=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"screen-wrap"},[s("div",{staticClass:"sheader"},[s("div",{staticClass:"back-wrap",staticStyle:{margin:"15px",width:"50px"}},[s("i",{staticClass:"el-icon-arrow-left",staticStyle:{"font-size":"25px","border-radius":"25px",border:"2px solid #1f2d3d"},on:{click:t.back}})]),t._v(" "),s("div",{staticClass:"header-img"},[s("el-dropdown",{staticStyle:{cursor:"pointer"},attrs:{trigger:"hover"}},[s("span",{staticClass:"el-dropdown-link",staticStyle:{"font-size":"18px"}},[t._v("\n          基本图表\n          "),s("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),t._v(" "),s("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[s("el-dropdown-item",[s("div",{staticClass:"img-wrap",on:{click:function(i){t.createItem("bar")}}},[s("img",{attrs:{src:"/static/img/bar.png",alt:""}}),t._v(" "),s("div",[t._v("柱状图")])])]),t._v(" "),s("el-dropdown-item",[s("div",{staticClass:"img-wrap",on:{click:function(i){t.createItem("line")}}},[s("img",{attrs:{src:"/static/img/line.png",alt:""}}),t._v(" "),s("div",[t._v("折线图")])])]),t._v(" "),s("el-dropdown-item",[s("div",{staticClass:"img-wrap",on:{click:function(i){t.createItem("pie")}}},[s("img",{attrs:{src:"/static/img/pie.png",alt:""}}),t._v(" "),s("div",[t._v("饼状图")])])]),t._v(" "),s("el-dropdown-item",[s("div",{staticClass:"img-wrap",on:{click:function(i){t.createItem("ring")}}},[s("img",{attrs:{src:"/static/img/ring.png",alt:""}}),t._v(" "),s("div",[t._v("环状图")])])])],1)],1)],1)]),t._v(" "),s("div",{staticClass:"dialog-wrap",attrs:{id:"dialogWrap"}},[t._l(t.items,function(i,e){return 0!=t.items.length?s("div",{key:i.id,staticClass:"drag",style:{width:i.w,height:i.h,left:i.x,top:i.y},attrs:{id:i.id},on:{click:function(i){t.draw(e)}}},[s("div",{staticClass:"close el-icon-delete",on:{click:function(i){t.closeModal(e)}}}),t._v(" "),s("div",{staticClass:"resizeL"}),t._v(" "),s("div",{staticClass:"resizeT"}),t._v(" "),s("div",{staticClass:"resizeR"}),t._v(" "),s("div",{staticClass:"resizeB"}),t._v(" "),s("div",{staticClass:"resizeLT"}),t._v(" "),s("div",{staticClass:"resizeTR"}),t._v(" "),s("div",{staticClass:"resizeBR"}),t._v(" "),s("div",{staticClass:"resizeLB"}),t._v(" "),s("div",{staticClass:"dialog"},[s("schart",{attrs:{canvasId:i.canvasId,width:i.w,height:i.h,data:i.data,type:i.type,options:i.options}})],1)]):t._e()}),t._v(" "),s("el-dialog",{attrs:{title:"提示",visible:t.close,width:"30%",center:""},on:{"update:visible":function(i){t.close=i}}},[s("span",[t._v("删除后无法恢复！")]),t._v(" "),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(i){t.close=!1}}},[t._v("取 消")]),t._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:function(i){t.vclose()}}},[t._v("确 定")])],1)])],2),t._v(" "),s("settings")],1)},a=[],o={render:e,staticRenderFns:a};i.a=o},597:function(t,i,s){"use strict";var e=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"settings"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.pageConfig,expression:"pageConfig"}],staticClass:"settingWrap"},[s("div",{staticClass:"block",staticStyle:{"font-size":"20px","font-weight":"bold"}},[t._v("页面设置")]),t._v(" "),s("div",{staticClass:"block"},[s("span",[t._v("区域大小")]),t._v(" "),s("div",[s("div",{staticClass:"block"},[s("span",[t._v("宽度")]),t._v(" "),s("el-input-number",{attrs:{"controls-position":"right",min:500,max:1600},on:{change:t.handleChange},model:{value:t.num1,callback:function(i){t.num1=i},expression:"num1"}})],1),t._v(" "),s("div",{staticClass:"block"},[s("span",[t._v("高度")]),t._v(" "),s("el-input-number",{attrs:{"controls-position":"right",min:500,max:1600},on:{change:t.handleChange},model:{value:t.num2,callback:function(i){t.num2=i},expression:"num2"}})],1)])]),t._v(" "),s("div",{staticClass:"block"},[s("span",[t._v("背景图")]),t._v(" "),s("div",[s("el-upload",{staticClass:"upload-demo",attrs:{drag:"",action:"https://jsonplaceholder.typicode.com/posts/",multiple:""}},[s("i",{staticClass:"el-icon-upload"}),t._v(" "),s("div",{staticClass:"el-upload__text"},[t._v("将文件拖到此处，或\n                        "),s("em",[t._v("点击上传")])]),t._v(" "),s("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("只能上传jpg/png文件")])])],1)]),t._v(" "),s("div",{staticClass:"block"},[s("span",[t._v("背景图")]),t._v(" "),s("div",[s("el-button",{attrs:{type:"primary"},on:{click:t.screenCapture}},[t._v("截取屏幕")]),t._v(" "),s("img",{staticStyle:{width:"240px",height:"150px","margin-top":"8px"},attrs:{src:t.image,alt:""}})],1)])]),t._v(" "),t.init?s("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(i){t.activeName=i},expression:"activeName"}},[s("el-tab-pane",{attrs:{label:"样式",name:"first"}},[s("div",{staticClass:"settingWrap"},[s("div",{staticClass:"block"},[s("span",{staticClass:"demonstration",staticStyle:{"margin-bottom":"5px"}},[t._v("输入标题")]),t._v(" "),s("el-input",{staticStyle:{width:"60%"},attrs:{placeholder:"请输入名称"},model:{value:t.item.options.title,callback:function(i){t.$set(t.item.options,"title",i)},expression:"item.options.title"}})],1),t._v(" "),s("div",{staticClass:"block"},[s("span",{staticClass:"demonstration"},[t._v("标题颜色")]),t._v(" "),s("el-color-picker",{model:{value:t.item.options.titleColor,callback:function(i){t.$set(t.item.options,"titleColor",i)},expression:"item.options.titleColor"}})],1),t._v(" "),s("div",{staticClass:"block"},[s("span",{staticClass:"demonstration"},[t._v("背景颜色")]),t._v(" "),s("el-color-picker",{model:{value:t.item.options.bgColor,callback:function(i){t.$set(t.item.options,"bgColor",i)},expression:"item.options.bgColor"}})],1),t._v(" "),"bar"==t.item.type?s("div",{staticClass:"block"},[s("span",{staticClass:"demonstration"},[t._v("柱体颜色")]),t._v(" "),s("el-color-picker",{model:{value:t.item.options.fillColor,callback:function(i){t.$set(t.item.options,"fillColor",i)},expression:"item.options.fillColor"}})],1):t._e(),t._v(" "),"line"==t.item.type?s("div",{staticClass:"block"},[s("span",{staticClass:"demonstration"},[t._v("折线颜色")]),t._v(" "),s("el-color-picker",{model:{value:t.item.options.axisColor,callback:function(i){t.$set(t.item.options,"axisColor",i)},expression:"item.options.axisColor"}})],1):t._e(),t._v(" "),"bar"==t.item.type|"line"==t.item.type?s("div",{staticClass:"block"},[s("span",{staticClass:"demonstration"},[t._v("坐标轴字体颜色")]),t._v(" "),s("el-color-picker",{model:{value:t.item.options.axisColor,callback:function(i){t.$set(t.item.options,"axisColor",i)},expression:"item.options.axisColor"}})],1):t._e(),t._v(" "),"bar"==t.item.type|"line"==t.item.type?s("div",{staticClass:"block"},[s("span",{staticClass:"demonstration"},[t._v("网格线颜色")]),t._v(" "),s("el-color-picker",{model:{value:t.item.options.contentColor,callback:function(i){t.$set(t.item.options,"contentColor",i)},expression:"item.options.contentColor"}})],1):t._e(),t._v(" "),"ring"==t.item.type|"pie"==t.item.type?s("div",{staticClass:"block"},[s("span",{staticClass:"demonstration"},[t._v("图例字体颜色")]),t._v(" "),s("el-color-picker",{model:{value:t.item.options.legendColor,callback:function(i){t.$set(t.item.options,"legendColor",i)},expression:"item.options.legendColor"}})],1):t._e()])]),t._v(" "),s("el-tab-pane",{attrs:{label:"数据",name:"second"}},[t._v("内容2")])],1):t._e()],1)},a=[],o={render:e,staticRenderFns:a};i.a=o},605:function(t,i,s){var e=s(584);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);s(224)("90e5d79c",e,!0)},606:function(t,i,s){var e=s(585);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);s(224)("260099dd",e,!0)}});