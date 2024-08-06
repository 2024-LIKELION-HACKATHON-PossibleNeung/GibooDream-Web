// recoilAtom/activeTabState.js
import { atom } from 'recoil';

export const activeTabState = atom({
    key: 'activeTabState',
    default: 'apply', // 기본 탭은 'apply'
});
