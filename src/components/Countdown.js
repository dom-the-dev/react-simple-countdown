import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import './Countdown.css';

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
        <div className={"dom-countdown"}>
            <div className="dom-countdown__box">
                {props.showLabels ?
                    <div className={"dom-countdown__label dom-countdown__label--days"}>days: </div> : null}
                <div className={"dom-countdown__number"}>{days}</div>
            </div>

            <div className="dom-countdown__box">
                {props.showLabels ?
                    <div className={"dom-countdown__label dom-countdown__label--hours"}>hours: </div> : null}
                <div className={"dom-countdown__number"}>{hours}</div>
            </div>

            <div className="dom-countdown__box">
                {props.showLabels ?
                    <div className={"dom-countdown__label dom-countdown__label--minutes"}>minutes: </div> : null}
                <div className={"dom-countdown__number"}>{minutes}</div>
            </div>

            <div className="dom-countdown__box">
                {props.showLabels ?
                    <div className={"dom-countdown__label dom-countdown__label--seconds"}>seconds: </div> : null}
                <div className={"dom-countdown__number"}>{seconds}</div>
            </div>
        </div>
    );
};

Countdown.propTypes = {
    date: PropTypes.instanceOf(Date).isRequired,
    showLabels: PropTypes.bool
};

Countdown.defaultProps = {
    showLabels: true
};

export default Countdown;
