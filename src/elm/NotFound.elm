module NotFound exposing (..)

import Html exposing (Html, div, text)
import Html.Attributes exposing (href)
import Store exposing (Store)


type Msg
    = Unit


init : Store -> ( Store, Cmd Msg )
init store =
    ( store, Cmd.none )


update : Msg -> Store -> ( Store, Cmd Msg )
update msg model =
    case msg of
        _ ->
            ( model
            , Cmd.none
            )


view : Store -> Html Msg
view store =
    div []
        [ div [] [ Html.text store.notFoundTitle.value ]
        , Html.a [ href "/" ] [ text "home" ]
        ]
