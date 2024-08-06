import { useNavigate } from 'react-router-dom'; // useHistory 대신 useNavigate를 임포트
import styled from "styled-components";
import ReviewButton from "../../components/JaeWoo/BigRedButton";

const MoneyCheck = () => {
    const navigate = useNavigate(); // history 대신 navigate 함수를 생성

    const handleReviewClick = () => {
        navigate('/writereview'); // history.push 대신 navigate를 사용
    };
    
    return (
        <Container>
            <GibooDreamLogo>
                <img src="../../../public/images/LogoGroup.svg" alt="logo" />
            </GibooDreamLogo>
            <TitleContainer>
                <GetMoneyDone>모금완료</GetMoneyDone>
                <GetMoneyDoneItem>모금완료 물품</GetMoneyDoneItem>
                <YourDreamBag>{}님의 꿈바구니</YourDreamBag>
            </TitleContainer>
            <ItemsContainer>
                <DummyDiv>
                    <DummyRow1>
                        <ItemImg><img src="../../../src/assets/images/JaeWoo/DummyShoeMoneyCheck.svg"/></ItemImg>
                        <DummyColumn1>
                            <ExplanationCheckRow>
                                <ItemExplanation>짱구는 못말려 실내화 초등학생 초등학교.</ItemExplanation>
                                <ChangingCheck><img src="../../../src/assets/images/JaeWoo/CheckMark.svg"/></ChangingCheck>
                            </ExplanationCheckRow>

                            <QuantityPriceRow>
                                <Quantity>1개</Quantity>
                                <Price>zzz원</Price>
                            </QuantityPriceRow>
                        </DummyColumn1>
                    </DummyRow1>
                </DummyDiv>
            </ItemsContainer>
            <TotalContainerColumn>
                <TotalContainerRow>
                    <WhatTotal>꿈바구니 합계</WhatTotal>
                    <TotalPrice>ㅋㅋ원</TotalPrice>
                </TotalContainerRow>
                <TotalContainerRow>
                    <WhatTotal>모금 완료 물품 합계</WhatTotal>
                    <TotalPriceDone>ㅋㅋㅋㅋ원</TotalPriceDone>
                </TotalContainerRow>
            </TotalContainerColumn>
            <ReviewButton text={"후기 작성하기"} onClick={handleReviewClick} />
        </Container>
    );
};

export default MoneyCheck;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
`;

const GibooDreamLogo = styled.div`
    img {
        width: 9.5rem;
        height: 4rem;
        flex-shrink: 0;
    }
    margin: 2rem;
`;

const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 72.5%;
    gap: 1.5rem;
`;

const GetMoneyDone = styled.div`
    color: #000;

    /* WF Headings/Heading XS */
    font-family: Pretendard;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 1.75rem */
`;

const GetMoneyDoneItem = styled.div`
    color: #000;

    /* WF Headings/Heading XXS */
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 1.4rem */
`;

const YourDreamBag = styled.div`
    color: var(--WF-Base-800, #2D3648);
    font-feature-settings: 'calt' off;
    font-family: Inter;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 1.125rem */
    letter-spacing: -0.0075rem;
`;

const ItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 18.125rem;
    height: 6.25rem;
`

const DummyDiv = styled.div`
    
`

const ItemImg = styled.div`
    width: 6.25rem;
    height: 6.25rem;
    flex-shrink: 0;
`

const DummyRow1 = styled.div`
    display: flex;
    flex-direction: row;
`

const DummyColumn1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const ItemExplanation = styled.div`
    width: 10.20675rem;
    transform: rotate(0.153deg);
    color: var(--WF-Base-800, #2D3648);
    font-feature-settings: 'calt' off;
    font-family: Inter;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 1.125rem */
    letter-spacing: -0.0075rem;
`

const QuantityPriceRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const TotalContainerColumn = styled.div`
    display: flex;
    flex-direction: column;
    width: 72.5%;
`

const TotalContainerRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const WhatTotal = styled.div`
    width: 8rem;
    transform: rotate(0.153deg);
    color: var(--WF-Base-800, #2D3648);
    font-feature-settings: 'calt' off;
    font-family: Inter;
    font-size: 0.8125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 1.21875rem */
    letter-spacing: -0.00813rem;
`

const TotalPrice = styled.div`
    width: 4.03763rem;
    transform: rotate(0.153deg);
    color: var(--WF-Base-800, #2D3648);
    text-align: right;
    font-feature-settings: 'calt' off;
    font-family: Inter;
    font-size: 0.8125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 1.21875rem */
    letter-spacing: -0.00813rem;
`

const TotalPriceDone = styled.div`
    width: 4.03763rem;
    transform: rotate(0.153deg);
    color: var(--WF-Base-800, #2D3648);
    text-align: right;
    font-feature-settings: 'calt' off;
    font-family: Inter;
    font-size: 0.8125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 1.21875rem */
    letter-spacing: -0.00813rem;
`

const ExplanationCheckRow = styled.div`
    display: flex;
    flex-direction: row;
`

const ChangingCheck = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    flex-shrink: 0;
`

const Quantity = styled.div`
    width: 2.212rem;
    transform: rotate(0.153deg);
    color: var(--WF-Base-800, #2D3648);
    font-feature-settings: 'calt' off;
    font-family: Inter;
    font-size: 0.8125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 1.21875rem */
    letter-spacing: -0.00813rem;
`

const Price = styled.div`
    width: 3.47356rem;
    transform: rotate(0.153deg);
    color: var(--WF-Base-800, #2D3648);
    text-align: right;
    font-feature-settings: 'calt' off;
    font-family: Inter;
    font-size: 0.8125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 1.21875rem */
    letter-spacing: -0.00813rem;
`