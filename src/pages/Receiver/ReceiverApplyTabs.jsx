import { useState } from "react";
import styled from "styled-components";
import ApplyTabPage from "./components/ReceiverApplyTabs/ApplyTabPage";
import CurrentApplyPage from "./components/ReceiverApplyTabs/CurrentApplyTabPage";

const ReceiverApplyTabs = () => {
    // 탭의 선택 상태를 관리하는 상태
    const [activeTab, setActiveTab] = useState("apply"); // 기본 탭은 "apply"로 설정

    // 탭 클릭 시 상태 변경 함수
    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <Container>
            <GibooDreamLogo>
                <img src="../../../public/images/LogoGroup.svg" alt="logo" />
            </GibooDreamLogo>
            <ApplyTabContainerRow>
                <ApplyTab
                    onClick={() => handleTabClick("apply")}
                    isActive={activeTab === "apply"} // 선택된 탭인지 여부
                >
                    후원 신청
                </ApplyTab>
                <CurrentApplyTab
                    onClick={() => handleTabClick("current")}
                    isActive={activeTab === "current"} // 선택된 탭인지 여부
                >
                    신청 현황
                </CurrentApplyTab>
            </ApplyTabContainerRow>

            {/* 조건부 렌더링 */}
            {activeTab === "apply" && <ApplyTabPage />}
            {activeTab === "current" && <CurrentApplyPage />}
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

const ApplyTabContainerRow = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2rem;
    justify-content: flex-start;
    width: 72.5%;
`;

const ApplyTab = styled.div`
    color: ${props => props.isActive ? "#ff0000" : "#000"}; /* 선택된 탭의 색상 변경 */
    font-family: Pretendard;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 1.75rem */
    cursor: pointer; /* 클릭 가능한 느낌 추가 */
    padding: 0.5rem; /* 탭에 패딩 추가 */
    border-bottom: ${props => props.isActive ? "2px solid #ff0000" : "none"}; /* 선택된 탭에 밑줄 추가 */
`;

const CurrentApplyTab = styled(ApplyTab)`
    /* ApplyTab와 동일한 스타일을 공유하되 추가 스타일이 필요하면 여기에 작성 */
`;