import styled from 'styled-components/native';
import pallete from '../../constants/Color'

export const Container = styled.View`
  flex: 1;
  background: ${pallete.colors.white} !important;
  align-items: center;
  justify-content: center;
`

export const ContainerLoading = styled.View`
  max-width: 20%;
  align-items: center;
  justify-content: center;
`