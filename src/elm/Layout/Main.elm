module Layout.Main exposing (..)

import Html exposing (Html)
import Layout.Private.Main as Private exposing (..)
import Layout.Public.Main as Public exposing (..)
import Util.Main exposing (wrapMsg)


type Msg
    = PrivateMsg Private.Msg
    | PublicMsg Public.Msg


privateView : (Msg -> msg) -> Html msg -> Html msg
privateView toMsg content =
    Private.view (wrapMsg toMsg PrivateMsg) content


publicView : (Msg -> msg) -> Html msg -> Html msg
publicView toMsg content =
    Public.view (wrapMsg toMsg PublicMsg) content
