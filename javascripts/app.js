!function(){"use strict";var e="undefined"!=typeof window?window:global;if("function"!=typeof e.require){var n={},t={},i=function(e,n){return{}.hasOwnProperty.call(e,n)},o=function(e,n){var t,i,o=[];t=/^\.\.?(\/|$)/.test(n)?[e,n].join("/").split("/"):n.split("/");for(var s=0,a=t.length;a>s;s++)i=t[s],".."===i?o.pop():"."!==i&&""!==i&&o.push(i);return o.join("/")},s=function(e){return e.split("/").slice(0,-1).join("/")},a=function(n){return function(t){var i=s(n),a=o(i,t);return e.require(a,n)}},r=function(e,n){var i={id:e,exports:{}};return t[e]=i,n(i.exports,a(e),i),i.exports},l=function(e,s){var a=o(e,".");if(null==s&&(s="/"),i(t,a))return t[a].exports;if(i(n,a))return r(a,n[a]);var l=o(a,"./index");if(i(t,l))return t[l].exports;if(i(n,l))return r(l,n[l]);throw new Error('Cannot find module "'+e+'" from "'+s+'"')},d=function(e,t){if("object"==typeof e)for(var o in e)i(e,o)&&(n[o]=e[o]);else n[e]=t},c=function(){var e=[];for(var t in n)i(n,t)&&e.push(t);return e};e.require=l,e.require.define=d,e.require.register=d,e.require.list=c,e.require.brunch=!0}}(),require.register("application",function(e,n,t){var i=n("routes");t.exports=Application=Chaplin.Application.extend({initialize:function(){this.initRouter(i,{pushState:!0,root:"/jetclips"})}})}),require.register("controllers/base/controller",function(e,n,t){var i=n("views/pages/layouts/application"),o=n("views/pages/layouts/navigation"),s=n("views/pages/layouts/footer");t.exports=Chaplin.Controller.extend({beforeAction:function(){this.compose("application",i),this.compose("navigation",o,{region:"navigation"}),this.compose("footer",s,{region:"footer"})}})}),require.register("controllers/home-controller",function(e,n,t){var i=n("controllers/base/controller"),o=n("views/pages/home/index"),s=n("views/pages/home/about"),a=n("views/pages/home/channels");t.exports=i.extend({index:function(){this.view=new o({region:"main"})},about:function(){this.view=new s({region:"main"})},channels:function(){this.view=new a({region:"main"})}})}),require.register("controllers/videos-controller",function(e,n,t){var i=n("controllers/base/controller"),o=n("models/videos/collection"),s=n("models/videos/model"),a=n("views/pages/videos/index");t.exports=i.extend({index:function(){var e=new o,n=new s;this.view=new a({collection:e,model:n,region:"main"})},vine:function(){var e=new o({id:0x9b6f05ecc136}),n=new s;this.view=new a({collection:e,model:n,region:"main"})},youtube:function(){var e=new o({id:489159771140559}),n=new s;this.view=new a({collection:e,model:n,region:"main"})},instagram:function(){var e=new o({id:526404424081231}),n=new s;this.view=new a({collection:e,model:n,region:"main"})}})}),require.register("initialize",function(e,n){var t=n("application");$(function(){return new t({title:"Jetclips: Videos when you gogo",controllerSuffix:"-controller"})})}),require.register("lib/utils",function(e,n,t){var i=Chaplin.utils.beget(Chaplin.utils);"function"==typeof Object.seal&&Object.seal(i),t.exports=i}),require.register("lib/view-helper",function(e,n){var t=n("./utils"),i=function(e,n){return Handlebars.registerHelper(e,n)};i("with",function(e,n){return!e||Handlebars.Utils.isEmpty(e)?n.inverse(this):n.fn(e)}),i("without",function(e,n){var t=n.inverse;return n.inverse=n.fn,n.fn=t,Handlebars.helpers["with"].call(this,e,n)}),i("url",function(e){{var n=[].slice.call(arguments,1);n.pop()}return t.reverse(e,n)}),i("displayPostedBy",function(){var e="",n=window.location.pathname;switch(n){case"/channel/vine":e='<a href="https://www.facebook.com/BestOfVines">Best Vines</a>';break;case"/channel/instagram":e='<a href="https://www.facebook.com/thebestIGvideos">Best Instagram Videos</a>';break;case"/channel/youtube":e='<a href="https://www.facebook.com/TheBestYouTubeVideosEver">The best of Youtube</a>';break;default:e="Unknown"}return new Handlebars.SafeString(e)})}),require.register("mediator",function(e,n,t){t.exports=Chaplin.mediator}),require.register("models/base/collection",function(e,n,t){var i=n("./model");t.exports=Chaplin.Collection.extend({model:i})}),require.register("models/base/model",function(e,n,t){t.exports=Chaplin.Model.extend({})}),require.register("models/videos/collection",function(e,n,t){var i=n("models/base/collection"),o=n("models/videos/model");t.exports=i.extend({model:o,initialize:function(e){this.url="http://jetclips.herokuapp.com/api/v1/videos/"+e.id}})}),require.register("models/videos/model",function(e,n,t){var i=n("models/base/model");t.exports=i.extend({defaults:{source:"",id:null,name:"",ts:""}})}),require.register("routes",function(e,n,t){t.exports=function(e){e("","home#channels"),e("channels","home#channels"),e("home","home#index"),e("about","home#about"),e("channel/vine","videos#vine"),e("channel/youtube","videos#youtube"),e("channel/instagram","videos#instagram")}}),require.register("views/base/collection-view",function(e,n,t){var i=n("./view");t.exports=Chaplin.CollectionView.extend({getTemplateFunction:i.prototype.getTemplateFunction})}),require.register("views/base/view",function(e,n,t){n("lib/view-helper"),t.exports=Chaplin.View.extend({optionNames:Chaplin.View.prototype.optionNames.concat(["template"]),getTemplateFunction:function(){return this.template},clearVideoJS:function(){try{videojs("video-player").dispose()}catch(e){}},clearKeydownEvents:function(){$(document).unbind("keydown")}})}),require.register("views/pages/home/about",function(e,n,t){var i=n("views/base/view");t.exports=i.extend({autoRender:!0,className:"home-about-page",template:n("views/templates/home/about"),initialize:function(){try{videojs("video-player").dispose()}catch(e){}$(document).unbind("keydown")},render:function(){i.prototype.render.call(this),_.defer(function(){Holder.run()})}})}),require.register("views/pages/home/channels",function(e,n,t){var i=n("views/base/view");t.exports=i.extend({autoRender:!0,className:"channels-page",template:n("views/templates/home/channels"),initialize:function(){this.clearVideoJS(),this.clearKeydownEvents()}})}),require.register("views/pages/home/index",function(e,n,t){var i=n("views/base/view");t.exports=i.extend({autoRender:!0,className:"home-page",template:n("views/templates/home/index")})}),require.register("views/pages/layouts/application",function(e,n,t){var i=n("views/base/view");t.exports=i.extend({container:"#jetclips-container",id:"application-container",regions:{navigation:"nav",main:"#content-container",footer:"footer"},template:n("views/templates/layouts/application")})}),require.register("views/pages/layouts/footer",function(e,n,t){var i=n("views/base/view");t.exports=i.extend({autoRender:!0,template:n("views/templates/layouts/footer")})}),require.register("views/pages/layouts/navigation",function(e,n,t){var i=n("views/base/view");t.exports=i.extend({autoRender:!0,template:n("views/templates/layouts/navigation")})}),require.register("views/pages/videos/index",function(e,n,t){var i=n("views/base/view"),o=n("views/pages/videos/info");t.exports=i.extend({autoRender:!0,template:n("views/templates/videos/index"),listen:{"change model":"updateVideoSource"},events:{'click button[name="btn-previous"]':"previous",'click button[name="btn-next"]':"next","click button.endless-disabled":"enableEndlessMode","click button.endless-enabled":"disableEndlessMode","click button.dim-enabled":"disableDimMode","click button.dim-disabled":"enableDimMode"},container:".video-container",videoMarker:0,numberOfVideos:0,initialize:function(){var e=this;this.collection.fetch({success:function(){e.numberOfVideos=e.collection.length-1,e.setVideoModel()}}),$(document).on("keydown",function(n){n.preventDefault(),e.videoHotkeyControls(n)})},render:function(){var e=this;i.prototype.render.call(this),this.$("video").hide().fadeIn(),_.defer(function(){videojs("video-player").ready(function(){var n=this;e.resizeVideoJS(n),window.onresize=function(){e.resizeVideoJS(n)}})})},renderVideoMetadataSubview:function(){var e=new o({autoRender:!0,container:this.$("#video-subview-container"),model:this.model});this.subview("videoSubview",e)},previous:function(){this.videoMarker<=0?this.videoMarker=this.numberOfVideos:this.videoMarker-=1,this.setVideoModel()},next:function(){this.videoMarker>=this.numberOfVideos?this.videoMarker=0:this.videoMarker+=1,this.setVideoModel()},setVideoModel:function(){var e=this.collection.at(this.videoMarker);this.model.set(e.toJSON())},updateVideoSource:function(){this.$("video")[0].src=this.model.get("source"),this.renderVideoMetadataSubview()},videoHotkeyControls:function(e){var n=e.which,t=this.$("video")[0];switch(n){case 32:t.paused?t.play():t.pause();break;case 37:this.previous();break;case 39:this.next();break;default:return!1}},enableEndlessMode:function(){this.toggleEndlessModeButton();var e=videojs("video-player");this.videoEndlessModeEvent(e),this.playNext(e)},disableEndlessMode:function(){this.toggleEndlessModeButton(),videojs("video-player").off("ended")},resizeVideoJS:function(e){var n=document.getElementById(e.id()).parentElement.offsetWidth,t=9/16;e.width(n).height(n*t)},toggleEndlessModeButton:function(){this.$('button[name="endless-mode"]').toggleClass("endless-disabled endless-enabled").find("i").toggleClass("mode-enabled")},playNext:function(e){var n=this;e.currentTime()===e.duration()&&n.next()},videoEndlessModeEvent:function(e){var n=this;e.on("ended",function(){n.next()})},enableDimMode:function(){this.toggleDimModeButton(),$("#video-player, .button, button").dimBackground()},disableDimMode:function(){this.toggleDimModeButton(),$.undim()},toggleDimModeButton:function(){this.$('button[name="dim-mode"]').toggleClass("dim-disabled dim-enabled").find("i").toggleClass("mode-enabled")}})}),require.register("views/pages/videos/info",function(e,n,t){var i=n("views/base/view");t.exports=i.extend({template:n("views/templates/videos/info")})}),require.register("views/pages/videos/item",function(e,n,t){var i=n("views/base/view");t.exports=i.extend({template:n("views/templates/videos/item"),render:function(){var e=this;i.prototype.render.call(this),this.$("video").hide().fadeIn(),_.defer(function(){videojs("video-player").ready(function(){var n=this;e.resizeVideoJS(n),window.onresize=function(){e.resizeVideoJS(n)}})})},resizeVideoJS:function(e){var n=document.getElementById(e.id()).parentElement.offsetWidth,t=9/16;e.width(n).height(n*t)}})}),require.register("views/templates/home/about",function(e,n,t){var i=Handlebars.template(function(e,n,t,i,o){return this.compilerInfo=[4,">= 1.0.0"],t=this.merge(t,e.helpers),o=o||{},'<div class="container">\n  <div class="row">\n    <div class="col-lg-12">\n      <div class="page-header">\n        <h1>About us <small>...just who are you guys?</small></h1>\n      </div>\n    </div>\n  </div>\n  <div class="row">\n    <div class="col-md-10 col-md-offset-1">\n      <div class="col-md-5">\n      <img data-src="holder.js/200x180" alt="Image 1">\n        <h2>Mike Chau</h2>\n        <p>Web Application Developer</p>\n        <a href="https://github.com/mikechau" target="_blank"><small>Github</small></a> |\n        <a href="https://twitter.com/money_mikec" target="_blank"><small>Twitter</small></a> |\n        <a href="https://www.linkedin.com/in/mikechaumc/" target="_blank"><small>Linkedin</small></a>\n      </div>\n      <div class="col-md-5 col-md-offset-2">\n      <img data-src="holder.js/200x180" alt="Image 2">\n        <h2>Brian DeVries</h2>\n        <p>Front End Developer</p>\n        <a href="https://github.com/briandv" target="_blank"><small>Github</small></a> |\n        <a href="https://twitter.com/briandevries_" target="_blank"><small>Twitter</small></a> |\n        <a href="https://ca.linkedin.com/in/briandv/" target="_blank"><small>Linkedin</small></a>\n      </div>\n    </div>\n  </div>\n</div>'});"function"==typeof define&&define.amd?define([],function(){return i}):"object"==typeof t&&t&&t.exports&&(t.exports=i)}),require.register("views/templates/home/channels",function(e,n,t){var i=Handlebars.template(function(e,n,t,i,o){return this.compilerInfo=[4,">= 1.0.0"],t=this.merge(t,e.helpers),o=o||{},'<div class="channel container">\n  <div class="row">\n\n    <div class="col-md-4">\n      <a href="/channel/vine" class="channel-link">\n        <div class="vine">\n          <div class="channel-text">vine</div>\n        </div>\n      </a>\n    </div>\n\n    <div class="col-md-4">\n      <a href="/channel/instagram" class="channel-link">\n        <div class="instagram">\n          <div class="channel-text">instagram</div>\n        </div>\n      </a>\n    </div>\n\n    <div class="col-md-4">\n      <a href="/channel/youtube" class="channel-link">\n        <div class="youtube">\n          <div class="channel-text"><em>youtube</em></div>\n        </div>\n      </a>\n    </div>\n\n  </div>\n</div>\n\n<div class="content-home-body">\n  <div class="container">\n    <h2>Pick a channel and prepare for take off! <i class="fa fa-plane"></i></h2>\n    <hr>\n    <div class="row">\n      <div class="col-sm-4">\n        <img src="/images/chaplin-logo.png" alt="">\n        <h3>Chaplin.js</h3>\n        <p>The front-end portion of this application uses <a href="http://chaplinjs.org/" target="_blank">Chaplin.js</a>, it is a client-side JavaScript framework.</p>\n      </div>\n      <div class="col-sm-4">\n        <img src="/images/rails-logo.png" alt="">\n        <h3>Ruby on Rails</h3>\n        <p>The back-end portion of this application uses <a href="http://rubyonrails.org/" target="_blank">Ruby on Rails</a> as the API server.</p>\n      </div>\n      <div class="col-sm-4">\n        <img src="/images/heroku-logo.png" alt="">\n        <h3>Heroku</h3>\n        <p>This application is hosted on <a href="https://www.heroku.com/" target="_blank">Heroku</a>.</p>\n      </div>\n    </div>\n  </div>\n</div>'});"function"==typeof define&&define.amd?define([],function(){return i}):"object"==typeof t&&t&&t.exports&&(t.exports=i)}),require.register("views/templates/home/index",function(e,n,t){var i=Handlebars.template(function(e,n,t,i,o){return this.compilerInfo=[4,">= 1.0.0"],t=this.merge(t,e.helpers),o=o||{},'<div class="container-fluid">\n  <div class="jumbotron">\n    <h1>Jetclips</h1>\n  </div>\n</div>'});"function"==typeof define&&define.amd?define([],function(){return i}):"object"==typeof t&&t&&t.exports&&(t.exports=i)}),require.register("views/templates/layouts/application",function(e,n,t){var i=Handlebars.template(function(e,n,t,i,o){return this.compilerInfo=[4,">= 1.0.0"],t=this.merge(t,e.helpers),o=o||{},'<nav class="navbar navbar-default" role="navigation"></nav>\n\n<div class="content-container" id="content-container">\n</div>\n\n<footer class="wrapper"></footer>'});"function"==typeof define&&define.amd?define([],function(){return i}):"object"==typeof t&&t&&t.exports&&(t.exports=i)}),require.register("views/templates/layouts/footer",function(e,n,t){var i=Handlebars.template(function(e,n,t,i,o){return this.compilerInfo=[4,">= 1.0.0"],t=this.merge(t,e.helpers),o=o||{},'<div class="container">\n  <div class="row">\n    <div class="col-lg-12 col-md-12">\n      <p class="text-center"><small>Jetclips &copy; 2014. All rights belong to their respective owners. Built with love from <a href="http://www.starterleague.com/" target="_blank">Starter League</a> alums: <a href="https://twitter.com/money_mikec">@money_mikec</a> and <a href="https://twitter.com/fahadron">@fahadron</a>.</small></p>\n    </div>\n  </div>\n</div>'});"function"==typeof define&&define.amd?define([],function(){return i}):"object"==typeof t&&t&&t.exports&&(t.exports=i)}),require.register("views/templates/layouts/navigation",function(e,n,t){var i=Handlebars.template(function(e,n,t,i,o){return this.compilerInfo=[4,">= 1.0.0"],t=this.merge(t,e.helpers),o=o||{},'<!-- Brand and toggle get grouped for better mobile display -->\n<div class="container">\n  <div class="navbar-header">\n    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">\n      <span class="sr-only">Toggle navigation</span>\n      <span class="icon-bar"></span>\n      <span class="icon-bar"></span>\n      <span class="icon-bar"></span>\n    </button>\n    <strong><a class="navbar-brand" href="/">JetClips</a></strong>\n  </div>\n\n  <!-- Collect the nav links, forms, and other content for toggling -->\n  <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">\n    <ul class="nav navbar-nav">\n      <li><a href="channels">Channels</a>\n    </ul>\n  </div><!-- /.navbar-collapse -->\n</div>'});"function"==typeof define&&define.amd?define([],function(){return i}):"object"==typeof t&&t&&t.exports&&(t.exports=i)}),require.register("views/templates/videos/index",function(e,n,t){var i=Handlebars.template(function(e,n,t,i,o){this.compilerInfo=[4,">= 1.0.0"],t=this.merge(t,e.helpers),o=o||{};var s,a="",r="function",l=this.escapeExpression;return a+='<div class="content-video-bg">\n  <div class="container">\n    <div class="row">\n      \n      <div class="button btn-left">\n        <button class="btn" name="btn-previous">Previous</button>\n      </div>\n\n      <div class="button btn-right">\n        <button class="btn" name="btn-next">Next</button>\n      </div>\n\n      <div class="col-md-12">\n      \n        <div class="col-md-10 col-md-offset-1">\n          <div class="video-container">\n\n            <video id="video-player" class="video-js vjs-default-skin vjs-big-play-centered center-block"\n              controls preload="auto" autoplay data-setup="{}">\n              <source src="',(s=t.source)?s=s.call(n,{hash:{},data:o}):(s=n&&n.source,s=typeof s===r?s.call(n,{hash:{},data:o}):s),a+=l(s)+'" type=\'video/mp4\' />\n            </video>\n\n            <div class="row">\n              <div class="col-md-8">\n                <div id="video-subview-container"></div>\n              </div>\n              <div class="col-md-4">\n                \n                \n                <div class="video-modes pull-right">\n                  <button type="button" class="btn endless-btn endless-disabled" name="endless-mode">\n                    <i class="fa fa-refresh fa-3x"></i>\n                  </button>\n                  <button type="button" class="btn dim-btn dim-disabled" name="dim-mode">\n                    <i class="fa fa-lightbulb-o fa-3x"></i>\n                  </button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>'});"function"==typeof define&&define.amd?define([],function(){return i}):"object"==typeof t&&t&&t.exports&&(t.exports=i)}),require.register("views/templates/videos/info",function(e,n,t){var i=Handlebars.template(function(e,n,t,i,o){this.compilerInfo=[4,">= 1.0.0"],t=this.merge(t,e.helpers),o=o||{};var s,a="",r="function",l=this.escapeExpression;return a+="<h4>posted by ",(s=t.displayPostedBy)?s=s.call(n,{hash:{},data:o}):(s=n&&n.displayPostedBy,s=typeof s===r?s.call(n,{hash:{},data:o}):s),a+=l(s)+"</h4>\n<h5>",(s=t.name)?s=s.call(n,{hash:{},data:o}):(s=n&&n.name,s=typeof s===r?s.call(n,{hash:{},data:o}):s),a+=l(s)+" <br /><small>",(s=t.ts)?s=s.call(n,{hash:{},data:o}):(s=n&&n.ts,s=typeof s===r?s.call(n,{hash:{},data:o}):s),a+=l(s)+"</small></h5>"});"function"==typeof define&&define.amd?define([],function(){return i}):"object"==typeof t&&t&&t.exports&&(t.exports=i)}),require.register("views/templates/videos/item",function(e,n,t){var i=Handlebars.template(function(e,n,t,i,o){this.compilerInfo=[4,">= 1.0.0"],t=this.merge(t,e.helpers),o=o||{};var s,a="",r="function",l=this.escapeExpression;return a+='<video id="video-player" class="video-js vjs-default-skin vjs-big-play-centered center-block"\n  controls preload="auto" autoplay data-setup="{}">\n   <source src="',(s=t.source)?s=s.call(n,{hash:{},data:o}):(s=n&&n.source,s=typeof s===r?s.call(n,{hash:{},data:o}):s),a+=l(s)+'" type=\'video/mp4\' />\n</video>\n\n<div class="container-fluid">\n  <div class="row">\n    <div class="col-md-12">\n      <h1>\n        <span class="text-success">\n          Vineosaur used vine whip!\n        </span>\n      </h1>\n      <hr />\n    </div>\n  </div>\n\n  <div class="row">\n    <div class="col-md-4">\n    <h4>posted by <a href="https://www.facebook.com/BestOfVines">Best Vines</a></h4>\n    <h5>',(s=t.name)?s=s.call(n,{hash:{},data:o}):(s=n&&n.name,s=typeof s===r?s.call(n,{hash:{},data:o}):s),a+=l(s)+"<small>",(s=t.ts)?s=s.call(n,{hash:{},data:o}):(s=n&&n.ts,s=typeof s===r?s.call(n,{hash:{},data:o}):s),a+=l(s)+"</small></h5>\n    </div>\n  </div>\n</div>"});"function"==typeof define&&define.amd?define([],function(){return i}):"object"==typeof t&&t&&t.exports&&(t.exports=i)});