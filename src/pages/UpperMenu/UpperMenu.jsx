import { useState } from "react";
import styled from "styled-components";
import Modal from "./MenuModal"

const UpperMenu = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleButtonClick = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <Container>
            <Button onClick={handleButtonClick}>Open Modal</Button>
            {isModalOpen && <Modal />}
        </Container>
    );
};

export default UpperMenu;



const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 844px; /* 부모 요소의 높이를 가득 채움 */
    width: 100%;
    position: relative;
`;

const Button = styled.button`
    padding: 1rem 2rem;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
`;

