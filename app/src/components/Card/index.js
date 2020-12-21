import React, { 
    useState
} from 'react'
import palette from '../../constants/Color'
import { 
    Container,
    ContainerSecondary,
    Image,
    TextSecondary,
    TextTitle,
    ViewRow,
    IconStyled,
} from './style'


const Card =(props) => {

    const [ opened, setOpened ] = useState(false)

    return(
        <Container onPress={ () => { 
            if ( opened ) {
                setOpened(false)
            } else {
                setOpened(true)
                props.navigation.navigate('ShowContent', {
                    data: {
                        title: props.title,
                        image: props.image,
                        content: props.content,
                        author: props.author,
                        date: props.date
                    }
                })
            }
        }}>
            <Image source={props.image}/>
            <ContainerSecondary>
                <ViewRow>
                    <TextTitle opened={opened}  numberOfLines={2} ellipsizeMode={'tail'}>{props.title}</TextTitle>
                    <IconStyled name="chevron-right" size={12} color={palette.colors.gray}/> 
                </ViewRow>
                <ViewRow>
                    <TextSecondary opened={opened}  numberOfLines={1} ellipsizeMode={'tail'}>{props.author}</TextSecondary>
                    <TextSecondary opened={opened} >{props.date}</TextSecondary>
                </ViewRow>
            </ContainerSecondary>
        </Container>
    )
}

export default Card;