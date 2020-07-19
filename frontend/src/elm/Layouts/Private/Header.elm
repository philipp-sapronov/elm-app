module Layouts.Private.Header exposing (..)

import Html exposing (Html, div, header)
import Html.Attributes exposing (class)
import Layouts.Private.Search as Search
import Utils.Main exposing (mapHtml)
import Views.Buttons exposing (iconButton, menuButton)
import Views.Icons as Icons
import Views.Links as Links


type Msg
    = Click
    | DrawerMenuClick
    | SearchMsg Search.Msg


type alias Model =
    { drawerActive : Bool
    , searchModel : Search.Model
    }


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        DrawerMenuClick ->
            ( { model | drawerActive = not model.drawerActive }, Cmd.none )

        SearchMsg searchMsg ->
            let
                ( searchModel, searchCmd ) =
                    Search.update searchMsg model.searchModel
            in
            ( { model | searchModel = searchModel }, Cmd.map SearchMsg searchCmd )

        _ ->
            ( model, Cmd.none )


view : Model -> Html Msg
view model =
    header [ class "header" ]
        [ div [ class "header__inner" ]
            [ div [ class "menu-btn__wrapper" ]
                [ menuButton { active = model.drawerActive, onClick = DrawerMenuClick }
                ]
            , div [ class "header__nav" ]
                [ Links.default "/about" "about" ""
                , div [ class "divider" ] []
                , iconButton Icons.linkedin "w-30 h-30 fs-17"
                , iconButton Icons.telegram "w-30 h-30 fs-18"
                , iconButton Icons.github "w-30 h-30 fs-18"
                , div [ class "search__wrapper" ]
                    [ mapHtml SearchMsg (Search.view model.searchModel)
                    ]
                ]
            ]
        ]



--  HELPERS


initialModel =
    { drawerActive = False
    , searchModel = Search.initialModel
    }
