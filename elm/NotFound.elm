module NotFound exposing (..)

import Html exposing (Html, div, text)
import Html.Attributes exposing (href)


type alias Model =
    { heading : String
    }


type Msg
    = Unit


init : ( Model, Cmd Msg )
init =
    ( { heading = "Not Found" }, Cmd.none )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        _ ->
            ( model
            , Cmd.none
            )


view : Model -> Html Msg
view model =
    div []
        [ div [] [ Html.text model.heading ]
        , Html.a [ href "/" ] [ text "home" ]
        ]
