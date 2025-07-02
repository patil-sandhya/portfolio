const DetailsPopup = ({ open, close }) => {
  return (
    <div className={`dizme_tm_modalbox ${open ? "opened" : ""}`}>
      <div className="box_inner">
        <div className="close">
          <a href="#" onClick={() => close()}>
            <i className="icon-cancel" />
          </a>
        </div>
        <div className="description_wrap">
          <div className="popup_details">
            <div className="top_image">
              <img src="img/thumbs/4-2.jpg" alt="image" />
              <div
                className="main"
                data-img-url="img/portfolio/Backend.jpg"
                style={{ backgroundImage: 'url("img/portfolio/6.jpg")' }}
              />
            </div>
            <div className="portfolio_main_title">
              <h3>Backend Engineering</h3>
            
              <div />
            </div>
            <div className="main_details">
              <div className="textbox">
                <p>
                As a backend developer, I have engineered scalable and modular RESTful APIs using Node.js, Express, and PostgreSQL to power a full-stack UGC video platform supporting multiple user roles (brands, creators, and admins). The backend architecture includes robust authentication, role-based access control, and secure integration with third-party services. I implemented payment workflows using Razorpay and PhonePe, ensured secure file uploads to AWS S3 via presigned URLs, and integrated OpenAI to automate video script generation. Campaigns, video submissions, and approvals are all handled through well-structured database models with transaction safety and performance optimizations.
                </p>
                <p>
                  {`To ensure reliability and maintainability, I integrated Sentry for frontend error tracking and New Relic to monitor backend performance and resource usage. For messaging and communication workflows, I used SendGrid for transactional emails and Msg91/Twilio to send OTPs and WhatsApp messages. These systems are designed to gracefully handle errors, with retry logic and alerting for critical failures. Analytics and tracking data from tools like Google Tag Manager and Meta Pixel are also processed securely to support marketing and user behavior insights. Overall, the backend is built to support a real-time, multi-user environment with a focus on speed, security, and extensibility.`}
                </p>
              </div>
              <div className="detailbox">
                <ul>
                  <li>
                    <span className="first">Teach Stack</span>
                    <span>Node js, Express js, AWS S3, PostgreSQL</span>
                  </li>
                  <li>
                    <span className="first">Tools & Integrations</span>
                    <span>
                      OpenAI, New Relic, PhonePe, Razorpay, SendGrid, Msg91, Twilio, Pusher, GTM, Meta Pixel
                    </span>
                  </li>
                 
                </ul>
              </div>
            </div>
            <div className="additional_images">
              <ul>
                <li>
                  <div className="list_inner">
                    <div className="my_image">
                      <img src="img/thumbs/4-2.jpg" alt="image" />
                    
                      <div
                        className="main"
                        data-img-url="img/portfolio/Relic.webp"
                        style={{
                          backgroundImage: 'url("img/portfolio/1.jpg")',
                        }}
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <div className="my_image">
                      <img src="img/thumbs/4-2.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/Clarity.png"
                        style={{
                          backgroundImage: 'url("img/portfolio/2.jpg")',
                        }}
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <div className="my_image">
                      <img src="img/thumbs/4-2.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/OpenAi.webp"
                        style={{
                          backgroundImage: 'url("img/portfolio/3.jpg")',
                        }}
                      />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailsPopup;
