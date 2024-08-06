import styled from "styled-components";

// eslint-disable-next-line react/prop-types
const BigInsertBox = ({ type, placeholder }) => {
    return (
        <Input type={type} placeholder={placeholder} />
    );
};

const Input = styled.input`
    width: 17.75rem;
    height: 2.8125rem;
    padding: 1rem 1.5rem;
    border: 1px solid #ccc;
    border-radius: 0.375rem;
    font-family: Inter, sans-serif;
    font-size: 1rem;
`;

export default BigInsertBox;
