module Util.Main exposing (..)

import Html
import Platform.Cmd as Cmd


mapCmd msg cmd =
    Cmd.map (\a -> msg a) cmd


mapHtml msg html =
    Html.map (\a -> msg a) html


wrapMsg toMsg msg =
    \a -> toMsg (msg a)


mapUpdate mainMsg mainModel ( subModel, subCmd ) =
    ( mainModel subModel, mapCmd mainMsg subCmd )


toModel : a -> Maybe a -> a
toModel defaultModel model =
    Maybe.withDefault defaultModel model
