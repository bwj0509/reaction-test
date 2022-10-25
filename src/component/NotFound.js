import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div>
            <h1 style={{ marginTop: '50px' }}>잘못된 접근 입니다.</h1>
            <Link to="/">
                <button onClick={() => { }}>메인페이지로 돌아가기</button>
            </Link>
        </div>
    );
}

export default NotFound;