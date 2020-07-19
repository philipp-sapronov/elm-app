module Layouts.Private.Main exposing (..)

import Html exposing (Html, div, main_)
import Html.Attributes exposing (class)
import Layouts.Private.Footer as Footer
import Layouts.Private.Header as Header
import Layouts.Private.Nav as Nav
import Layouts.Public.Main exposing (Msg(..))
import Router exposing (Route(..))
import Utils.Main exposing (mapHtml, wrapMsg)



--  TYPES


type Msg
    = Unit
    | HeaderMsg Header.Msg
    | NavMsg Nav.Msg
    | FooterMsg Footer.Msg


type alias Model =
    { title : String
    , headerModel : Header.Model
    }



--  VIEW


view : (Msg -> msg) -> Model -> Html msg -> Html msg
view toMsg { headerModel } content =
    div [ class "layout-01 wrapper" ]
        [ mapHtml (wrapMsg toMsg HeaderMsg) (Header.view headerModel)
        , mapHtml (wrapMsg toMsg NavMsg) Nav.view
        , main_ [ class "content" ] [ content ]
        , mapHtml (wrapMsg toMsg FooterMsg) Footer.view
        ]



-- INIT


init : ( Model, Cmd Msg )
init =
    ( { title = "public", headerModel = Header.initialModel }, Cmd.none )



-- UPDATE


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        HeaderMsg headerMsg ->
            let
                ( headerModel, headerCmd ) =
                    Header.update headerMsg model.headerModel
            in
            ( { model | headerModel = headerModel }, Cmd.map HeaderMsg headerCmd )

        _ ->
            ( model, Cmd.none )



-- HELPERS
