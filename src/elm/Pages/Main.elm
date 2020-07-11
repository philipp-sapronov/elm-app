module Pages.Main exposing (..)

import Html exposing (Html)
import Layout.Main as Layout exposing (..)
import Pages.Blog as Blog exposing (..)
import Pages.Home as Home exposing (..)
import Pages.NotFound as NotFound exposing (..)
import Platform.Cmd as Cmd
import Router.Main as Router
import Session.Main exposing (Session)
import Store.Main as Store exposing (..)
import Url exposing (Url)
import Util.Main exposing (mapHtml, mapUpdate, wrapMsg)



{-
   Pages (pages controller)
   should:
   1. Decide which page renders
   2. Get masseges from pages and update them
   3.
-}


type PagesMsg
    = HomeMsg Home.Msg
    | BlogMsg Blog.Msg
    | NotFoundMsg NotFound.Msg
    | LayoutMsg Layout.Msg


type Msg
    = Msg PagesMsg


view : Model -> ( String, Html Msg )
view { pageModel, layoutModel } =
    let
        layoutView =
            Layout.view layoutMsg__ layoutModel

        pageView =
            case pageModel of
                HomeModel homeModel ->
                    mapHtml homeMsg__ (Home.view homeModel)

                _ ->
                    Html.text ""
    in
    ( toTitle pageModel, layoutView pageView )


type PageModel
    = HomeModel Home.Model
    | BlogModel Blog.Model
    | NotFoundModel NotFound.Model


type alias Model =
    { pageModel : PageModel
    , layoutModel : Layout.Model
    }



-- INIT


init : Url -> ( Model, Cmd Msg )
init url =
    let
        ( layoutModel, layoutCmd ) =
            initLayout

        ( pageModel, pageCmd ) =
            initPage (Router.parse url)
    in
    ( { pageModel = pageModel, layoutModel = layoutModel }, Cmd.batch [ layoutCmd, pageCmd ] )


initLayout : ( Layout.Model, Cmd Msg )
initLayout =
    let
        ( subModel, subCmd ) =
            Layout.init
    in
    ( subModel, Cmd.map layoutMsg__ subCmd )


initPage : Router.Route -> ( PageModel, Cmd Msg )
initPage route =
    case route of
        Router.Home _ ->
            Home.init |> mapUpdate homeMsg__ HomeModel

        Router.Blog _ ->
            Blog.init |> mapUpdate blogMsg__ BlogModel

        _ ->
            NotFound.init |> mapUpdate notFoundMsg__ NotFoundModel



-- UPDATE


update : Msg -> Model -> State -> Session -> ( Model, State, Cmd Msg )
update (Msg msg) model state session =
    case ( msg, model.pageModel ) of
        ( LayoutMsg layoutMsg, _ ) ->
            let
                ( layoutModel, layoutCmd ) =
                    Layout.update layoutMsg model.layoutModel
            in
            ( { model | layoutModel = layoutModel }, state, Cmd.map layoutMsg__ layoutCmd )

        ( HomeMsg homeMsg, HomeModel homeModel ) ->
            let
                ( pageModel, newState, cmd ) =
                    Home.update homeMsg homeModel state
            in
            ( { model | pageModel = HomeModel pageModel }, newState, Cmd.map homeMsg__ cmd )

        ( _, _ ) ->
            ( model, state, Cmd.none )


toTitle : PageModel -> String
toTitle model =
    case model of
        HomeModel _ ->
            "Home"

        BlogModel _ ->
            "Blog"

        NotFoundModel _ ->
            "404"


homeMsg__ =
    wrapMsg Msg HomeMsg


blogMsg__ =
    wrapMsg Msg BlogMsg


notFoundMsg__ =
    wrapMsg Msg NotFoundMsg


layoutMsg__ =
    wrapMsg Msg LayoutMsg
