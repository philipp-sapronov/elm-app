module Layout exposing (..)

import Html exposing (div)
import Main exposing (..)
import Router exposing (Route(..))
import Home exposing (contentView)
type alias Model =
    { title : String }


type Msg
    = Unit


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        _ ->
            Model

     

view : Main.Model -> Html Msg
view model =
    let
        contentView = 
          case model of 
            Main.HomeModel model ->
                Home.
    in
    
    div []
        [ headerView
            contentView
            footerView
        ]


headerView : Html msg
headerView =
    Html.footer [] [ Html.text "footer" ]
