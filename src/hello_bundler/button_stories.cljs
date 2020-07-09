(ns hello-bundler.button_stories
  (:require
    [react]
    ["@storybook/react" :refer (storiesOf)]))

(->
  (storiesOf "Button CLJS" js/module)
  (.add "Normal"))

(comment
  (js/alert "Hello CLJS!")
  ())

