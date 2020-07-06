module Views.Logo exposing (logo)

import Html exposing (Html, div, text)
import Html.Attributes exposing (class)


logo : Html msg
logo =
    div [ class "logo" ] [ text "philipp :: sapronov" ]
