import styled from "styled-components";
import ApplyButton from "../../../../components/JaeWoo/BigRedButton";

const WarmBagComposition = () => {
    return (
    <Container>
        <CompositionWarmBag>
            <Title>따숨바구니 구성</Title>
            <WhatIsWarmBag>
                <img src="../../../src/assets/images/JaeWoo/WhatIsWarmBag.svg" alt="WhatIsWarmBag" />
            </WhatIsWarmBag>
        </CompositionWarmBag>

        <NoWhatIWant><img src="../../../src/assets/images/JaeWoo/원하는 물품이 없어요!.svg" alt="nowhatiwant"/></NoWhatIWant>

        <LetsUseDreamBag><img src="../../../src/assets/images/JaeWoo/꿈바구니로 원하는 물품 후원받기.svg" alt="nowhatiwant"/></LetsUseDreamBag>
    
        <ApplyButton text={"후원  신청하기"}/>
    </Container>

    );
};

export default WarmBagComposition

const Container = styled.div`
    width: 17.75rem;
`

const Title = styled.div`
    color: #000;
    font-family: Pretendard;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 2.1rem */
`;

const CompositionWarmBag = styled.div`
    display: flex;
    flex-direction: column;
`;

const WhatIsWarmBag = styled.div`
    color: var(--WF-Base-600, #717D96);
    font-feature-settings: 'calt' off;
    font-family: "Single Day";
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem; /* 171.429% */
    letter-spacing: -0.00875rem;
`;

const NoWhatIWant = styled.div`
    color: var(--WF-Base-900, #1A202C);
    font-feature-settings: 'calt' off;
    font-family: "Single Day";
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem; /* 171.429% */
    letter-spacing: -0.00875rem;
`

const LetsUseDreamBag = styled.div`
    width: 11.5rem;
    height: 1.5rem;
    flex-shrink: 0;
`


