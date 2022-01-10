import * as React from 'react'

export default function MainWrapper({children}: any,  ref:  React.ForwardedRef<HTMLDivElement > ) {
    return (
        <div id="main" ref ={ref} className="mx-0 mt-16 block">
            {children}
        </div>
    )
}