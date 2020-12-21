import React from 'react';
import { ScrollView, Text } from 'react-native';
import Loading from '../../components/Loading'

import {
  Container,
  Title,
  Image,
  Content,
  ViewSecondary,
} from './style'

const ShowContent = (props) => {
  return (
        <Container>
            <Title>{props.route.params.data.title}</Title>
            <Image source={props.route.params.data.image}></Image>
            <Content>{props.route.params.data.content}</Content>
            <ViewSecondary>
              <Text>{props.route.params.data.author}</Text>
              <Text>{props.route.params.data.date}</Text>
            </ViewSecondary>
        </Container>

  )
}

export default ShowContent;