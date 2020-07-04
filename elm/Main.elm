module Main exposing (main)

import Blog as BlogPage exposing (..)
import Browser exposing (UrlRequest)
import Browser.Navigation as Nav exposing (Key)
import Home as HomePage exposing (..)
import Html exposing (Html)
import NotFound as NotFoundPage exposing (..)
import Platform.Cmd as Cmd
import Router exposing (Route(..))
import Session exposing (Session)
import Url exposing (Url)


type Msg
    = RouteChanged Url
    | ExternalLink String
    | HomeMsg HomePage.Msg
    | BlogMsg BlogPage.Msg
    | NotFoundMsg NotFoundPage.Msg
    | Unit


type Model
    = HomeModel HomePage.Model
    | BlogModel BlogPage.Model
    | NotFoundModel NotFoundPage.Model


handleUrlChange : Url -> Msg
handleUrlChange _ =
    Unit


handleUrlRequest : UrlRequest -> Msg
handleUrlRequest req =
    case req of
        Browser.Internal url ->
            RouteChanged url

        Browser.External url ->
            ExternalLink url


init : () -> Url -> Key -> ( Model, Cmd Msg )
init _ url key =
    mapUrl url key


mapUrl : Url -> Key -> ( Model, Cmd Msg )
mapUrl url key =
    let
        route =
            Router.parse url
    in
    case route of
        Router.Home _ ->
            HomePage.init (Session.Session key) |> mapUpdate HomeMsg HomeModel

        Router.Blog _ ->
            BlogPage.init (Session.Session key) |> mapUpdate BlogMsg BlogModel

        _ ->
            NotFoundPage.init (Session.Session key) |> mapUpdate NotFoundMsg NotFoundModel


toSession : Model -> Nav.Key
toSession page =
    case page of
        HomeModel model ->
            HomePage.toSession model

        BlogModel model ->
            BlogPage.toSession model

        NotFoundModel model ->
            NotFoundPage.toSession model


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case ( msg, model ) of
        ( RouteChanged url, _ ) ->
            let
                navKey =
                    toSession model

                ( subModel, subCmd ) =
                    mapUrl url navKey
            in
            ( subModel, Cmd.batch [ subCmd, Nav.pushUrl navKey (Url.toString url) ] )

        ( HomeMsg message, HomeModel mdl ) ->
            HomePage.update message mdl |> mapUpdate HomeMsg HomeModel

        ( BlogMsg message, BlogModel mdl ) ->
            BlogPage.update message mdl |> mapUpdate BlogMsg BlogModel

        ( _, _ ) ->
            ( model, Cmd.none )


mapUpdate mainMsg mainModel ( subModel, subCmd ) =
    ( mainModel subModel, mapCmd mainMsg subCmd )


mapCmd msg cmd =
    Cmd.map (\a -> msg a) cmd


mapHtml msg html =
    Html.map (\a -> msg a) html


view : Model -> Browser.Document Msg
view model =
    case model of
        HomeModel mdl ->
            { title = "Home"
            , body = [ mapHtml HomeMsg (HomePage.view mdl) ]
            }

        BlogModel mdl ->
            { title = "Blog"
            , body = [ mapHtml BlogMsg (BlogPage.view mdl) ]
            }

        NotFoundModel mdl ->
            { title = "NotFound"
            , body = [ mapHtml NotFoundMsg (NotFoundPage.view mdl) ]
            }


main =
    Browser.application
        { init = init
        , update = update
        , view = view
        , subscriptions = \_ -> Sub.none
        , onUrlChange = handleUrlChange
        , onUrlRequest = handleUrlRequest
        }
