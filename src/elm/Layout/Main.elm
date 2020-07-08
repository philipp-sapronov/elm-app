module Layout.Main exposing (..)

import Html exposing (Html)
import Layout.Private as Private exposing (..)
import Layout.Public as Public exposing (..)


type Model
    = PublicModel Public.Model
    | PrivateModel Private.Model


type Msg
    = PublicMsg Public.Msg
    | PrivateMsg Private.Msg


view : Model -> Html msg
view model =
    case model of
        PublicModel publicModel ->
            Public.view publicModel

        PrivateModel privateModel ->
            Private.view privateModel
