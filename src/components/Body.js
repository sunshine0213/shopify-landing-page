import React from 'react'

function Body({ Icon, Title, Paragraph}) {
    return (
        <div className="body">
            <img src={Icon} className="body--img"/>
            <h1 className="body--title">{Title}</h1>
            <p className="body--paragraph">{Paragraph}</p>
        </div>
    )
}

export default Body
