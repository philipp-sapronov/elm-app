module Page exposing (..)

import Blog as BlogPage exposing (..)
import Home as HomePage exposing (..)
import Html exposing (Html)
import NotFound as NotFoundPage exposing (..)
import Platform.Cmd as Cmd
import Router exposing (Route(..))
import Url exposing (Url)
import Util exposing (mapCmd, mapHtml)


type Msg
    = HomeMsg HomePage.Msg
    | BlogMsg BlogPage.Msg
    | NotFoundMsg NotFoundPage.Msg
    | NoOp


type Model
    = HomeModel HomePage.Model
    | BlogModel BlogPage.Model
    | NotFoundModel NotFoundPage.Model


init : Url -> ( Model, Cmd Msg )
init url =
    let
        route =
            Router.parse url
    in
    case route of
        Router.Home _ ->
            HomePage.init |> mapUpdate HomeMsg HomeModel

        Router.Blog _ ->
            BlogPage.init |> mapUpdate BlogMsg BlogModel

        _ ->
            NotFoundPage.init |> mapUpdate NotFoundMsg NotFoundModel


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    let
        _ =
            Debug.log "hallo" "world"
    in
    case ( msg, model ) of
        ( HomeMsg message, HomeModel mdl ) ->
            HomePage.update message mdl |> mapUpdate HomeMsg HomeModel

        ( BlogMsg message, BlogModel mdl ) ->
            BlogPage.update message mdl |> mapUpdate BlogMsg BlogModel

        ( _, _ ) ->
            ( model, Cmd.none )


mapUpdate mainMsg mainModel ( subModel, subCmd ) =
    ( mainModel subModel, mapCmd mainMsg subCmd )


view : Model -> ( String, Html Msg )
view model =
    case model of
        HomeModel mdl ->
            ( "Home", mapHtml HomeMsg (HomePage.view mdl) )

        BlogModel mdl ->
            ( "Blog", mapHtml BlogMsg (BlogPage.view mdl) )

        NotFoundModel mdl ->
            ( "NotFound", mapHtml NotFoundMsg (NotFoundPage.view mdl) )
