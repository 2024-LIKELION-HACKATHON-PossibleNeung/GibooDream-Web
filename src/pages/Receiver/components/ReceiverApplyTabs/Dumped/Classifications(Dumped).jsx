import { useState } from "react";
import styled from "styled-components";

const itemData = {
    "식료품": [
        { "name": "쌀", "price": 20000 },
        { "name": "밀가루", "price": 2000 },
        { "name": "설탕", "price": 1500 },
        { "name": "소금", "price": 1000 },
        { "name": "간장", "price": 3000 },
        { "name": "된장", "price": 4000 },
        { "name": "고추장", "price": 5000 },
        { "name": "참기름", "price": 7000 },
        { "name": "식용유", "price": 5000 },
        { "name": "라면", "price": 3000 },
        { "name": "스파게티 면", "price": 4000 },
        { "name": "통조림 참치", "price": 5000 },
        { "name": "통조림 콩", "price": 3000 },
        { "name": "통조림 옥수수", "price": 3000 },
        { "name": "김치", "price": 7000 },
        { "name": "두부", "price": 2000 },
        { "name": "어묵", "price": 3000 },
        { "name": "계란", "price": 5000 },
        { "name": "우유", "price": 3000 },
        { "name": "치즈", "price": 4000 }
    ],
    "청소용품": [
        { "name": "세제", "price": 3000 },
        { "name": "섬유유연제", "price": 4000 },
        { "name": "주방세제", "price": 2000 },
        { "name": "욕실세제", "price": 2500 },
        { "name": "창문세제", "price": 3000 },
        { "name": "변기세정제", "price": 3000 },
        { "name": "표백제", "price": 3500 },
        { "name": "소독제", "price": 4000 },
        { "name": "청소용 장갑", "price": 2000 },
        { "name": "청소용 스펀지", "price": 1000 },
        { "name": "걸레", "price": 1500 },
        { "name": "청소포", "price": 2500 },
        { "name": "빗자루", "price": 3000 },
        { "name": "쓰레받기", "price": 2000 },
        { "name": "먼지떨이", "price": 3000 },
        { "name": "물걸레", "price": 2500 },
        { "name": "걸레통", "price": 3000 },
        { "name": "진공청소기 필터", "price": 5000 },
        { "name": "배수구 클리너", "price": 2000 },
        { "name": "청소솔", "price": 1500 }
    ],
    "주방용품": [
        { "name": "냄비", "price": 10000 },
        { "name": "프라이팬", "price": 8000 },
        { "name": "칼", "price": 5000 },
        { "name": "도마", "price": 3000 },
        { "name": "주전자", "price": 7000 },
        { "name": "믹서기", "price": 15000 },
        { "name": "전기밥솥", "price": 50000 },
        { "name": "식기세트", "price": 20000 },
        { "name": "컵", "price": 3000 },
        { "name": "접시", "price": 4000 },
        { "name": "그릇", "price": 3000 },
        { "name": "젓가락", "price": 1000 },
        { "name": "숟가락", "price": 1000 },
        { "name": "포크", "price": 1000 },
        { "name": "주방장갑", "price": 2000 },
        { "name": "밀폐용기", "price": 3000 },
        { "name": "랩", "price": 2000 },
        { "name": "호일", "price": 2000 },
        { "name": "키친타올", "price": 3000 },
        { "name": "오븐", "price": 50000 }
    ],
    "위생용품": [
        { "name": "화장지", "price": 5000 },
        { "name": "물티슈", "price": 3000 },
        { "name": "일회용 면도기", "price": 1000 },
        { "name": "면도날", "price": 5000 },
        { "name": "샴푸", "price": 6000 },
        { "name": "린스", "price": 5000 },
        { "name": "바디워시", "price": 5000 },
        { "name": "비누", "price": 2000 },
        { "name": "칫솔", "price": 1000 },
        { "name": "치약", "price": 2000 },
        { "name": "치실", "price": 3000 },
        { "name": "구강청결제", "price": 4000 },
        { "name": "손 세정제", "price": 3000 },
        { "name": "손 소독제", "price": 4000 },
        { "name": "휴대용 물티슈", "price": 2000 },
        { "name": "생리대", "price": 5000 },
        { "name": "팬티라이너", "price": 3000 },
        { "name": "기저귀", "price": 20000 },
        { "name": "마스크", "price": 1000 },
        { "name": "면봉", "price": 1000 }
    ],
    "사무용품": [
        { "name": "볼펜", "price": 1000 },
        { "name": "연필", "price": 500 },
        { "name": "지우개", "price": 300 },
        { "name": "수정테이프", "price": 2000 },
        { "name": "형광펜", "price": 1000 },
        { "name": "메모지", "price": 1000 },
        { "name": "노트", "price": 2000 },
        { "name": "파일", "price": 3000 },
        { "name": "서류철", "price": 4000 },
        { "name": "스테이플러", "price": 5000 },
        { "name": "스테이플러 침", "price": 1000 },
        { "name": "풀", "price": 1000 },
        { "name": "가위", "price": 2000 },
        { "name": "자", "price": 1000 },
        { "name": "계산기", "price": 5000 },
        { "name": "테이프", "price": 1000 },
        { "name": "테이프 클리너", "price": 3000 },
        { "name": "명함", "price": 5000 },
        { "name": "명함집", "price": 2000 },
        { "name": "데스크매트", "price": 10000 }
    ],
    "기타": [
        { "name": "건전지", "price": 2000 },
        { "name": "멀티탭", "price": 10000 },
        { "name": "손전등", "price": 5000 },
        { "name": "공구세트", "price": 20000 },
        { "name": "접착제", "price": 3000 },
        { "name": "우산", "price": 7000 },
        { "name": "장갑", "price": 5000 },
        { "name": "마스크", "price": 1000 },
        { "name": "가위", "price": 2000 },
        { "name": "열쇠고리", "price": 1000 },
        { "name": "자전거 펌프", "price": 10000 },
        { "name": "화분", "price": 7000 },
        { "name": "실내화", "price": 3000 },
        { "name": "옷걸이", "price": 200},
        { "name": "옷걸이", "price": 2000 },
        { "name": "수납박스", "price": 5000 },
        { "name": "빨래건조대", "price": 15000 },
        { "name": "바늘과 실", "price": 2000 },
        { "name": "독서대", "price": 10000 },
        { "name": "바람막이", "price": 20000 },
        { "name": "돗자리", "price": 5000 }
        ]
};

