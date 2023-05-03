const Benefit = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <img
              className="business_benifits_img"
              src="assets/image/business/benefits_img.png"
              alt="benefits of business analysis"
            />
          </div>
          <div className="col-12">
            <h2 className="text-primary text-center">
              <strong>Benefits of Business Analysis</strong>
            </h2>
          </div>
          </div>
          {/* <!-- second row / */}
          <div className="row mt-5 d-flex justify-content-center">
            <div className="col-12 col-md-6 col-lg-4 mb-5 d-flex justify-content-center" data-aos="fade-down-right">
              <div
                className="card business_card"
                style={{ width: "18rem" }}
                onmouseover="newImg()"
                onmouseout="oldImg()"
              >
                <img
                  id="getImg"
                  src="assets/image/business/increase_in_roi.png"
                  className="card-img-top businessImg"
                  alt="Increase in ROI"
                />
                <div className="card-body">
                  <h4 className="card-title text-center">
                    <strong>Increase in ROI</strong>
                  </h4>
                  <p className="card-text">
                    As a business analyst, you must be able to understand the
                    client's needs and requirements, gather relevant data, and
                     then analyze that data to identify trends and patterns.{/* Once
                    you have done this, you can then make recommendations to the
                    client on how they can improve their business.*/}
                  </p> 
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-5 d-flex justify-content-center" data-aos="fade-down">
              <div
                className="card business_card"
                style={{ width: "18rem" }}
                onmouseover="newImg1()"
                onmouseout="oldImg1()"
              >
                <img
                  id="getImg1"
                  src="assets/image/business/decrease.png"
                  className="card-img-top businessImg"
                  alt="Serach Engine Optimization"
                />
                <div className="card-body">
                  <h4 className="card-title text-center">
                    <strong>Decrease Costs</strong>
                  </h4>
                  <p className="card-text">
                    Business analysts reduce costs within an
                    organization through process improvement. Process
                    improvement is the implementation of best practices and
                    methodologies to optimize the efficiency of tasks and
                    processes.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-5 d-flex justify-content-center" data-aos="fade-down-left">
              <div
                className="card business_card"
                style={{ width: "18rem" }}
                onmouseover="newImg2()"
                onmouseout="oldImg2()"
              >
                <img
                  id="getImg2"
                  src="assets/image/business/super-rate.png"
                  className="card-img-top businessImg"
                  alt="Pay Per Click"
                />
                <div className="card-body">
                  <h4 className="card-title text-center">
                    <strong>High Super Rate</strong>
                  </h4>
                  <p className="card-text">
                    Business analysis is an empirical pillar of any
                    organization. This can improve the project's success rate by
                    using effective and affordable solutions to counter problems
                     that may arise. {/* Furthermore, having a solid team foundation
                    and business analyst(s) can save a project from failure. */}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-5 d-flex justify-content-center" data-aos="fade-up-right">
              <div
                className="card business_card"
                style={{ width: "18rem" }}
                onmouseover="newImg3()"
                onmouseout="oldImg3()"
              >
                <img
                  id="getImg3"
                  src="assets/image/business/collaboration.png"
                  className="card-img-top businessImg"
                  alt="Social Media Optimization"
                />
                <div className="card-body">
                  <h4 className="card-title text-center">
                    <strong>Effective Team Collaboration</strong>
                  </h4>
                  <p className="card-text">
                    When team members collaborate, they can share their
                    different perspectives and knowledge, which can lead to
                    better decision making.  {/* Collaboration can also lead to
                    increased creativity as team members can brainstorm
                    ideas and come up with new and innovative solutions. */}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-5 d-flex justify-content-center" data-aos="fade-up">
              <div
                className="card business_card"
                style={{ width: "18rem" }}
                onmouseover="newImg4()"
                onmouseout="oldImg4()"
              >
                <img
                  id="getImg4"
                  src="assets/image/business/increase_sales.png"
                  className="card-img-top businessImg"
                  alt="Google My Business"
                />
                <div className="card-body">
                  <h4 className="card-title text-center">
                    <strong>Increase in Sales</strong>
                  </h4>
                  <p className="card-text">
                    Sales ate the lifeblood of any business. It is the primary
                    metric by which businesses gauge their success or failure.
                    Increasing sales is therefore of utmost importance to any
                    business. {/* Business analysis involves understanding the needs
                    of the customer and offering products or services that meet
                    those needs. */}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-5 d-flex justify-content-center" data-aos="fade-up-left">
              <div
                className="card business_card"
                style={{ width: "18rem" }}
                onmouseover="newImg5()"
                onmouseout="oldImg5()"
              >
                <img
                  id="getImg5"
                  src="assets/image/business/improve.png"
                  className="card-img-top businessImg"
                  alt="Email Marketing"
                />
                <div className="card-body">
                  <h4 className="card-title text-center">
                    <strong>Room for Improvements</strong>
                  </h4>
                  <p className="card-text">
                    Once you have a good understanding of the current state of
                    your business, you can start to identify areas for
                    improvement. Some common areas businesses often focus on
                    improving include: Customer satisfaction.  {/*, Employee
                    satisfaction, Efficiency, and Financial performance. */}
                  </p>
                </div>
              </div>
            </div>
          </div>
       
      </div>
    </>
  );
};
export default Benefit;
