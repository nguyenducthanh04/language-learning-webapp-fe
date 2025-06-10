import "./feedback_items.scss";
function FeedbackItem({ name, avatar, content }) {
    return(
        <div className="feedback">
          <div className="feedback_avatar">
            <img src={avatar} alt={name}></img>
          </div>
           <div className="feedback_title">
                <h3>{name}</h3>
           </div>
           <div className="feedback_content">
             <p>{content}</p>
           </div>
        </div>
    )
}
export default FeedbackItem;