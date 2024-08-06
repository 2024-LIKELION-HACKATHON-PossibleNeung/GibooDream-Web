import styled from "styled-components";

// eslint-disable-next-line react/prop-types
const BigRedButton = ({ text, onClick, disabled }) => {
    return (
        <Container onClick={onClick} disabled={disabled}>
            {text}
        </Container>
    );
};

const Container = styled.button`
    display: flex;
    width: 17.75rem;
    padding: 1rem 1.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    border-radius: 0.375rem;
    background: var(--WF-Base-800, #EC4058);
    color: var(--WF-Base-White, #FFF);
    font-feature-settings: 'calt' off;

    /* WF Buttons/Button Large */
    font-family: Inter;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.5rem; /* 133.333% */
    letter-spacing: -0.01125rem;

    cursor: pointer; /* 클릭 가능한 커서로 변경 */
    border: none; /* 기본 테두리 제거 */
    outline: none; /* 기본 아웃라인 제거 */

    /* 비활성화 상태 */
    &:disabled {
        background: #ccc; /* 비활성화 시 배경색 변경 */
        color: #666; /* 비활성화 시 텍스트 색 변경 */
        cursor: not-allowed; /* 비활성화 시 커서 변경 */
    }
`;

export default BigRedButton;
