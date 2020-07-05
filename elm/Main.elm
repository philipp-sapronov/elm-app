module Main exposing (main)

import Browser exposing (UrlRequest)
import Browser.Navigation as Nav exposing (Key)
import Page exposing (..)
import Router exposing (Route(..))
import Store exposing (Store, store)
import Url exposing (Url)
import Util exposing (mapCmd, mapHtml)


type Msg
    = RouteChanged Url
    | ExternalLink Url
    | PageMsg Page.Msg
    | NoOp


type alias Model =
    { key : Nav.Key
    , page : Page.Model
    , store : Store
    }


handleUrlRequest : UrlRequest -> Msg
handleUrlRequest req =
    case req of
        Browser.Internal url ->
            RouteChanged url

        _ ->
            NoOp



{-
   первый запуск приложения,
   инициализация страницы с моделью по умолчанию
   дальше будет обновление уже с состоянием из модели
-}


init : () -> Url -> Key -> ( Model, Cmd Msg )
init _ url key =
    let
        ( subModel, subCmd ) =
            Page.init url store
    in
    ( { key = key, page = subModel, store = store }, Cmd.batch [ mapCmd PageMsg subCmd ] )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        RouteChanged url ->
            let
                ( subModel, subCmd ) =
                    Page.init url model.store
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
                    Page.update pageMsg model.page
            in
            ( { model | page = subModel, store = Page.toStore subModel }
            , Cmd.batch
                [ mapCmd PageMsg subCmd
                ]
            )

        _ ->
            ( model, Cmd.none )


view : Model -> Browser.Document Msg
view model =
    let
        ( title, html ) =
            Page.view model.page
    in
    { title = title
    , body = [ mapHtml PageMsg html ]
    }


main =
    Browser.application
        { init = init
        , update = update
        , view = view
        , subscriptions = \_ -> Sub.none
        , onUrlChange = ExternalLink
        , onUrlRequest = handleUrlRequest
        }
