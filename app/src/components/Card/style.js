import styled from 'styled-components/native';
import pallete from '../../constants/Color'
import layout from '../../constants/Layout'
import Icon from 'react-native-vector-icons/FontAwesome';

export const Container = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 10px;
    width: 100vw;
    height: 80px;
    border-bottom-color: ${pallete.colors.gray};
    border-bottom-width: 1;
    border-bottom-style: solid;
`

export const ContainerSecondary = styled.View`
    display: flex;
    flex-direction: column;
    width: ${ layout.width < 400 ? '83vw' : layout.width > 760 ? '91vw' : '85vw' }; 
`

export const Image = styled.Image`
    width: 45px;
    height: 45px;
    border-radius: 22.5px;
    
`

export const ViewRow = styled.View`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`

export const TextTitle = styled.Text`
    max-width: 70vw;
    margin-left: 10px;
    color: ${ props => props.opened ? pallete.colors.gray : pallete.colors.black};
    font-size: 16px;
    font-weight: ${props => props.opened ? 'normal' : 'bold'};
    letter-spacing: 0;
    line-height: 22px;
`

export const IconStyled = styled(Icon)`
`

export const TextSecondary = styled.Text`
    max-width: 50vw;
    margin-left: 10px;
    color: ${pallete.colors.gray};
    font-size: 14px;
    letter-spacing: 0;
    line-height: -0.22px;
`