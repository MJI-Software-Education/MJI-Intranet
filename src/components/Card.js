import React from 'react'

export const Card = ({color, icono, title, subtitle, iconColor, circleColor}) => {
    return (
        <div className="card" style={{backgroundColor:`${color}`}}>
                        <div className="columna">
                            <div className="circulo" style={{color:`${iconColor}`, backgroundColor:`${circleColor}`}}>
                                {icono}
                            </div>
                        <h1>{title}</h1>
                <h1>{subtitle}</h1>
            </div>
        </div>
    )
}
