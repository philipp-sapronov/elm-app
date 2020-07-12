module Layouts.Main exposing (..)

import Html exposing (Html)
import Layouts.Private.Main as Private exposing (..)
import Layouts.Public.Main as Public exposing (..)
import Platform.Cmd as Cmd
import Session exposing (Session)
import Store.Main as Store exposing (State)
import Url exposing (Url)
import Utils.Main exposing (mapHtml, mapUpdate, wrapMsg)



--  VIEW


type Msg
    = PrivateMsg Private.Msg
    | PublicMsg Public.Msg


view : (Msg -> msg) -> Model -> Html msg -> Html msg
view toMsg model content =
    case model of
        PrivateModel privateModel ->
            Private.view (wrapMsg toMsg PrivateMsg) privateModel content

        PublicModel publicModel ->
            Public.view (wrapMsg toMsg PublicMsg) publicModel content



-- INIT


type Model
    = PrivateModel Private.Model
    | PublicModel Public.Model


initPublic =
    let
        ( model, cmd ) =
            Public.init
    in
    ( PublicModel model, Cmd.map PublicMsg cmd )


initPrivate =
    let
        ( model, cmd ) =
            Private.init
    in
    ( PrivateModel model, Cmd.map PrivateMsg cmd )



-- UPDATE


update : Msg -> Model -> State -> ( Model, State, Cmd Msg )
update msg model state =
    case ( msg, model ) of
        ( PublicMsg publicMsg, PublicModel publicModel ) ->
            let
                ( newPublicModel, publicCmd ) =
                    Public.update publicMsg publicModel
            in
            ( PublicModel newPublicModel
            , state
            , Cmd.map PublicMsg publicCmd
            )

        ( PrivateMsg privateMsg, PrivateModel privateModel ) ->
            let
                ( newPrivateModel, privateCmd ) =
                    Private.update privateMsg privateModel
            in
            ( PrivateModel newPrivateModel
            , state
            , Cmd.map PrivateMsg privateCmd
            )

        ( _, _ ) ->
            ( model, state, Cmd.none )



-- HELPERS
