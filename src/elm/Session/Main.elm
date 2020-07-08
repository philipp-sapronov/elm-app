module Main exposing (main)

import Browser exposing (UrlRequest)
import Browser.Navigation as Nav
import Pages.Main as Pages exposing (..)
import Store.Main exposing (Store, store)
import Url exposing (Url)
import Util.Main exposing (mapCmd, mapHtml)


type Msg
    = PageMsg Pages.Msg
    | NoOp


view : Model -> ( Model, Html msg )
view model =
    Pages.view model.page


type alias Model =
    { page : Pages.Model
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
        _ ->
            ( model, Cmd.none )
