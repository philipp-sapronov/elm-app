module Utils.Main exposing (..)

import Html
import Platform.Cmd as Cmd
import Process
import Task


mapCmd msg cmd =
    Cmd.map (\a -> msg a) cmd


mapHtml msg html =
    Html.map (\a -> msg a) html


wrapMsg toMsg msg =
    \a -> toMsg (msg a)


mapUpdate mainMsg mainModel ( subModel, subCmd ) =
    ( mainModel subModel, mapCmd mainMsg subCmd )


nextTick : msg -> Cmd msg
nextTick msg =
    Process.sleep 0
        |> Task.perform (\_ -> msg)
