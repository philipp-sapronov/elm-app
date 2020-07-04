module Session exposing (..)

import Browser.Navigation as Nav


type Session
    = Session Nav.Key
