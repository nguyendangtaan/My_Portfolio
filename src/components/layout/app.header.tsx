import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { MdOutlineLightMode, MdNightlight } from "react-icons/md";
import { Link, NavLink } from 'react-router-dom';
import { useCurrentApp } from 'components/context/app.context';
import { useTranslation } from 'react-i18next';
import { NavDropdown } from 'react-bootstrap';
import viFlag from 'assets/svg/language/vi.svg';
import enFlag from 'assets/svg/language/en.svg';
import hoadao from 'assets/hoadao.svg';
import lixidung from 'assets/lixidung.svg';
import quat from 'assets/quat.svg';
import FallingFlowers from "components/share/FallingFlowers";

type ThemeContextType = "light" | "dark";

function AppHeader() {
    const { theme, setTheme } = useCurrentApp();
    const { t, i18n } = useTranslation();

    const handleMode = (mode: ThemeContextType) => {
        localStorage.setItem("theme", mode);
        document.documentElement.setAttribute('data-bs-theme', mode);
        setTheme(mode);
    }

    const renderFlag = (language: string) => {
        return (
            <img
                style={{ height: 20, width: 20 }}
                src={language === "en" ? enFlag : viFlag} alt={language}
            />
        )
    }

    return (
        <><div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '200px', // Chỉ cho header
            zIndex: 1,
        }}>
            <FallingFlowers />
        </div><Navbar

            data-bs-theme={theme}
            expand="lg"
            className="bg-body-tertiary"
            style={{ zIndex: 2 }}
        >

                {/* <img src={caudoi} alt="Hoa đào" style={{ height: 500, width: 100, marginRight: 10 }} /> */}
                <Container>

                    <img src={lixidung} alt="Hoa đào" style={{ height: 50, marginRight: 10 }} />
                    <Link className="navbar-brand" to="/">
                        <span className='brand-green'>
                            {t("appHeader.brand")}
                        </span>
                    </Link>
                    <img src={lixidung} alt="Bao lì xì" style={{ height: 50, marginLeft: 10 }} />
                    <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ backgroundColor: "#3e1e41", border: '1px solid' }} />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <div className='d-flex' style={{ gap: 10, justifyContent: "flex-start", alignItems: "center" }}>
                                <NavLink className="nav-link " to="/">{t("appHeader.home")}</NavLink>
                            </div>
                            <div className='d-flex' style={{ gap: 10, justifyContent: "center", alignItems: "center", marginLeft: 20, marginRight: 20 }}>
                                <img src={hoadao} alt="Hoa mai" style={{ height: 20 }} />
                                <img src={hoadao} alt="Hoa mai" style={{ height: 20 }} />
                                <img src={quat} alt="Hoa mai" style={{ height: 50 }} />
                                <img src={hoadao} alt="Hoa mai" style={{ height: 20 }} />
                                <img src={hoadao} alt="Hoa mai" style={{ height: 20 }} />

                            </div>
                            <div className='d-flex' style={{ gap: 10, justifyContent: "flex-start", alignItems: "center" }}>
                                <NavLink className="nav-link" to="/project"> {t("appHeader.project")}</NavLink>
                            </div>
                            <div className='d-flex' style={{ gap: 10, justifyContent: "center", alignItems: "center", marginLeft: 20, marginRight: 20 }}>
                                <img src={hoadao} alt="Hoa mai" style={{ height: 20 }} />
                                <img src={hoadao} alt="Hoa mai" style={{ height: 20 }} />
                                <img src={quat} alt="Hoa mai" style={{ height: 50 }} />
                                <img src={hoadao} alt="Hoa mai" style={{ height: 20 }} />
                                <img src={hoadao} alt="Hoa mai" style={{ height: 20 }} />

                            </div>
                            <div className='d-flex' style={{ gap: 10, justifyContent: "flex-start", alignItems: "center" }}>
                                <NavLink className="nav-link" to="/about">{t("appHeader.about")}</NavLink>
                            </div>
                            <div className='d-flex' style={{ gap: 10, justifyContent: "center", alignItems: "center", marginLeft: 20, marginRight: 20 }}>
                                <img src={hoadao} alt="Hoa mai" style={{ height: 20 }} />
                                <img src={hoadao} alt="Hoa mai" style={{ height: 20 }} />
                                <img src={quat} alt="Hoa mai" style={{ height: 50 }} />
                                <img src={hoadao} alt="Hoa mai" style={{ height: 20 }} />
                                <img src={hoadao} alt="Hoa mai" style={{ height: 20 }} />

                            </div>

                        </Nav>
                        {/* <div className='d-flex' style={{ gap: 10, justifyContent: "center", alignItems: "center" }}>

    <img src={hoadao} alt="Hoa mai" style={{ height: 20 }} />
    <img src={quat} alt="Hoa mai" style={{ height: 50 }} />
    <img src={hoadao} alt="Hoa mai" style={{ height: 20 }} />


</div> */}
                        <Nav className="ms-auto">
                            <div className='nav-link' style={{ cursor: "pointer" }}>
                                {theme === "light" ?
                                    <MdOutlineLightMode
                                        onClick={() => handleMode("dark")}
                                        style={{ fontSize: 20 }} />
                                    :
                                    <MdNightlight
                                        onClick={() => handleMode("light")}
                                        style={{ fontSize: 20 }} />}
                            </div>

                            <NavDropdown
                                title={renderFlag(i18n.resolvedLanguage!)}
                            >
                                <div
                                    onClick={() => i18n.changeLanguage("en")}
                                    className='dropdown-item d-flex gap-2 align-items-center' style={{ cursor: "pointer" }}>
                                    <img
                                        style={{ height: 20, width: 20 }}
                                        src={enFlag} alt='english' />
                                    <span>English</span>

                                </div>
                                <div
                                    onClick={() => i18n.changeLanguage("vi")}
                                    className='dropdown-item d-flex gap-2 align-items-center' style={{ cursor: "pointer" }}>
                                    <img
                                        style={{ height: 20, width: 20 }}
                                        src={viFlag} alt='vietnamese' />
                                    <span>Tiếng Việt</span>
                                </div>

                            </NavDropdown>
                        </Nav>

                    </Navbar.Collapse>
                </Container>

            </Navbar></>

    );
}

export default AppHeader;
