import Nav from '../components/Nav'
import Header from '../components/Header'
import Feature from '../components/Feature'
import Footer from '../components/Footer'
import Chat from '../assets/icon-chat.png'
import Money from '../assets/icon-money.png'
import Security from '../assets/icon-security.png'


function Home() {

    return (
        <>
            <Nav />
            <main>
                <Header />
                <section class="features">
                    <h2 class="sr-only">Features</h2>
                    <Feature icon={Chat} />
                    <Feature icon={Money} />
                    <Feature icon={Security} />
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Home
