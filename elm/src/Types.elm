module Types exposing (..)

import Browser.Navigation
import Html exposing (Html)
import Url exposing (Url)


type Msg
    = NoOp
    | UriChange Url
    | UrlChange String


type alias PageModel =
    { params : List String
    }


type alias RootModel =
    { url : String
    , key : Browser.Navigation.Key
    , route : RouteParams
    }


type alias RouteParams =
    { key : String
    , path : String
    , params : List String
    , view : List String -> Html Msg
    }
