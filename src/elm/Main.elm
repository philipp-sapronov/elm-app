module Main exposing (main)

import Browser exposing (UrlRequest(..))
import Browser.Navigation as Nav
import Html
import Html.Attributes as Attrs
import Pages.Main as Pages
import Session.Main as Session exposing (Session)
import Store.Main as Store exposing (..)
import Url exposing (Url)
import Util.Main exposing (mapHtml)



{-
   Main (App controller)
   Has not to export nothing except main
   should:
   1. Get app messages and run updates
   2. Manage app state
-}


type Msg
    = LinkClicked UrlRequest
    | UrlChanged Url
    | SessionMsg Session.Msg
    | PagesMsg Pages.Msg
    | NoOp


main =
    Browser.application
        { init = init
        , update = update
        , view = view
        , subscriptions = \_ -> Sub.none
        , onUrlChange = UrlChanged
        , onUrlRequest = LinkClicked
        }


view : Model -> Browser.Document Msg
view { page } =
    let
        ( title, html ) =
            Pages.view page
    in
    { title = title
    , body = [ Html.div [ Attrs.id "root" ] [ mapHtml PagesMsg html ] ]
    }


type alias Model =
    { key : Nav.Key
    , session : Session
    , page : Pages.Model
    , state : State
    , url : Url
    }


init : () -> Url -> Nav.Key -> ( Model, Cmd Msg )
init _ url key =
    let
        ( pageModel, pageCmd ) =
            Pages.init url
    in
    ( { key = key
      , page = pageModel
      , session = Session.Guest
      , state = state
      , url = url
      }
    , Cmd.batch [ Cmd.map PagesMsg pageCmd ]
    )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg ({ key, page, state, session } as model) =
    case msg of
        LinkClicked request ->
            case request of
                Internal url ->
                    ( { model | url = url }
                    , Nav.pushUrl key (Url.toString url)
                    )

                External url ->
                    ( model, Nav.load url )

        UrlChanged url ->
            let
                ( pageModel, pageCmd ) =
                    Pages.init url
            in
            ( { model | page = pageModel }, Cmd.map PagesMsg pageCmd )

        -- can change url
        PagesMsg pageMsg ->
            -- can change page and state
            let
                ( pageModel, newState, pageCmd ) =
                    Pages.update pageMsg page state session
            in
            ( { model | page = pageModel, state = newState }, Cmd.map PagesMsg pageCmd )

        SessionMsg _ ->
            -- can change session
            ( model, Cmd.none )

        _ ->
            ( model, Cmd.none )
