// Compiled by ClojureScript 1.10.741 {:target :nodejs}
goog.provide('helix.hooks');
goog.require('cljs.core');
goog.require('goog.object');
helix.hooks.node$module$react = require('react');
helix.hooks.raw_use_effect = helix.hooks.node$module$react.useEffect;

helix.hooks.raw_use_layout_effect = helix.hooks.node$module$react.useLayoutEffect;

helix.hooks.raw_use_memo = helix.hooks.node$module$react.useMemo;

helix.hooks.raw_use_callback = helix.hooks.node$module$react.useCallback;

helix.hooks.raw_use_imperative_handle = helix.hooks.node$module$react.useImperativeHandle;
/**
 * Like `react/useState`, but the update function returned can be used similar
 *   to `swap!`.
 * 
 *   Example:
 *   ```
 *   (let [[state set-state] (use-state {:count 0})]
 * ;; ...
 * (set-state update :count inc))
 *   ```
 */
helix.hooks.use_state = (function helix$hooks$use_state(initial){
var vec__966 = helix.hooks.node$module$react.useState(initial);
var v = cljs.core.nth.call(null,vec__966,(0),null);
var u = cljs.core.nth.call(null,vec__966,(1),null);
var updater = helix.hooks.node$module$react.useCallback((function() {
var helix$hooks$use_state_$_updater = null;
var helix$hooks$use_state_$_updater__1 = (function (x){
return u.call(null,x);
});
var helix$hooks$use_state_$_updater__2 = (function() { 
var G__969__delegate = function (f,xs){
return helix$hooks$use_state_$_updater.call(null,(function helix$hooks$use_state_$_updater_$_spread_updater(x){
return cljs.core.apply.call(null,f,x,xs);
}));
};
var G__969 = function (f,var_args){
var xs = null;
if (arguments.length > 1) {
var G__970__i = 0, G__970__a = new Array(arguments.length -  1);
while (G__970__i < G__970__a.length) {G__970__a[G__970__i] = arguments[G__970__i + 1]; ++G__970__i;}
  xs = new cljs.core.IndexedSeq(G__970__a,0,null);
} 
return G__969__delegate.call(this,f,xs);};
G__969.cljs$lang$maxFixedArity = 1;
G__969.cljs$lang$applyTo = (function (arglist__971){
var f = cljs.core.first(arglist__971);
var xs = cljs.core.rest(arglist__971);
return G__969__delegate(f,xs);
});
G__969.cljs$core$IFn$_invoke$arity$variadic = G__969__delegate;
return G__969;
})()
;
helix$hooks$use_state_$_updater = function(f,var_args){
var xs = var_args;
switch(arguments.length){
case 1:
return helix$hooks$use_state_$_updater__1.call(this,f);
default:
var G__972 = null;
if (arguments.length > 1) {
var G__973__i = 0, G__973__a = new Array(arguments.length -  1);
while (G__973__i < G__973__a.length) {G__973__a[G__973__i] = arguments[G__973__i + 1]; ++G__973__i;}
G__972 = new cljs.core.IndexedSeq(G__973__a,0,null);
}
return helix$hooks$use_state_$_updater__2.cljs$core$IFn$_invoke$arity$variadic(f, G__972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
helix$hooks$use_state_$_updater.cljs$lang$maxFixedArity = 1;
helix$hooks$use_state_$_updater.cljs$lang$applyTo = helix$hooks$use_state_$_updater__2.cljs$lang$applyTo;
helix$hooks$use_state_$_updater.cljs$core$IFn$_invoke$arity$1 = helix$hooks$use_state_$_updater__1;
helix$hooks$use_state_$_updater.cljs$core$IFn$_invoke$arity$variadic = helix$hooks$use_state_$_updater__2.cljs$core$IFn$_invoke$arity$variadic;
return helix$hooks$use_state_$_updater;
})()
,[]);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,updater], null);
});
/**
 * Just like react/useRef. Supports accessing the "current" property via
 *   dereference (@) and updating the "current" property via `reset!` and `swap!`
 */
helix.hooks.use_ref = (function helix$hooks$use_ref(x){
var ref = helix.hooks.node$module$react.useRef(null);
if((ref.current == null)){
(ref.current = (function (){var x974 = ({"current": x});
(x974.cljs$core$IDeref$ = cljs.core.PROTOCOL_SENTINEL);

(x974.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.current;
}));

(x974.cljs$core$IReset$ = cljs.core.PROTOCOL_SENTINEL);

(x974.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,v){
var this$__$1 = this;
return goog.object.set(this$__$1,"current",v);
}));

(x974.cljs$core$ISwap$ = cljs.core.PROTOCOL_SENTINEL);

(x974.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var this$__$1 = this;
return goog.object.set(this$__$1,"current",f.call(null,this$__$1.current));
}));

(x974.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var this$__$1 = this;
return goog.object.set(this$__$1,"current",f.call(null,this$__$1.current,a));
}));

