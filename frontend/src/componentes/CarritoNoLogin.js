import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainHeader from "./MainHeader";

function CarritoNoLogin() {
    const navigate = useNavigate();

    useEffect(() => {
        navigate("/login");
    }, [navigate]);

    return (
        <>
            <MainHeader />
            {/* Other content or components for the CarritoNoLogin page */}
        </>
    );
}

export default CarritoNoLogin;
