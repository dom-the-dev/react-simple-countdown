import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

const Countdown = props => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const countDownDate = props.date.getTime();

    useEffect(() => {
        countDown();
    })

    const countDown = () => {
        setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
            setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
            setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
        }, 1000)
    }

    return (
        <div className={"countDown"}>
            <span className={"countDown__label countDown__label--days"}>days: </span>
            <span className={""}>{days}</span>&nbsp;

            <span className={"countDown__label countDown__label--hours"}>hours: </span>
            <span className={""}>{hours}</span>&nbsp;

            <span className={"countDown__label countDown__label--minutes"}>minutes: </span>
            <span className={""}>{minutes}</span>&nbsp;

            <span className={"countDown__label countDown__label--seconds"}>seconds: </span>
            <span className={""}>{seconds}</span>&nbsp;
        </div>
    );
};

Countdown.propTypes = {
    date: PropTypes.instanceOf(Date).isRequired
};

export default Countdown;
