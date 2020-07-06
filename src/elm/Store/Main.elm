module Store.Main exposing (..)


type alias Counter =
    { value : Int
    }


type alias Store =
    { homeCounter : Counter
    , blogCounter : Counter
    , notFoundTitle : Heaidng
    }


type alias Heaidng =
    { value : String
    }


store : Store
store =
    { homeCounter = { value = 0 }
    , blogCounter = { value = 0 }
    , notFoundTitle = { value = "NotFound" }
    }
