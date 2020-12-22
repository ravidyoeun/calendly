import React, { useRef, useEffect, useState } from "react";
// import sections
import Hero from "../components/sections/Hero";
import FeaturesTiles from "../components/sections/FeaturesTiles";
import FeaturesSplit from "../components/sections/FeaturesSplit";
import Testimonial from "../components/sections/Testimonial";
import Cta from "../components/sections/Cta";
import "bootstrap/dist/css/bootstrap.min.css";
import { Jumbotron, Image, Container, Navbar, Row, Col } from "react-bootstrap";
const Home = () => {
  const [dynamicCalendarUrl, setCalendarUrl] = useState(
    "https://calendly.com/bshpersona/irvine?primary_color=e37222"
  );
  // <div class="calendly-inline-widget" data-url="https://calendly.com/bshpersona/bosch-calendar?primary_color=e37222" style="min-width:320px;height:630px;"></div>
  // <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js"></script>
  useEffect(() => {
    // Pass in a callback function!
    console.log("loading data");
    var todaysDate = new Date();
    var day = todaysDate.getUTCDate();
    var month = todaysDate.getUTCMonth() + 1;
    console.log("month", month);
    console.log("day", day);
    var year = todaysDate.getUTCFullYear();
    console.log("year", year);
    console.log("todaysDate", todaysDate);
    var lastDay = getLastDay(year, month);
    console.log("lastDay", lastDay);
    var daysleft = checkIfwithin2days(lastDay, day);
    console.log("daysleft", daysleft);
    if (daysleft <= 2) {
      var nextMonth = todaysDate.getUTCMonth() + 2;
      console.log("nextMonth", nextMonth);
      var formattedDates = year + "-" + nextMonth;
      console.log("formattedDates", formattedDates);
      setCalendarUrl(
        "https://calendly.com/bshpersona/irvine?primary_color=e37222&month=" +
          formattedDates
      );
    }
  }, []);

  const getLastDay = (y, m) => {
    return new Date(y, m, 0).getDate();
  };
  const checkIfwithin2days = (EndOfMonth, TodaysDate) => {
    var daysLeft = EndOfMonth - TodaysDate;
    return daysLeft;
  };

  return (
    <>
      <>
        <Navbar style={{ height: 127 }}>
          {/* <Image
          src={require('./../../../assets/images/gaggenau-#000.png')}
            // src={require('./../../../assets/images/#000.svg')}
            alt="Open"
            width={148}
            height={22} /> */}
          <Navbar.Brand href='https://wwww.gaggenau.com/us' target='_blank'>
            <img
              alt=''
              src={require("../assets/images/gaggenau-logo.png")}
              alt='Open'
              width={148}
              height={22}
            />{" "}
            React Bootstrap
          </Navbar.Brand>
        </Navbar>
      </>
      {/* <Hero className="illustration-section-01" /> */}

      <Jumbotron
        fluid
        style={{
          backgroundImage:
            "url('https://media3.bsh-group.com/Images/4000x/16532371_Image_ipad.png')",
          backgroundSize: "100% 100%",
          height: "100vh",
        }}
      >
        <Container>
          <div>
            <h2 style={{ backgroundColor: "#000", textAlign: "center" }}>
              <font>Book Your Virtual Professional Introduction</font>
            </h2>
            {/* <h2 className="heroText" style={{backgroundColor: '#000', width: '60%'}}><font>Book your intervention request online</font></h2> */}
          </div>
        </Container>
      </Jumbotron>

      <Container>
        <Row>
          <h4> Gaggenau Melbourne</h4>
          Nestled in the iconic South Melbourne precinct, Gaggenau Melbourne
          takes pride in one of Melbourne’s landmark locations. Drawing
          inspiration from its location, the space seamlessly integrates into
          the local culture and complements the surrounding architecture.
          Discover the space that is dedicated to inspiring customers, designers
          and architects. Important Message: With the easing of restrictions,
          Gaggenau Melbourne is currently open by appointment only. To ensure a
          clean, safe environment for customers and staff, we’re continuing our
          safety measures, including contactless temperature check on arrival,
          providing fresh face coverings, limiting number of visitors,
          maintaining 1.5 meters for social distancing and continuous deep
          cleaning. If you prefer, we can also conduct your appliance
          consultation over the phone. Simply choose your preferred appointment
          type from the menu below.
          <h4>Important Message:</h4>
          With the easing of restrictions, Gaggenau Melbourne is currently open
          by appointment only. To ensure a clean, safe environment for customers
          and staff, we’re continuing our safety measures, including contactless
          temperature check on arrival, providing fresh face coverings, limiting
          number of visitors, maintaining 1.5 meters for social distancing and
          continuous deep cleaning. If you prefer, we can also conduct your
          appliance consultation over the phone. Simply choose your preferred
          appointment type from the menu below.
        </Row>
        <Row>
          <Col>
            <div id='schedule_form'>
              <div
                className='calendly-inline-widget'
                data-url={dynamicCalendarUrl}
                style={{ minWidth: "320px", height: "670px" }}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>Start the conversation on + 61 3 8551 1399 </h4>
            <p> Visit </p>
            <p>
              192-196 Coventry <br></br> St South Melbourne 3205{" "}
            </p>
            <p> Opening hours </p>
            <p>
              {" "}
              Monday – Friday 10am to 4pm <br></br> Closed on Weekends and
              Public Holidays.
            </p>
            <p>
              Parking is available at Clarendon Center, 261 Clarendon Street,
              South Melbourne (entry via Coventry Street). The first 90 minutes
              are free. Fees apply for each subsequent hour. Alternatively,
              there are 1P and 2P ticketed parking bays surrounding the
              showroom.
            </p>
          </Col>
          <Col>
            <img
              class=' lazyloaded'
              style={{ width: "100%" }}
              src='//media3.gaggenau.com/Images/600x/12776044_GG_showroom_map.jpg'
              data-src='//media3.gaggenau.com/Images/600x/12776044_GG_showroom_map.jpg'
            ></img>
          </Col>
        </Row>
      </Container>
      {/* <FeaturesTiles /> */}
      {/* <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <Testimonial topDivider /> */}
      {/* <Cta split /> */}
    </>
  );
};

export default Home;
