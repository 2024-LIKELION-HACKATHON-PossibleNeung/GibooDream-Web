import styled from "styled-components";
import { useNavigate } from "react-router-dom"
import KakaoLoginButton from "../../components/BigButtonBlack";
import LoginButton from "../../components/BigButtonBlack";
import SignUpButton from "../../components/BigButtonBlack";
import IdInsertBox from "./components/Login/BigInsertBox";
import PwInsertBox from "./components/Login/BigInsertBox";

const Login = () => {
    const navigate = useNavigate();

    const handleFindIdClick = () => {
        navigate("/FindId");
    };

    const handleFindPwClick = () => {
        navigate("/FindPw")
    };

    return (
        <Container>
            <GibooDreamLogo><img src="../../../public/images/기부드림 로고 1.svg" alt="logo"/></GibooDreamLogo>
            <BigButtonContainer>
                <KakaoLoginButton bigblacktext="카카오톡 로그인"/>
                <IdPwInsertColumnContainer>
                    <IdInsertBox/>
                    <PwInsertBox/>
                </IdPwInsertColumnContainer>
                <LoginButtonColumnContainer>
                    <LoginButton bigblacktext="로그인"/>
                    <SignUpButton bigblacktext="회원가입"/>
                </LoginButtonColumnContainer>
            </BigButtonContainer>
            <FindingContainerRow>
                    <FindIdButton onClick={handleFindIdClick}>아이디 찾기</FindIdButton>
                    <FindPwButton onClick={handleFindPwClick}>비밀번호 찾기</FindPwButton>
            </FindingContainerRow>
        </Container>
    );
};

export default Login;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const GibooDreamLogo = styled.div`
    img {
        width: 10rem; /* 원하는 너비로 설정 */
        height: auto; /* 높이를 자동으로 조절 */
    }
`

const BigButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

const IdPwInsertColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`
const LoginButtonColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`
const FindingContainerRow = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1.7rem;
    margin-left: 7rem;
    margin-top: 0.5rem;
`
const FindIdButton = styled.div`
    color: #000;
    font-feature-settings: 'calt' off;
    font-family: Pretendard;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;
    letter-spacing: -0.00875rem;
    cursor: pointer; /* 커서 모양을 손가락 모양으로 변경 */

    &:hover {
        color: #007BFF; /* 호버 시 텍스트 색상 변경, 원하는 색상으로 설정 */
    }
`

const FindPwButton = styled.div`
    color: #000;
    font-feature-settings: 'calt' off;
    font-family: Pretendard;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;
    letter-spacing: -0.00875rem;
    cursor: pointer; /* 커서 모양을 손가락 모양으로 변경 */

    &:hover {
        color: #007BFF; /* 호버 시 텍스트 색상 변경, 원하는 색상으로 설정 */
    }
`

