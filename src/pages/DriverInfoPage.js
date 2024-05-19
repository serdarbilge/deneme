import React, { useState, useEffect } from 'react';
import "../assets/sass/DriverInfo.scss"
import { useNavigate } from "react-router-dom";
import DriverDetails from "../components/DriverDetails";
import {getDriverImages} from "../utils/common";

const DriverInfoPage = () => {
    const [images, setImages] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [driverInfo, setImageInfo] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        setImages(getDriverImages());
    }, []);


    useEffect(() => {
        fetchImageInfo(images[currentImageIndex]?.id);
    }, [currentImageIndex, images]);

    const fetchImageInfo = async (id) => {
        try {
            if (id) {
                setImageInfo(images.find(image => image.id === id));
            }
        } catch (error) {
            console.error('Error fetching image info:', error);
        }
    };

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) => {
            const newIndex = prevIndex - 1;
            return newIndex < 0 ? images.length - 1 : newIndex;
        });
    };

    const handleTeamInfoClick = () => {
        const teamId = driverInfo?.teamId;
        if (teamId) {
            navigate(`/team-info/${teamId}`);
        }
    };

    return (
        <div className={'ImageGallery'}>
            <h1>F1 DRIVERS</h1>
            <div className={'row-div'}>
                <button onClick={handlePrevImage} className={'prevButton'}>
                    <img className={"prevbtn"} src="/arrow-141-48.png" alt=" prev Button Image"/>
                </button>
                {images.length > 0 && (
                    <img className={'driverimg'} src={images[currentImageIndex].url}
                         alt={`Image ${currentImageIndex}`}/>
                )}
                <button onClick={handleNextImage} className={'nextButton'}>
                    <img className={"nextbtn"} src="/arrow-141-48.png" alt=" next Button Image"/>
                </button>
            </div>
            <div>
                <h2>Driver Info</h2>
            </div>
           <div>
               <DriverDetails driverInfo={driverInfo} handleTeamInfoClick={handleTeamInfoClick} />
           </div>
        </div>
    );
};

export default DriverInfoPage;
