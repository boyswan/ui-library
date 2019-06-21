import moment from 'moment';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Countdown = ({ assetPrefix, compData }) => {
    const [timeRemaining, setTimeRemaining] = useState(0);
    // const [lessThanOneDay, setLessThanOneDay] = useState(false);
    // const [expired, setExpired] = useState(false);

    // const endDate = compData.endDate || '2019-06-31T18:00:00+00:00';
    // let timer;

    // const startTimer = (durationInMilliseconds, formattedEndDate) => {
    //     let tempTime = durationInMilliseconds;

    //     timer = setInterval(() => {
    //         const newTimeLeftInMilliseconds = moment.utc(tempTime).subtract(1, 'seconds');
    //         const newTimeLeft = newTimeLeftInMilliseconds.format('H[h] m[m] s[s]');

    //         if (moment().isAfter(formattedEndDate)) {
    //             setTimeRemaining('Expired');
    //             setExpired(true);
    //             clearInterval(timer);

    //             return;
    //         }

    //         tempTime = newTimeLeftInMilliseconds;
    //         setTimeRemaining(newTimeLeft);
    //     }, 1000);
    // };

    // const calculateTimeRemaining = () => {
    //     const now = moment();
    //     const formattedEndDate = moment(endDate);
    //     const durationInDays = formattedEndDate.diff(now, 'days');
    //     const durationInMilliseconds = moment.duration(formattedEndDate.diff(now)).as('milliseconds');

    //     if (durationInDays >= 7) {
    //         setTimeRemaining('Ongoing');
    //     } else if (durationInDays < 7 && durationInDays > 1) {
    //         setTimeRemaining(`${durationInDays} days left`);
    //     } else if (durationInDays === 1) {
    //         setTimeRemaining(`${durationInDays} day left`);
    //     } else if (durationInDays === 0 && !now.isAfter(formattedEndDate)) {
    //         const formattedTimeLeft = moment.utc(durationInMilliseconds).format('H[h] m[m] s[s]');
    //         setTimeRemaining(formattedTimeLeft);
    //         setLessThanOneDay(true);
    //         startTimer(durationInMilliseconds, formattedEndDate);
    //     } else {
    //         setTimeRemaining('Expired');
    //     }
    // };

    // const initTimeCalculation = () => {
    //     const date = endDate ? calculateTimeRemaining() : setTimeRemaining('Ongoing');
    //     return date;
    // };

    // useEffect(() => {
    //     initTimeCalculation();

    //     return () => {
    //         clearInterval(timer);
    //     };
    // }, []);


    return (
        <CountdownContainer>
            {/* <CountdownText assetPrefix={assetPrefix}>
                {(lessThanOneDay && !expired) && (
                    <Prefix>Ends: </Prefix>
                )}
                {timeRemaining}
            </CountdownText> */}
            <h1>{timeRemaining}</h1>
        </CountdownContainer>
    );
};

export default Countdown;

const CountdownContainer = styled.div`
    font-size: 14px;

    @media (min-width: 768px) {
        -ms-flex-item-align: end;
        -ms-grid-row-align: end;
        align-self: end;
        -ms-grid-column-span: 0;
        grid-column-end: 1;
        -ms-grid-column: 1;
        grid-column-start: 1;
        -ms-grid-row-span: 0;
        grid-row-end: 1;
        -ms-grid-row: 1;
        grid-row-start: 1;
        margin-bottom: 20px;
    }
`;

const CountdownText = styled.div`
    display: inline-block;
    margin-left: 28px;
    position: relative;

    &::before {
        background-image: url(${({ assetPrefix }) => `${assetPrefix}/images/clock_white.svg`});
        background-repeat: no-repeat;
        background-size: cover;
        content: '';
        height: 14px;
        left: -28px;
        position: absolute;
        top: 1px;
        width: 14px;
    }
`;

const Prefix = styled.span`
    font-weight: 700;
`;