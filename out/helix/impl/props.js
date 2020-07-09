// Compiled by ClojureScript 1.10.741 {:target :nodejs}
goog.provide('helix.impl.props');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs_bean.core');
goog.require('goog.object');
helix.impl.props.aria_data_special_case_re = /^(aria-|data-).*/;
helix.impl.props.camel_regexp = RegExp("-(\\w)","g");
/**
 * Returns camel case version of the string, e.g. "http-equiv" becomes "httpEquiv".
 */
helix.impl.props.camel_case = (function helix$impl$props$camel_case(s){
if((((s instanceof cljs.core.Keyword)) || (typeof s === 'string') || ((s instanceof cljs.core.Symbol)))){
var name_str = cljs.core.name.call(null,s);
if((!((name_str.match(helix.impl.props.aria_data_special_case_re) == null)))){
return name_str;
} else {
if(cljs.core._EQ_.call(null,name_str.substring((0),(1)),"'")){
return name_str.substring((1));
} else {
return name_str.replace(helix.impl.props.camel_regexp,(function (p1__679_SHARP_,p2__678_SHARP_){
return p2__678_SHARP_.toUpperCase();
}));

}
}
} else {
return s;
}
});
helix.impl.props.kw__GT_str = (function helix$impl$props$kw__GT_str(kw){
var kw_ns = cljs.core.namespace.call(null,kw);
var kw_name = cljs.core.name.call(null,kw);
if((kw_ns == null)){
return kw_name;
} else {
return [kw_ns,"/",kw_name].join('');
}
});
helix.impl.props.set_obj = (function helix$impl$props$set_obj(o,k,v){
var G__680 = o;
goog.object.set(G__680,k,v);

return G__680;
});
helix.impl.props.__GT_js = (function helix$impl$props$__GT_js(x){
return cljs.core.clj__GT_js.call(null,x,new cljs.core.Keyword(null,"keyword-fn","keyword-fn",-64566675),cljs.core.comp.call(null,helix.impl.props.camel_case,cljs.core.name));
});
helix.impl.props.primitive_obj = (function helix$impl$props$primitive_obj(var_args){
var G__682 = arguments.length;
switch (G__682) {
case 0:
return helix.impl.props.primitive_obj.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return helix.impl.props.primitive_obj.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return helix.impl.props.primitive_obj.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(helix.impl.props.primitive_obj.cljs$core$IFn$_invoke$arity$0 = (function (){
return ({});
}));

(helix.impl.props.primitive_obj.cljs$core$IFn$_invoke$arity$1 = (function (m){
return helix.impl.props.primitive_obj.call(null,m,helix.impl.props.primitive_obj.call(null));
}));

(helix.impl.props.primitive_obj.cljs$core$IFn$_invoke$arity$2 = (function (m,o){
while(true){
if(cljs.core.seq.call(null,m)){
var G__684 = cljs.core.rest.call(null,m);
var G__685 = (function (){var entry = cljs.core.first.call(null,m);
return helix.impl.props.set_obj.call(null,o,helix.impl.props.camel_case.call(null,helix.impl.props.kw__GT_str.call(null,cljs.core.key.call(null,entry))),helix.impl.props.__GT_js.call(null,cljs.core.val.call(null,entry)));
})();
m = G__684;
o = G__685;
continue;
} else {
return o;
}
break;
}
}));

(helix.impl.props.primitive_obj.cljs$lang$maxFixedArity = 2);

helix.impl.props.into_js_array = (function helix$impl$props$into_js_array(aseq){
return cljs.core.into_array.call(null,aseq);
});
helix.impl.props.merge_obj = (function helix$impl$props$merge_obj(o1,o2){
return Object.assign(o1,o2);
});
helix.impl.props._native_props = (function helix$impl$props$_native_props(var_args){
var G__687 = arguments.length;
switch (G__687) {
case 1:
return helix.impl.props._native_props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return helix.impl.props._native_props.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(helix.impl.props._native_props.cljs$core$IFn$_invoke$arity$1 = (function (m){
return helix.impl.props._native_props.call(null,m,helix.impl.props.primitive_obj.call(null));
}));

(helix.impl.props._native_props.cljs$core$IFn$_invoke$arity$2 = (function (m,o){
while(true){
if(cljs.core.seq.call(null,m)){
var G__690 = cljs.core.rest.call(null,m);
var G__691 = (function (){var entry = cljs.core.first.call(null,m);
var k = cljs.core.key.call(null,entry);
var v = cljs.core.val.call(null,entry);
var G__688 = k;
var G__688__$1 = (((G__688 instanceof cljs.core.Keyword))?G__688.fqn:null);
switch (G__688__$1) {
case "class":
return helix.impl.props.set_obj.call(null,o,"className",v);

break;
case "for":
return helix.impl.props.set_obj.call(null,o,"htmlFor",v);

break;
case "style":
return helix.impl.props.set_obj.call(null,o,"style",((cljs.core.vector_QMARK_.call(null,v))?helix.impl.props.into_js_array.call(null,cljs.core.map.call(null,helix.impl.props.primitive_obj,v)):helix.impl.props.primitive_obj.call(null,v)));

break;
default:
return helix.impl.props.set_obj.call(null,o,helix.impl.props.camel_case.call(null,helix.impl.props.kw__GT_str.call(null,k)),v);

}
})();
m = G__690;
o = G__691;
continue;
} else {
return o;
}
break;
}
}));

(helix.impl.props._native_props.cljs$lang$maxFixedArity = 2);

var ret__4779__auto___693 = helix.impl.props.native_props = (function helix$impl$props$native_props(_AMPERSAND_form,_AMPERSAND_env,m){
return helix.impl.props._native_props.call(null,m);
});
(helix.impl.props.native_props.cljs$lang$macro = true);

helix.impl.props._props = (function helix$impl$props$_props(var_args){
var G__695 = arguments.length;
switch (G__695) {
case 1:
return helix.impl.props._props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return helix.impl.props._props.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(helix.impl.props._props.cljs$core$IFn$_invoke$arity$1 = (function (m){
var temp__5733__auto__ = m.call(null,new cljs.core.Symbol(null,"&","&",-2144855648,null));
if(cljs.core.truth_(temp__5733__auto__)){
var spread_sym = temp__5733__auto__;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("helix.impl.props","merge-obj","helix.impl.props/merge-obj",-1237733234,null),null,(1),null)),(new cljs.core.List(null,helix.impl.props._props.call(null,cljs.core.dissoc.call(null,m,new cljs.core.Symbol(null,"&","&",-2144855648,null)),helix.impl.props.primitive_obj.call(null)),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("helix.impl.props","-props","helix.impl.props/-props",-819122824,null),null,(1),null)),(new cljs.core.List(null,spread_sym,null,(1),null))))),null,(1),null)))));
} else {
return helix.impl.props._props.call(null,m,helix.impl.props.primitive_obj.call(null));
}
}));

(helix.impl.props._props.cljs$core$IFn$_invoke$arity$2 = (function (m,o){
while(true){
if(cljs.core.seq.call(null,m)){
var G__697 = cljs.core.rest.call(null,m);
var G__698 = (function (){var entry = cljs.core.first.call(null,m);
return helix.impl.props.set_obj.call(null,o,helix.impl.props.kw__GT_str.call(null,cljs.core.key.call(null,entry)),cljs.core.val.call(null,entry));
})();
m = G__697;
o = G__698;
continue;
} else {
return o;
}
break;
}
}));

(helix.impl.props._props.cljs$lang$maxFixedArity = 2);

var ret__4779__auto___699 = helix.impl.props.props = (function helix$impl$props$props(_AMPERSAND_form,_AMPERSAND_env,m){
return helix.impl.props._props.call(null,m);
});
(helix.impl.props.props.cljs$lang$macro = true);


//# sourceMappingURL=props.js.map
