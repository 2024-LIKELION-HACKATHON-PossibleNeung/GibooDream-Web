import styled, {keyframes} from "styled-components";
import UpperBox from "./components/UpperBox"
import MidBox from "./components/MidBox"
import UnderBox from "./components/UnderBox"

const slideIn = keyframes`
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(0);
    }
`;

const MenuModal = () => {
    return (
        <Container>
            <UpperBox/>
            <MidBox/>
            <UnderBox/>
            <SmallButtons>
                <Terms>
                    <TermsIcon><img src="../../../src/assets/images/JaeWoo/TermsIcon.svg" alt="TermsIcon"/></TermsIcon>
                    <TermsKorean>이지기부 이용약관</TermsKorean>
                </Terms>
                <LogOut>
                    <LogOutIcon><img src="../../../src/assets/images/JaeWoo/LogOutIcon.svg" alt="LogOutIcon"/></LogOutIcon>
                    <LogOutKorean>로그아웃</LogOutKorean>
                </LogOut>
            </SmallButtons>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    right: 0;
    width: 80%;
    max-width: 351px;
    height: calc(100% - 0px); /* 부모 요소의 높이를 가득 채움 */
    background-color: #E2E7F0;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
    animation: ${slideIn} 0.3s ease-out forwards;
    z-index: 1000;
    overflow-y: auto; /* 컨텐츠가 넘칠 경우 스크롤바 표시 */
    gap: 1rem;
`;

const SmallButtons = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    margin-left: 6rem;
`;

const Terms = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
`;

const TermsIcon = styled.div`
    
`;

const TermsKorean = styled.div`
    color: #000;
    font-feature-settings: 'calt' off;

    /* WF Body/Body Extra Small */
    font-family: Pretendard;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 1.125rem */
`

const LogOutIcon = styled.div`
    
`

const LogOut = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
`;

const LogOutKorean = styled.div`
    color: #000;
    font-feature-settings: 'calt' off;

    /* WF Body/Body Extra Small */
    font-family: Pretendard;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 1.125rem */
`

export default MenuModal;
