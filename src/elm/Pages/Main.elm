module Pages.Main exposing (..)

import Html exposing (Html)
import Pages.Blog as Blog exposing (..)
import Pages.Home as Home exposing (..)
import Pages.NotFound as NotFound exposing (..)
import Platform.Cmd as Cmd
import Router as Router
import Session exposing (Session)
import Store.Main as Store exposing (State)
import Url exposing (Url)
import Utils.Main exposing (mapHtml, mapUpdate, wrapMsg)



{-
   Pages (pages controller)
   should:
   1. Decide which page should be rendered
   2. Decide which layout should be rendered
   3. Get masseges from pages and layouts and update them
-}


type Msg
    = HomeMsg Home.Msg
    | BlogMsg Blog.Msg
    | NotFoundMsg NotFound.Msg


type Model
    = HomeModel Home.Model
    | BlogModel Blog.Model
    | NotFoundModel NotFound.Model



--  VIEW


view : Model -> ( String, Html Msg )
view model =
    ( toTitle model
    , case model of
        HomeModel homeModel ->
            mapHtml HomeMsg (Home.view homeModel)

        _ ->
            Html.text ""
    )



-- INIT


init : Url -> ( Model, Cmd Msg )
init url =
    let
        ( pageModel, pageCmd ) =
            case Router.parse url of
                Router.Home ->
                    Home.init |> mapUpdate HomeMsg HomeModel

                Router.Blog ->
                    Blog.init |> mapUpdate BlogMsg BlogModel

                _ ->
                    NotFound.init |> mapUpdate NotFoundMsg NotFoundModel
    in
    ( pageModel
    , pageCmd
    )



-- UPDATE


update msg model state =
    case ( msg, model ) of
        ( HomeMsg homeMsg, HomeModel homeModel ) ->
            let
                ( newHomeModel, newState, homeCmd ) =
                    Home.update homeMsg homeModel state
            in
            ( HomeModel newHomeModel
            , newState
            , Cmd.map HomeMsg homeCmd
            )

        ( _, _ ) ->
            ( model, state, Cmd.none )



-- HELPERS


toTitle : Model -> String
toTitle model =
    case model of
        HomeModel _ ->
            "Home"

        BlogModel _ ->
            "Blog"

        NotFoundModel _ ->
            "404"