const Classifications = () => {
    const [firstClass, setFirstClass] = useState("");
    const [secondClass, setSecondClass] = useState("");
    const [quantity, setQuantity] = useState(1);

    const handleFirstClassChange = (e) => {
        setFirstClass(e.target.value);
        setSecondClass(""); // Reset second class when first class changes
    };

    const handleSecondClassChange = (e) => {
        setSecondClass(e.target.value);
    };

    const handleQuantityChange = (e) => {
        setQuantity(parseInt(e.target.value));
    };

    const calculateTotalPrice = () => {
        if (!firstClass || !secondClass) return 0;
        const selectedItem = itemData[firstClass].find(item => item.name === secondClass);
        return selectedItem ? selectedItem.price * quantity : 0;
    };

    return (
        <Container>
            <FirstClass>
                <select value={firstClass} onChange={handleFirstClassChange}>
                    <option value="">1차 분류 선택</option>
                    {Object.keys(itemData).map(category => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>
            </FirstClass>
            <SecondClass>
                <select value={secondClass} onChange={handleSecondClassChange}>
                    <option value="">2차 분류 선택</option>
                    {firstClass && itemData[firstClass].map(item => (
                        <option key={item.name} value={item.name}>{item.name}</option>
                    ))}
                </select>
            </SecondClass>
            <Quantity>
                <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={handleQuantityChange}
                />
            </Quantity>
            <TotalPrice>
                총 가격: {calculateTotalPrice()}원
            </TotalPrice>
        </Container>
    );
};

export default Classifications;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
`;

const FirstClass = styled.div`
    display: flex;
    flex-direction: column;
`;

const SecondClass = styled.div`
    display: flex;
    flex-direction: column;
`;

const Quantity = styled.div`
    display: flex;
    flex-direction: column;
`;

const TotalPrice = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.2rem;
    font-weight: bold;
    margin-top: 1rem;
`;