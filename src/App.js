import './App.scss';
import { Navbar, Home, People, Publications, Contact, Footer, ScrollToTop } from './components';
import { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";


function App() {
    const [summary, setSummary] = useState("");
    const [researchInterest, setResearchInterest] = useState("");
    const [news, setNews] = useState([]);
    const [currentGraduateList, setCurrentGraduateList] = useState([]);
    const [currentUndergraduateList, setCurrentUndergraduateList] = useState([]);
    const [facultyList, setFacultyList] = useState([]);
    const [alumniList, setAlumniList] = useState([]);
    const [publicationList, setPublicationList] = useState([]);


    useEffect(() => {
        fetch(process.env.PUBLIC_URL + '/pageData/homePageData.json').then((response) => {
            return response.json();
        }).then((pageData) => {
            console.log(pageData);
            if (pageData.summary) {
                setSummary(pageData.summary);
            }

            if (pageData.researchInterest) {
                setResearchInterest(pageData.researchInterest);
            }

            if (pageData.news) {
                setNews(pageData.news);
            }
        }).catch((err) => {
            console.log(err);
        });

        fetch(process.env.PUBLIC_URL + '/peopleData/index.json').then((response) => {
            return response.json();
        }).then((peopleData) => {
            console.log(peopleData);
            if (peopleData.faculty) {
                setFacultyList(peopleData.faculty);
            }

            if (peopleData.currentGraduate) {
                setCurrentGraduateList(peopleData.currentGraduate);
            }

            if (peopleData.currentUndergraduate) {
                setCurrentUndergraduateList(peopleData.currentUndergraduate);
            }

            if (peopleData.alumni) {
                setAlumniList(peopleData.alumni);
            }
        })

        fetch(process.env.PUBLIC_URL + '/publications/index.json').then((response) => {
            return response.json();
        }).then((publications) => {
            console.log(publications);
            if (publications) {
                setPublicationList(publications);
            }
        })
    }, [])

    return (
        <Router>
            <ScrollToTop/>
            <div className="App">
                <Navbar></Navbar>

                <Switch>
                    <Route path="/people">
                        <People faculty={facultyList} graduates={currentGraduateList} undergraduates={currentUndergraduateList} alumni={alumniList}></People>
                        <Footer></Footer>
                    </Route>
                    <Route path="/publications">
                        <Publications publications={publicationList}></Publications>
                        <Footer></Footer>
                    </Route>
                    <Route path="/contact">
                        <Contact></Contact>
                        <Footer></Footer>
                    </Route>
                    <Route path="/">
                        <Home summary={summary} researchInterest={researchInterest} news={news} publications={publicationList}/>
                    </Route>
                </Switch>
            </div>

        </Router>
        
    );
}

export default App;
