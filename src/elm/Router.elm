module Router exposing (Route(..), parse)

import Url exposing (Url)
import Url.Parser as Parser exposing ((</>), Parser, map, oneOf, top)



{-
   Router
   should:
   1. manage routes
-}


type Route
    = Home
    | Blog
    | Post String
    | NotFound


matchRoute : Parser (Route -> a) a
matchRoute =
    oneOf
        [ map Home top
        , map Blog (Parser.s "blog")
        , map Post (Parser.s "blog" </> Parser.string)
        ]


parse : Url -> Route
parse url =
    Parser.parse matchRoute url
        |> Maybe.withDefault NotFound
