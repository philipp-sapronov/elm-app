module Page exposing (..)

import Html exposing (Html)
import Layouts.Main as Layout
import Pages.Main as Pages
import Platform.Cmd as Cmd
import Session exposing (Session)
import Store.Main as Store exposing (State)
import Url exposing (Url)
import Utils.Main exposing (mapHtml)



{-
   Pages (pages controller)
   should:
   1. Decide which page should be rendered
   2. Decide which layout should be rendered
   3. Get masseges from pages and layouts and update them
-}
--  VIEW


type Msg
    = PageMsg Pages.Msg
    | LayoutMsg Layout.Msg


view : Model -> ( String, Html Msg )
view { pageModel, layoutModel } =
    let
        layoutView =
            Layout.view LayoutMsg layoutModel

        ( title, pageView ) =
            Pages.view pageModel
    in
    ( title, layoutView (mapHtml PageMsg pageView) )



-- INIT


type alias Model =
    { pageModel : Pages.Model
    , layoutModel : Layout.Model
    }


init : Url -> ( Model, Cmd Msg )
init url =
    let
        ( pageModel, pageCmd ) =
            Pages.init url

        ( layoutModel, layoutCmd ) =
            Layout.initPrivate
    in
    ( { pageModel = pageModel, layoutModel = layoutModel }
    , Cmd.batch [ Cmd.map LayoutMsg layoutCmd, Cmd.map PageMsg pageCmd ]
    )



-- UPDATE


update : Msg -> Model -> State -> Session -> ( Model, State, Cmd Msg )
update msg ({ layoutModel, pageModel } as model) state _ =
    case msg of
        LayoutMsg layoutMsg ->
            let
                ( newLayoutModel, newState, layoutCmd ) =
                    Layout.update layoutMsg layoutModel state
            in
            ( { model | layoutModel = newLayoutModel }, newState, Cmd.map LayoutMsg layoutCmd )

        PageMsg pageMsg ->
            let
                ( newPageModel, newState, pageCmd ) =
                    Pages.update pageMsg pageModel state
            in
            ( { model | pageModel = newPageModel }, newState, Cmd.map PageMsg pageCmd )



-- HELPERS
