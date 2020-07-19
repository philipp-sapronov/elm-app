module Pages.Home.Posts exposing (..)

import Html exposing (Html, a, article, div, h3, header, p, span, text)
import Html.Attributes exposing (class, href)
import Views.Links as Links



-- TYPES


type alias Article =
    { title : String
    , createdAt : String
    , article : String
    , length : Int
    , techList : List String
    , slug : String
    }



-- VIEW


postView : Article -> Html msg
postView model =
    let
        link =
            "/post/" ++ model.slug
    in
    article [ class "post" ]
        [ header []
            ([ h3 [ class "heading" ]
                [ a [ href link ] [ text model.title ]
                ]
             , span [ class "info" ] [ text (model.createdAt ++ " | " ++ "5 minutes read" ++ " | ") ]
             ]
                ++ techsView model.techList
            )
        , p [ class "text" ] [ text model.article ]
        ]


techsView : List String -> List (Html msg)
techsView list =
    List.map (\item -> span [] [ text item ]) list


view : List Article -> Html msg
view list =
    div [] (List.map postView list)


model_ =
    { title = "Title of article"
    , createdAt = "date"
    , article = lorem
    , techList = [ "js", "ts" ]
    , slug = "slug"
    , length = String.length lorem
    }


articles =
    [ model_, model_, model_, model_, model_ ]


lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
