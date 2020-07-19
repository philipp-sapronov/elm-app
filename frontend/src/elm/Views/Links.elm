module Views.Links exposing (..)

import Html
import Html.Attributes as Attrs


default : String -> String -> String -> Html.Html msg
default href text mods =
    Html.a [ Attrs.class mods, Attrs.class "link", Attrs.href href ] [ Html.text text ]


tag : String -> String -> String -> Html.Html msg
tag href text mods =
    Html.a [ Attrs.class mods, Attrs.class "tag", Attrs.href href ] [ Html.text text ]
