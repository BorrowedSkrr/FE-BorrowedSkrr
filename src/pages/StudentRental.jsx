import React, { useState } from 'react'
import { Link } from "react-router-dom";
import logo_small from "../images/logo-small.png";
import logo_skrr_black from "../images/logo-skrr-black.png";
import rental_product from "../images/product.png";
import likelion from "../images/likelion.png";

function StudentRental() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const formattedToday = `${year}-${month}-${day}`;

    const [selectedStartDate, setSelectedStartDate] = useState(formattedToday);
    const [selectedEndDate, setSelectedEndDate] = useState(formattedToday);
    const [reason, setReason] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
    };

    const isFormValid = reason.trim() !== '';

    return (
        <div className="StudentRental">
            {/* <nav id="StudentRentalNav">
                <div className="logo-small">
                    <Link to="/">
                        <img src={logo_small} alt="logo_small" id="logo_small" />
                    </Link>
                </div>
                <div className="buttonContainer">
                    <button id="button-product">PRODUCT</button>
                    <button id="button-login">MY PAGE</button>
                </div>
            </nav> */}

            <div className="StudentRentalBody">
                <div className="StudentRentalBox">
                    <img src={logo_skrr_black} id="logo_skrr_black" alt="logo_skrr_black" />
                    <p id="StudentRentalTitle">대여 신청</p>
                </div>


                <form onSubmit={handleFormSubmit}>
                    <div className="StudentRentalContainer">
                        <p id="StudentRentalNumber">총 1종류</p>
                        <div className="StudentRentalProduct">
                            <img src={rental_product} id="rental_product" alt="rental_product" />
                            <div className="StudentRentalBox2">
                                <p id="StudentRentalTitle2">애플 에어팟 맥스</p>
                                <p id="StudentRentalNumber2">10개</p>
                            </div>
                        </div>

                        <div className="StudentRentalBar"></div>
                        <div className="StudentRentalDay">
                            <p id="StudentRentalDayTitle">예약 날짜</p>
                            <input
                                type="date"
                                id="rentalStart"
                                name="rentalStart"
                                value={selectedStartDate}
                                min={formattedToday}
                                onChange={(e) => setSelectedStartDate(e.target.value)}
                            />
                            <p id="rentalBetween"> ~ </p>
                            <input
                                type="date"
                                id="rentalEnd"
                                name="rentalEnd"
                                value={selectedEndDate}
                                min={selectedStartDate}
                                onChange={(e) => setSelectedEndDate(e.target.value)}
                            />
                        </div>

                        <div className="StudentRentalReason">
                            <p id="StudentRentalReasonTitle">사유</p>
                            <textarea
                                id="reason"
                                value={reason}
                                onChange={(e) => setReason(e.target.value)}
                                style={{ width: '75%', boxSizing: 'border-box', resize: 'none', overflow: 'hidden' }}
                            />
                        </div>
                    </div>
                </form>
                {isFormValid ? (
                    <Link to="/rentalSuccess">
                    <button type="submit" id="StudentRentalBtn">
                        신청하기=
                    </button>
                    </Link>
                ) : (
                    <button type="button" id="StudentRentalBtn" disabled>
                        신청하기
                    </button>
                )}
            </div>

            {/* <footer id="StudentRentalFooter">
                <img src={likelion} alt="likelion" id="likelion" />
            </footer> */}
        </div>
    )
}

export default StudentRental;