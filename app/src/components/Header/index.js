import React from 'react'

import { 
    Container,
    Text,
    Button,
    TextButton,
} from './style'

export const Header = ( props ) => {
    return(
        <Container>
            <Text> News </Text>
            <Button 
                onPress={ () => { 
                    props.navigation.setParams({
                        modal: true,
                    })
                    console.log("MODAL OK", props.route.params.modal )
                }}
            >
                <TextButton> Sort </TextButton>
            </Button>
        </Container>
    )
}