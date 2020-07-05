module Home exposing (..)

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
    let
        _ =
            Debug.log "msg" Debug.toString model
    in
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
    let
        _ =
            Debug.log "view" Debug.toString model
    in
    div [ style "display" "flex" ]
        [ button [ onClick Decrement ] [ text "-" ]
        , div [] [ text (String.fromInt model.cnt) ]
        , button [ onClick Increment ] [ text "+" ]
        , a [ href "/blog" ] [ text "blog" ]
        ]
