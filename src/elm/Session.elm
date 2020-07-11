module Session exposing (..)

import Html exposing (Html)



-- import Store.Main exposing (Store, store)
{-
   Session
-}


type Msg
    = NoOp



{-
   VIEW should
   1: If user is authorezied return Just User
   2: If user doesn't authorized return Nothing
-}


view : Session -> Maybe User
view model =
    case model of
        Auth user ->
            Just mockUser

        Guest ->
            Nothing


type Session
    = Auth User
    | Guest



{-
   UPDATE should:
   1: Manage user data
   2: Get message and return authorization state
   3: Return cmd with getting authorization state
-}


update : Msg -> Session -> ( Session, Cmd msg )
update msg model =
    ( model, Cmd.none )


mockUser : User
mockUser =
    { uid = "xxx-yyy-zzz"
    , email = "user@email.com"
    }


type alias User =
    { uid : String
    , email : String
    }
