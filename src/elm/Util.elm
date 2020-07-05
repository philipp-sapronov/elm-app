module Util exposing (..)

import Html
import Platform.Cmd as Cmd


mapCmd msg cmd =
    Cmd.map (\a -> msg a) cmd


mapHtml msg html =
    Html.map (\a -> msg a) html


toModel : a -> Maybe a -> a
toModel defaultModel model =
    Maybe.withDefault defaultModel model
