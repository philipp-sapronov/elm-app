module Layout.Header exposing (..)

import Html exposing (Html, div, header)
import Html.Attributes exposing (attribute, class)
import Views.Buttons exposing (menuButton, searchButton)
import Views.Icons exposing (icon)
import Views.Logo exposing (logo)



-- icon "fa-address-book"


view : Html msg
view =
    header [ class "header" ]
        [ div [ class "header__inner" ]
            [ div [ class "menu-btn__wrapper" ]
                [ menuButton
                ]
            , div [ class "logo__wrapper" ]
                [ logo
                ]
            , div [ class "search__wrapper" ] [ searchButton ]
            ]
        ]
