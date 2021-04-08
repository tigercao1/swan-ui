import './Publications.scss';
import Card from './Card/Card';

const Publications = ({ publications }) => {
    return (
            <div className="publications">
                <div className="route-title">Publications</div>
                <div className="body">
                    {publications.map((publication, idx) => {
                        return (
                            <Card 
                                key={idx}
                                title={publication.title}
                                authors={publication.authors}
                                conference={publication.conference}
                                summary={publication.summary}
                                imgUrl={publication.imageUrl}
                                links={publication.links}
                            >
                            </Card>
                        )
                    })}
                </div>
            </div>
    );
}

export default Publications;