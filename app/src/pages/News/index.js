import React from 'react';
import { ScrollView } from 'react-native';
import api from '../../utils/api'
import { notices } from '../../constants/Url'
import Loading from '../../components/Loading'
import Card from '../../components/Card'
import ModalSort from '../../modals/Sort'

import {
  Container,
  ContainerLoading,
} from './style'

class News extends React.Component {

  state = {
    notices: [],
    loading: false,
  }

  componentWillMount() {
    this.getData()
  }

  async getData() {
    this.setState({ loading: true })
    await api.get(notices.list).then( res => {
      this.setState({
        notices: res.data.value,
        loading: false,
      })
    }).catch( err => {
      console.warn("ERROR", err)
      this.setState({
        loading: false,
      })
    })
  }

  render() {
    console.log("MODAL", this.props.route.params.modal)
    console.log("PROPS", this.props)
    return (
        <Container>
          {this.state.loading 
            ? 
              <ContainerLoading>
                <Loading loading={this.state.loading} size="larger"/>
              </ContainerLoading>
            : 
              <ScrollView>
                {this.state.notices.map( (v,i) => {
                  return (
                      <Card 
                        navigation={this.props.navigation}
                        key={i}
                        image={v.image_url}
                        title={v.title}
                        author={v.authors}
                        date={v.date}
                        content={v.content}
                      />
                  )
                })}
              </ScrollView>
          }
          <ModalSort modal={this.props.route.params.modal}></ModalSort>
        </Container>
    )
  }
}

export default News;