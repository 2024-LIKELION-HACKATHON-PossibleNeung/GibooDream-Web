import styled from "styled-components";

// eslint-disable-next-line react/prop-types
const BigButtonBlack = ({ bigblacktext }) => {
    return (
        <Container>
            {bigblacktext}
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    width: 17.75rem;
    height: 2.8125rem;
    padding: 1rem 1.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    flex-shrink: 0;

    border-radius: 0.375rem;
    border: 1px solid var(--Foundation-Primary-Normal, #EC4058);
    color: var(--WF-Base-White, #EC4058);
    background: var(--WF-Base-White, #FFF);

    /* WF Buttons/Button Large */
    font-family: Inter;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.5rem; /* 133.333% */
    letter-spacing: -0.01125rem;
`

export default BigButtonBlack
