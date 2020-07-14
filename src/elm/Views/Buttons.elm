module Views.Buttons exposing (..)

import Html exposing (Html, button, div)
import Html.Attributes exposing (class, classList, placeholder, value)
import Html.Events exposing (onClick, onInput)
import Views.Icons exposing (close, menu, search)


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


type alias SearchModel msg =
    { active : Bool
    , value : String
    , onInput : String -> msg
    , onClick : msg
    }


searchButton : SearchModel msg -> Html msg
searchButton model =
    div [ class "header-search" ]
        [ Html.input
            [ classList [ ( "input", True ), ( "active", model.active ) ]
            , placeholder "I'm looking for..."
            , onInput model.onInput
            , value model.value
            ]
            []
        , button [ class "icon-btn w-30 h-30 fs-16", onClick model.onClick ] [ search ]
        ]
