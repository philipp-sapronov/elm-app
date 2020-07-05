module Page exposing (..)

import Blog as BlogPage exposing (..)
import Home as HomePage exposing (..)
import Html exposing (Html)
import NotFound as NotFoundPage exposing (..)
import Platform.Cmd as Cmd
import Router exposing (Route(..))
import Store exposing (Store)
import Url exposing (Url)
import Util exposing (mapCmd, mapHtml)


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


view : Model -> ( String, Html Msg )
view model =
    case model of
        HomeModel store ->
            ( "Home", mapHtml HomeMsg (HomePage.view store) )

        BlogModel store ->
            ( "Blog", mapHtml BlogMsg (BlogPage.view store) )

        NotFoundModel store ->
            ( "NotFound", mapHtml NotFoundMsg (NotFoundPage.view store) )
