import HeaderHome from '../components/HeaderHome'
import Feature from '../components/Feature'
import Chat from '../assets/icon-chat.png'
import Money from '../assets/icon-money.png'
import Security from '../assets/icon-security.png'


function Home() {

    return (
        <>
            <main>
                <HeaderHome />
                <section class="features">
                    <h2 class="sr-only">Features</h2>
                    <Feature
                    icon={Chat}
                    title={"You are our #1 priority"}
                    text={"Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."}
                    />
                    <Feature
                    icon={Money}
                    title={"More savings means higher rates"}
                    text={"The more you save with us, the higher your interest rate will be!"}
                    />
                    <Feature
                    icon={Security}
                    title={"Security you can trust"}
                    text={"We use top of the line encryption to make sure your data and money is always safe."}
                    />
                </section>
            </main>
        </>
    )
}

export default Home
