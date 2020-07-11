module Page exposing (..)

import Html exposing (Html)
import Layouts.Private.Main as Private exposing (..)
import Layouts.Public.Main as Public exposing (..)
import Pages.Blog as Blog exposing (..)
import Pages.Home as Home exposing (..)
import Pages.NotFound as NotFound exposing (..)
import Platform.Cmd as Cmd
import Router as Router
import Session exposing (Session)
import Store.Main as Store exposing (State)
import Url exposing (Url)
import Utils.Main exposing (mapHtml, mapUpdate, wrapMsg)



{-
   Pages (pages controller)
   should:
   1. Decide which page should be rendered
   2. Decide which layout should be rendered
   3. Get masseges from pages and layouts and update them
-}


type LayoutMsg
    = PrivateMsg Private.Msg
    | PublicMsg Public.Msg


type PageMsg
    = HomeMsg Home.Msg
    | BlogMsg Blog.Msg
    | NotFoundMsg NotFound.Msg


type LayoutModel
    = PrivateModel Private.Model
    | PublicModel Public.Model


type PageModel
    = HomeModel Home.Model
    | BlogModel Blog.Model
    | NotFoundModel NotFound.Model


type Msg
    = PageMsg PageMsg
    | LayoutMsg LayoutMsg


type alias Model =
    { pageModel : PageModel
    , layoutModel : LayoutModel
    }



--  VIEW


view : Model -> ( String, Html Msg )
view { pageModel, layoutModel } =
    let
        layoutView =
            case layoutModel of
                PublicModel publicModel ->
                    Public.view publicMsg_ publicModel

                PrivateModel privateModel ->
                    Private.view privateMsg_ privateModel

        pageView =
            case pageModel of
                HomeModel homeModel ->
                    mapHtml homeMsg_ (Home.view homeModel)

                _ ->
                    Html.text ""
    in
    ( toTitle pageModel, layoutView pageView )



-- INIT


init : Url -> ( Model, Cmd Msg )
init url =
    let
        ( ( pageModel, pageCmd ), ( layoutModel, layoutCmd ) ) =
            case Router.parse url of
                Router.Home ->
                    ( Home.init |> mapUpdate homeMsg_ HomeModel
                    , Private.init |> mapUpdate privateMsg_ PublicModel
                    )

                Router.Blog ->
                    ( Blog.init |> mapUpdate blogMsg_ BlogModel
                    , Private.init |> mapUpdate privateMsg_ PublicModel
                    )

                _ ->
                    ( NotFound.init |> mapUpdate notFoundMsg_ NotFoundModel
                    , Public.init |> mapUpdate publicMsg_ PrivateModel
                    )
    in
    ( { pageModel = pageModel, layoutModel = layoutModel }, Cmd.batch [ layoutCmd, pageCmd ] )



-- UPDATE


update : Msg -> Model -> State -> Session -> ( Model, State, Cmd Msg )
update msg model state _ =
    case msg of
        LayoutMsg layoutMsg ->
            handleLayoutMsg layoutMsg model state

        PageMsg pageMsg ->
            handlePageMsg pageMsg model state


handleLayoutMsg msg ({ layoutModel } as model) state =
    case ( msg, layoutModel ) of
        ( PublicMsg publicMsg, PublicModel publicModel ) ->
            let
                ( newPublicModel, publicCmd ) =
                    Public.update publicMsg publicModel
            in
            ( { model | layoutModel = PublicModel newPublicModel }, state, Cmd.map publicMsg_ publicCmd )

        ( PrivateMsg privateMsg, PrivateModel privateModel ) ->
            let
                ( newPrivateModel, privateCmd ) =
                    Private.update privateMsg privateModel
            in
            ( { model | layoutModel = PrivateModel newPrivateModel }, state, Cmd.map privateMsg_ privateCmd )

        ( _, _ ) ->
            ( model, state, Cmd.none )


handlePageMsg msg ({ pageModel } as model) state =
    case ( msg, pageModel ) of
        ( HomeMsg homeMsg, HomeModel homeModel ) ->
            let
                ( newHomeModel, newState, homeCmd ) =
                    Home.update homeMsg homeModel state
            in
            ( { model | pageModel = HomeModel newHomeModel }, newState, Cmd.map homeMsg_ homeCmd )

        ( _, _ ) ->
            ( model, state, Cmd.none )



-- HELPERS


toTitle : PageModel -> String
toTitle model =
    case model of
        HomeModel _ ->
            "Home"

        BlogModel _ ->
            "Blog"

        NotFoundModel _ ->
            "404"


homeMsg_ =
    wrapMsg PageMsg HomeMsg


blogMsg_ =
    wrapMsg PageMsg BlogMsg


notFoundMsg_ =
    wrapMsg PageMsg NotFoundMsg


privateMsg_ =
    wrapMsg LayoutMsg PrivateMsg


publicMsg_ =
    wrapMsg LayoutMsg PublicMsg
