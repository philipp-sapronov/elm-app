module Layouts.Private.Nav exposing (..)

import Html exposing (Html, li, nav, ul)
import Html.Attributes exposing (class)
import Views.Buttons exposing (iconButton, menuButton, searchButton)
import Views.Links as Links


type Msg
    = Click


view : Html Msg
view =
    nav [ class "navbar" ]
        [ ul [ class "menu" ]
            (List.map menuItem links)
        ]


menuItem { text, href } =
    li [ class "menu-item" ] [ Links.tag href text "" ]



-- Helpers


links =
    [ { text = "#fp", href = "/fp" }
    , { text = "#react", href = "/react" }
    , { text = "#ts", href = "/ts" }
    , { text = "#js", href = "/js" }
    , { text = "#elm", href = "/elm" }
    ]
