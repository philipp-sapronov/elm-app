module Types exposing (..)

import Browser.Navigation
import Html exposing (Html)
import Url exposing (Url)


type alias Flags =
    ()


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
    , route : RouteProps
    }


type alias RouteProps =
    { key : String
    , path : String
    , params : List ( String, String )
    , view : { params : List ( String, String ) } -> Html Msg
    }
