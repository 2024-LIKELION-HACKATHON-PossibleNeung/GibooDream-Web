import styled from "styled-components";

// eslint-disable-next-line react/prop-types
const AttachFileButton = ({ text, onClick }) => {
    return (
        <Container onClick={onClick}>
            {text}
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    width: 9.5rem;
    padding: 1rem 1.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    border-radius: 0.375rem;
    background: var(--WF-Base-800, #EC4058);
    color: var(--WF-Base-White, #FFF);
    font-feature-settings: 'calt' off;
    cursor: pointer; /* 클릭 가능한 요소로 표시 */

    /* WF Buttons/Button Large */
    font-family: Inter;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.5rem; /* 133.333% */
    letter-spacing: -0.01125rem;
`

export default AttachFileButton;