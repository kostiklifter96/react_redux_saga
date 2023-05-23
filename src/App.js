import { Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { MainPage } from "./pages/MainPage";
import { AboutMe } from "./pages/AboutMe";
import { Container } from "react-bootstrap";
import DescriptionUser from "./pages/DescriptionUser";

function App() {
    return (
        <>
            <Navigation />
            <Container>
                <Routes>
                    <Route path='/' element={<MainPage />} />
                    <Route path='/aboutMe' element={<AboutMe />} />
                    <Route path='/description/:id' element={<DescriptionUser />} />
                </Routes>
            </Container>
        </>
    );
}

export default App;
