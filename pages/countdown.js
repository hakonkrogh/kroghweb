import React from 'react';
import s from 'styled-components';
import Howl from 'howler';

const Wrap = s.div`
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    display: flex;

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

    tick () {

    }
    
    render () {
        const { running } = this.state;

        return (
            <Wrap>
                <ButtonStartStop>Start/stop</ButtonStartStop>
                <DropdownLimit>
                    <option value='5'>5 sekunder</option>
                    <option value='10'>10 sekunder</option>
                    <option value='15'>15 sekunder</option>
                    <option value='20'>20 sekunder</option>
                    <option value='25'>25 sekunder</option>
                    <option value='30'>30 sekunder</option>
                    <option value='45'>45 sekunder</option>
                    <option value='60' selected>1 minutt</option>
                    <option value='120'>2 minutter</option>
                    <option value='180'>3 minutter</option>
                    <option value='240'>4 minutter</option>
                    <option value='300'>5 minutter</option>
                </DropdownLimit>
                <span>...</span>
            </Wrap>
        );
    }
}
