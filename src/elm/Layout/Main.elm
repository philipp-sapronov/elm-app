module Layout.Main exposing (..)

import Html exposing (Html, div)
import Layout.Header as Header exposing (..)
import Router.Main exposing (Route(..))
import Util.Main exposing (..)


type alias Model =
    { title : String }


type Msg
    = Unit


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        _ ->
            ( model, Cmd.none )


view : Html msg -> Html msg
view content =
    div []
        [ Header.view
        , content
        , footerView
        ]


footerView : Html msg
footerView =
    Html.footer [] [ Html.text "footer" ]
