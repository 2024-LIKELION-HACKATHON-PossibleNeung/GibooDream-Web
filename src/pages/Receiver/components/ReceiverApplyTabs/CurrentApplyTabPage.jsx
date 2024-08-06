import { useEffect, useState } from "react";
import styled from "styled-components";

const CurrentApplyTabPage = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("/api/v1/basketStatus/")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const hasApplications = data.basket.length > 0 || data.beneficiary.length > 0;

    return (
        <Container>
            <Title>신청 내역</Title>
            <ContentContainer>
                <Subtitle>아직 승인대기중일 경우 신청자명을 클릭하면 후원 신청 내용을 수정할 수 있어요!</Subtitle>
                {hasApplications ? (
                    <IfAppliedContainer>
                        <InfoTitlesRow>
                            <InfoTitles>신청자명</InfoTitles>
                            <InfoTitles>신청일시</InfoTitles>
                            <InfoTitles>구분</InfoTitles>
                            <InfoTitles>상태</InfoTitles>
                        </InfoTitlesRow>
                        {data.basket.map((item, index) => (
                            <InfoContentsRow key={index}>
                                <ApplierName>{item.benefit_name}</ApplierName>
                                <ApplyDate>{item.dbasket_apply}</ApplyDate>
                                <ApplySort>{item.basket_type}</ApplySort>
                                <ApplyProgress>{item.dstatus}</ApplyProgress>
                            </InfoContentsRow>
                        ))}
                        {data.beneficiary.map((item, index) => (
                            <InfoContentsRow key={index}>
                                <ApplierName>{item.benefit_name}</ApplierName>
                                <ApplyDate>{item.hbasket_apply}</ApplyDate>
                                <ApplySort>{item.basket_type}</ApplySort>
                                <ApplyProgress>{item.hstatus}</ApplyProgress>
                            </InfoContentsRow>
                        ))}
                    </IfAppliedContainer>
                ) : (
                    <IfNotAppliedContainer>
                        <Text>최근 후원 신청 내역이 없습니다.</Text>
                    </IfNotAppliedContainer>
                )}
            </ContentContainer>
        </Container>
    );
};

export default CurrentApplyTabPage;

const Container = styled.div``;

const Title = styled.div`
    color: #000;
    font-family: Pretendard;
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.4rem;
`;

const ContentContainer = styled.div``;

const Subtitle = styled.div`
    color: #000;
    font-family: "cachildren kkum";
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1.125rem;
`;

const IfNotAppliedContainer = styled.div`
    margin-top: 1rem;
`;

const Text = styled.div`
    color: #000;
`;

const IfAppliedContainer = styled.div`
    margin-top: 1rem;
`;

const InfoTitlesRow = styled.div`
    display: flex;
    justify-content: space-between;
`;

const InfoTitles = styled.div`
    flex: 1;
    font-weight: bold;
    text-align: center;
`;

const InfoContentsRow = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ApplierName = styled.div`
    flex: 1;
    text-align: center;
`;

const ApplyDate = styled.div`
    flex: 1;
    text-align: center;
`;

const ApplySort = styled.div`
    flex: 1;
    text-align: center;
`;

const ApplyProgress = styled.div`
    flex: 1;
    text-align: center;
`;