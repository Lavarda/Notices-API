import React from 'react'

import { 
    Container,
    Text,
    Button,
    TextButton,
} from './style'

export const Header =() => {
    return(
        <Container>
            <Text> News </Text>
            <Button 
                onPress={ () => { 
                    console.log("TESTEe")
                }}
            >
                <TextButton> Sort </TextButton>
            </Button>
        </Container>
    )
}