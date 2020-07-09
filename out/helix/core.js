// Compiled by ClojureScript 1.10.741 {:target :nodejs}
goog.provide('helix.core');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('helix.impl.props');
goog.require('helix.impl.classes');
goog.require('cljs_bean.core');
helix.core.node$module$react = require('react');
if((typeof Symbol !== 'undefined')){
(Symbol.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(Symbol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (sym,writer,_){
var sym__$1 = this;
return cljs.core._write.call(null,writer,["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym__$1.toString()),"\""].join(''));
}));
} else {
}
helix.core.Fragment = helix.core.node$module$react.Fragment;
helix.core.Suspense = helix.core.node$module$react.Suspense;
helix.core.create_element = helix.core.node$module$react.createElement;
helix.core.create_context = helix.core.node$module$react.createContext;
helix.core.get_react = (function helix$core$get_react(){
return helix.core.node$module$react;
});
/**
 * Create a new React element from a valid React type.
 * 
 *   Example:
 *   ```
 *   ($ MyComponent
 * "child1"
 * ($ "span"
 *   {:style {:color "green"}}
 *   "child2" ))
 *   ```
 */
helix.core.$ = (function helix$core$$(var_args){
var args__4736__auto__ = [];
var len__4730__auto___905 = arguments.length;
var i__4731__auto___906 = (0);
while(true){
if((i__4731__auto___906 < len__4730__auto___905)){
args__4736__auto__.push((arguments[i__4731__auto___906]));

var G__907 = (i__4731__auto___906 + (1));
i__4731__auto___906 = G__907;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return helix.core.$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

(helix.core.$.cljs$core$IFn$_invoke$arity$variadic = (function (type,args){
var _QMARK_p = cljs.core.first.call(null,args);
var _QMARK_c = cljs.core.rest.call(null,args);
var native_QMARK_ = (function (){var or__4120__auto__ = (type instanceof cljs.core.Keyword);
if(or__4120__auto__){
return or__4120__auto__;
} else {
var or__4120__auto____$1 = typeof type === 'string';
if(or__4120__auto____$1){
return or__4120__auto____$1;
} else {
return new cljs.core.Keyword(null,"native","native",-613060878).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,type));
}
}
})();
var type_SINGLEQUOTE_ = (((type instanceof cljs.core.Keyword))?cljs.core.name.call(null,type):type);
if(cljs.core.map_QMARK_.call(null,_QMARK_p)){
return cljs.core.apply.call(null,helix.core.create_element,type_SINGLEQUOTE_,(cljs.core.truth_(native_QMARK_)?helix.impl.props._native_props.call(null,_QMARK_p):helix.impl.props._props.call(null,_QMARK_p)),_QMARK_c);
} else {
return cljs.core.apply.call(null,helix.core.create_element,type_SINGLEQUOTE_,null,args);
}
}));

(helix.core.$.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(helix.core.$.cljs$lang$applyTo = (function (seq903){
var G__904 = cljs.core.first.call(null,seq903);
var seq903__$1 = cljs.core.next.call(null,seq903);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__904,seq903__$1);
}));

/**
 * Dynamically create a new React element from a valid React type.
 * 
 *   `$` can typically be faster, because it will statically process the arguments
 *   at macro-time if possible.
 * 
 *   Example:
 *   ```
 *   ($$ MyComponent
 * "child1"
 * ($$ "span"
 *   {:style {:color "green"}}
 *   "child2" ))
 *   ```
 */
helix.core.$$ = helix.core.$;

/**
 * @interface
 */
helix.core.IExtractType = function(){};

var helix$core$IExtractType$_type$dyn_908 = (function (factory){
var x__4422__auto__ = (((factory == null))?null:factory);
var m__4423__auto__ = (helix.core._type[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return m__4423__auto__.call(null,factory);
} else {
var m__4420__auto__ = (helix.core._type["_"]);
if((!((m__4420__auto__ == null)))){
return m__4420__auto__.call(null,factory);
} else {
throw cljs.core.missing_protocol.call(null,"IExtractType.-type",factory);
}
}
});
/**
 * Extracts the underlying type from the factory function.
 */
helix.core._type = (function helix$core$_type(factory){
if((((!((factory == null)))) && ((!((factory.helix$core$IExtractType$_type$arity$1 == null)))))){
return factory.helix$core$IExtractType$_type$arity$1(factory);
} else {
return helix$core$IExtractType$_type$dyn_908.call(null,factory);
}
});

helix.core.type = (function helix$core$type(f){
return helix.core._type.call(null,f);
});
/**
 * Creates a factory function for a React component
 */
helix.core.factory = (function helix$core$factory(type){
var x909 = (function() { 
var helix$core$factory_$_factory__delegate = function (args){
return cljs.core.apply.call(null,helix.core.$,type,args);
};
var helix$core$factory_$_factory = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__910__i = 0, G__910__a = new Array(arguments.length -  0);
while (G__910__i < G__910__a.length) {G__910__a[G__910__i] = arguments[G__910__i + 0]; ++G__910__i;}
  args = new cljs.core.IndexedSeq(G__910__a,0,null);
} 
return helix$core$factory_$_factory__delegate.call(this,args);};
helix$core$factory_$_factory.cljs$lang$maxFixedArity = 0;
helix$core$factory_$_factory.cljs$lang$applyTo = (function (arglist__911){
var args = cljs.core.seq(arglist__911);
return helix$core$factory_$_factory__delegate(args);
});
helix$core$factory_$_factory.cljs$core$IFn$_invoke$arity$variadic = helix$core$factory_$_factory__delegate;
return helix$core$factory_$_factory;
})()
;
(x909.helix$core$IExtractType$ = cljs.core.PROTOCOL_SENTINEL);

(x909.helix$core$IExtractType$_type$arity$1 = (function (_){
var ___$1 = this;
return type;
}));

return x909;
});
helix.core.cljs_factory = (function helix$core$cljs_factory(type){
var x912 = (function() { 
var helix$core$cljs_factory_$_factory__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
return cljs.core.apply.call(null,helix.core.node$module$react.createElement,type,({"helix/props": cljs.core.first.call(null,args)}),cljs.core.rest.call(null,args));
} else {
return cljs.core.apply.call(null,helix.core.node$module$react.createElement,type,({}),args);
}
};
var helix$core$cljs_factory_$_factory = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__913__i = 0, G__913__a = new Array(arguments.length -  0);
while (G__913__i < G__913__a.length) {G__913__a[G__913__i] = arguments[G__913__i + 0]; ++G__913__i;}
  args = new cljs.core.IndexedSeq(G__913__a,0,null);
} 
return helix$core$cljs_factory_$_factory__delegate.call(this,args);};
helix$core$cljs_factory_$_factory.cljs$lang$maxFixedArity = 0;
helix$core$cljs_factory_$_factory.cljs$lang$applyTo = (function (arglist__914){
var args = cljs.core.seq(arglist__914);
return helix$core$cljs_factory_$_factory__delegate(args);
});
helix$core$cljs_factory_$_factory.cljs$core$IFn$_invoke$arity$variadic = helix$core$cljs_factory_$_factory__delegate;
return helix$core$cljs_factory_$_factory;
})()
;
(x912.helix$core$IExtractType$ = cljs.core.PROTOCOL_SENTINEL);

