import React from "react";

const Student = ({name}: any) => {
    return (
        <div>
            <span>{name}</span>
            <button>삭제</button>
        </div>
    )
}

export default Student;