(x974.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var this$__$1 = this;
return goog.object.set(this$__$1,"current",f.call(null,this$__$1.current,a,b));
}));

(x974.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var this$__$1 = this;
return goog.object.set(this$__$1,"current",cljs.core.apply.call(null,f,this$__$1.current,a,b,xs));
}));

return x974;
})());
} else {
}

return ref.current;
});
/**
 * Just react/useReducer.
 */
helix.hooks.use_reducer = (function helix$hooks$use_reducer(var_args){
var G__976 = arguments.length;
switch (G__976) {
case 2:
return helix.hooks.use_reducer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return helix.hooks.use_reducer.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(helix.hooks.use_reducer.cljs$core$IFn$_invoke$arity$2 = (function (reducer,init_state){
return helix.hooks.use_reducer.call(null,reducer,init_state,undefined);
}));

(helix.hooks.use_reducer.cljs$core$IFn$_invoke$arity$3 = (function (reducer,init_state,init){
return helix.hooks.node$module$react.useReducer(helix.hooks.node$module$react.useMemo((function (){
if((((!(cljs.core.fn_QMARK_.call(null,reducer)))) && (cljs.core.ifn_QMARK_.call(null,reducer)))){
return (function helix$hooks$wrap_ifn(state,action){
return reducer.call(null,state,action);
});
} else {
return reducer;
}
}),[reducer]),init_state,init);
}));

(helix.hooks.use_reducer.cljs$lang$maxFixedArity = 3);

/**
 * Just react/useContext
 */
helix.hooks.use_context = helix.hooks.node$module$react.useContext;
helix.hooks.wrap_fx = (function helix$hooks$wrap_fx(f){
return (function helix$hooks$wrap_fx_$_wrap_fx_return(){
var x = f.call(null);
if(cljs.core.fn_QMARK_.call(null,x)){
return x;
} else {
return undefined;
}
});
});
helix.hooks.simple_body_QMARK_ = (function helix$hooks$simple_body_QMARK_(body){
return ((cljs.core._EQ_.call(null,cljs.core.count.call(null,body),(1))) && ((cljs.core.first.call(null,body) instanceof cljs.core.Symbol)));
});
helix.hooks.determine_deps = (function helix$hooks$determine_deps(deps){
var G__978 = deps;
var G__978__$1 = (((G__978 instanceof cljs.core.Keyword))?G__978.fqn:null);
switch (G__978__$1) {
case "once":
return [];

break;
case "always":
return undefined;

break;
case "auto-deps":
throw (new Error("Cannot use :auto-deps outside of macro."));

break;
default:
return cljs.core.to_array.call(null,deps);

}
});
helix.hooks.use_effect_STAR_ = (function helix$hooks$use_effect_STAR_(var_args){
var G__981 = arguments.length;
switch (G__981) {
case 1:
return helix.hooks.use_effect_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return helix.hooks.use_effect_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(helix.hooks.use_effect_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (f){
return helix.hooks.node$module$react.useEffect(helix.hooks.wrap_fx.call(null,f));
}));

(helix.hooks.use_effect_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (f,deps){
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core._EQ_.call(null,deps,new cljs.core.Keyword(null,"auto-deps","auto-deps",-2124919365))){
throw (new Error("Can't use `:auto-deps` with `use-effect*`; use `use-effect` macro for that"));
} else {
}
} else {
}

return helix.hooks.node$module$react.useEffect(helix.hooks.wrap_fx.call(null,f),cljs.core.to_array.call(null,deps));
}));

(helix.hooks.use_effect_STAR_.cljs$lang$maxFixedArity = 2);

helix.hooks.use_layout_effect_STAR_ = (function helix$hooks$use_layout_effect_STAR_(var_args){
var G__984 = arguments.length;
switch (G__984) {
case 1:
return helix.hooks.use_layout_effect_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return helix.hooks.use_layout_effect_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(helix.hooks.use_layout_effect_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (f){
return helix.hooks.node$module$react.useLayoutEffect(helix.hooks.wrap_fx.call(null,f));
}));

(helix.hooks.use_layout_effect_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (f,deps){
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core._EQ_.call(null,deps,new cljs.core.Keyword(null,"auto-deps","auto-deps",-2124919365))){
throw (new Error("Can't use `:auto-deps` with `use-layout-effect*`; use `use-layout-effect` macro for that"));
} else {
}
} else {
}

return helix.hooks.node$module$react.useLayoutEffect(helix.hooks.wrap_fx.call(null,f),cljs.core.to_array.call(null,deps));
}));

(helix.hooks.use_layout_effect_STAR_.cljs$lang$maxFixedArity = 2);

helix.hooks.use_memo_STAR_ = (function helix$hooks$use_memo_STAR_(var_args){
var G__987 = arguments.length;
switch (G__987) {
case 1:
return helix.hooks.use_memo_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return helix.hooks.use_memo_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(helix.hooks.use_memo_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (f){
return helix.hooks.node$module$react.useMemo(f);
}));

(helix.hooks.use_memo_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (f,deps){
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core._EQ_.call(null,deps,new cljs.core.Keyword(null,"auto-deps","auto-deps",-2124919365))){
throw (new Error("Can't use `:auto-deps` with `use-memo*`; use `use-memo` macro for that"));
} else {
}
} else {
}

return helix.hooks.node$module$react.useMemo(f,cljs.core.to_array.call(null,deps));
}));

