module Session exposing (..)

import Html exposing (Html)



-- TYPES


type Msg
    = NoOp


type Session
    = Auth User
    | Guest


type alias User =
    { uid : String
    , email : String
    }



-- VIEW


view : Session -> Maybe User
view model =
    case model of
        Auth user ->
            Just mockUser

        Guest ->
            Nothing



--  UPDATE


update : Msg -> Session -> ( Session, Cmd msg )
update msg model =
    ( model, Cmd.none )



-- HELPERS


mockUser : User
mockUser =
    { uid = "xxx-yyy-zzz"
    , email = "user@email.com"
    }
