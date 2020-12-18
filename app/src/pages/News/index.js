import { StatusBar } from 'expo-status-bar';
import React, {
  useState,
  useEffect,
} from 'react';
import { Text } from 'react-native';
import api from '../../utils/api'
import { notices } from '../../constants/Url'

import {
  Container,
} from './style'

class News extends React.Component {

  state = {
    notices: []
  }

  componentDidMount() {
    this.getData()
  }

  async getData() {
    fetch('https://news-website-cheesecake-lab.herokuapp.com/notices/list').then( res => {
      this.setState({
        notices: res.value,
      }, () => {
        console.log(this.state.notices)
      })
    })
    // const res = await api.get(notices.list)
  }

  render() {
    return (
        <Text> Teste </Text>
    )
  }
}

// const News = async () => {
  
//   const [ state, setState ] = useState([])
//   const [ hasError, setHasError ] = useState(false)
//   const [ loading, setLoading ] = useState(false)

//   useEffect( async () => {
//     setLoading(true)
//     await api.get(notices.list).then( res => { 
//       setState(res.data)
//       setLoading(false)
//     }).catch(err => {
//       setHasError(true)
//       setLoading(false)
//     })
//   }, [])

//   return (
//     <Container>
//       <Text>Teste</Text>
//       <StatusBar style="auto" />
//     </Container>
//   )
// }

export default News;