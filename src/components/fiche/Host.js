function Host(props) {
    return (
        <>
            <p className="userName">{props.userName}</p>
            <div className="userPic">
                <img src={props.userPic} alt="userPicture" />
            </div>
        </>
    )
}

export default Host