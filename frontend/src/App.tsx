import Paper from './components/atoms/Paper'
import About from './components/templates/About'
import Contact from './components/templates/Contact'
import Header from './components/templates/Header'
import Welcome from './components/templates/Welcome'
import Works from './components/templates/Works'
import './styles/App.css'

function App() {
    return (
        <div className="portfolio">
            <Header />
            <main>
                <Welcome />
                <Paper>
                    <Works />
                </Paper>
                <About />
                <Contact />
            </main>
        </div>
    )
}

export default App
