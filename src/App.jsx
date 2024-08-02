import { Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil'; // RecoilRoot를 추가하여 Recoil 상태를 전역적으로 관리합니다

// pages
import MainPage from './pages/MainPage/MainPage';

import UpperMenu from './pages/UpperMenu/UpperMenu'

import Login from './pages/Login/Login';
import SignUp from './pages/Login/SignUp';

import WishCartList from './pages/Receiver/WishCartList';
import WishCartDetail from './pages/Receiver/WishCartDetail';
import Register from './pages/Receiver/Register';

import DonatePage from './pages/Donator/DonatePage';

import ReceiverApplyTabs from './pages/Receiver/ReceiverApplyTabs';

//components (Recoil managed)
/* import PascalCase from './pages/Login/components/컴포넌트폴더명/컴포넌트명*/ 

function App() {
    return (
        <RecoilRoot>
            <div>
            <Routes>
                {/* 메인페이지 */}
                <Route index element={<MainPage />} />

                {/* 상위메뉴 페이지 (UpperMenu) */}
                <Route path="/uppermenu" element={<UpperMenu />} />

                {/* 로그인, 회원가입 페이지 */}
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />

                {/* Receiver 페이지 */}
                <Route path="/wishcartlist" element={<WishCartList />} />
                <Route path="/wishcartdetail" element={<WishCartDetail />} />
                <Route path="/register" element={<Register />} />
                <Route path="/receiverapplytabs" element={<ReceiverApplyTabs/>} />

                {/* Donator 페이지 */}
                <Route path="/donatepage" element={<DonatePage />} />
            </Routes>
            {/* <PascalCase /> */}
        </div>
        </RecoilRoot>

    );
}

export default App;