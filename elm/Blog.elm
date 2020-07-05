module Blog exposing (..)

import Html exposing (Html, a, button, div, text)
import Html.Attributes exposing (href, style)
import Html.Events exposing (onClick)


type alias Model =
    { cnt : Int
    }


type Msg
    = Increment
    | Decrement
    | Unit


init : ( Model, Cmd Msg )
init =
    ( { cnt = 0 }, Cmd.none )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Increment ->
            ( { model | cnt = model.cnt + 1 }
            , Cmd.none
            )

        Decrement ->
            ( { model | cnt = model.cnt - 1 }
            , Cmd.none
            )

        _ ->
            ( model
            , Cmd.none
            )


view : Model -> Html Msg
view model =
    div [ style "display" "flex" ]
        [ button [ onClick Decrement ] [ text "-" ]
        , div [] [ text (String.fromInt model.cnt) ]
        , button [ onClick Increment ] [ text "+" ]
        , a [ href "/" ] [ text "home" ]
        ]
