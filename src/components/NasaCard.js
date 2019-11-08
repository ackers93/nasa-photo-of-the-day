import React from "react";
import styled from "styled-components";
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

const SpaceImageCard = styled.div`
display:flex;
flex-direction: column;
align-items: center;

`

const SpaceImage = styled.div`
    transition: transform 0.2s ease-in;
    margin: 3% 0;
      box-shadow: 0px 1px 6px -2px grey;
    &:hover {
    transform: translateY(-5px) scale(1.05);
  }
`

const SpaceHeaderText = styled.div`
color: #9CC4B2;
font-size: 2.5em;
font-family: 'ZCOOL QingKe HuangYou', cursive;
`

const SpaceText = styled.div`
color: #393D3F;
font-size: 1em;
padding: 40px;
`

const SpaceDate = styled.div`
color: #9CC4B2;
border: 2px solid lightgrey;
border-radius: 25px;
padding 0.3%;
margin-bottom: 20px;

&:hover {
    background-color:white;
    color: #393D3F;
}
`


const NasaCard = props => {
    return (
        <SpaceImageCard>
            <SpaceHeaderText>{props.photo.title}</SpaceHeaderText>
            <SpaceImage className="media">{props.photo.media_type === 'video' ? (<iframe title="video" alt="space" width="420" height="315" src={props.photo.url} />) : (<img alt="space" src={props.photo.url} />)} </SpaceImage>
            <SpaceDate>{props.photo.date}</SpaceDate>
            <Toast>
                <ToastHeader>
                </ToastHeader>
                <ToastBody>
                    <SpaceText>{props.photo.explanation}</SpaceText>
                </ToastBody>
            </Toast>


        </SpaceImageCard>
    );
};

export default NasaCard;