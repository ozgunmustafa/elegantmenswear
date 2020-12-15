import React from 'react'

const Panel = ({title, children,className}) => {
    return (
        <div className={`${className} custom-panel`}>
        <div className="custom-panel-title">{title}</div>
        <div className="custom-panel-body">
            {children}
        </div>
      </div>
    )
}

export default Panel
