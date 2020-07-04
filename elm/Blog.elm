module Blog exposing (..)

import Browser.Navigation as Nav exposing (Key)
import Html exposing (Html, button, div, text)
import Html.Attributes exposing (style)
import Html.Events exposing (onClick)
import Session exposing (Session)


type alias Model =
    { cnt : Int
    , session : Session
    }


type Msg
    = Increment
    | Decrement
    | Unit


init : Session -> ( Model, Cmd Msg )
init session =
    ( { cnt = 0, session = session }, Cmd.none )


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
    div []
        [ div [ style "display" "flex" ] []
        , button [ onClick Decrement ] [ text "-" ]
        , div [] [ text (String.fromInt model.cnt) ]
        , button [ onClick Increment ] [ text "+" ]
        ]


toSession : Model -> Nav.Key
toSession { session } =
    case session of
        Session.Session key ->
            key
