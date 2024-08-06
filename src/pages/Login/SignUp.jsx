import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import EmailInsertBox from "./components/SignUp/SignUpInsertBox";
import NickNameInsertBox from "./components/SignUp/SignUpInsertBox";
import PassWordInsertBox from "./components/SignUp/SignUpInsertBox";
import PassWordCheckInsertBox from "./components/SignUp/SignUpInsertBox";
import IdentifyButton from "./components/SignUp/BigRedButton";
import BigRedButton from "./components/SignUp/BigRedButton";

const SignUp = () => {
    const navigate = useNavigate();
    const [userType, setUserType] = useState("");
    const [agreements, setAgreements] = useState({
        over14: false,
        termsOfService: false,
        privacyPolicy: false,
        marketing: false,
        newsletter: false,
    });

    const handleUserTypeChange = (event) => {
        setUserType(event.target.value);
    };

    const handleAgreementChange = (event) => {
        const { name, checked } = event.target;
        setAgreements((prev) => ({ ...prev, [name]: checked }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("선택된 사용자 타입:", userType);
        console.log("동의 항목:", agreements);
        navigate("/login");
    };

    return (
        <Container>
            <GibooDreamLogo>
                <img src="../../../public/images/LogoGroup.svg" alt="logo" />
            </GibooDreamLogo>
            <InsertInfoContainer>
                <Title>이지기부 회원가입</Title>
                <FormContainerBig onSubmit={handleSubmit}>
                    
                    <SmallContainer>
                        <Subtitle>*구분</Subtitle>
                        <Form>
                            <Label>
                                <input
                                    type="radio"
                                    value="personal"
                                    checked={userType === "personal"}
                                    onChange={handleUserTypeChange}
                                />
                                개인
                            </Label>
                            <Label>
                                <input
                                    type="radio"
                                    value="company"
                                    checked={userType === "company"}
                                    onChange={handleUserTypeChange}
                                />
                                기업
                            </Label>
                            <Label>
                                <input
                                    type="radio"
                                    value="foreigner"
                                    checked={userType === "foreigner"}
                                    onChange={handleUserTypeChange}
                                />
                                외국인
                            </Label>
                        </Form>
                    </SmallContainer>

                    <SmallContainer>
                        <Subtitle>*이메일</Subtitle>
                        <EmailInsertBox placeholder="possibleNeung@gmail.com" />
                    </SmallContainer>

                    <SmallContainer>
                        <Subtitle>*닉네임</Subtitle>
                        <NickNameInsertBox placeholder="닉네임을 입력해주세요" />
                    </SmallContainer>

                    <SmallContainer>
                        <Subtitle>*비밀번호</Subtitle>
                        <PassWordInsertBox placeholder="8-16자리의 비밀번호를 입력해주세요" />
                    </SmallContainer>

                    <SmallContainer>
                        <Subtitle>*비밀번호 확인</Subtitle>
                        <PassWordCheckInsertBox placeholder="비밀번호를 한 번 더 입력해주세요" />
                    </SmallContainer>

                    <SmallContainer>
                        <Subtitle>*휴대폰 본인인증</Subtitle>
                        <IdentifyButton text="인증하기" />
                    </SmallContainer>

                </FormContainerBig>
            </InsertInfoContainer>
            <AgreementContainer>
                <Title>서비스 항목 동의</Title>
                <SmallTitle>사이트 이용을 위한 약관에 동의</SmallTitle>
                <CheckboxContainer>
                    <Label>
                        <input
                            type="checkbox"
                            name="over14"
                            checked={agreements.over14}
                            onChange={handleAgreementChange}
                        />
                        14세 이상입니다. (필수)
                    </Label>
                    <Label>
                        <input
                            type="checkbox"
                            name="termsOfService"
                            checked={agreements.termsOfService}
                            onChange={handleAgreementChange}
                        />
                        이지기부 이용약관 (필수)
                    </Label>
                    <Label>
                        <input
                            type="checkbox"
                            name="privacyPolicy"
                            checked={agreements.privacyPolicy}
                            onChange={handleAgreementChange}
                        />
                        개인정보 수집 및 이용 (필수)
                    </Label>
                    <Label>
                        <input
                            type="checkbox"
                            name="marketing"
                            checked={agreements.marketing}
                            onChange={handleAgreementChange}
                        />
                        마케팅 개인정보 수집 및 이용 동의 (선택)
                    </Label>
                    <Label>
                        <input
                            type="checkbox"
                            name="newsletter"
                            checked={agreements.newsletter}
                            onChange={handleAgreementChange}
                        />
                        뉴스레터, 소식지 등 홍보 수신 동의 (선택)
                    </Label>
                </CheckboxContainer>
            </AgreementContainer>
            <BigRedButton text="회원가입 완료" onClick={handleSubmit} />
        </Container>
    );
};

export default SignUp;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto; /* 세로로 넘치는 내용 스크롤 가능 */
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

    /* WF Headings/Heading S */
    font-family: Pretendard;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 2.1rem */
    margin-bottom: 1rem;
`;

const FormContainerBig = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const Subtitle = styled.div`
    font-size: 1rem;
    margin-bottom: 0.5rem;
`;

const Form = styled.div`
    display: flex;
    flex-direction: row; /* 라디오 버튼들을 한 줄로 정렬 */
    gap: 1rem; /* 라디오 버튼 간 간격 조절 */
    align-items: center; /* 세로 축에서 가운데 정렬 */
    flex-wrap: wrap; /* 좁은 화면에서 줄바꿈 허용 */
    justify-content: flex-start; /* 왼쪽 정렬 */
`;

const Label = styled.label`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

const AgreementContainer = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    max-width: 500px;
    overflow-y: auto; /* 세로로 넘치는 내용 스크롤 가능 */
    margin-bottom: 2rem;
`;

const SmallTitle = styled.div`
    font-size: 1rem;
    margin-bottom: 1rem;
`;

const CheckboxContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

const SmallContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
`;