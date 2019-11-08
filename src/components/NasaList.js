import React, { useState, useEffect } from 'react';
import NasaCard from "./NasaCard"
import axios from "axios";
import styled from "styled-components";


export default function NasaList() {
    const [photo, setPhoto] = useState([]);

    useEffect(() => {
        axios
            .get("https://api.nasa.gov/planetary/apod?api_key=nchghhfApLwJMqVszhpvtIN2oBVeF9F1EXkgHUm1")
            .then(response => {
                console.log(response.data);
                setPhoto(response.data)

            })
            .catch(error => {
                console.log("The data was not returned", error);
            });
    }, []);

    const PhotoCard = styled.div`
    border: 4px solid lightgrey;
    margin: 20px;
    background-color: #393D3F;
    `

    return (
        <PhotoCard>
            <NasaCard
                photo={photo}
            />
        </PhotoCard>
    );

}
