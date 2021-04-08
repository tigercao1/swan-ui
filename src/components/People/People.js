import './People.scss';
import PeopleSection from './PeopleSection/PeopleSection';

const People = ({faculty, graduates, undergraduates, alumni}) => {

    return (
        <section className="people">
            <div className="route-title">People</div>
            <PeopleSection title={"Faculty"} data={faculty}/>
            <PeopleSection title={"Current Graduate Students"} data={graduates}/>
            <PeopleSection title={"Current Undergraduate Students"} data={undergraduates}/>
            <PeopleSection title={"Alumni"} data={alumni}/>
        </section>
    )
}

export default People;