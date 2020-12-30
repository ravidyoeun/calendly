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

  const myFunction = () => {
    console.log("myfunction fired!");
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  };
  return (
    <>
      <div class='g-container'>
        <>
          <header class='o-header o-header-sticky g-layout-full stage'>
            <div class='header-elements g-col'></div>
            <div class='identifier-logo'>
              <a
                href='https://wwww.gaggenau.com/us'
                class='a-logo'
                target='_blank'
              >
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
                <div class='button-menu js-mobile-menu-toggle'>
                  <button class='a-button a-button-plain' onClick={myFunction}>
                    <i class='icon icon-bars icon-m'></i>
                    <span class='text visible-tablet-inline visible-mobile-inline'>
                      [common.menu]
                    </span>
                  </button>
                </div>

                <div class='navigation'>
                  <nav>
                    <ul class='first-level list-unstyled'>
                      <li class=''>
                        <a
                          href='https://www.gaggenau.com/us/experience'
                          class='a-link has-child-level'
                        >
                          <span class='text'>Experience</span>
                        </a>
                      </li>
                      <li class=''>
                        <a
                          href='https://www.gaggenau.com/us/appliances'
                          class='a-link has-child-level'
                        >
                          <span class='text'>Appliances</span>
                        </a>
                      </li>
                      <li class=''>
                        <a
                          href='https://www.gaggenau.com/us/for-owners'
                          class='a-link has-child-level'
                        >
                          <span class='text'>For owners</span>
                        </a>
                      </li>
                      <li class=''>
                        <a
                          href='https://www.gaggenau.com/us/for-partners'
                          class='a-link has-child-level'
                        >
                          <span class='text'>For partners</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div class='topnav'>
                <div id='myLinks'>
                  <a href='https://www.gaggenau.com/us/experience'>
                    Experience
                  </a>
                  <a href='https://www.gaggenau.com/us/appliances'>
                    Appliances
                  </a>
                  <a href='https://www.gaggenau.com/us/for-owners'>
                    For owners
                  </a>
                  <a href='https://www.gaggenau.com/us/for-partners'>
                    For partners
                  </a>
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
                      {/* <img src='https://media3.bsh-group.com/Images/4000x/16532371_Image_ipad.png' /> */}
                      <img src={require("../assets/images/Image-ipad.png")} />

                      <div class='teaser bottom-left'>
                        <h2 class='a-heading'>
                          Book Your Virtual Professional In-Home Introduction
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
        <Col style={{ paddingTop: "40px" }}>
          <p>
            Experience the Gaggenau Difference from the comfort of your home. We
            are here to assist you in enjoying the full benefits of your new
            Gaggenau purchase.
          </p>
          <p>
            With the virtual assistance of a Gaggenau Ambassador, via Zoom or
            FaceTime, we will share features and suggestions that will inspire
            you— the home chef — to create masterpieces.{" "}
          </p>
          <p style={{ fontStyle: "italic" }}>
            This service is only available within the first year of client
            ownership from installations.
          </p>
          <p>The difference is Gaggenau.</p>
        </Col>

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

        <div
          class='m-contentteaser '
          data-t-name='ContentTeaser'
          id='anc-5626184'
        >
          <div class='contentteaser-wrap a-area a-area-secondary a-area-mobile a-area-tablet a-area-desktop media-right'>
            <div class='media'>
              <div class='media-inner'>
                <a href='https://www.gaggenau.com/us/experience/showrooms'>
                  <div class='a-image' data-t-name='Image' data-t-id='41'>
                    <picture>
                      <img
                        class=' lazyloaded'
                        src='//media3.gaggenau.com/Images/600x/MCIM03327712_Showroom_London_website-teaser.jpg'
                        data-src='//media3.gaggenau.com/Images/600x/MCIM03327712_Showroom_London_website-teaser.jpg'
                      />
                    </picture>
                  </div>
                </a>
              </div>
            </div>
            <div class='content'>
              <div class='content-inner'>
                <div class='heading'>
                  <h2 class='a-heading'>
                    Experience the difference, the Gaggenau showroom
                  </h2>
                </div>

                <p></p>
                <p>
                  Ultimately, you need to experience a Gaggenau appliance to
                  truly appreciate its qualities. Find your nearest showroom to
                  open an oven door and turn a solid stainless steel knob while
                  sipping a cappuccino from our fully automatic espresso
                  machine.
                </p>
                <p></p>

                <ul class='list-unstyled'>
                  <li>
                    <a
                      href='https://www.gaggenau.com/us/experience/showrooms'
                      class='a-link a-link-local a-button a-button-primary '
                    >
                      <span class='text'>Your showroom</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
      {/* <FeaturesTiles /> */}
      {/* <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <Testimonial topDivider /> */}
      {/* <Cta split /> */}
    </>
  );
};

export default Home;
