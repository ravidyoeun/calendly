import React, { useRef, useEffect, useState } from "react";
// import sections
import Hero from "../components/sections/Hero";
import FeaturesTiles from "../components/sections/FeaturesTiles";
import FeaturesSplit from "../components/sections/FeaturesSplit";
import Testimonial from "../components/sections/Testimonial";
import Cta from "../components/sections/Cta";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
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
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div class='g-container'>
        <>
          {/* <Navbar style={{ height: 127 }}>

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
        </Navbar> */}
          <header class='o-header o-header-sticky g-layout-full stage'>
            <div class='header-elements g-col'></div>
            <div class='identifier-logo'>
              <a href='https://wwww.gaggenau.com/us' class='a-logo'>
                <div class='a-image'>
                  <picture>
                    <img
                      alt=''
                      src={require("../assets/images/gaggenau-logo.png")}
                      style={{ width: "auto" }}
                      alt='Open'
                    />
                  </picture>
                </div>
              </a>
            </div>
            <div class='nav-wrap'>
              <div class='search-form'></div>
              <div class='m-navmain'>
                <div class='button-menu js-mobile-menu-toggle'></div>
                <div class='navigation'>
                  <div class='js-nav-header nav-header hidden-desktop'>
                    <div class='previous'>
                      <a href='#' class='a-link has-icon js-previous-link'>
                        <i class='icon icon-arrow-left'></i>
                        <span class='text'>Home</span>
                      </a>
                    </div>
                    <div class='js-title-identifier title-identifier'></div>
                    <div class='overview'>
                      <a href='#' class='a-link js-overview-link'>
                        <span class='text'>Overview</span>
                      </a>
                    </div>
                  </div>

                  <nav>
                    <ul class='first-level list-unstyled'>
                      <li class=''></li>

                      <li class=''>
                        <a
                          href='/us/for-owners'
                          class='a-link has-child-level'
                          data-link-hierarchy='For owners'
                        >
                          <span class='text'></span>
                        </a>
                      </li>
                      <li class=''></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>

            <div class='header-content g-col'>
              <div class='own-stage'>
                <div class='m-stage'>
                  <Carousel
                    showArrows={false}
                    showStatus={false}
                    showIndicators={false}
                    infiniteLoop={false}
                    useKeyboardArrows={false}
                    swipeable={false}
                    showThumbs={false}
                    autoPlay={false}
                    dynamicHeight={true}
                  >
                    <div>
                      <img src='https://media3.bsh-group.com/Images/4000x/16532371_Image_ipad.png' />

                      <div class='teaser bottom-left'>
                        <h2 class='a-heading'>
                          Book Your Virtual Professional Introduction
                        </h2>
                      </div>
                      {/* <p className='legend'>Book your invervention request online</p> */}
                    </div>
                  </Carousel>
                </div>
              </div>
            </div>
          </header>
        </>
      </div>
      {/* <Hero className="illustration-section-01" /> */}

      {/* <Jumbotron
          fluid
          style={{
            backgroundImage:
              "url('https://media3.bsh-group.com/Images/4000x/16532371_Image_ipad.png')",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "100vh",
          }}
        >
          <Container>
            <div>
              <h3
                style={{
                  backgroundColor: "#000",
                  textAlign: "left",
                  marginTop: "90%",
                  left: "10px",
                  maxWidth: "60%",
                  padding: "30px",
                }}
              >
                <font>Book Your Virtual Professional Introduction</font>
              </h3>
     
            </div>
          </Container>
        </Jumbotron> */}

      <Container>
        <Row>
          <Col>
            {" "}
            <h4> Gaggenau Melbourne</h4>
            Nestled in the iconic South Melbourne precinct, Gaggenau Melbourne
            takes pride in one of Melbourne’s landmark locations. Drawing
            inspiration from its location, the space seamlessly integrates into
            the local culture and complements the surrounding architecture.
            Discover the space that is dedicated to inspiring customers,
            designers and architects. Important Message: With the easing of
            restrictions, Gaggenau Melbourne is currently open by appointment
            only. To ensure a clean, safe environment for customers and staff,
            we’re continuing our safety measures, including contactless
            temperature check on arrival, providing fresh face coverings,
            limiting number of visitors, maintaining 1.5 meters for social
            distancing and continuous deep cleaning. If you prefer, we can also
            conduct your appliance consultation over the phone. Simply choose
            your preferred appointment type from the menu below.
            <h4>Important Message:</h4>
            With the easing of restrictions, Gaggenau Melbourne is currently
            open by appointment only. To ensure a clean, safe environment for
            customers and staff, we’re continuing our safety measures, including
            contactless temperature check on arrival, providing fresh face
            coverings, limiting number of visitors, maintaining 1.5 meters for
            social distancing and continuous deep cleaning. If you prefer, we
            can also conduct your appliance consultation over the phone. Simply
            choose your preferred appointment type from the menu below.
          </Col>
        </Row>
        <Row>
          <Col>
            <div id='schedule_form'>
              <div
                className='calendly-inline-widget'
                data-url='https://www.seera.de/bsh-us/registration.php?backend=1&eid=100740&step=1'
                style={{
                  minWidth: "320px",
                  height: "1218px",
                  paddingTop: "40px",
                }}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>Start the conversation on 949.724.3575</h4>
            <p> Visit </p>
            <p>
              192-196 Coventry <br></br> St South Melbourne 3205{" "}
            </p>
            <p> Opening hours </p>
            <p>
              {" "}
              Monday – Friday 10am to 5pm (PST) <br></br> Closed on Weekends and
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
              style={{ paddingTop: "75px" }}
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
