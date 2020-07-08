module Pages.Main exposing (..)

import Html exposing (Html)
import Layout.Private as Layout exposing (..)
import Pages.Blog as BlogPage exposing (..)
import Pages.Home as HomePage exposing (..)
import Pages.NotFound as NotFoundPage exposing (..)
import Platform.Cmd as Cmd
import Router.Main as Router
import Store.Main exposing (Store)
import Url exposing (Url)
import Util.Main exposing (mapCmd, mapHtml, wrapMsg)


type PagesMsg
    = HomeMsg HomePage.Msg
    | BlogMsg BlogPage.Msg
    | NotFoundMsg NotFoundPage.Msg
    | LayoutMsg Layout.Msg
    | NoOp


type Msg
    = Msg PagesMsg


view : Model -> ( String, Html Msg )
view model =
    let
        title =
            toTitle model

        layoutView =
            Layout.view (wrapMsg Msg LayoutMsg)

        pageView =
            case model of
                HomeModel _ ->
                    mapHtml (wrapMsg Msg HomeMsg) HomePage.view

                _ ->
                    Html.text ""
    in
    ( title, layoutView pageView )


type Model
    = HomeModel Store
    | BlogModel Store
    | NotFoundModel Store


init : Url -> Store -> ( Model, Cmd Msg )
init url store =
    let
        route =
            Router.parse url
    in
    case route of
        Router.Home _ ->
            HomePage.init store |> mapUpdate (wrapMsg Msg HomeMsg) HomeModel

        Router.Blog _ ->
            BlogPage.init store |> mapUpdate (wrapMsg Msg BlogMsg) BlogModel

        _ ->
            NotFoundPage.init store |> mapUpdate (wrapMsg Msg NotFoundMsg) NotFoundModel


update : Msg -> Model -> ( Model, Cmd Msg )
update (Msg msg) model =
    case ( msg, model ) of
        ( LayoutMsg mmm, _ ) ->
            let
                _ =
                    Debug.log "update" mmm
            in
            ( model, Cmd.none )

        ( HomeMsg message, HomeModel store ) ->
            let
                _ =
                    Debug.log "123" "31"
            in
            HomePage.update message store |> mapUpdate (wrapMsg Msg HomeMsg) HomeModel

        ( BlogMsg message, BlogModel store ) ->
            BlogPage.update message store |> mapUpdate (wrapMsg Msg BlogMsg) BlogModel

        ( _, _ ) ->
            ( model, Cmd.none )


mapUpdate mainMsg mainModel ( subModel, subCmd ) =
    ( mainModel subModel, mapCmd mainMsg subCmd )


toStore : Model -> Store
toStore model =
    case model of
        HomeModel store ->
            store

        BlogModel store ->
            store

        NotFoundModel store ->
            store


toTitle : Model -> String
toTitle model =
    case model of
        HomeModel _ ->
            "Home"

        BlogModel _ ->
            "Blog"

        NotFoundModel _ ->
            "NotFound"
