import style from "./Pagination.module.css";
import React, {useEffect, useState} from "react";

export const Pagination = props => {

    useEffect(()=> {
        setNumber(Math.ceil(props.usersPage / portionSize))
    },[])

    const usersPagePagination = Math.ceil(props.usersTotalCount / props.usersCount)

    const usersPagePaginationArray = []

    for (let i = 1; i <= usersPagePagination; i++) {
        usersPagePaginationArray.push(i)
    }
    const portionSize = props.portionSize
    const portionsCount = usersPagePagination / portionSize
    let [numberOfPortion, setNumber] = useState(1)
    const leftBorder = (numberOfPortion - 1) * portionSize + 1
    const rightBorder = numberOfPortion * portionSize

    const nextPortion = ()=> {
        setNumber(numberOfPortion + 1)
        props.currentPage(numberOfPortion * portionSize + 1)
    }
    const prevPortion = ()=> {
        setNumber(numberOfPortion - 1)
        props.currentPage((numberOfPortion - 2) * portionSize + 1)
    }

    const pagination = usersPagePaginationArray.filter(el => el >= leftBorder && el <= rightBorder).map(el => <span
        onClick={(e) => props.currentPage(el)}
        className={`${style.pagination} ${el == props.usersPage && style.active}`}>{el}</span>)
    return (
        <>
            <div>
                {numberOfPortion > 1 && <button onClick={prevPortion}>previous</button> }

            </div>
            <div>{pagination}</div>
            <div>
                {numberOfPortion < portionsCount && <button onClick={nextPortion}>next</button>}

            </div>
        </>
    )
}