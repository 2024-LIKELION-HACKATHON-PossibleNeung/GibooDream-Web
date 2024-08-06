import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import KakaoLoginButton from "./components/Login/KakaoLoginButton";
import LoginButton from "./components/Login/LoginButton";
import SignUpButton from "./components/Login/SignUpButton";
import BigInsertBox from "./components/Login/BigInsertBox";

const Login = () => {
    const navigate = useNavigate();

    const handleFindIdClick = () => {
        navigate("/FindId");
    };

    const handleFindPwClick = () => {
        navigate("/FindPw");
    };

    const handleLoginClick = () => {
        navigate("/"); // 메인 페이지로 이동
    };

    const handleSignUpClick = () => {
        navigate("/signup"); // 회원가입 페이지로 이동
    };

    return (
        <Container>
            <GibooDreamLogo><img src="../../../public/images/LogoGroup.svg" alt="logo"/></GibooDreamLogo>
            <BigButtonContainer>
                <KakaoLoginButton bigblacktext="카카오톡 로그인"/>
                <IdPwInsertColumnContainer>
                    <BigInsertBox type="text" placeholder="아이디 입력" />
                    <BigInsertBox type="password" placeholder="비밀번호 입력" />
                </IdPwInsertColumnContainer>
                <LoginButtonColumnContainer>
                    <LoginButton bigblacktext="로그인" onClick={handleLoginClick} />
                    <SignUpButton bigblacktext="회원가입" onClick={handleSignUpClick} />
                </LoginButtonColumnContainer>
            </BigButtonContainer>
            <FindingContainerRow>
                    <FindIdButton onClick={handleFindIdClick}>아이디 찾기</FindIdButton>
                    <FindPwButton onClick={handleFindPwClick}>비밀번호 찾기</FindPwButton>
            </FindingContainerRow>
            <Footer><img src="../../../src/assets/images/JaeWoo/WFFooter.svg"/></Footer>
        </Container>
    );
};

export default Login;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const GibooDreamLogo = styled.div`
    img {
    width: 9.5rem;
    height: 4rem;
    flex-shrink: 0;
    }
    margin: 2rem;
`;

const BigButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const IdPwInsertColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const LoginButtonColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
`;

const FindingContainerRow = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1.7rem;
    margin-left: 7rem;
    margin-top: 1rem;
`;

const FindIdButton = styled.div`
    color: var(--WF-Base-600, #717D96);
    font-feature-settings: 'calt' off;

    /* WF Buttons/Button Small */
    font-family: Pretendard;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.5rem; /* 171.429% */
    letter-spacing: -0.00875rem;
    cursor: pointer; /* 커서 모양을 손가락 모양으로 변경 */

    &:hover {
        color: #007BFF; /* 호버 시 텍스트 색상 변경, 원하는 색상으로 설정 */
    }
`;

const FindPwButton = styled.div`
    color: var(--WF-Base-600, #717D96);
    font-feature-settings: 'calt' off;

    /* WF Buttons/Button Small */
    font-family: Pretendard;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.5rem; /* 171.429% */
    letter-spacing: -0.00875rem;
    cursor: pointer; /* 커서 모양을 손가락 모양으로 변경 */

    &:hover {
        color: #007BFF; /* 호버 시 텍스트 색상 변경, 원하는 색상으로 설정 */
    }
`;

const Footer = styled.div`
    margin-top: 1rem;
    width:100
    
    img {
        max-width: 100%;
        height: auto; /* 이미지가 컨테이너의 너비에 맞게 조정됩니다 */
    }
`;
