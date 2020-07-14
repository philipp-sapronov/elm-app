module Pages.Home.Pagination exposing (..)

-- import Html.Attributes exposing (class)

import Html exposing (button, div)
import Html.Attributes as Attrs
import Html.Events as Events
import Svg exposing (..)
import Svg.Attributes exposing (..)



--  VIEW


view : { onNext : msg, onPrev : msg } -> Html.Html msg
view model =
    div [ Attrs.class "pagination" ]
        [ buttonView arrowLeft { disabled = True, onClick = model.onPrev }
        , buttonView arrowRight { disabled = False, onClick = model.onNext }
        ]



--  HELPERS


buttonView icon { disabled, onClick } =
    button [ Attrs.class "btn", Attrs.disabled disabled, Events.onClick onClick ] [ icon ]


arrowLeft =
    svg [ width "34", height "8", viewBox "0 0 34 8", fill "none" ]
        [ Svg.path [ class "arrow-left", d "M0.646446 3.64645C0.451185 3.84171 0.451185 4.15829 0.646446 4.35356L3.82843 7.53554C4.02369 7.7308 4.34027 7.7308 4.53553 7.53554C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17158C4.7308 0.976314 4.7308 0.659731 4.53553 0.464469C4.34027 0.269207 4.02369 0.269207 3.82843 0.464469L0.646446 3.64645ZM32 3.5L1 3.5L1 4.5L32 4.5L32 3.5Z" ] []
        ]


arrowRight =
    svg [ width "34", height "8", viewBox "0 0 34 8", fill "none" ]
        [ Svg.path [ class "arrow-right", d "M33.3536 4.35356C33.5488 4.1583 33.5488 3.84171 33.3536 3.64645L30.1716 0.464471C29.9763 0.269208 29.6597 0.269208 29.4645 0.464471C29.2692 0.659733 29.2692 0.976315 29.4645 1.17158L32.2929 4L29.4645 6.82843C29.2692 7.02369 29.2692 7.34028 29.4645 7.53554C29.6597 7.7308 29.9763 7.7308 30.1716 7.53554L33.3536 4.35356ZM-7.49561e-08 4.5L33 4.5L33 3.5L7.49561e-08 3.5L-7.49561e-08 4.5Z" ] []
        ]
