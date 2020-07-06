module Views.Buttons exposing (menuButton, searchButton)

import Html exposing (Html, button)
import Html.Attributes exposing (class)


menuButton : Html msg
menuButton =
    button [ class "menu-btn" ] [ Html.text "menu" ]


searchButton : Html msg
searchButton =
    button [ class "search-btn" ] [ Html.text "search" ]
