import "./home.scss";
import { useMediaQuery } from 'react-responsive';
import World from"../../assets/images/world-map.png";
import Figure from"../../assets/images/lingodeer-2.png";

function Home() {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const learningStart = () => {
        alert("Bắt đầu học thôi!");
    }
    return (
        (isMobile ? 
        <div>
            <center>Giao diện mobile</center>
        </div>
        : 
      <div className="home">
        <div className="home_banner">
            <div className="home_banner_content">
               <div className="home_banner_content_slogan">
                 <h1>Học thêm một ngôn ngữ và bạn sẽ có thêm một cơ hội mới</h1>
                 <p>Chương trình học ngôn ngữ của chúng tôi luôn vui vẻ và hiệu quả!</p>
                 <button className="btn_learning_start" onClick={learningStart}>Bắt đầu học</button>
               </div>
               <div className="home_banner_content_image">
                <img className="image_banner_1" src={World}></img>
                <div className="overlay_text">你好</div>
                <img className="image_banner_2" src={Figure}></img>
               </div>
            </div>
        </div>
    </div> 
)
    )
}
export default Home;