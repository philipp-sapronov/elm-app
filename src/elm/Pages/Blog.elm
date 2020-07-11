module Pages.Blog exposing (..)

import Html exposing (Html, a, button, div, text)
import Html.Attributes exposing (class, href)
import Html.Events exposing (onClick)


type Msg
    = NoOp


view : Html Msg
view =
    div [ class "wrapper" ]
        [ button [ onClick NoOp ] [ text "-" ]
        , a [ href "/blog" ] [ text "blog" ]
        ]


init : ( Model, Cmd Msg )
init =
    ( inititalModel, Cmd.none )


type alias Model =
    { title : String
    }


inititalModel : Model
inititalModel =
    { title = "initialModel" }


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    ( model
    , Cmd.none
    )
