module Main exposing (main)

import Browser exposing (Document, UrlRequest)
import Browser.Navigation exposing (Key)
import Home as HomePage exposing (..)
import Html exposing (Html, div)
import Html.Attributes exposing (id)
import Platform.Cmd as Cmd
import Router exposing (Route(..), parse)
import Url exposing (Url)


type Page
    = Home (HomePage.Model -> Html HomePage.Msg)


type Msg
    = NoOp
    | RouteChanged Url
    | ExternalLink String
    | HomeMsg HomePage.Msg


type alias Model =
    { url : String
    , key : Browser.Navigation.Key
    , view : Page
    }


handleUrlChange : Url -> Msg
handleUrlChange _ =
    NoOp


handleUrlRequest : UrlRequest -> Msg
handleUrlRequest req =
    case req of
        Browser.Internal url ->
            RouteChanged url

        Browser.External url ->
            ExternalLink url


init : () -> Url -> Key -> ( Model, Cmd Msg )
init _ url key =
    let
        params =
            parse url
    in
    ( Model "model" key (Home HomePage.view), Cmd.none )


routeToPage : Route -> Page
routeToPage route =
    case route of
        _ ->
            Home HomePage.view


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    let
        route =
            case msg of
                RouteChanged url ->
                    Router.parse url

                _ ->
                    NotFound "/404"

        -- push =
        --     if route.path /= model.route.path then
        --         Browser.Navigation.pushUrl model.key route.path
        --     else
        --         Cmd.none
    in
    ( { model | view = routeToPage route }, Cmd.none )


view : Model -> Browser.Document Msg
view model =
    { title = "Elm app"
    , body = Html.text
    }


main : Program () Model Msg
main =
    Browser.application
        { init = init
        , update = update
        , view = view
        , subscriptions = \_ -> Sub.none
        , onUrlChange = handleUrlChange
        , onUrlRequest = handleUrlRequest
        }
