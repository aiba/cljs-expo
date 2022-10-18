(ns my-app.main
  (:require
   ["expo" :as expo]
   ["react-native" :as rn]
   [helix.core :refer [defnc $]]
   [helix.experimental.refresh :as refresh]))

(defnc root [_]
  {:helix/features {:fast-refresh true}}
  ($ rn/View {:style #js {:flex 1
                          :alignItems "center"
                          :justifyContent "center"}}
     (throw (js/Error. "my error thrown from my-app.main/root"))
     ($ rn/Text {:style #js {:fontSize 24 :color "blue"}}
        "Hello from ClojureScript")))

(defn ^:dev/after-load after-load []
  (refresh/refresh!))

(defn ^:export init []
  (js/console.log "main/init")
  (expo/registerRootComponent root)
  (refresh/inject-hook!))
