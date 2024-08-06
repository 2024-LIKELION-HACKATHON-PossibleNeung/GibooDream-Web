import styled from "styled-components";
import DonateButton from "./UnderBoxButton";
import RegisterAsReceiver from "./UnderBoxButton";
import MyDonation from "./UnderBoxButton";
import Notice from "./UnderBoxButton";

const UnderBox = () => {
    return (
        <Container>
            <DonateButton buttonName="기부하기"/>
            <RegisterAsReceiver buttonName="꿈꾸미(수혜자) 등록"/>
            <MyDonation buttonName="나의 기부"/>
            <Notice buttonName="공지사항"/>
        </Container>
    );
};

const Container = styled.div`
    background-color: #E2E7F0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`

export default UnderBox
