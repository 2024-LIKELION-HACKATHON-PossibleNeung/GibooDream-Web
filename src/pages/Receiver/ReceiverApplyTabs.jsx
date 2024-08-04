import { useState } from "react";
import styled from "styled-components";
import EmailInsertBox from "./components/Register/SignUpInsertBox";
import NickNameInsertBox from "./components/Register/SignUpInsertBox";
import PassWordInsertBox from "./components/Register/SignUpInsertBox";
import PassWordCheckInsertBox from "./components/Register/SignUpInsertBox";
import DreamBagComposition from "./components/ReceiverApplyTabs/DreamBagComposition";
import WarmBagComposition from "./components/ReceiverApplyTabs/WarmBagComposition";

const ReceiverApplyTabs = () => {
    // 상태 추가
    const [selectedCart, setSelectedCart] = useState("");

    // 라디오 버튼 클릭 핸들러
    const handleRadioChange = (event) => {
        setSelectedCart(event.target.value);
    };

    return (
        <Container>
            <GibooDreamLogo>
                <img src="../../../public/images/LogoGroup.svg" alt="logo" />
            </GibooDreamLogo>
            <InsertInfoContainer>
                <Title>꿈꾸미 등록</Title>
                <FormContainerBig>
                    <SmallContainer>
                        <Subtitle>*이름</Subtitle>
                        <EmailInsertBox placeholder="이름을 입력하세요" />
                    </SmallContainer>

                    <SmallContainer>
                        <Subtitle>*주소</Subtitle>
                        <NickNameInsertBox placeholder="경기도 용인시 처인구 모현읍 외대로 81" />
                    </SmallContainer>

                    <SmallContainer>
                        <Subtitle>*세부 주소</Subtitle>
                        <PassWordInsertBox placeholder="학생회관 4층 n호" />
                    </SmallContainer>

                    <SmallContainer>
                        <Subtitle>*연락처</Subtitle>
                        <PassWordCheckInsertBox placeholder="01075546565" />
                    </SmallContainer>

                    <SmallContainer>
                        <Subtitle>*주민등록번호</Subtitle>
                        <PassWordCheckInsertBox placeholder="991225-1234567" />
                    </SmallContainer>
                </FormContainerBig>
            </InsertInfoContainer>

            <SelectDonateCart>
                <Title2>후원신청 바구니 선택</Title2>
                <CheckBoxRow>
                    <RadioButtonContainer>
                        <RadioButton
                            type="radio"
                            id="warmBag"
                            name="donationCart"
                            value="따숨바구니"
                            checked={selectedCart === "따숨바구니"}
                            onChange={handleRadioChange}
                        />
                        <Label htmlFor="warmBag">따숨바구니</Label>
                    </RadioButtonContainer>
                    <RadioButtonContainer>
                        <RadioButton
                            type="radio"
                            id="dreamBag"
                            name="donationCart"
                            value="꿈바구니"
                            checked={selectedCart === "꿈바구니"}
                            onChange={handleRadioChange}
                        />
                        <Label htmlFor="dreamBag">꿈바구니</Label>
                    </RadioButtonContainer>
                </CheckBoxRow>
            </SelectDonateCart>

            {selectedCart === "따숨바구니" && <WarmBagComposition />}
            {selectedCart === "꿈바구니" && <DreamBagComposition />}
        </Container>
    );
};

export default ReceiverApplyTabs;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto; /* 세로로 넘치는 내용 스크롤 가능 */
    margin-bottom: 2rem;
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

const InsertInfoContainer = styled.div``;

const Title = styled.div`
    color: #000;
    font-family: Pretendard;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 2.1rem */
    margin-bottom: 1rem;
`;

const Title2 = styled.div`
    color: #000;
    font-family: Pretendard;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 2.1rem */
    margin-bottom: 0.5rem;
`;

const FormContainerBig = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const Subtitle = styled.div`
    font-size: 1rem;
    margin-bottom: 0.5rem;
`;

const SmallContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
`;

const SelectDonateCart = styled.div`
    display: flex;
    flex-direction: column;
    width: 17.75rem;
`;

const CheckBoxRow = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem; /* 각 버튼 간의 간격 */
`;

const RadioButtonContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

const RadioButton = styled.input`
    width: 1rem;
    height: 1rem;
    appearance: none; /* 기본 스타일 제거 */
    background-color: #fff;
    border: 1px solid #000;
    border-radius: 0; /* 사각형 모양 */
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    outline: none;
    position: relative;

    &:checked {
        background-color: #fff; /* 체크되었을 때 배경색을 흰색으로 */
    }

    &:checked::before {
        content: "V";
        color: #000; /* V 표시를 검은색으로 */
        font-size: 0.75rem;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

const Label = styled.label`
    color: #000;
    font-feature-settings: 'calt' off;
    font-family: Pretendard;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 1.3125rem */
    letter-spacing: -0.00875rem;
`;