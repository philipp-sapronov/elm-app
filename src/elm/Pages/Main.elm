module Pages.Main exposing (..)

import Html exposing (Html)
import Layout.Main as Layout exposing (..)
import Pages.Blog as BlogPage exposing (..)
import Pages.Home as HomePage exposing (..)
import Pages.NotFound as NotFoundPage exposing (..)
import Platform.Cmd as Cmd
import Router.Main as Router
import Store.Main exposing (Store)
import Url exposing (Url)
import Util.Main exposing (mapHtml, mapUpdate, wrapMsg)


type PagesMsg
    = HomeMsg HomePage.Msg
    | BlogMsg BlogPage.Msg
    | NotFoundMsg NotFoundPage.Msg
    | LayoutMsg Layout.Msg


type Msg
    = Msg PagesMsg


view : Model -> ( String, Html Msg )
view model =
    let
        title =
            toTitle model

        layoutView =
            case model of
                NotFoundModel _ ->
                    Layout.publicView wrappedLayoutMsg

                _ ->
                    Layout.privateView wrappedLayoutMsg

        pageView =
            case model of
                HomeModel _ ->
                    mapHtml wrappedHomeMsg HomePage.view

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
            HomePage.init store |> mapUpdate wrappedHomeMsg HomeModel

        Router.Blog _ ->
            BlogPage.init store |> mapUpdate wrappedBlogMsg BlogModel

        _ ->
            NotFoundPage.init store |> mapUpdate wrappedNotFoundMsg NotFoundModel


update : Msg -> Model -> ( Model, Cmd Msg )
update (Msg msg) model =
    case ( msg, model ) of
        ( LayoutMsg mmm, _ ) ->
            ( model, Cmd.none )

        ( HomeMsg homeMsg, HomeModel store ) ->
            HomePage.update homeMsg store |> mapUpdate wrappedHomeMsg HomeModel

        ( BlogMsg blogMsg, BlogModel store ) ->
            BlogPage.update blogMsg store |> mapUpdate wrappedBlogMsg BlogModel

        ( _, _ ) ->
            ( model, Cmd.none )


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
            "404"


wrappedHomeMsg =
    wrapMsg Msg HomeMsg


wrappedBlogMsg =
    wrapMsg Msg BlogMsg


wrappedNotFoundMsg =
    wrapMsg Msg NotFoundMsg


wrappedLayoutMsg =
    wrapMsg Msg LayoutMsg
