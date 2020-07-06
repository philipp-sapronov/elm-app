module Router.Main exposing (Route(..), parse)

import Url exposing (Url)
import Url.Parser as Parser exposing ((</>), Parser, map, oneOf, top)


type alias Path =
    String


type Route
    = Home Path
    | Blog Path
    | Post Path String
    | NotFound Path


matchRoute : Parser (Route -> a) a
matchRoute =
    oneOf
        [ map (Home "/") top
        , map (Blog "/blog") (Parser.s "blog")
        , map (Post "/post") (Parser.s "blog" </> Parser.string)
        ]


parse : Url -> Route
parse url =
    Parser.parse matchRoute url
        |> Maybe.withDefault (NotFound "/404")
