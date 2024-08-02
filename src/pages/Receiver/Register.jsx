import { useState, useRef } from "react";
import styled from "styled-components";
import EmailInsertBox from "./components/Register/SignUpInsertBox";
import NickNameInsertBox from "./components/Register/SignUpInsertBox";
import PassWordInsertBox from "./components/Register/SignUpInsertBox";
import PassWordCheckInsertBox from "./components/Register/SignUpInsertBox";
import AttachFileButton from "./components/Register/AttachFileButton";
import RegisterButton from "./components/Register/BigRedButton";

const Register = () => {
    const [agreements, setAgreements] = useState({
        basicLivelihood: false,
        singleParentFamily: false,
        underfedChild: false,
        aloneElderly: false,
        personalinfo: false,
    });
    const [uploadedFile, setUploadedFile] = useState(null);
    const fileInputRef = useRef(null);

    const handleSingleAgreementChange = (event) => {
        const { name } = event.target;
        // 모든 항목을 false로 설정하고, 선택한 항목만 true로 설정
        setAgreements({
            basicLivelihood: false,
            singleParentFamily: false,
            underfedChild: false,
            aloneElderly: false,
            personalinfo: agreements.personalinfo, // 개인정보 수집 및 활용 항목은 유지
            [name]: true,
        });
    };

    const handlePersonalInfoChange = (event) => {
        const { checked } = event.target;
        setAgreements((prev) => ({ ...prev, personalinfo: checked }));
    };

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setUploadedFile(file);
        }
    };

    const handleFileDelete = () => {
        setUploadedFile(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = null;
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (agreements.personalinfo) {
            console.log("동의 항목:", agreements);
            console.log("업로드된 파일:", uploadedFile);
        } else {
            alert("개인정보 수집 및 활용에 동의해 주세요.");
        }
    };

    return (
        <Container>
            <GibooDreamLogo>
                <img src="../../../public/images/LogoGroup.svg" alt="logo" />
            </GibooDreamLogo>
            <InsertInfoContainer>
                <Title>꿈꾸미 등록</Title>
                <FormContainerBig>
                    
                    <SmallContainer>
                        <Subtitle>*이름</Subtitle>
                        <EmailInsertBox placeholder="이름을 입력하세요" />
                    </SmallContainer>

                    <SmallContainer>
                        <Subtitle>*주소</Subtitle>
                        <NickNameInsertBox placeholder="경기도 용인시 처인구 모현읍 외대로 81" />
                    </SmallContainer>

                    <SmallContainer>
                        <Subtitle>*세부 주소</Subtitle>
                        <PassWordInsertBox placeholder="학생회관 4층 n호" />
                    </SmallContainer>

                    <SmallContainer>
                        <Subtitle>*연락처</Subtitle>
                        <PassWordCheckInsertBox placeholder="01075546565" />
                    </SmallContainer>

                    <SmallContainer>
                        <Subtitle>*주민등록번호</Subtitle>
                        <PassWordCheckInsertBox placeholder="991225-1234567" />
                    </SmallContainer>

                </FormContainerBig>
            </InsertInfoContainer>
            <AgreementContainer>
                <Title>증빙서류 첨부</Title>
                <CheckboxContainer>
                    <Label>
                        <input
                            type="radio"
                            name="basicLivelihood"
                            checked={agreements.basicLivelihood}
                            onChange={handleSingleAgreementChange}
                        />
                        기초생활수급자
                    </Label>
                    <Label>
                        <input
                            type="radio"
                            name="singleParentFamily"
                            checked={agreements.singleParentFamily}
                            onChange={handleSingleAgreementChange}
                        />
                        한부모가족
                    </Label>
                    <Label>
                        <input
                            type="radio"
                            name="underfedChild"
                            checked={agreements.underfedChild}
                            onChange={handleSingleAgreementChange}
                        />
                        결식아동
                    </Label>
                    <Label>
                        <input
                            type="radio"
                            name="aloneElderly"
                            checked={agreements.aloneElderly}
                            onChange={handleSingleAgreementChange}
                        />
                        독거노인
                    </Label>
                </CheckboxContainer>
            </AgreementContainer>
            <AttachFileContainer>
                <input
                    type="file"
                    style={{ display: "none" }}
                    ref={fileInputRef}
                    onChange={handleFileUpload}
                />
                <AttachFileButton
                    text="관련 파일 첨부"
                    onClick={() => fileInputRef.current.click()}
                />
                <UploadedFileStatusBox>
                    <UploadedFileName>
                        {uploadedFile ? uploadedFile.name : "첨부된 파일이 없습니다."}
                    </UploadedFileName>
                    {uploadedFile && (
                        <UploadedFileDeleteButton onClick={handleFileDelete}>
                            <img src="../../../src/assets/images/JaeWoo/DeleteImageIcon.svg" alt="logo"/>
                        </UploadedFileDeleteButton>
                    )}
                </UploadedFileStatusBox>
                <SmallExplain>위 체크한 항목과 관련된 모든 서류를 첨부해주세요.</SmallExplain>
            </AttachFileContainer>
            <LeftAlignContainer>
                <Label>
                    <input
                        type="checkbox"
                        name="personalinfo"
                        checked={agreements.personalinfo}
                        onChange={handlePersonalInfoChange}
                    />
                    개인정보 수집 및 활용에 동의합니다.
                </Label>
            </LeftAlignContainer>
            <RegisterButton
                text="수혜자 신청"
                onClick={handleSubmit}
                disabled={!agreements.personalinfo}
            />
        </Container>
    );
};

export default Register;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto; /* 세로로 넘치는 내용 스크롤 가능 */
    margin-bottom: 2rem;
`;

const GibooDreamLogo = styled.div`
    img {
        width: 9.5rem;
        height: 4rem;
        flex-shrink: 0;
    }
    margin: 2rem;
`;

const InsertInfoContainer = styled.div``;

const Title = styled.div`
    color: #000;

    /* WF Headings/Heading S */
    font-family: Pretendard;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 2.1rem */
    margin-bottom: 1rem;
`;

const FormContainerBig = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const Subtitle = styled.div`
    font-size: 1rem;
    margin-bottom: 0.5rem;
`;

const Label = styled.label`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

const AgreementContainer = styled.div`
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    width: 17.5rem;
    overflow-y: auto; /* 세로로 넘치는 내용 스크롤 가능 */
    margin-bottom: 2rem;
    text-align: left;
`;

const SmallExplain = styled.div`
    font-size: 0.9rem;
    margin-bottom: 1rem;
`;

const CheckboxContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

const SmallContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
`;

const AttachFileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const LeftAlignContainer = styled.div`
    display: flex;
    width: 17.5rem;
    margin-bottom: 2rem;
`;

const UploadedFileStatusBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between; /* 왼쪽과 오른쪽으로 아이템 정렬 */
    align-items: center; /* 수직 가운데 정렬 */
    width: 17.875rem;
    height: 2.125rem;
    flex-shrink: 0;
    border: 1px solid #000;
    background: #fff; /* 배경색 설정 */
    padding: 0 1rem; /* 좌우 패딩 설정 */
    margin: 1rem;
`;

const UploadedFileName = styled.div`
    flex-grow: 1; /* 가능한 공간을 채우도록 설정 */
    overflow: hidden; /* 넘치는 텍스트 숨김 */
    text-overflow: ellipsis; /* 넘치는 텍스트 생략표시 (...) */
    white-space: nowrap; /* 텍스트 줄바꿈 방지 */
`;

const UploadedFileDeleteButton = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer; /* 커서 포인터 모양으로 변경 */
`;



