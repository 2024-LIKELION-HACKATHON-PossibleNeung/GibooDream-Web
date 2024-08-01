import styled from "styled-components";

const UpperBox = () => {
    return (
        <Container>
            <BigBox>
                <UserInfo>
                    <Name>이름</Name>
                    <Email>이메일</Email>
                </UserInfo>
                <Buttons>
                    <Notification>
                        <NotiPic><img src="../../../src/assets/images/NotificationIcon.svg" alt="NotiIcon"/></NotiPic>
                        <NotiKorean>알림</NotiKorean>
                    </Notification>
                    <Line><img src="../../../src/assets/images/ColumnLine.svg" alt="Line"/></Line>
                    <ChangeInfo>
                        <ChangeInfoPic><img src="../../../src/assets/images/ChangeInfoIcon.svg" alt="ChangeInfoIcon"/></ChangeInfoPic>
                        <ChangeInfoKorean>회원정보변경</ChangeInfoKorean>
                    </ChangeInfo>
                    <Line><img src="../../../src/assets/images/ColumnLine.svg" alt="Line"/></Line>
                    <Invite>
                        <InvitePic><img src="../../../src/assets/images/InviteIcon.svg" alt="InviteIcon"/></InvitePic>
                        <InvitePicKorean>친구초대</InvitePicKorean>
                    </Invite>
                </Buttons>
            </BigBox>

        </Container>
    );
};

const Container = styled.div`
    background-color: white;
    height: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Line = styled.div`
`

const BigBox = styled.div`
    display: flex;
    flex-direction: column;
    background-color: grey;
    height: 16vh;
    width: 17rem;
    margin-top: 2rem;
    gap: 1rem;
    padding-top: 1.5rem;
`
const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1.9rem;
`
const Name = styled.div`
    color: #000;
    font-feature-settings: 'calt' off;

    /* WF Buttons/Button Medium */
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.5rem; /* 150% */
    letter-spacing: -0.01rem;    
`
const Email = styled.div`
    color: #000;
    font-feature-settings: 'calt' off;
    font-family: Inter;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;
    letter-spacing: -0.0075rem;    
`


const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`



const Notification = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 5rem;
`;

const NotiPic = styled.div`
    width: 1.25rem;
    height: 1.37475rem;
    flex-shrink: 0;
    margin-bottom: 0.25rem; /* 텍스트와의 간격 조정 */
    margin-right: 0.2rem;
`;

const NotiKorean = styled.div`
    color: #000;
    font-feature-settings: 'calt' off;
    font-family: Pretendard;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;
    letter-spacing: -0.00875rem;
`;

const ChangeInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 5rem;
`;

const ChangeInfoPic = styled.div`
    width: 1.25rem;
    height: 1.37475rem;
    flex-shrink: 0;
    margin-bottom: 0.25rem; /* 텍스트와의 간격 조정 */
    margin-right: 0.2rem;
`;

const ChangeInfoKorean = styled.div`
    color: #000;
    font-feature-settings: 'calt' off;
    font-family: Pretendard;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;
    letter-spacing: -0.00875rem;
`;

const Invite = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 5rem;
`;

const InvitePic = styled.div`
    width: 1.25rem;
    height: 1.37475rem;
    flex-shrink: 0;
    margin-bottom: 0.25rem; /* 텍스트와의 간격 조정 */
    margin-right: 0.2rem;
`;

const InvitePicKorean = styled.div`
    color: #000;
    font-feature-settings: 'calt' off;
    font-family: Pretendard;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;
    letter-spacing: -0.00875rem;
`;

export default UpperBox
