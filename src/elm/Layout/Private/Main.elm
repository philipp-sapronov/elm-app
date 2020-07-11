module Layout.Private.Main exposing (..)

import Html exposing (Html, div)
import Layout.Private.Header as Header exposing (..)
import Router.Main exposing (Route(..))
import Util.Main exposing (mapHtml, wrapMsg)


type Msg
    = Unit
    | HeaderMsg Header.Msg
    | FooterMsg String


view : (Msg -> msg) -> Html msg -> Html msg
view toMsg content =
    div []
        [ mapHtml (wrapMsg toMsg HeaderMsg) Header.view
        , content
        , mapHtml (wrapMsg toMsg FooterMsg) footerView
        ]


type alias Model =
    { title : String }


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        _ ->
            ( model, Cmd.none )



-- view : (Msg -> b -> msg) -> Html msg -> Html msg


footerView : Html msg
footerView =
    Html.footer [] [ Html.text "private footer" ]
