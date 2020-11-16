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
          <Col>
            <div id='schedule_form'>
              <div
                className='calendly-inline-widget'
                data-url={dynamicCalendarUrl}
                style={{ minWidth: "320px", height: "670px" }}
              />
            </div>

            <p>
              Experience the Gaggenau Difference from the comfort of your home.
              We are here to assist you in enjoying the full benefits of your
              new Gaggenau purchase.
            </p>
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
