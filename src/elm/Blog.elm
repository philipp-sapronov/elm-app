module Blog exposing (..)

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
        blogCounter =
            store.blogCounter
    in
    case msg of
        Increment ->
            ( { store | blogCounter = { blogCounter | value = blogCounter.value + 1 } }
            , Cmd.none
            )

        Decrement ->
            ( { store | blogCounter = { blogCounter | value = blogCounter.value - 1 } }
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
        , div [] [ text (String.fromInt store.blogCounter.value) ]
        , button [ onClick Increment ] [ text "+" ]
        , a [ href "/" ] [ text "home" ]
        ]
