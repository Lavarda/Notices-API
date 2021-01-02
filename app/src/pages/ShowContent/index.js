import React from 'react';

import {
  Container,
  Title,
  Image,
  Content,
  ViewSecondary,
  TextAuthor,
  TextDate,
  TextPublished,
} from './style'

const ShowContent = (props) => {
  console.log("DATA", props.route.params.data)
  return (
        <Container>
            <Title>{props.route.params.data.title}</Title>
            <ViewSecondary>
              <TextAuthor>By {props.route.params.data.author}</TextAuthor>
              <TextDate>Posted in {props.route.params.data.date}</TextDate>
            </ViewSecondary>
            <Image source={props.route.params.data.image}></Image>
            <Content>{props.route.params.data.content}</Content>
            <TextPublished>Published by {props.route.params.data.website}</TextPublished>
        </Container>
  )
}

export default ShowContent;