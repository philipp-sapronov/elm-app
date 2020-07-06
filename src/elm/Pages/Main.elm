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
import Util.Main exposing (mapCmd, mapHtml)


type Msg
    = HomeMsg HomePage.Msg
    | BlogMsg BlogPage.Msg
    | NotFoundMsg NotFoundPage.Msg
    | NoOp


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
            HomePage.init store |> mapUpdate HomeMsg HomeModel

        Router.Blog _ ->
            BlogPage.init store |> mapUpdate BlogMsg BlogModel

        _ ->
            NotFoundPage.init store |> mapUpdate NotFoundMsg NotFoundModel


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case ( msg, model ) of
        ( HomeMsg message, HomeModel store ) ->
            HomePage.update message store |> mapUpdate HomeMsg HomeModel

        ( BlogMsg message, BlogModel store ) ->
            BlogPage.update message store |> mapUpdate BlogMsg BlogModel

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


view : Model -> ( String, Html Msg )
view model =
    ( toTitle model
    , case model of
        HomeModel store ->
            mapHtml HomeMsg <| Layout.view <| HomePage.view store

        BlogModel store ->
            mapHtml BlogMsg <| Layout.view <| BlogPage.view store

        NotFoundModel store ->
            mapHtml NotFoundMsg <| Layout.view <| NotFoundPage.view store
    )
