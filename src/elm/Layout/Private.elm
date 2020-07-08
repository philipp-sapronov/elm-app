module Layout.Private exposing (..)

import Html exposing (Html, div)
import Layout.Header as Header exposing (..)
import Router.Main exposing (Route(..))
import Util.Main exposing (mapHtml2)


type Msg
    = Unit
    | HeaderMsg Header.Msg
    | FooterMsg String


view : (Msg -> msg) -> Html msg -> Html msg
view toMsg content =
    div []
        [ mapHtml2 toMsg HeaderMsg Header.view
        , content
        , mapHtml2 toMsg FooterMsg footerView
        ]


type alias Model =
    { title : String }


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        _ ->
            ( model, Cmd.none )



-- view : (Msg -> b -> msg) -> Html msg -> Html msg


footerView : Html msg
footerView =
    Html.footer [] [ Html.text "footer" ]
