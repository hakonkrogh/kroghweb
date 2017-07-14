import React from 'react';
import s from 'styled-components';
import 'howler';

const Wrap = s.div`
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    > span {
        font-size: 20vw;
    }

    &,
    * {
        touch-action: manipulation;
    }
`;

const ButtonStartStop = s.button`
    position: absolute;
    top: 10px;
    left: 10px;
`;

const DropdownLimit = s.select`
    position: absolute;
    top: 10px;
    right: 10px;
`;

export default class Countdown extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            running: false,
            tickStart: null,
            limit: 60,
            displayText: ''
        };

        this.reset = this.reset.bind(this);
        this.onLimitChange = this.onLimitChange.bind(this);
        this.onStartStopClick = this.onStartStopClick.bind(this);
    }

    componentDidMount () {
        this.beep = new Howl({
            src: ['/static/beep.mp3']
        });

        this.tick();
    }

    tick () {
        const { running, limit, tickStart } = this.state;

        if (!running) {
            this.reset();
        } else {
            var now = Date.now();
            let diff;
            let diffS = 0;
            let diffM = 0;

            if (tickStart) {
                diff = (now - tickStart) / 1000;
                diffM = Math.floor(diff / 60);
                if (diff > 0) {
                    diffS = diff - (diffM * 60);
                } else {
                    diffS = diff;
                }
                diffS = Math.floor(diffS * 10) / 10;
                if (diffS.toString().indexOf('.') === -1) {
                    diffS = diffS + '.0';
                }
            } else {
                this.setState({
                    tickStart: now
                });
            }

            if (diff > parseInt(limit)) {
                this.reset();
                this.beep.play();
                diff = 0;
            }

            if (diff) {
                this.setState({
                    displayText: (diffM > 0 ? (diffM + 'm ') : '') + diffS + 's'
                });
            }
        }
        setTimeout(this.tick.bind(this), 100);
    }

    reset (e) {
        this.setState({
            tickStart: null
        });

        if (e && e.preventDefault) {
            e.preventDefault();
        }
    }

    onLimitChange (e) {
        this.setState({
            limit: e.target.value
        });
    }

    onStartStopClick (e) {
        e.preventDefault();
        this.setState({
           running: !this.state.running
        });
    }
    
    render () {
        const { running, limit, displayText } = this.state;

        return (
            <Wrap onClick={this.reset}>
                <ButtonStartStop onClick={this.onStartStopClick}>Start/stop</ButtonStartStop>
                <DropdownLimit value={limit} onChange={this.onLimitChange}>
                    <option value='5'>5 sekunder</option>
                    <option value='10'>10 sekunder</option>
                    <option value='15'>15 sekunder</option>
                    <option value='20'>20 sekunder</option>
                    <option value='25'>25 sekunder</option>
                    <option value='30'>30 sekunder</option>
                    <option value='45'>45 sekunder</option>
                    <option value='60'>1 minutt</option>
                    <option value='120'>2 minutter</option>
                    <option value='180'>3 minutter</option>
                    <option value='240'>4 minutter</option>
                    <option value='300'>5 minutter</option>
                </DropdownLimit>
                <span>{displayText}</span>
            </Wrap>
        );
    }
}
