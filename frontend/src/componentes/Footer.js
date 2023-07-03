import React from "react";

function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <h4>Contacto</h4>
                <p>Dirección: Calle Principal, Cancún</p>
                <p>Teléfono: 123-456-7890</p>
                <p>Email: cancunscape@ut.com</p>
            </div>
            <div className="footer-social">
                <h4>Síguenos en redes sociales</h4>
                <div className="social-icons">
                    <a href="a"><i className="bi bi-facebook"></i></a>
                    <a href="a"><i className="bi bi-twitter"></i></a>
                    <a href="a"><i className="bi bi-instagram"></i></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;