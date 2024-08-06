import styled from "styled-components";

// eslint-disable-next-line react/prop-types
const BigRedButton = ({ text, onClick }) => {
    return (
        <Container onClick={onClick}>
            {text}
        </Container>
    );
};

const Container = styled.div`
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

    font-family: Inter;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.5rem;
    letter-spacing: -0.01125rem;
    cursor: pointer; /* Add cursor style to indicate button */
    &:hover {
        background-color: #d42e4e; /* Optional hover effect */
    }
`

export default BigRedButton;
