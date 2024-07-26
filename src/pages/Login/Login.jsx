import styled from "styled-components";
import KakaoLoginButton from "../../components/BigButtonBlack";
import LoginButton from "../../components/BigButtonBlack";
import SignUpButton from "../../components/BigButtonBlack";
import IdInsertBox from "./components/Login/BigInsertBox";
import PwInsertBox from "./components/Login/BigInsertBox";
import FindIdButton from "./components/Login/FindIdPwButon";
import FindPwButton from "./components/Login/FindIdPwButon";

const Login = () => {
    return (
        <Container>
            <BigButtonContainer>
                <GibooDreamLogo>
                    <img src="../../../public/images/기부드림 로고1.svg" alt="logo"/>
                </GibooDreamLogo>
                <KakaoLoginButton bigblacktext="카카오톡 로그인"/>
                <IdPwInsertColumnContainer>
                    <IdInsertBox/>
                    <PwInsertBox/>
                </IdPwInsertColumnContainer>
                <LoginButtonColumnContainer>
                    <LoginButton bigblacktext="로그인"/>
                    <SignUpButton bigblacktext="회원가입"/>
                </LoginButtonColumnContainer>
                <FindingContainerRow>
                    <FindIdButton/>
                    <FindPwButton/>
                </FindingContainerRow>
            </BigButtonContainer>
        </Container>
    );
};

export default Login;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const BigButtonContainer = styled.div`
    
`

const GibooDreamLogo = styled.div`
    
`

const IdPwInsertColumnContainer = styled.div`
    
`
const LoginButtonColumnContainer = styled.div`
    
`
const FindingContainerRow = styled.div`
    
`


