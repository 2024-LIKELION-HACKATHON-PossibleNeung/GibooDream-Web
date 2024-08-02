/* eslint-disable react/prop-types */
import styled from "styled-components";

const SignUpInsertBox = ({ placeholder }) => {
    return (
        <Container>
            <Input type="text" placeholder={placeholder} />
        </Container>
    );
};

const Container = styled.div`
    width: 17.875rem;
    height: 2.6875rem;
    flex-shrink: 0;
    border-radius: 0.1875rem 0rem 0rem 0.1875rem;
    border: 1px solid var(--WF-Base-500, #A0ABC0);
    background: var(--WF-Base-100, #F7F9FC);
    display: flex;
    align-items: center;
`;

const Input = styled.input`
    width: 100%;
    height: 100%;
    border: none;
    background: transparent;
    padding: 0 0.5rem;
    font-size: 0.8rem;
    padding-left: 1rem;

    &:focus {
        outline: none;
    }
`;

export default SignUpInsertBox;