import { useState } from "react";
import './pagination.css';
import Pagination from 'react-js-pagination';
import buttonLeft from "../../images/button-left.png";
import buttonRight from "../../images/button-right.png";
import { styled } from "styled-components";

const StyleDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

const CustomPagination = ({page, itemsPerPage, totalDataCount, totalPageCount, pageListener}) => {
    const handlePreviousPage = () => {
        if (page > 1) {
            pageListener(page - 1);
        }
    };

    const handleNextPage = () => {
        if (page < totalPageCount) {
            pageListener(page + 1);
        }
    };

    return (
        <StyleDiv>
            <button onClick={handlePreviousPage}>
                <img 
                    src={buttonLeft}
                    alt="왼쪽"
                    style={{ width:"24px", height: "24px", marginRight: "10px" }}
                />
            </button>
            <Pagination
                activePage={page}
                itemsCountPerPage={itemsPerPage}
                totalItemsCount={totalDataCount}
                pageRangeDisplayed={5}
                onChange={pageListener}
                hideFirstLastPages={true}
                hideNavigation={true}
            />
            <button onClick={handleNextPage}>
                <img 
                    src={buttonRight}
                    alt="오른쪽"
                    style={{ width:"24px", height: "24px", marginLeft: "10px" }}
                />
            </button>
        </StyleDiv>
    )
}

export default CustomPagination;