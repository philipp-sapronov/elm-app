module Store.Main exposing (..)

{-
   Store
   update should:
   1. Manage store
   2. Get massages and return updated state
-}


type Action
    = UpdateConuter Int
    | UpdateTitle String
    | NoOp


type alias Heaidng =
    String


type alias Counter =
    { value : Int
    }


type alias State =
    { homeCounter : Counter
    , blogCounter : Counter
    , notFoundTitle : Heaidng
    }


dispatch : State -> Action -> State
dispatch prevState action =
    case action of
        UpdateTitle payload ->
            -- let
            --     _ =
            --         Debug.log "update" payload
            -- in
            { prevState | notFoundTitle = payload }

        _ ->
            prevState


none : Action
none =
    NoOp


state : State
state =
    { homeCounter = { value = 0 }
    , blogCounter = { value = 0 }
    , notFoundTitle = ""
    }
