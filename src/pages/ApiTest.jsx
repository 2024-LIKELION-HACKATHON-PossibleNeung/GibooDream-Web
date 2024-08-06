import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const ApiTest = () => {
    const [response, setResponse] = useState(null);

    useEffect(() => {
        const requestData = {
            basket_type: "dream",
            userName: "홍길동",
            totalNum: 3,
            total: 32680,
            items: [
                {
                    item_url: 10,
                    pName: "짱구는 못말려 실내화 초등학생",
                    price: 6230,
                    amount: 1
                },
                {
                    item_url: 19,
                    pName: "초등학생 아동용 가방 저학년 가방",
                    price: 23650,
                    amount: 1
                },
                {
                    item_url: 6,
                    pName: "리락쿠마 연습장",
                    price: 2800,
                    amount: 1
                }
            ],
            content: "안녕하세요"
        };

        axios.post('http://52.79.212.170/api/v1/basket/', requestData, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            console.log(response.data);
            setResponse(response.data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }, []);

    return (
        <Container>
            <pre>{response && JSON.stringify(response, null, 2)}</pre>
        </Container>
    );
};

export default ApiTest;

const Container = styled.div`
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;