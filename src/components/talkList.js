import PropTypes from "prop-types"
import React from "react"
import Link from "./link";

const TalkList = ({data}) => {
    const nextEvent = getNextEvent(data.events)
    return (
        <>
            <div className='talk-info-container'>
                <h2><Link to={`/talks` + data.slug}>{data.title}</Link></h2>
                <div
                    className="talk-info">{nextEvent[0].date} {nextEvent.title} in {nextEvent[0].location}</div>
            </div>
            <div dangerouslySetInnerHTML={{__html: data.brief}}/>
        </>
    )
}

const getNextEvent = function (events) {
    const currentDate = new Date()
    return events.sort(function (a, b) {
        let dateA = new Date(a.date)
        let dateB = new Date(b.date)
        if (dateA < currentDate || dateB < currentDate) {
            return -1;
        }
        return dateA - dateB;
    });
}

TalkList.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        brief: PropTypes.string.isRequired,
        events: PropTypes.arrayOf(
            PropTypes.shape({
                date: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired,
                location: PropTypes.string.isRequired
            })
        )
    }),
}

export default TalkList
