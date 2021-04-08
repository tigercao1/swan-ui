import './Home.scss';
import Card from './Card/Card';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import Footer from './../Footer/Footer';

const Home = (props) => {

    return (
        <div className="home">
            <section className="summary">
                <div className="content">
                    <div className="title">Software Analytics Research Lab</div>
                    <div className="sub-title">Carleton University, Ottawa, Ontario, Canada</div>
                    <p>
                        {props.summary}
                    </p>
                </div>
            </section>
            <section className="research-interest">
                <Card
                    title="Research Interest"
                    button="Join us"
                    route="/contact"
                >
                    <p>
                        {props.researchInterest}
                    </p>
                </Card>
            </section>
            <section className="news">
                <div className="news-content left">
                    <div className="title">News</div>
                    <p>
                        {props.news.map((item, idx) => {
                            return (
                                <span key={idx}>
                                    <span className="bold">{item.date} - </span>{item.text}
                                    <br/><br/><br/>
                                </span>
                            )
                        })}
                    </p>
                </div>
                <div className="news-content right">
                    <TwitterTimelineEmbed
                        sourceType="profile"
                        screenName="swan_carleton"
                        noFooter
                        options={{ width: 630 }}
                    />
                </div>
            </section>
            <section className="publications-home">
                <Card
                    title="Latest Publications"
                    button="View more"
                    route="/publications"
                >
                    {props.publications && props.publications.length >= 2 &&
                        <p>
                            {props.publications[0].authors}. "{props.publications[0].title}". {props.publications[0].conference}.
                            <br/><br/>
                            {props.publications[1].authors}. "{props.publications[1].title}". {props.publications[1].conference}.
                        </p>
                    }
                    
                </Card>
                <Footer></Footer>
            </section>
        </div>
    )
}

export default Home;