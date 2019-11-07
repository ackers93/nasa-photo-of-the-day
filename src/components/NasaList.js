import React, { useState, useEffect } from 'react';
import NasaCard from "./NasaCard"
import axios from "axios";

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

    return (
        <div className="photo-card">
            <NasaCard
                photo={photo}
            />
        </div>
    );

}
