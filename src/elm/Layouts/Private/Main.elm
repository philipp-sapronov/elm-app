module Layouts.Private.Main exposing (..)

import Html exposing (Html, div)
import Layouts.Private.Header as Header exposing (..)
import Router exposing (Route(..))
import Utils.Main exposing (mapHtml, wrapMsg)



--  TYPES


type Msg
    = Unit
    | HeaderMsg Header.Msg
    | FooterMsg String


type alias Model =
    { title : String }



--  VIEW


view : (Msg -> msg) -> Model -> Html msg -> Html msg
view toMsg model content =
    div []
        [ mapHtml (wrapMsg toMsg HeaderMsg) Header.view
        , content
        , mapHtml (wrapMsg toMsg FooterMsg) (Html.footer [] [ Html.text "private footer" ])
        ]



-- INIT


init : ( Model, Cmd Msg )
init =
    ( { title = "public" }, Cmd.none )



-- UPDATE


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        _ ->
            ( model, Cmd.none )



-- HELPERS
