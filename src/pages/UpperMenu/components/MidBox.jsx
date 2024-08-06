import styled from "styled-components";

const MidBox = () => {
    return (
        <Container>
            <Subtitle>나의 꿈 후원액</Subtitle>
            <Won>$0원</Won> {/* 실제 금액을 넣어야 합니다 */}
        </Container>
    );
};

const Container = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.3rem;
    height: 13vh;
`;

const Subtitle = styled.div`
    color: #000;
    font-feature-settings: 'calt' off;
    font-family: Pretendard;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;
    letter-spacing: -0.00875rem;
`;

const Won = styled.div`
    /* Won 컴포넌트에 대한 스타일을 여기에 추가하세요 */
`;

export default MidBox;