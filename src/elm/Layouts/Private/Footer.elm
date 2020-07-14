module Layouts.Private.Footer exposing (..)

import Html exposing (Html, div, footer, span)
import Html.Attributes exposing (class)
import Views.Buttons exposing (iconButton)
import Views.Icons as Icons exposing (fabIcon)
import Views.Links as Links



-- icon "fa-address-book"


type Msg
    = Click


view : Html Msg
view =
    div []
        [ footer [ class "lay_01 footer" ]
            [ div [ class "footer__inner" ]
                [ div [ class "tech-link" ]
                    [ fabIcon "js"
                    , span [] [ Html.text "built on" ]
                    , Links.default "https://www.google.com" "elm" ""
                    ]
                , div [ class "icon-set" ]
                    [ iconButton Icons.linkedin "w-30 h-30 fs-17"
                    , iconButton Icons.telegram "w-30 h-30 fs-18"
                    , iconButton Icons.github "w-30 h-30 fs-18"
                    ]
                ]
            ]
        ]



-- Helpers
