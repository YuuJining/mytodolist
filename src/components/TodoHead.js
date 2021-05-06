import React from 'react';
import styled from 'styled-components';

const TodoHeadBlock = styled.div`
    h1 {
        
    }

    .day {

    }

    .task-left {

    }
`;

const TodoHead = () => {
    return(
        <TodoHeadBlock>
            <h1>2021년 5월 6일</h1>
            <div className="day">수요일</div>
            <div className="task-left">할 일 3개 남음</div>
        </TodoHeadBlock>
    );
}

export default TodoHead;