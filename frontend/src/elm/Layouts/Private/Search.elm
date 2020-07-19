module Layouts.Private.Search exposing (..)

import Browser.Dom as Dom
import Html exposing (Html, button, div)
import Html.Attributes exposing (class, classList, id, placeholder, value)
import Html.Events exposing (onClick, onInput)
import Task
import Utils.Main exposing (nextTick)
import Views.Icons exposing (search)



--  TYPES


type Msg
    = SearchInput String
    | SearchClick
    | FocusOn
    | FocusResult (Result Dom.Error ())


type alias Model =
    { active : Bool
    , value : String
    }



--  VIEW


view : Model -> Html Msg
view model =
    div [ class "header-search" ]
        [ Html.input
            [ classList [ ( "input", True ), ( "active", model.active ) ]
            , id inputId
            , placeholder "I'm looking for..."
            , onInput SearchInput
            , value model.value
            ]
            []
        , button [ class "icon-btn w-30 h-30 fs-16", onClick SearchClick ] [ search ]
        ]



--  UPDATE


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        SearchClick ->
            if model.active then
                ( { model | active = False, value = "" }, Cmd.none )

            else
                ( { model | active = True }, nextTick FocusOn )

        SearchInput value ->
            ( { model | value = value }, Cmd.none )

        FocusOn ->
            ( model, Dom.focus inputId |> Task.attempt FocusResult )

        _ ->
            ( model, Cmd.none )



-- HELPERS


inputId =
    "layout-01__search-input"


initialModel =
    { active = False
    , value = ""
    }
