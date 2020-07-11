module Pages.Home exposing (..)

import Html exposing (Html, a, button, div, input, text)
import Html.Attributes exposing (class, href, value)
import Html.Events exposing (onClick, onInput)
import Store.Main as Store exposing (State, dispatch)


type Msg
    = NoOp
    | Input String
    | ChangeTitle


view : Model -> Html Msg
view model =
    let
        _ =
            Debug.log "view" model.title
    in
    div [ class "wrapper" ]
        [ button [ onClick NoOp ] [ text "-" ]
        , div [] [ text model.text ]
        , input [ onInput Input, value model.title ] []
        , button [ onClick ChangeTitle ] [ text "Update Title" ]
        , a [ href "/blog" ] [ text "blog" ]
        ]


init : ( Model, Cmd Msg )
init =
    ( inititalModel, Cmd.none )


type alias Model =
    { title : String
    , value : String
    , text : String
    }


inititalModel : Model
inititalModel =
    { title = "initialModel"
    , value = ""
    , text = "text"
    }


update : Msg -> Model -> State -> ( Model, State, Cmd Msg )
update msg model state =
    case msg of
        ChangeTitle ->
            let
                _ =
                    Debug.log "change title" "1"
            in
            ( toModel model state
            , state
            , Cmd.none
            )

        Input value ->
            let
                newState =
                    dispatch state (Store.UpdateTitle value)

                newModel =
                    toModel model newState

                _ =
                    Debug.log "Home" ( value, model )
            in
            ( { newModel | value = value }
            , newState
            , Cmd.none
            )

        _ ->
            ( model
            , state
            , Cmd.none
            )


toModel : Model -> State -> Model
toModel model state =
    let
        text =
            if String.isEmpty state.notFoundTitle then
                model.text

            else
                state.notFoundTitle
    in
    { model | text = text, title = state.notFoundTitle }
