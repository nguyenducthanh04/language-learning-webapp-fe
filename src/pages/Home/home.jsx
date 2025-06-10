import "./home.scss";
import { useMediaQuery } from 'react-responsive';
import World from"../../assets/images/world-map.png";
import Figure from"../../assets/images/lingodeer-2.png";
import FeatureItem from "../../components/FeatureItems/feature_items";
import FeedbackItem from "../../components/Feedbacks/feedback_items";

function Home() {
    const isMobile = useMediaQuery({ maxWidth: 767 });

    const learningStart = () => {
        alert("Bắt đầu học thôi!");
    }
    const features = [
  {
    icon: "https://webjson.lingodeer.com/mediaSource/static/images/homePage/advantage/advantage-1.png",
    title: 'Expert curricula',
    description: 'Crafted by language teachers...',
  },
  {
    icon: "https://webjson.lingodeer.com/mediaSource/static/images/homePage/advantage/advantage-1.png",
    title: 'Detailed explanations',
    description: 'LingoDeer understands the unique...',
  },
    {
    icon: "https://webjson.lingodeer.com/mediaSource/static/images/homePage/advantage/advantage-1.png",
    title: 'Detailed explanations',
    description: 'LingoDeer understands the unique...',
  },
    {
    icon: "https://webjson.lingodeer.com/mediaSource/static/images/homePage/advantage/advantage-1.png",
    title: 'Detailed explanations',
    description: 'LingoDeer understands the unique...',
  },
    {
    icon: "https://webjson.lingodeer.com/mediaSource/static/images/homePage/advantage/advantage-1.png",
    title: 'Detailed explanations',
    description: 'LingoDeer understands the unique...',
  }
    ]
     const feedbacks = [
  {
    name: "Nguyen Duc Thanh",
    avatar: 'https://webjson.lingodeer.com/mediaSource/static/images/homePage/product/product-ideerkids.png',
    content: 'A+ app, can learn multiple languages for a reasonable price, much less than what language centers charge',
  },
 {
    name: "Nguyen Duc Thanh",
    avatar: 'https://webjson.lingodeer.com/mediaSource/static/images/homePage/product/product-ideerkids.png',
    content: 'A+ app, can learn multiple languages for a reasonable price, much less than what language centers charge',
  },
  {
    name: "Nguyen Duc Thanh",
    avatar: 'https://webjson.lingodeer.com/mediaSource/static/images/homePage/product/product-ideerkids.png',
    content: 'A+ app, can learn multiple languages for a reasonable price, much less than what language centers charge',
  },
];
    return (
        (isMobile ? 
         <div className="home_mobile">
        <div className="home_banner_mobile">
            <div className="home_banner_content_mobile">
               <div className="home_banner_content_slogan_mobile">
                 <h1>Học thêm một ngôn ngữ và bạn sẽ có thêm một cơ hội mới</h1>
                 <p>Chương trình học ngôn ngữ của chúng tôi luôn vui vẻ và hiệu quả!</p>
                 <button className="btn_learning_start_mobile" onClick={learningStart}>Bắt đầu học</button>
               </div>
            </div>
        </div>
        <div className="home_body_mobile">
  <div className="home_body_about_mobile">
    <div className="home_body_about_title_mobile">
      <h2>Vì sao nên chọn YuYan?</h2>
    </div>
    <div className="features_wrapper_mobile">
      {features.map((item, index) => (
        <FeatureItem
          key={index}
          icon={item.icon}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  </div>
  <div className="home_body_feedback_mobile">
    <div className="home_body_feedback_title_mobile">
      <h2>Học viên nghĩ gì về YuYan?</h2>
    </div>
    <div className="feedbacks_wrapper_mobile">
      {feedbacks.map((item, index) => (
        <FeedbackItem
          key={index}
          name={item.name}
          avatar={item.avatar}
          content={item.content}
        />
      ))}
    </div>
  </div>
</div>

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
        <div className="home_body">
            <div className="home_body_about">
                <div className="home_body_about_title">
                    <h1>Vì sao nên chọn YuYan?</h1>
                </div>
                 <div className="features_wrapper">
                        {features.map((item, index) => (
                            <FeatureItem
                                key={index}
                                icon={item.icon}
                                title={item.title}
                                description={item.description}
                            />
                        ))}
                 </div>
            </div>
            <div className="home_body_feedback">
              <div className="home_body_feedback_title">
                <h1>Học viên nghĩ gì về YuYan?</h1>
              </div>
                <div className="feedbacks_wrapper">
                        {feedbacks.map((item, index) => (
                            <FeedbackItem
                                key={index}
                                name={item.name}
                                avatar={item.avatar}
                                content={item.content}
                            />
                        ))}
                 </div>
            </div>
        </div>
    </div> 
)
    )
}
export default Home;