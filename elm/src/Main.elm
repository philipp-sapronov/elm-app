module Main exposing (main)

import Browser exposing (UrlRequest)
import Browser.Navigation exposing (Key)
import Html exposing (div)
import Html.Attributes exposing (id)
import Platform.Cmd as Cmd
import Router exposing (parse)
import Types exposing (..)
import Url exposing (Url)


type alias Flags =
    ()


handleUrlChange : Url -> Msg
handleUrlChange _ =
    NoOp


handleUrlRequest : UrlRequest -> Msg
handleUrlRequest req =
    case req of
        Browser.Internal url ->
            UriChange url

        Browser.External url ->
            UrlChange url


init : Flags -> Url -> Key -> ( RootModel, Cmd Msg )
init _ url key =
    let
        params =
            parse url
    in
    ( RootModel "model" key params, Cmd.none )


update : Msg -> RootModel -> ( RootModel, Cmd Msg )
update msg model =
    let
        route =
            case msg of
                UriChange url ->
                    Router.parse url

                _ ->
                    model.route

        push =
            if route.path /= model.route.path then
                Browser.Navigation.pushUrl model.key route.path

            else
                Cmd.none
    in
    ( { model | route = route }, Cmd.batch [ push ] )


view : RootModel -> Browser.Document Msg
view { route } =
    { title = "Hallo Page"
    , body =
        [ div [ id "root" ]
            [ route.view route.params
            ]
        ]
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
