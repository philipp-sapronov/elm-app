module Layout.Main exposing (..)

import Html exposing (Html)
import Layout.Private.Main as Private exposing (..)
import Layout.Public.Main as Public exposing (..)
import Util.Main exposing (wrapMsg)


type Msg
    = PrivateMsg Private.Msg
    | PublicMsg Public.Msg


type Model
    = PrivateModel Private.Model
    | PublicModel Public.Model


initialModel =
    PrivateModel { title = "ololo" }


init : ( Model, Cmd Msg )
init =
    ( PrivateModel { title = "title" }, Cmd.none )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    ( model, Cmd.none )


view : (Msg -> msg) -> Model -> Html msg -> Html msg
view toMsg model content =
    case model of
        PrivateModel mdl ->
            Private.view (wrapMsg toMsg PrivateMsg) content

        PublicModel mdl ->
            Public.view (wrapMsg toMsg PublicMsg) content
