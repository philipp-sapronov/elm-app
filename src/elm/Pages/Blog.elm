module Pages.Blog exposing (..)

import Html exposing (Html, a, button, div, text)
import Html.Attributes exposing (class, href)
import Html.Events exposing (onClick)



--  TYPES


type Msg
    = NoOp


type alias Model =
    { title : String
    }



-- VIEW


view : Html Msg
view =
    div [ class "wrapper" ]
        [ button [ onClick NoOp ] [ text "-" ]
        , a [ href "/blog" ] [ text "blog" ]
        ]



-- INIT


init : ( Model, Cmd Msg )
init =
    ( inititalModel, Cmd.none )



-- UPDATE


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    ( model
    , Cmd.none
    )



-- INITIAL MODEL


inititalModel : Model
inititalModel =
    { title = "initialModel" }



-- HELPERS
