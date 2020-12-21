import React from 'react'

import { 
    Container,
    Loading
} from './style'

const LoadingComponent =(props) => {
    return(
        <Container>
            <Loading animating={props.loading} size={props.size}/>
        </Container>
    )
}

export default LoadingComponent;