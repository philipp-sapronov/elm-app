module Views.Icons exposing (..)

import Html exposing (Html, header, i)
import Html.Attributes exposing (attribute, class)



-- <i class="fa fa-address-book" aria-hidden="true"></i>
-- <i class="fab fa-github"></i>


faIcon : String -> Html msg
faIcon className =
    i [ class ("fa fa-" ++ className), attribute "aria-hidden" "true" ] []


fabIcon : String -> Html msg
fabIcon className =
    i [ class ("fab fa-" ++ className), attribute "aria-hidden" "true" ] []


fasIcon : String -> Html msg
fasIcon className =
    i [ class ("fas fa-" ++ className), attribute "aria-hidden" "true" ] []


github =
    fabIcon "github"


telegram =
    fabIcon "telegram-plane"


linkedin =
    fabIcon "linkedin-in"


search =
    faIcon "search"


menu =
    fasIcon "stream"


close =
    faIcon "times"
