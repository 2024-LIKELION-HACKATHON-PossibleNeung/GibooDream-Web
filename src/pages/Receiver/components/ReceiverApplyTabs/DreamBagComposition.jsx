import styled from "styled-components";
import MakeDreamBagButton from "../../../../components/JaeWoo/MidRedButton";
import ApplyButton from "../../../../components/JaeWoo/BigRedButton";

const DreamBagComposition = () => {
    return (
        <Container>
            <CompositionWarmBag>
                <Title>꿈바구니 구성</Title>
                
                <WhatIsWarmBag>
                    <img src="../../../src/assets/images/JaeWoo/WhatIsDreamBag.svg" alt="WhatIsDreamBag" />
                </WhatIsWarmBag>

                <GoSsgExplanation>꿈바구니 제품은 SSG.COM에 있는 제품만 가능합니다. 아래 링크에 접속해 나만의 꿈바구니를 만들어주세요! (모바일만 가능)</GoSsgExplanation>

                <MakeDreamBagButtonContainer>
                    <MakeDreamBagButton text={"꿈바구니 만들기"}/>
                </MakeDreamBagButtonContainer>
            </CompositionWarmBag>
            
            <StoryOfDreamer>
                <Title>꿈꾸미 이야기</Title>

                <ContentOfDreamer>
                    미래의 (최대열글자) 꿈꾸는 꿈꾸미에게 꿈을 선물하세요.
                </ContentOfDreamer>

                <CenterAlignContainer>
                    <WhatIsYourStoryDreamer>
                        <PlaceholderText
                            placeholder="내가 그리는 내 미래의 모습은 어떤가요? 꿈바구니가 필요한 당신의 이야기를 적어주세요."
                        />
                    </WhatIsYourStoryDreamer>
                </CenterAlignContainer>
            </StoryOfDreamer>

            <ApplyButton text={"후원  신청하기"}/>
        </Container>
    );
};

export default DreamBagComposition;

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const Title = styled.div`
    color: #000;
    font-family: Pretendard;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
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
    line-height: 1.5rem;
    letter-spacing: -0.00875rem;
`;

const GoSsgExplanation = styled.div`
    color: #000;
    font-feature-settings: 'calt' off;
    font-family: Pretendard;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.00875rem;
`;

const MakeDreamBagButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 1.2rem;
`;

const StoryOfDreamer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%; /* 부모 요소의 너비에 맞추기 */
`;

const ContentOfDreamer = styled.div`
    width: 16.625rem;
    color: var(--WF-Base-800, #2D3648);
    text-align: center;
    font-family: Pretendard;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
`;

const WhatIsYourStoryDreamer = styled.div`
    display: flex;
    width: 20rem;
    height: 37.6875rem;
    padding: 0.75rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.625rem;
    flex-shrink: 0;
    border-radius: 0.375rem;
    border: 2px solid var(--WF-Base-400, #CBD2E0);
    background: var(--WF-Base-White, #FFF);
`;

const CenterAlignContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

const PlaceholderText = styled.textarea`
    width: 100%;
    height: 100%;
    padding: 0.75rem;
    border: none;
    border-radius: 0.375rem;
    background: var(--WF-Base-White, #FFF);
    color: black;
    font-family: Pretendard;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.00875rem;
    resize: none;
    outline: none;
    box-shadow: inset 0 0 0 1px var(--WF-Base-400, #CBD2E0);
    /* Placeholder styling */
    ::placeholder {
        color: var(--WF-Base-500, #A0ABC0);
        font-feature-settings: 'calt' off;
        font-family: Pretendard;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: -0.00875rem;
    }
`;