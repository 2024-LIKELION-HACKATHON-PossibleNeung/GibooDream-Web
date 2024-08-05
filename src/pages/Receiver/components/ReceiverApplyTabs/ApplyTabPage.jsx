import { useState } from "react";
import styled from "styled-components";
import EmailInsertBox from "../Register/SignUpInsertBox";
import NickNameInsertBox from "../Register/SignUpInsertBox";
import PassWordInsertBox from "../Register/SignUpInsertBox";
import PassWordCheckInsertBox from "../Register/SignUpInsertBox";
import DreamBagComposition from "../ReceiverApplyTabs/DreamBagComposition";
import WarmBagComposition from "../ReceiverApplyTabs/WarmBagComposition";

const ApplyTabPage = () => {
    const [selectedCart, setSelectedCart] = useState("");

    const handleRadioChange = (event) => {
        setSelectedCart(event.target.value);
    };

    return (
        <Container>
            <InsertInfoContainer>
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

            <AlignCenterContainer>
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
            </AlignCenterContainer>

            <CompositionContainer>
                {selectedCart === "따숨바구니" && <WarmBagComposition />}
                {selectedCart === "꿈바구니" && <DreamBagComposition />}
            </CompositionContainer>
        </Container>
    );
};

export default ApplyTabPage;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; /* 중앙 정렬 */
    gap: 2rem;
`;

const InsertInfoContainer = styled.div``;

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
    align-items: flex-start; /* 왼쪽 정렬 */
    width: 100%; /* 부모 요소의 너비에 맞추기 */
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

const CompositionContainer = styled.div`
    width: 72.5%; /* 부모 컨테이너의 너비에 맞추기 */
`;

const AlignCenterContainer = styled.div`
    width: 72.5%; /* 부모 컨테이너의 너비에 맞추기 */
    display: flex;
    justify-content: flex-start; /* 왼쪽 정렬 */
    align-items: flex-start; /* 상단 정렬 */
`;