(x912.helix$core$IExtractType$_type$arity$1 = (function (_){
var ___$1 = this;
return type;
}));

return x912;
});
helix.core.extract_cljs_props = (function helix$core$extract_cljs_props(o){
if(((goog.DEBUG) && (((cljs.core.map_QMARK_.call(null,o)) || ((o == null)))))){
throw cljs.core.ex_info.call(null,"Props received were a map. This probably means you're calling your component as a function.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"props","props",453281727),o], null));
} else {
}

var temp__5733__auto__ = goog.object.get(o,"helix/props");
if(cljs.core.truth_(temp__5733__auto__)){
var props = temp__5733__auto__;
return cljs.core.assoc.call(null,props,new cljs.core.Keyword(null,"children","children",-940561982),goog.object.get(o,"children"));
} else {
return cljs_bean.core.bean.call(null,o);
}
});
helix.core.create_component = (function helix$core$create_component(spec,statics){
var render = spec.render;
var render_SINGLEQUOTE_ = (function (this$){
return render.call(null,this$,helix.core.extract_cljs_props.call(null,this$.props),this$.state);
});
goog.object.set(spec,"render",render_SINGLEQUOTE_);

return helix.impl.classes.createComponent(helix.core.node$module$react.Component,spec,statics);
});
/**
 * Registers a component with the React Fresh runtime.
 *   `type` is the component function, and `id` is the unique ID assigned to it
 *   (e.g. component name) for cache invalidation.
 */
helix.core.register_BANG_ = (function helix$core$register_BANG_(type,id){
if((!((window.$$Register$$ == null)))){
return window.$$Register$$(type,id);
} else {
return null;
}
});
helix.core.signature_BANG_ = (function helix$core$signature_BANG_(){
if((!((window.$$Signature$$ == null)))){
return window.$$Signature$$();
} else {
return false;
}
});

//# sourceMappingURL=core.js.map
