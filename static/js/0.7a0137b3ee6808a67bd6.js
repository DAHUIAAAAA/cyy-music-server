webpackJsonp([0],{"0qgk":function(t,s){},kvay:function(t,s,e){"use strict";var a=e("Dd8w"),l=e.n(a),i=e("qwAB"),n=e("ZV4u"),r=e("y/jF"),o=e("3Q4o"),c=e("NYxO"),g=e("F4+m"),h=Object(o.c)("transform"),d={mixins:[g.b],components:{Scroll:i.a,SongList:n.a,Loading:r.a},props:{bgImage:{type:String,default:""},songs:{type:Array,default:function(){return[]}},title:{type:String,default:""},rank:{type:Boolean,default:!1},loadPercent:{type:Number,default:0}},data:function(){return{scrollY:0}},created:function(){this.probeType=3,this.listenScroll=!0},mounted:function(){this.imageHeight=this.$refs.bgImage.clientHeight,this.$refs.scroll.$el.style.top=this.imageHeight+"px",this.minTranslateY=40-this.imageHeight},computed:l()({bgStyle:function(){return"background-image:url("+this.bgImage+")"}},Object(c.c)(["fullScreen"])),methods:l()({},Object(c.b)(["selectPlay","randomPlay"]),{getPercent:function(){return(this.loadPercent?this.loadPercent:0)+"%"},back:function(){this.$router.back()},selectItem:function(t,s){this.songs[s].url&&this.selectPlay({list:this.songs,index:s})},random:function(){this.randomPlay({list:this.songs})},scroll:function(t){this.scrollY=t.y},layerScroll:function(t){var s=this.$refs.layer,e=this.minTranslateY,a=Math.max(t,e);s.style[h]="translate(0, "+a+"px)"},changeBackgroundStyle:function(t){var s=this.$refs.bgImage,e=this.$refs.playBtn,a=this.$refs.filter,l=0,i=1,n=0,r=Math.abs(t/this.imageHeight);t>0?(i=1+r,l=10):n=Math.min(20*r,20),t<=this.minTranslateY?(l=10,s.style.height="40px",s.style.paddingTop=0,e.style.display="none"):(s.style.height=0,s.style.paddingTop="70%",e.style.display="block"),a.style.backdrop="blur("+n+"px)",s.style.zIndex=l,s.style[h]="scale("+i+")"}}),watch:{scrollY:function(t){this.layerScroll(t),this.changeBackgroundStyle(t)}}},u={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"music-list"},[e("div",{staticClass:"back",on:{click:t.back}},[e("i",{staticClass:"icon-back"})]),t._v(" "),e("h1",{staticClass:"title",domProps:{innerHTML:t._s(t.title)}}),t._v(" "),e("div",{ref:"bgImage",staticClass:"bg-image",style:t.bgStyle},[e("div",{staticClass:"play-wrapper"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.songs.length,expression:"songs.length"}],ref:"playBtn",staticClass:"play",on:{click:t.random}},[e("i",{staticClass:"icon-play"}),t._v(" "),e("span",{staticClass:"text"},[t._v("随机播放全部")])])]),t._v(" "),e("div",{ref:"filter",staticClass:"filter"})]),t._v(" "),e("div",{ref:"layer",staticClass:"bg-layer"}),t._v(" "),e("scroll",{ref:"scroll",staticClass:"list",attrs:{data:t.songs,"listen-scroll":t.listenScroll,"probe-type":t.probeType},on:{scroll:t.scroll}},[e("div",{staticClass:"song-list-wrapper"},[e("song-list",{attrs:{songs:t.songs,rank:t.rank},on:{select:t.selectItem}})],1),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.songs.length,expression:"!songs.length"}],staticClass:"loading-container"},[e("loading",{attrs:{title:t.getPercent()}})],1)])],1)},staticRenderFns:[]};var y=e("VU/8")(d,u,!1,function(t){e("0qgk")},"data-v-772918fa",null);s.a=y.exports}});
//# sourceMappingURL=0.7a0137b3ee6808a67bd6.js.map