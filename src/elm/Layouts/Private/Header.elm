module Layouts.Private.Header exposing (..)

import Html exposing (Html, div, header, li, nav, ul)
import Html.Attributes as Attrs exposing (class)
import Views.Buttons exposing (SearchModel, iconButton, menuButton, searchButton)
import Views.Icons as Icons
import Views.Links as Links


type Msg
    = Click
    | DrawerMenuClick
    | SearchInput String
    | SearchClick


type alias Model =
    { drawerActive : Bool
    , searchActive : Bool
    , searchValue : String
    }


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        DrawerMenuClick ->
            ( { model | drawerActive = not model.drawerActive }, Cmd.none )

        SearchClick ->
            if model.searchActive then
                ( { model | searchActive = not model.searchActive, searchValue = "" }, Cmd.none )

            else
                ( { model | searchActive = not model.searchActive }, Cmd.none )

        SearchInput value ->
            ( { model | searchValue = value }, Cmd.none )

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
                , div [ class "search__wrapper" ] [ searchButton (toSeatchModel model) ]
                ]
            ]
        ]



--  HELPERS


toSeatchModel : Model -> SearchModel Msg
toSeatchModel model =
    { value = model.searchValue
    , active = model.searchActive
    , onClick = SearchClick
    , onInput = SearchInput
    }


initialModel =
    { drawerActive = False
    , searchActive = False
    , searchValue = ""
    }
