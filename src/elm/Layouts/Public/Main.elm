module Layouts.Public.Main exposing (..)

import Html exposing (Html, div)
import Layouts.Public.Header as Header exposing (..)
import Router exposing (Route(..))
import Utils.Main exposing (mapHtml, wrapMsg)


type Msg
    = Unit
    | HeaderMsg Header.Msg
    | FooterMsg String


view : (Msg -> msg) -> Model -> Html msg -> Html msg
view toMsg model content =
    div []
        [ mapHtml (wrapMsg toMsg HeaderMsg) Header.view
        , content
        , mapHtml (wrapMsg toMsg FooterMsg) footerView
        ]


init : ( Model, Cmd Msg )
init =
    ( { title = "public" }, Cmd.none )


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
    Html.footer [] [ Html.text "public footer" ]