(helix.hooks.use_memo_STAR_.cljs$lang$maxFixedArity = 2);

helix.hooks.use_callback_STAR_ = (function helix$hooks$use_callback_STAR_(var_args){
var G__990 = arguments.length;
switch (G__990) {
case 1:
return helix.hooks.use_callback_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return helix.hooks.use_callback_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(helix.hooks.use_callback_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (f){
return helix.hooks.node$module$react.useCallback(f);
}));

(helix.hooks.use_callback_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (f,deps){
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core._EQ_.call(null,deps,new cljs.core.Keyword(null,"auto-deps","auto-deps",-2124919365))){
throw (new Error("Can't use `:auto-deps` with `use-callback*`; use `use-callback` macro for that"));
} else {
}
} else {
}

return helix.hooks.node$module$react.useCallback(f,cljs.core.to_array.call(null,deps));
}));

(helix.hooks.use_callback_STAR_.cljs$lang$maxFixedArity = 2);

helix.hooks.use_imperative_handle_STAR_ = (function helix$hooks$use_imperative_handle_STAR_(var_args){
var G__993 = arguments.length;
switch (G__993) {
case 2:
return helix.hooks.use_imperative_handle_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return helix.hooks.use_imperative_handle_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(helix.hooks.use_imperative_handle_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (ref,f){
return helix.hooks.node$module$react.useImperativeHandle(ref,f);
}));

(helix.hooks.use_imperative_handle_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (ref,f,deps){
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core._EQ_.call(null,deps,new cljs.core.Keyword(null,"auto-deps","auto-deps",-2124919365))){
throw (new Error("Can't use `:auto-deps` with `use-imperative-handle*`; use `use-imperative-handle` macro for that"));
} else {
}
} else {
}

return helix.hooks.node$module$react.useImperativeHandle(ref,f,cljs.core.to_array.call(null,deps));
}));

(helix.hooks.use_imperative_handle_STAR_.cljs$lang$maxFixedArity = 3);

/**
 * just react/useDebugValue
 */
helix.hooks.use_debug_value = helix.hooks.node$module$react.debugValue;

//# sourceMappingURL=hooks.js.map
