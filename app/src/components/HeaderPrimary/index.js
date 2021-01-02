import React from 'react'
import palette from '../../constants/Color'
import { 
    Container,
    Text,
} from './style'

export const HeaderPrimary = ( props ) => {
    return(
        <Container>
            <Text numberOfLines={1} ellipsizeMode={'tail'}> {props.route.params.data.title} </Text>
        </Container>
    )
}