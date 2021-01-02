import styled from 'styled-components/native';
import pallete from '../../constants/Color'

export const Container = styled.View`
  flex: 1;
  background: ${pallete.colors.white} !important;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
`

export const Title = styled.Text`
  padding-top: 20px;
  color: ${pallete.colors.black};
  font-size: 1.4rem;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 22px;
`

export const Image = styled.Image`
  margin-top: 2vh;
  margin-bottom: 2vh;
  width: 100%;
  height: 30vh;
  border-radius: 10px;
`
export const ViewSecondary = styled.View`
  margin-top: 5vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const TextAuthor = styled.Text`
  color: ${pallete.colors.black};
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 22px;
`

export const TextDate = styled.Text`
  color: ${pallete.colors.gray};
  font-size: 0.8rem;
  font-weight: bold;
  font-weight: normal;
  letter-spacing: 0;
  line-height: 22px;
`

export const Content = styled.Text`
  text-align: justify;
  font-size: 14px;
  font-weight: normal;
`

export const TextPublished = styled.Text`
  color: ${pallete.colors.gray};
  font-weight: bold;
  position: absolute;
  bottom: 20px;
  left: 20px;
  font-size: 0.8rem;
  font-weight: normal;
  letter-spacing: 0;
  line-height: 22px;
`
