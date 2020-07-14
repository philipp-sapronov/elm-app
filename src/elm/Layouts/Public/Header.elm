module Layouts.Public.Header exposing (..)

import Html exposing (Html, div, header)
import Html.Attributes exposing (attribute, class)
import Html.Events exposing (onClick)
import Utils.Main exposing (mapHtml)
import Views.Icons as Icons
import Views.Logo exposing (logo)



-- icon "fa-address-book"


type Msg
    = Click


view : Html Msg
view =
    header [ class "header" ]
        [ div [ class "header__inner" ]
            [ div [ class "menu-btn__wrapper" ]
                []
            , div [ class "logo__wrapper", onClick Click ]
                [ logo
                ]
            , div [ class "search__wrapper" ] []
            ]
        ]
