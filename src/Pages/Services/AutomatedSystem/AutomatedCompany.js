const AutomatedCompany = () => {
  return (
    <>
      <div className="container-fluid mt-5">
        <div className="container">
          <div className="row">
          

            <div className="col-12 col-lg-6">
              <h2 className="mb-2">
                <strong>Automated System Company</strong>
              </h2>
              <p>
                Automated systems are used in a variety of industries, including manufacturing,
                transportation, and finance, to increase efficiency, reduce costs, and improve accuracy.
                They can range from simple mechanical systems, such as assembly line robots, to complex
                computer-controlled systems, such as those used in self-driving cars. Automated systems
                are often programmed to perform specific tasks using algorithms and can interact with
                other systems and data sources to gather information and make decisions.
              </p>
            </div>
           
            <div className="col-12 col-lg-6 d-flex justify-content-center">
              <video
                playsInline
                autoPlay
                muted
                loop
                id="bgvid"
                className="video video3 img-fluid">
                <source src="assets/video/video3.mp4" type="video/mp4" alt="Automated System Company" />
                <source src="assets/video/video3.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AutomatedCompany;
