module Views.Buttons exposing (..)

import Html exposing (Html, button)
import Html.Attributes exposing (class)
import Html.Events exposing (onClick)
import Views.Icons exposing (close, menu)


menuButton : { active : Bool, onClick : msg } -> Html msg
menuButton model =
    button [ class "menu-btn w-30 h-30 fs-16", onClick model.onClick ]
        [ if model.active then
            close

          else
            menu
        ]


iconButton : Html msg -> String -> Html msg
iconButton iconView mods =
    button [ class ("icon-btn " ++ mods) ] [ iconView ]
