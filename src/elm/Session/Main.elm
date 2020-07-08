module Session.Main exposing (..)

import Layout.Main as Layout
import Util.Main exposing (mapHtml)


type Msg
    = LayoutMsg Layout.Msg


type Model
    = NoModel


init : Model -> ( Model, Cmd Msg )
init model =
    ( model, Cmd.none )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        _ ->
            ( model, Cmd.none )


view : Model -> Html Msg
view model =
    mapHtml LayoutMsg (Layout.view model)
