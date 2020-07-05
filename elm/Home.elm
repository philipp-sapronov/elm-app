module Home exposing (..)

import Html exposing (Html, a, button, div, text)
import Html.Attributes exposing (href, style)
import Html.Events exposing (onClick)
import Store exposing (Store)


type Msg
    = Increment
    | Decrement
    | Unit


init : Store -> ( Store, Cmd Msg )
init store =
    ( store, Cmd.none )


update : Msg -> Store -> ( Store, Cmd Msg )
update msg store =
    let
        homeCounter =
            store.homeCounter
    in
    case msg of
        Increment ->
            ( { store | homeCounter = { homeCounter | value = homeCounter.value + 1 } }
            , Cmd.none
            )

        Decrement ->
            ( { store | homeCounter = { homeCounter | value = homeCounter.value - 1 } }
            , Cmd.none
            )

        _ ->
            ( store
            , Cmd.none
            )


view : Store -> Html Msg
view store =
    div [ style "display" "flex" ]
        [ button [ onClick Decrement ] [ text "-" ]
        , div [] [ text (String.fromInt store.homeCounter.value) ]
        , button [ onClick Increment ] [ text "+" ]
        , a [ href "/blog" ] [ text "blog" ]
        ]
