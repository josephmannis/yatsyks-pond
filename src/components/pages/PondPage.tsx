import React from 'react';
import styled, {keyframes} from 'styled-components';
import GrassImage from '../../assets/grass.svg';
import LeafImage from '../../assets/leaves.svg';
import ToadImage from '../../assets/toe.svg';
import HappyToadImage from '../../assets/toeh.svg';

const rustle = keyframes`
  0% {
  transform: rotate(0);
  }
  25% {
    transform: rotate(5deg);
  }
  75% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(0);
  }
`

const rustleLeft = keyframes`
  0% {
  transform: scaleX(-1) rotate(0);
  }
  25% {
    transform: scaleX(-1) rotate(5deg);
  }
  75% {
    transform: scaleX(-1) rotate(-5deg);
  }
  100% {
    transform: scaleX(-1) rotate(0);
  }
`

const squish = keyframes`
    0% {
        transform: scaleY(1) scaleX(1);
    }
    25% {
        transform: scaleY(1.05) scaleX(.95);
    }
    50% {
        transform: scaleY(1.1) scaleX(.9);
    }
    75% {
        transform: scaleY(1.05) scaleX(.95);
    }
    100% {
        transform: scaleY(1) scaleX(1);
    }
`

const Background = styled.div`
    background: -moz-radial-gradient(50% 50%, ellipse farthest-corner, rgba(40, 48, 68, 1) 0%, rgba(26, 48, 68, 1) 73.74%);
    background: -webkit-radial-gradient(50% 50%, ellipse farthest-corner, rgba(40, 48, 68, 1) 0%, rgba(26, 48, 68, 1) 73.74%);
    background: -webkit-gradient(radial,50% 50% ,0 , 50% 50%, 1101.56 ,color-stop(0,rgba(40, 48, 68, 1) ),color-stop(0.7374,rgba(26, 48, 68, 1) ));
    background: -o-radial-gradient(50% 50%, ellipse farthest-corner, rgba(40, 48, 68, 1) 0%, rgba(26, 48, 68, 1) 73.74%);
    background: -ms-radial-gradient(50% 50%, ellipse farthest-corner, rgba(40, 48, 68, 1) 0%, rgba(26, 48, 68, 1) 73.74%);
    background: radial-gradient(50% 50%, ellipse farthest-corner, rgba(40, 48, 68, 1) 0%, rgba(26, 48, 68, 1) 73.74%);
    filter: progid:DXImageTransform.Microsoft.Alpha(Stlye=2);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-content: center;
    color: white;
`

const ToadContainer = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-between;
    padding-top: 3em;
`

const GrassLeft = styled.img`
    transform: scaleX(-1);
    position: absolute;
    left: -10vw;
    top: -13vw;
    width: 40vw;
    animation: 15s ${rustleLeft} infinite linear;
`

const GrassRight = styled.img`
    position: absolute;
    right: -10vw;
    top: -13vw;
    width: 40vw;
    animation: 15s ${rustle} infinite linear;
`

const LeafLeft = styled.img`
    animation: 15s ${rustleLeft} infinite linear;
    position: absolute;
    left: -10vw;
    bottom: -10vw;
    width: 40vw;
`
const LeafRight = styled.img`
    position: absolute;
    right: -10vw;
    bottom: -10vw;
    width: 40vw;
    animation: 15s ${rustle} infinite linear;
`

interface IPondPageProps {
    initialMessage: string;
    responses: string[];
}

const PondPage: React.FC<IPondPageProps> = props => {
    const [currentText, setText] = React.useState(props.initialMessage);
    
    const changeText = () => {
        setText(props.responses[Math.floor(Math.random()*props.responses.length)]);
    }
    
    return (
        <Background>    
            <GrassLeft src={GrassImage}/>
            <GrassRight src={GrassImage}/>
            <LeafLeft src={LeafImage}/>
            <LeafRight src={LeafImage}/>
            <ToadContainer>
                <SpeechBubble text={currentText}/>
                <ToadOfEncouragement onToadClicked={() => changeText()}/>
                <p> J + M ❤ 2 Years of Happiness</p>
            </ToadContainer>
        </Background>
    )
}

const Toad = styled.img`
    display: flex;
    width: 30vmax;
    &:hover {
        animation: .25s ${squish} 1 linear;
    }

    &:active {
        animation: .25 ${squish} 1 linear;
    }
`

interface IToadProps {
    onToadClicked: () => void;
}

const ToadOfEncouragement: React.FC<IToadProps> = props => {
    const baseImage = ToadImage;
    const happyToad = HappyToadImage;
    
    const [currentImage, setImage] = React.useState(baseImage);
    
    const onToadClicked = () => {
        setImage(happyToad);

        setTimeout(() => {
            setImage(baseImage);
        }, 1000);

        props.onToadClicked();
    }

    return (
        <Toad onClick={() => onToadClicked()} src={currentImage}/>
    )
}

interface ISpeechBubbleProps {
    text: string;
}

const SpeechBubbleWrapper = styled.div`
    background-color: #EFDD8D;
    border-radius: 50px;
    padding: 10%;
    width: 20vmax;
    position: relative;
    text-align: center;
    font-size: 1.25em;
    color: black;
    &::after {
        border-left: 20px solid transparent;
        border-right: 20px solid transparent;
        border-top: 20px solid #EFDD8D;
        bottom: -20px;
        content: "";
        position: absolute;
        left: 50%;
        transform: translateX(-50%)
    };
`

const SpeechBubble: React.FC<ISpeechBubbleProps> = props => {
    return (
        <SpeechBubbleWrapper>
            <p>{props.text}</p>
        </SpeechBubbleWrapper>
    )
}

export default PondPage;