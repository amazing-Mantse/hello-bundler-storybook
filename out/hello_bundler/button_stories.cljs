(ns hello-bundler.button_stories
  (:require
    [react]
    ["@storybook/react" :refer (storiesOf)]
    [helix.hooks]))

;(defn button []
;  (d/div {:class "logo"}
;    "Button"))

(->
  (storiesOf "Button CLJS" js/module)
  (.add "Normal"))

(comment
  (js/alert "Hello CLJS!")
  ())

