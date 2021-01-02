import styled from 'styled-components/native';
import palette from '../../constants/Color'

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Loading = styled.ActivityIndicator`
    color: ${palette.colors.blue}
`