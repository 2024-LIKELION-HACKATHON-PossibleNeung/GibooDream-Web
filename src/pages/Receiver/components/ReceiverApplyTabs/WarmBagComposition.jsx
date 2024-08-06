import styled from "styled-components";
import ApplyButton from "../../../../components/JaeWoo/BigRedButton";
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { selectedCartState } from '../../../../recoilAtom/selectedCartState';  // 적절한 경로로 수정하세요
import axios from 'axios';

const WarmBagComposition = () => {
    const [searchKeyword, setSearchKeyword] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const setSelectedCart = useSetRecoilState(selectedCartState);

    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://3.36.162.69:80/api/v1/crawl/?search=${searchKeyword}`);
            setSearchResults(response.data.data);
            setDropdownVisible(true); // Show dropdown when search results are available
        } catch (error) {
            console.error('Error fetching search results:', error.message);
            console.error('Error details:', error);
        }
    };

    const handleSelectItem = (item) => {
        setSelectedItems(prevItems => [...prevItems, item]);
        setDropdownVisible(false); // Hide dropdown after selection
    };

    const handleSelectDreamBag = () => {
        setSelectedCart("꿈바구니");
    };

    return (
        <Container>
            <FlexStartContainer>
                <CompositionWarmBag>
                    <Title>따숨바구니 구성</Title>
                    <WhatIsWarmBag>따숨바구니는 따뜻한 마음을 담은 후원 물품들로 구성됩니다.</WhatIsWarmBag>
                </CompositionWarmBag>

                <SearchBox>
                    <Input
                        type="text"
                        placeholder="검색어를 입력하세요"
                        value={searchKeyword}
                        onChange={(e) => setSearchKeyword(e.target.value)}
                    />
                    <SearchButton onClick={handleSearch}>
                        <img src="../../../src/assets/images/JaeWoo/SearchIcon.svg" alt="search" />
                    </SearchButton>
                </SearchBox>

                {dropdownVisible && searchResults.length > 0 && (
                    <Dropdown>
                        {searchResults.map((item, index) => (
                            <DropdownItem key={index} onClick={() => handleSelectItem(item)}>
                                <div>{item.goods_name}</div>
                                <div>{item.goods_price}원</div>
                            </DropdownItem>
                        ))}
                    </Dropdown>
                )}

                <TitleOfSearchSelectionRow>
                    <GoodsColumn>
                        <GoodsTitle>상품명</GoodsTitle>
                        {selectedItems.map((item, index) => (
                            <GoodsName key={index}>{item.goods_name}</GoodsName>
                        ))}
                    </GoodsColumn>
                    <GoodsColumn>
                        <GoodsTitle>수량</GoodsTitle>
                        {selectedItems.map((item, index) => (
                            <GoodsNum key={index}>{item.goods_num}</GoodsNum>
                        ))}
                    </GoodsColumn>
                    <GoodsColumn>
                        <GoodsTitle>가격</GoodsTitle>
                        {selectedItems.map((item, index) => (
                            <GoodsPrice key={index}>{item.goods_price}원</GoodsPrice>
                        ))}
                    </GoodsColumn>
                </TitleOfSearchSelectionRow>

                <NoWhatIWant>
                    <img src="../../../src/assets/images/JaeWoo/후원자에게 내 이야기를 들려주고 싶어요!.svg" alt="nowhatiwant"/>
                </NoWhatIWant>

                <LetsUseDreamBag onClick={handleSelectDreamBag}>
                    <img src="../../../src/assets/images/JaeWoo/꿈바구니로 후원받기.svg" alt="nowhatiwant"/>
                </LetsUseDreamBag>
            </FlexStartContainer>

            <ApplyButton text={"후원 신청하기"}/>
        </Container>
    );
};

export default WarmBagComposition;

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-right: 6.6rem;
`;

const Title = styled.div`
    color: #000;
    font-family: Pretendard;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
`;

const CompositionWarmBag = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const WhatIsWarmBag = styled.div`
    color: var(--WF-Base-600, #717D96);
    font-feature-settings: 'calt' off;
    font-family: "Single Day";
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;
    letter-spacing: -0.00875rem;
`;

const NoWhatIWant = styled.div`
    color: var(--WF-Base-900, #1A202C);
    font-feature-settings: 'calt' off;
    font-family: "Single Day";
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;
    letter-spacing: -0.00875rem;
`;

const LetsUseDreamBag = styled.div`
    width: 11.5rem;
    height: 1.5rem;
    flex-shrink: 0;
    cursor: pointer; /* 마우스 포인터를 손 모양으로 변경 */
`;

const FlexStartContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
`;

const SearchBox = styled.div`
    display: flex;
    align-items: center;
    gap: 0.25rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 0.25rem;
    flex: 1;
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 1rem;
`;

const Input = styled.input`
    flex: 1;
    padding: 0.5rem;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    color: #000;
    
    &::placeholder {
        color: #ccc;
    }
`;

const SearchButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        width: 1rem;
        height: 1rem;
    }
`;

const Dropdown = styled.div`
    position: absolute;
    top: 3rem;
    left: 0;
    width: 100%;
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    z-index: 1;
`;

const DropdownItem = styled.div`
    padding: 0.5rem;
    border-bottom: 1px solid #ccc;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    font-family: Pretendard;
    font-size: 0.875rem;
    font-weight: 400;
    
    &:last-child {
        border-bottom: none;
    }

    &:hover {
        background: #f0f0f0;
    }
`;

const TitleOfSearchSelectionRow = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    margin-bottom: 2rem;
`

const GoodsTitle = styled.div`
    width: 1r;
    color: var(--WF-Base-800, #2D3648);
    text-align: center;
    font-feature-settings: 'calt' off;
    font-family: Pretendard;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.5rem;
    letter-spacing: -0.00875rem;
`

const GoodsColumn = styled.div`
    display: flex;
    flex-direction: column;
    width: 5.2rem;
`

const GoodsName = styled.div`
    color: var(--WF-Base-800, #2D3648);
    text-align: center;
    font-feature-settings: 'calt' off;
    font-family: Pretendard;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 1.125rem */
`

const GoodsNum = styled.div`
    color: var(--WF-Base-800, #2D3648);
    text-align: center;
    font-feature-settings: 'calt' off;
    font-family: Pretendard;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 1.125rem */
`
const GoodsPrice = styled.div`
    color: var(--WF-Base-800, #2D3648);
text-align: center;
font-feature-settings: ‘calt’ off;
font-family: Pretendard;
font-size: 0.75rem;
font-style: normal;
font-weight: 400;
line-height: 150%; /* 1.125rem */
`
