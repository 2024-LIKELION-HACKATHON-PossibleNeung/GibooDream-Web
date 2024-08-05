import { useState, useRef } from "react";
import styled from "styled-components";
// Import your button components
import ReviewButton from "../../components/JaeWoo/BigRedButton";
import InsertButton from "../../components/JaeWoo/MidRedButton";

const WriteReview = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const fileInputRef = useRef(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <Container>
            <GibooDreamLogo>
                <img src="../../../images/LogoGroup.svg" alt="logo" />
            </GibooDreamLogo>

            <TitleContainer>
                <BigTitle>후원 후기 작성</BigTitle>
                <SmallTitle>후기 사진 등록</SmallTitle>
            </TitleContainer>

            <WriteReviewWarn>
                <img src="../../../src/assets/images/JaeWoo/writereview주의사항.svg" alt="주의사항" />
            </WriteReviewWarn>

            <InsertPhotoContainer>
                {selectedImage ? (
                    <img src={selectedImage} alt="Selected" />
                ) : (
                    <>
                        <StyledInsertButton onClick={handleButtonClick}>사진 첨부</StyledInsertButton>
                        <FileInput
                            type="file"
                            accept="image/*"
                            ref={fileInputRef}
                            onChange={handleImageChange}
                        />
                    </>
                )}
            </InsertPhotoContainer>

            <TitleContainer>
                <SmallTitle>후기 글 작성</SmallTitle>
            </TitleContainer>

            <WriteReviewTextarea
                placeholder="후원자에게 감사한 마음을 담아 후기를 작성해주세요."
            />

            <ReviewButton text="후기 등록" />
        </Container>
    );
};

export default WriteReview;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding-bottom: 2rem;
`;

const GibooDreamLogo = styled.div`
    img {
        width: 9.5rem;
        height: 4rem;
        flex-shrink: 0;
    }
    margin: 2rem;
`;

const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 72.5%;
    gap: 1.5rem;
`;

const BigTitle = styled.div`
    color: #000;
    font-family: Pretendard;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
`;

const SmallTitle = styled.div`
    color: #000;
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
`;

const WriteReviewWarn = styled.div`
    width: 17.50125rem;
    height: 3.78981rem;
    flex-shrink: 0;
`;

const InsertPhotoContainer = styled.div`
    width: 16rem;
    height: 16rem;
    border-radius: 2rem;
    border: 1px solid rgba(249, 196, 203, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 2rem;
    }
`;

const StyledInsertButton = styled.button`
    background-color: #ff6961; /* red color */
    color: white;
    border: none;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    transition: background-color 0.3s;

    &:hover {
        background-color: #ff4742; /* darker red color */
    }
`;

const FileInput = styled.input`
    display: none;
`;

const WriteReviewTextarea = styled.textarea`
    width: 17.75rem;
    height: 18.875rem;
    flex-shrink: 0;
    border: 1px solid var(--WF-Base-800, #2D3648);
    background: #FFF;
    padding: 1rem;
    box-sizing: border-box;
    color: #000;
    font-family: Inter;
    font-size: 0.625rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    resize: none;

    &::placeholder {
        color: var(--WF-Base-600, #717D96);
        font-family: Inter;
        font-size: 0.625rem;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
    }
`;