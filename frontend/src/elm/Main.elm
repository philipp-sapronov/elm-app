module Main exposing (main)

import Browser exposing (UrlRequest(..))
import Browser.Navigation as Nav
import Html
import Html.Attributes as Attrs
import Page as Page
import Session as Session exposing (Session)
import Store.Main as Store exposing (..)
import Url exposing (Url)
import Utils.Main exposing (mapHtml)



--  TYPES


type Msg
    = LinkClicked UrlRequest
    | UrlChanged Url
    | SessionMsg Session.Msg
    | PageMsg Page.Msg


type alias Model =
    { key : Nav.Key
    , session : Session
    , page : Page.Model
    , state : State
    , url : Url
    }



--  MAIN


main =
    Browser.application
        { init = init
        , update = update
        , view = view
        , subscriptions = \_ -> Sub.none
        , onUrlChange = UrlChanged
        , onUrlRequest = LinkClicked
        }



-- VIEW


view : Model -> Browser.Document Msg
view { page } =
    let
        ( title, html ) =
            Page.view page
    in
    { title = title
    , body = [ Html.div [ Attrs.id "root" ] [ mapHtml PageMsg html ] ]
    }



--INIT


init : () -> Url -> Nav.Key -> ( Model, Cmd Msg )
init _ url key =
    let
        ( pageModel, pageCmd ) =
            Page.init url
    in
    ( { key = key
      , page = pageModel
      , session = Session.Guest
      , state = state
      , url = url
      }
    , Cmd.batch [ Cmd.map PageMsg pageCmd ]
    )



-- UPDATE


update : Msg -> Model -> ( Model, Cmd Msg )
update msg ({ key, page, state, session } as model) =
    case msg of
        --
        LinkClicked request ->
            case request of
                Internal url ->
                    ( { model | url = url }
                    , Nav.pushUrl key (Url.toString url)
                    )

                External url ->
                    ( model, Nav.load url )

        --
        UrlChanged url ->
            let
                ( pageModel, pageCmd ) =
                    Page.init url
            in
            ( { model | page = pageModel }, Cmd.map PageMsg pageCmd )

        --
        PageMsg pageMsg ->
            let
                ( pageModel, newState, pageCmd ) =
                    Page.update pageMsg page state session
            in
            ( { model | page = pageModel, state = newState }, Cmd.map PageMsg pageCmd )

        --
        SessionMsg _ ->
            ( model, Cmd.none )



-- HELPERS
