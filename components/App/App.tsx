import {useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from "../NavBar/NavBar";
import Home from "../Home/Home";
import Characters from "../Characters/Characters";
import Locations from "../Locations/Locations";
import Character from "../Character/Character";


const App = () => {
    const [character, setCharacter] = useState([])
    const [location, setLocation] = useState([])

    useEffect(() => {

        async function fetchCharacter() {
            const res = await fetch('https://rickandmortyapi.com/api/character');
            const data = await res.json()
            setCharacter(data.results)
        }

        async function fetchLocation() {
            const res = await fetch('https://rickandmortyapi.com/api/location');
            const data = await res.json()
            setLocation(data.results)
        }

        fetchCharacter();
        fetchLocation();

    }, [])

    return (
        <>
            <Router>
                <NavBar/>
                <Switch>
                    <Route exact path='/'>
                        <Home/>
                    </Route>
                    <Route exact path='/characters'>
                        <Characters data={character}/>
                    </Route>
                    <Route exact path='/locations'>
                        <Locations data={location}/>
                    </Route>
                    <Route path="/characters/:userId">
                        <Character/>
                    </Route>
                    <Route path="/characters/:userId/info/:locationId/?showAdditionalInfo=false">
                        <Character/>
                    </Route>
                </Switch>
            </Router>
        </>
    )
}
export default App
