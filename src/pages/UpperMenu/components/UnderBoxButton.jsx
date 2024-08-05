import styled from "styled-components";
import PropTypes from 'prop-types';

const UnderBoxButton = ({ buttonName }) => {
    return (
        <Container>
            <WidthBox>
                <ButtonName>{buttonName}</ButtonName>
                <RightArrow><img src="../../../src/assets/images/JaeWoo/RightArrow.svg" alt="RightArrow"/></RightArrow>
            </WidthBox>
        </Container>
    );
};

const Container = styled.div`
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const WidthBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 5.7vh;
    width: 15rem;
`

const ButtonName = styled.div`
    
`

const RightArrow = styled.div`
    
`

UnderBoxButton.propTypes = {
    buttonName: PropTypes.string.isRequired, // `buttonName`은 필수로 문자열이어야 함
};

export default UnderBoxButton
