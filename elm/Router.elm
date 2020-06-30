module Router exposing (Route(..), parse)

import Html exposing (div)
import Types exposing (RouteProps)
import Url exposing (Url)
import Url.Parser as Parser exposing ((</>), Parser, map, oneOf, top)


type Route
    = Home
    | Blog
    | Post String


getParams : Maybe Route -> RouteProps
getParams route =
    case route of
        Just Home ->
            { key = "home", path = "/", params = [], view = \_ -> div [] [ Html.text "home" ] }

        Just Blog ->
            { key = "blog", path = "/blog", params = [], view = \_ -> div [] [ Html.text "blog" ] }

        Just (Post param) ->
            { key = "post", path = "/post", params = [ ( "id", param ) ], view = \_ -> div [] [ Html.text "post" ] }

        Nothing ->
            { key = "404", path = "/404", params = [], view = \_ -> div [] [ Html.text "404" ] }


matchRoute : Parser (Route -> a) a
matchRoute =
    oneOf
        [ map Home top
        , map Blog (Parser.s "blog")
        , map Post (Parser.s "blog" </> Parser.string)
        ]


parse : Url -> RouteProps
parse url =
    Parser.parse matchRoute url |> getParams
