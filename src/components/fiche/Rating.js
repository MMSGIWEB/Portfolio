import fullStar from "../../assets/images/rate/star-active.png"
import emptyStar from "../../assets/images/rate/star-inactive.png"

function Rating(props) {
    const scaleRating = props.scaleRating
    const notes = [1, 2, 3, 4, 5]
    return (
        <div className="ratingContent">
            {notes.map((note) => scaleRating <= note ? (
                <img key={note.toString()} src={emptyStar} alt="star" className="emptyStar" />
            ) : (
                <img key={note.toString()} src={fullStar} alt="star" className="fullStar" />
            )
            )}
        </div>

    )
}

export default Rating