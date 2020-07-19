module Layouts.Public.Main exposing (..)

import Html exposing (Html, div)
import Router exposing (Route(..))
import Utils.Main exposing (mapHtml, wrapMsg)



--  TYPES


type Msg
    = Unit ()


type alias Model =
    { title : String }



-- VIEW


view : (Msg -> msg) -> Model -> Html msg -> Html msg
view toMsg model content =
    div []
        [ mapHtml (wrapMsg toMsg Unit) (Html.footer [] [ Html.text "руфвук" ])
        , content
        , mapHtml (wrapMsg toMsg Unit) (Html.footer [] [ Html.text "footer" ])
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



--  HELPERS
