module NotFound exposing (..)

import Browser.Navigation as Nav exposing (Key)
import Html exposing (Html, div, text)
import Html.Attributes exposing (href)
import Session exposing (Session)


type alias Model =
    { heading : String
    , session : Session
    }


type Msg
    = Unit


init : Session -> ( Model, Cmd Msg )
init session =
    ( { heading = "Not Found", session = session }, Cmd.none )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
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
        [ div [] [ Html.text model.heading ]
        , Html.a [ href "/" ] [ text "home" ]
        ]


toSession : Model -> Nav.Key
toSession { session } =
    case session of
        Session.Session key ->
            key
