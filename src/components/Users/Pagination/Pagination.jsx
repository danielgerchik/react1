import style from "./Pagination.module.css";
import React from "react";

export const Pagination = props => {

    const usersPagePagination = Math.ceil(props.usersTotalCount / props.usersCount)

    const usersPagePaginationArray = []

    for (let i = 1; i <= usersPagePagination; i++) {
        if (i <= 20) {
            usersPagePaginationArray.push(i)
        }

    }

    const pagination = usersPagePaginationArray.map(el => <span onClick={(e) => props.currentPage(el)}
                                                                className={`${style.pagination} ${el == props.usersPage && style.active}`}>{el}</span>)
    return (
        <div>{pagination}</div>

    )
}