import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";
import PrivacyPolicy from "../components/privacy";
import Footer from "../components/footer";

function Policy() { // Rename this function to avoid conflicts
    return (
        <div>
            <Header />
            <PrivacyPolicy />  {/* Assuming this renders another About component */}
            <Footer />
        </div>
    );
}

export default Policy;