import { Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil'; // RecoilRoot를 추가하여 Recoil 상태를 전역적으로 관리합니다

// pages
import MainPage from './pages/MainPage/MainPage';

import JustLogined from './pages/UpperMenu/JustLogined';
import NotLogined from './pages/UpperMenu/NotLogined';
import ReceiverLogined from './pages/UpperMenu/ReceiverLogined';

import Login from './pages/Login/Login';
import SignUp from './pages/Login/SignUp';

import WishCartList from './pages/Receiver/WishCartList';
import WishCartDetail from './pages/Receiver/WishCartDetail';
import Register from './pages/Receiver/Register';

import DonatePage from './pages/Donator/DonatePage';

//components (Recoil managed)
/* import PascalCase from './recoilComponents/컴포넌트명*/

function App() {
    return (
        <RecoilRoot>
            <div>
            <Routes>
                {/* 메인페이지 */}
                <Route index element={<MainPage />} />

                {/* 상위메뉴 페이지 (UpperMenu) */}
                <Route path="/justlogined" element={<JustLogined />} />
                <Route path="/notlogined" element={<NotLogined />} />
                <Route path="/receiverlogined" element={<ReceiverLogined />} />

                {/* 로그인, 회원가입 페이지 */}
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />

                {/* Receiver 페이지 */}
                <Route path="/wishcartlist" element={<WishCartList />} />
                <Route path="/wishcartdetail" element={<WishCartDetail />} />
                <Route path="/register" element={<Register />} />

                {/* Donator 페이지 */}
                <Route path="/donatepage" element={<DonatePage />} />
            </Routes>
            {/* <PascalCase /> */}
        </div>
        </RecoilRoot>

    );
}

export default App;