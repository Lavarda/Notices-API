import styled from 'styled-components/native';
import palette from '../../constants/Color'

export const Container = styled.View`
    width: 100%;
    height: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
`;

export const Text = styled.Text`
    font-size: 17;
    font-weight: bold;
    color: ${palette.colors.black};
    letter-spacing: -0.41px;
    text-align: center;
    line-height: 22px;
`;

export const Button = styled.TouchableOpacity`
    position: absolute;
    justify-content: center;
    align-items: center;
    left: 10px;
`;
