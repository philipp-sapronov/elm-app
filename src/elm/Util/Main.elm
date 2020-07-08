module Util.Main exposing (..)

import Html
import Platform.Cmd as Cmd


mapCmd msg cmd =
    Cmd.map (\a -> msg a) cmd


mapCmd2 toMsg msg cmd =
    Cmd.map (\a -> toMsg (msg a)) cmd


mapHtml msg html =
    Html.map (\a -> msg a) html


mapHtml2 toMsg msg html =
    Html.map (\a -> toMsg (msg a)) html


wrapMsg toMsg msg =
    \a -> toMsg (msg a)


toModel : a -> Maybe a -> a
toModel defaultModel model =
    Maybe.withDefault defaultModel model
