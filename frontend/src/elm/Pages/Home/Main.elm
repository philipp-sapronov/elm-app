module Pages.Home.Main exposing (..)

import Html exposing (Html, a, button, div, input, text)
import Html.Attributes exposing (class, href, value)
import Html.Events exposing (onClick, onInput)
import Pages.Home.Pagination as Pagination
import Pages.Home.Posts as Posts
import Store.Main as Store exposing (State, dispatch)



--  TYPES


type Msg
    = NoOp
    | Input String
    | ChangeTitle
    | NextPage
    | PrevPage


type alias Model =
    { title : String
    , value : String
    , text : String
    }



--  VIEW


view : Model -> Html Msg
view model =
    div [ class "content__inner" ]
        [ Posts.view Posts.articles
        , Pagination.view { onNext = NextPage, onPrev = PrevPage }
        ]



-- INIT


init : ( Model, Cmd Msg )
init =
    ( inititalModel, Cmd.none )



--  UPDATE


update : Msg -> Model -> State -> ( Model, State, Cmd Msg )
update msg model state =
    case msg of
        ChangeTitle ->
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



-- INITIAL MODEL


inititalModel : Model
inititalModel =
    { title = "initialModel"
    , value = ""
    , text = "text"
    }



-- HELPERS


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
