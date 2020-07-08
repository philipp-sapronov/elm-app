module Main exposing (main)

import Browser exposing (UrlRequest)
import Browser.Navigation as Nav
import Pages.Main as Pages exposing (..)
import Store.Main exposing (Store, store)
import Url exposing (Url)
import Util.Main exposing (mapCmd, mapHtml)


type Msg
    = RouteChanged Url
    | ExternalLink Url
    | PageMsg Pages.Msg
    | NoOp


view : Model -> Browser.Document Msg
view model =
    let
        ( title, html ) =
            Pages.view model.page
    in
    { title = title
    , body = [ mapHtml PageMsg html ]
    }


type alias Model =
    { key : Nav.Key
    , page : Pages.Model
    , store : Store
    }


init : () -> Url -> Nav.Key -> ( Model, Cmd Msg )
init _ url key =
    let
        ( subModel, subCmd ) =
            Pages.init url store
    in
    ( { key = key, page = subModel, store = store }, Cmd.batch [ mapCmd PageMsg subCmd ] )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        RouteChanged url ->
            let
                ( subModel, subCmd ) =
                    Pages.init url model.store
            in
            ( { model | page = subModel }
            , Cmd.batch
                [ Nav.pushUrl model.key (Url.toString url)
                , mapCmd PageMsg subCmd
                ]
            )

        PageMsg pageMsg ->
            let
                ( subModel, subCmd ) =
                    Pages.update pageMsg model.page
            in
            ( { model | page = subModel, store = Pages.toStore subModel }
            , Cmd.batch
                [ mapCmd PageMsg subCmd
                ]
            )

        _ ->
            ( model, Cmd.none )


main =
    Browser.application
        { init = init
        , update = update
        , view = view
        , subscriptions = \_ -> Sub.none
        , onUrlChange = ExternalLink
        , onUrlRequest = handleUrlRequest
        }


handleUrlRequest : UrlRequest -> Msg
handleUrlRequest req =
    case req of
        Browser.Internal url ->
            RouteChanged url

        _ ->
            NoOp
