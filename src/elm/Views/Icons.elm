module Views.Icons exposing (icon)

import Html exposing (Html, header, i)
import Html.Attributes exposing (attribute, class)



-- <i class="fa fa-address-book" aria-hidden="true"></i>


icon : String -> Html msg
icon className =
    i [ class ("fa " ++ className), attribute "aria-hidden" "true" ] []
