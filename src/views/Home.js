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
                      <li class=''>
                        <a
                          href='/experience'
                          class='a-link has-child-level'
                          data-link-hierarchy='Experience'
                        >
                          <span class='text'>Experience</span>
                        </a>
                        <ul class='second-level list-unstyled fade-in'>
                          <li class=''>
                            <a
                              href='/experience/the-difference-is'
                              class='a-link has-child-level second-level-link'
                              data-link-hierarchy='Experience|The difference is'
                            >
                              <span class='text'>The difference is</span>
                            </a>
                            <ul class='third-level list-unstyled'>
                              <li class=''>
                                <a
                                  href='/experience/the-difference-is/craftsmanship'
                                  class='a-link '
                                  data-link-hierarchy='Experience|The difference is|Craftsmanship'
                                >
                                  <span class='text'>Craftsmanship</span>
                                </a>
                              </li>
                              <li class=''>
                                <a
                                  href='/experience/the-difference-is/heritage'
                                  class='a-link '
                                  data-link-hierarchy='Experience|The difference is|Heritage'
                                >
                                  <span class='text'>Heritage</span>
                                </a>
                              </li>
                              <li class=''>
                                <a
                                  href='/experience/the-difference-is/performance'
                                  class='a-link '
                                  data-link-hierarchy='Experience|The difference is|Performance'
                                >
                                  <span class='text'>Performance</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li class=''>
                            <a
                              href='https://www.gaggenau-themagazine.com/'
                              target='_blank'
                              class='a-link has-child-level second-level-link'
                              data-link-hierarchy='Experience|Magazine'
                            >
                              <span class='text'>Magazine</span>
                            </a>
                            <ul class='third-level list-unstyled'>
                              <li class=''>
                                <a
                                  href='/experience/magazine/download-magazine'
                                  class='a-link '
                                  data-link-hierarchy='Experience|Magazine|Download magazine'
                                >
                                  <span class='text'>Download magazine</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li class=''>
                            <a
                              href='/experience/news-and-events'
                              class='a-link has-child-level second-level-link'
                              data-link-hierarchy='Experience|News &amp; Events'
                            >
                              <span class='text'>News &amp; Events</span>
                            </a>
                            <ul class='third-level list-unstyled'>
                              <li class=''>
                                <a
                                  href='/experience/news-and-events/kitchen-of-the-year'
                                  class='a-link '
                                  data-link-hierarchy='Experience|News &amp; Events|Kitchen of the year'
                                >
                                  <span class='text'>Kitchen of the year</span>
                                </a>
                              </li>
                              <li class=''>
                                <a
                                  href='/experience/news-and-events/sommelier-awards'
                                  class='a-link '
                                  data-link-hierarchy='Experience|News &amp; Events|Sommelier Awards'
                                >
                                  <span class='text'>Sommelier Awards</span>
                                </a>
                              </li>
                              <li class=''>
                                <a
                                  href='/experience/news-and-events/eurocucina'
                                  class='a-link '
                                  data-link-hierarchy='Experience|News &amp; Events|EuroCucina'
                                >
                                  <span class='text'>EuroCucina</span>
                                </a>
                              </li>
                              <li class=''>
                                <a
                                  href='/experience/news-and-events/the-world-restaurant-awards'
                                  class='a-link '
                                  data-link-hierarchy='Experience|News &amp; Events|The world restaurant awards'
                                >
                                  <span class='text'>
                                    The world restaurant awards
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li class=''>
                            <a
                              href='/experience/inspiration'
                              class='a-link has-child-level second-level-link'
                              data-link-hierarchy='Experience|Inspiration'
                            >
                              <span class='text'>Inspiration</span>
                            </a>
                            <ul class='third-level list-unstyled'>
                              <li class=''>
                                <a
                                  href='/experience/inspiration/art-of-the-kitchen'
                                  class='a-link has-child-level'
                                  data-link-hierarchy='Experience|Inspiration|Art of the kitchen'
                                >
                                  <span class='text'>Art of the kitchen</span>
                                </a>
                                <ul class='4th-level hidden-desktop list-unstyled'>
                                  <li class=''>
                                    <a
                                      href='/experience/inspiration/art-of-the-kitchen/gaggenau-meets-nadia-damaso'
                                      class='a-link '
                                      data-link-hierarchy='Experience|Inspiration|Art of the kitchen|Gaggenau meets: Nadia Damaso'
                                    >
                                      <span class='text'>
                                        Gaggenau meets: Nadia Damaso
                                      </span>
                                    </a>
                                  </li>
                                  <li class=''>
                                    <a
                                      href='/experience/inspiration/art-of-the-kitchen/at-home-with-timmy-coles-liddle'
                                      class='a-link '
                                      data-link-hierarchy='Experience|Inspiration|Art of the kitchen|At home with Timmy Coles-Liddle'
                                    >
                                      <span class='text'>
                                        At home with Timmy Coles-Liddle
                                      </span>
                                    </a>
                                  </li>
                                  <li class=''>
                                    <a
                                      href='/experience/inspiration/art-of-the-kitchen/at-home-with-daniel-berlin'
                                      class='a-link '
                                      data-link-hierarchy='Experience|Inspiration|Art of the kitchen|At home with Daniel Berlin'
                                    >
                                      <span class='text'>
                                        At home with Daniel Berlin
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li class=''>
                                <a
                                  href='/experience/inspiration/behind-the-scenes'
                                  class='a-link '
                                  data-link-hierarchy='Experience|Inspiration|Behind the scenes'
                                >
                                  <span class='text'>Behind the scenes</span>
                                </a>
                              </li>
                              <li class=''>
                                <a
                                  href='/experience/inspiration/respected'
                                  class='a-link '
                                  data-link-hierarchy='Experience|Inspiration|Respected'
                                >
                                  <span class='text'>Respected</span>
                                </a>
                              </li>
                              <li class=''>
                                <a
                                  href='/experience/inspiration/master-of-steam'
                                  class='a-link '
                                  data-link-hierarchy='Experience|Inspiration|Master of steam'
                                >
                                  <span class='text'>Master of steam</span>
                                </a>
                              </li>
                              <li class=''>
                                <a
                                  href='/experience/inspiration/recipes'
                                  class='a-link '
                                  data-link-hierarchy='Experience|Inspiration|Recipes'
                                >
                                  <span class='text'>Recipes</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li class='navigation-state-active'>
                            <a
                              href='/experience/showrooms'
                              class='a-link has-child-level second-level-link'
                              data-link-hierarchy='Experience|Showrooms'
                            >
                              <span class='text'>Showrooms</span>
                            </a>
                            <ul class='third-level list-unstyled'>
                              <li class=''>
                                <a
                                  href='/experience/showrooms/arrange-a-visit'
                                  class='a-link '
                                  data-link-hierarchy='Experience|Showrooms|Arrange a visit'
                                >
                                  <span class='text'>Arrange a visit</span>
                                </a>
                              </li>
                              <li class='navigation-state-active'>
                                <a
                                  href='/experience/showrooms/book-a-phone-consultation'
                                  class='a-link '
                                  data-link-hierarchy='Experience|Showrooms|Book a phone consultation'
                                >
                                  <span class='text'>
                                    Book a phone consultation
                                  </span>
                                </a>
                              </li>
                              <li class=''>
                                <a
                                  href='/experience/showrooms/find-a-dealer'
                                  class='a-link '
                                  data-link-hierarchy='Experience|Showrooms|Find a dealer'
                                >
                                  <span class='text'>Find a dealer</span>
                                </a>
                              </li>
                              <li class=''>
                                <a
                                  href='/experience/showrooms/showroom-tour'
                                  class='a-link '
                                  data-link-hierarchy='Experience|Showrooms|Showroom tour'
                                >
                                  <span class='text'>Showroom tour</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li class='close'>
                            <button class='a-button a-button-primary js-close'>
                              <span class='text'>
                                [global.common.btn.close]
                              </span>
                            </button>
                          </li>
                        </ul>
                      </li>
                      <li class=''>
                        <a
                          href='/appliances'
                          class='a-link has-child-level'
                          data-link-hierarchy='Appliances'
                        >
                          <span class='text'>Appliances</span>
                        </a>
                        <ul class='second-level list-unstyled fade-in'>
                          <li class=''>
                            <a
                              href='/appliances/ovens'
                              class='a-link has-child-level second-level-link'
                              data-link-hierarchy='Appliances|Ovens'
                            >
                              <span class='text'>Ovens</span>
                            </a>
                            <ul class='third-level list-unstyled'>
                              <li class=''>
                                <a
                                  href='/appliances/ovens/eb-333'
                                  class='a-link '
                                  data-link-hierarchy='Appliances|Ovens|EB 333'
                                >
                                  <span class='text'>EB 333</span>
                                </a>
                              </li>
                              <li class=''>
                                <a
                                  href='/appliances/ovens/400-series'
                                  class='a-link '
                                  data-link-hierarchy='Appliances|Ovens|400 series'
                                >
                                  <span class='text'>400 series</span>
                                </a>
                              </li>
                              <li class=''>
                                <a
                                  href='/appliances/ovens/200-series'
                                  class='a-link '
                                  data-link-hierarchy='Appliances|Ovens|200 series'
                                >
                                  <span class='text'>200 series</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li class=''>
                            <a
                              href='/appliances/coffee-machines'
                              class='a-link has-child-level second-level-link'
                              data-link-hierarchy='Appliances|Coffee machines'
                            >
                              <span class='text'>Coffee machines</span>
                            </a>
                            <ul class='third-level list-unstyled'>
                              <li class=''>
                                <a
                                  href='/appliances/coffee-machines/400-series'
                                  class='a-link '
                                  data-link-hierarchy='Appliances|Coffee machines|400 series'
                                >
                                  <span class='text'>400 series</span>
                                </a>
                              </li>
                              <li class=''>
                                <a
                                  href='/appliances/coffee-machines/200-series'
                                  class='a-link '
                                  data-link-hierarchy='Appliances|Coffee machines|200 series'
                                >
                                  <span class='text'>200 series</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li class=''>
                            <a
                              href='/appliances/cooktops'
                              class='a-link has-child-level second-level-link'
                              data-link-hierarchy='Appliances|Cooktops'
                            >
                              <span class='text'>Cooktops</span>
                            </a>
                            <ul class='third-level list-unstyled'>
                              <li class=''>
                                <a
                                  href='/appliances/cooktops/400-series'
                                  class='a-link '
                                  data-link-hierarchy='Appliances|Cooktops|400 series'
                                >
                                  <span class='text'>400 series</span>
                                </a>
                              </li>
                              <li class=''>
                                <a
                                  href='/appliances/cooktops/200-series'
                                  class='a-link '
                                  data-link-hierarchy='Appliances|Cooktops|200 series'
                                >
                                  <span class='text'>200 series</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li class=''>
                            <a
                              href='/appliances/ventilation'
                              class='a-link has-child-level second-level-link'
                              data-link-hierarchy='Appliances|Ventilation'
                            >
                              <span class='text'>Ventilation</span>
                            </a>
                            <ul class='third-level list-unstyled'>
                              <li class=''>
                                <a
                                  href='/appliances/ventilation/400-series'
                                  class='a-link '
                                  data-link-hierarchy='Appliances|Ventilation|400 series'
                                >
                                  <span class='text'>400 series</span>
                                </a>
                              </li>
                              <li class=''>
                                <a
                                  href='/appliances/ventilation/200-series'
                                  class='a-link '
                                  data-link-hierarchy='Appliances|Ventilation|200 series'
                                >
                                  <span class='text'>200 series</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li class=''>
                            <a
                              href='/appliances/refrigeration'
                              class='a-link has-child-level second-level-link'
                              data-link-hierarchy='Appliances|Refrigeration'
                            >
                              <span class='text'>Refrigeration</span>
                            </a>
                            <ul class='third-level list-unstyled'>
                              <li class=''>
                                <a
                                  href='/appliances/refrigeration/400-series'
                                  class='a-link '
                                  data-link-hierarchy='Appliances|Refrigeration|400 series'
                                >
                                  <span class='text'>400 series</span>
                                </a>
                              </li>
                              <li class=''>
                                <a
                                  href='/appliances/refrigeration/200-series'
                                  class='a-link '
                                  data-link-hierarchy='Appliances|Refrigeration|200 series'
                                >
                                  <span class='text'>200 series</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li class=''>
                            <a
                              href='/appliances/wine-cabinets'
                              class='a-link has-child-level second-level-link'
                              data-link-hierarchy='Appliances|Wine cabinets'
                            >
                              <span class='text'>Wine cabinets</span>
                            </a>
                            <ul class='third-level list-unstyled'>
                              <li class=''>
                                <a
                                  href='/appliances/wine-cabinets/400-series'
                                  class='a-link '
                                  data-link-hierarchy='Appliances|Wine cabinets|400 series'
                                >
                                  <span class='text'>400 series</span>
                                </a>
                              </li>
                              <li class=''>
                                <a
                                  href='/appliances/wine-cabinets/200-series'
                                  class='a-link '
                                  data-link-hierarchy='Appliances|Wine cabinets|200 series'
                                >
                                  <span class='text'>200 series</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li class=''>
                            <a
                              href='/appliances/dishwashers'
                              class='a-link has-child-level second-level-link'
                              data-link-hierarchy='Appliances|Dishwashers'
                            >
                              <span class='text'>Dishwashers</span>
                            </a>
                            <ul class='third-level list-unstyled'>
                              <li class=''>
                                <a
                                  href='/appliances/dishwashers/400-series'
                                  class='a-link '
                                  data-link-hierarchy='Appliances|Dishwashers|400 series'
                                >
                                  <span class='text'>400 series</span>
                                </a>
                              </li>
                              <li class=''>
                                <a
                                  href='/appliances/dishwashers/200-series'
                                  class='a-link '
                                  data-link-hierarchy='Appliances|Dishwashers|200 series'
                                >
                                  <span class='text'>200 series</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li class=''>
                            <a
                              href='/appliances/showroom'
                              class='a-link has-child-level second-level-link'
                              data-link-hierarchy='Appliances|Showroom'
                            >
                              <span class='text'>Showroom</span>
                            </a>
                            <ul class='third-level list-unstyled'>
                              <li class=''>
                                <a
                                  href='/appliances/showroom/arrange-a-visit'
                                  class='a-link '
                                  data-link-hierarchy='Appliances|Showroom|Arrange a visit'
                                >
                                  <span class='text'>Arrange a visit</span>
                                </a>
                              </li>
                              <li class=''>
                                <a
                                  href='/appliances/showroom/book-a-phone-consultation'
                                  class='a-link '
                                  data-link-hierarchy='Appliances|Showroom|Book a phone consultation'
                                >
                                  <span class='text'>
                                    Book a phone consultation
                                  </span>
                                </a>
                              </li>
                              <li class=''>
                                <a
                                  href='/appliances/showroom/find-a-dealer'
                                  class='a-link '
                                  data-link-hierarchy='Appliances|Showroom|Find a dealer'
                                >
                                  <span class='text'>Find a dealer</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li class=''>
                            <a
                              href='/appliances/downloads'
                              class='a-link  second-level-link'
                              data-link-hierarchy='Appliances|Downloads'
                            >
                              <span class='text'>Downloads</span>
                            </a>
                          </li>
                          <li class=''>
                            <a
                              href='/appliances/assistance'
                              class='a-link  second-level-link'
                              data-link-hierarchy='Appliances|Assistance'
                            >
                              <span class='text'>Assistance</span>
                            </a>
                          </li>
                          <li class='close'>
                            <button class='a-button a-button-primary js-close'>
                              <span class='text'>
                                [global.common.btn.close]
                              </span>
                            </button>
                          </li>
                        </ul>
                      </li>
                      <li class=''>
                        <a
                          href='/contact'
                          class='a-link has-child-level'
                          data-link-hierarchy='Contact'
                        >
                          <span class='text'>Contact</span>
                        </a>
                        <ul class='second-level list-unstyled fade-in'>
                          <li class=''>
                            <a
                              href='/contact/assistance'
                              class='a-link has-child-level second-level-link'
                              data-link-hierarchy='Contact|Assistance'
                            >
                              <span class='text'>Assistance</span>
                            </a>
                            <ul class='third-level list-unstyled'>
                              <li class=''>
                                <a
                                  href='/contact/assistance/contact-us'
                                  class='a-link '
                                  data-link-hierarchy='Contact|Assistance|Contact us'
                                >
                                  <span class='text'>Contact us</span>
                                </a>
                              </li>
                              <li class=''>
                                <a
                                  href='/contact/assistance/customer-services'
                                  class='a-link '
                                  data-link-hierarchy='Contact|Assistance|Customer services'
                                >
                                  <span class='text'>Customer services</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li class=''>
                            <a
                              href='/contact/showrooms'
                              class='a-link has-child-level second-level-link'
                              data-link-hierarchy='Contact|Showrooms'
                            >
                              <span class='text'>Showrooms</span>
                            </a>
                            <ul class='third-level list-unstyled'>
                              <li class=''>
                                <a
                                  href='/contact/showrooms/arrange-a-visit'
                                  class='a-link '
                                  data-link-hierarchy='Contact|Showrooms|Arrange a visit'
                                >
                                  <span class='text'>Arrange a visit</span>
                                </a>
                              </li>
                              <li class=''>
                                <a
                                  href='/contact/showrooms/book-a-phone-consultation'
                                  class='a-link '
                                  data-link-hierarchy='Contact|Showrooms|Book a phone consultation'
                                >
                                  <span class='text'>
                                    Book a phone consultation
                                  </span>
                                </a>
                              </li>
                              <li class=''>
                                <a
                                  href='/contact/showrooms/find-a-dealer'
                                  class='a-link '
                                  data-link-hierarchy='Contact|Showrooms|Find a dealer'
                                >
                                  <span class='text'>Find a dealer</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li class=''>
                            <a
                              href='/contact/downloads'
                              class='a-link has-child-level second-level-link'
                              data-link-hierarchy='Contact|Downloads'
                            >
                              <span class='text'>Downloads</span>
                            </a>
                            <ul class='third-level list-unstyled'>
                              <li class=''>
                                <a
                                  href='/contact/downloads/operation-manuals'
                                  class='a-link '
                                  data-link-hierarchy='Contact|Downloads|Operation Manuals'
                                >
                                  <span class='text'>Operation Manuals</span>
                                </a>
                              </li>
                              <li class=''>
                                <a
                                  href='/contact/downloads/brochures'
                                  class='a-link '
                                  data-link-hierarchy='Contact|Downloads|Brochures'
                                >
                                  <span class='text'>Brochures</span>
                                </a>
                              </li>
                              <li class=''>
                                <a
                                  href='/contact/downloads/gaggenau-magazine'
                                  class='a-link '
                                  data-link-hierarchy='Contact|Downloads|Gaggenau magazine'
                                >
                                  <span class='text'>Gaggenau magazine</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li class='close'>
                            <button class='a-button a-button-primary js-close'>
                              <span class='text'>
                                [global.common.btn.close]
                              </span>
                            </button>
                          </li>
                        </ul>
                      </li>
                      <li class=''>
                        <a
                          href='/for-partners'
                          class='a-link has-child-level'
                          data-link-hierarchy='For partners'
                        >
                          <span class='text'>For partners</span>
                        </a>
                        <ul class='second-level list-unstyled fade-in'>
                          <li class=''>
                            <a
                              href='/for-partners/specifications'
                              class='a-link has-child-level second-level-link'
                              data-link-hierarchy='For partners|Specifications'
                            >
                              <span class='text'>Specifications</span>
                            </a>
                            <ul class='third-level list-unstyled'>
                              <li class=''>
                                <a
                                  href='/products-list/ovens'
                                  class='a-link has-child-level'
                                  data-link-hierarchy='For partners|Specifications|Ovens'
                                >
                                  <span class='text'>Ovens</span>
                                </a>
                                <ul class='4th-level hidden-desktop list-unstyled'>
                                  <li class=''>
                                    <a
                                      href='/products-list/ovens/oven-eb-333'
                                      class='a-link '
                                      data-link-hierarchy='For partners|Specifications|Ovens|Oven EB 333'
                                    >
                                      <span class='text'>Oven EB 333</span>
                                    </a>
                                  </li>
                                  <li class=''>
                                    <a
                                      href='/products-list/ovens/400-series'
                                      class='a-link has-child-level'
                                      data-link-hierarchy='For partners|Specifications|Ovens|400 Series'
                                    >
                                      <span class='text'>400 Series</span>
                                    </a>
                                    <ul class='5th-level hidden-desktop list-unstyled'>
                                      <li class=''>
                                        <a
                                          href='/products-list/ovens/400-series/ovens'
                                          class='a-link '
                                          data-link-hierarchy='For partners|Specifications|Ovens|400 Series|Ovens'
                                        >
                                          <span class='text'>Ovens</span>
                                        </a>
                                      </li>
                                      <li class=''>
                                        <a
                                          href='/products-list/ovens/400-series/combi-steam-ovens'
                                          class='a-link '
                                          data-link-hierarchy='For partners|Specifications|Ovens|400 Series|Combi-steam ovens'
                                        >
                                          <span class='text'>
                                            Combi-steam ovens
                                          </span>
                                        </a>
                                      </li>
                                      <li class=''>
                                        <a
                                          href='/products-list/ovens/400-series/combi-microwave-ovens'
                                          class='a-link '
                                          data-link-hierarchy='For partners|Specifications|Ovens|400 Series|Combi-microwave ovens'
                                        >
                                          <span class='text'>
                                            Combi-microwave ovens
                                          </span>
                                        </a>
                                      </li>
                                      <li class=''>
                                        <a
                                          href='/products-list/ovens/400-series/warming-drawers'
                                          class='a-link '
                                          data-link-hierarchy='For partners|Specifications|Ovens|400 Series|Warming drawers'
                                        >
                                          <span class='text'>
                                            Warming drawers
                                          </span>
                                        </a>
                                      </li>
                                      <li class=''>
                                        <a
                                          href='/products-list/ovens/400-series/vacuuming-drawer'
                                          class='a-link '
                                          data-link-hierarchy='For partners|Specifications|Ovens|400 Series|Vacuuming drawer'
                                        >
                                          <span class='text'>
                                            Vacuuming drawer
                                          </span>
                                        </a>
                                      </li>
                                      <li class=''>
                                        <a
                                          href='/products-list/ovens/400-series/double-oven'
                                          class='a-link '
                                          data-link-hierarchy='For partners|Specifications|Ovens|400 Series|Double oven'
                                        >
                                          <span class='text'>Double oven</span>
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li class=''>
                                    <a
                                      href='/products-list/ovens/200-series'
                                      class='a-link has-child-level'
                                      data-link-hierarchy='For partners|Specifications|Ovens|200 Series'
                                    >
                                      <span class='text'>200 Series</span>
                                    </a>
                                    <ul class='5th-level hidden-desktop list-unstyled'>
                                      <li class=''>
                                        <a
                                          href='/products-list/ovens/200-series/ovens'
                                          class='a-link '
                                          data-link-hierarchy='For partners|Specifications|Ovens|200 Series|Ovens'
                                        >
                                          <span class='text'>Ovens</span>
                                        </a>
                                      </li>
                                      <li class=''>
                                        <a
                                          href='/products-list/ovens/200-series/combi-steam-ovens'
                                          class='a-link '
                                          data-link-hierarchy='For partners|Specifications|Ovens|200 Series|Combi-steam ovens'
                                        >
                                          <span class='text'>
                                            Combi-steam ovens
                                          </span>
                                        </a>
                                      </li>
                                      <li class=''>
                                        <a
                                          href='/products-list/ovens/200-series/combi-microwave-ovens'
                                          class='a-link '
                                          data-link-hierarchy='For partners|Specifications|Ovens|200 Series|Combi-microwave ovens'
                                        >
                                          <span class='text'>
                                            Combi-microwave ovens
                                          </span>
                                        </a>
                                      </li>
                                      <li class=''>
                                        <a
                                          href='/products-list/ovens/200-series/microwave-ovens'
                                          class='a-link '
                                          data-link-hierarchy='For partners|Specifications|Ovens|200 Series|Microwave ovens'
                                        >
                                          <span class='text'>
                                            Microwave ovens
                                          </span>
                                        </a>
                                      </li>
                                      <li class=''>
                                        <a
                                          href='/products-list/ovens/200-series/warming-drawers'
                                          class='a-link '
                                          data-link-hierarchy='For partners|Specifications|Ovens|200 Series|Warming drawers'
                                        >
                                          <span class='text'>
                                            Warming drawers
                                          </span>
                                        </a>
                                      </li>
                                      <li class=''>
                                        <a
                                          href='/products-list/ovens/200-series/vacuuming-drawer'
                                          class='a-link '
                                          data-link-hierarchy='For partners|Specifications|Ovens|200 Series|Vacuuming drawer'
                                        >
                                          <span class='text'>
                                            Vacuuming drawer
                                          </span>
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                              <li class=''>
                                <a
                                  href='/products-list/coffee'
                                  class='a-link has-child-level'
                                  data-link-hierarchy='For partners|Specifications|Coffee machines'
                                >
                                  <span class='text'>Coffee machines</span>
                                </a>
                                <ul class='4th-level hidden-desktop list-unstyled'>
                                  <li class=''>
                                    <a
                                      href='/products-list/coffee/400-series'
                                      class='a-link has-child-level'
                                      data-link-hierarchy='For partners|Specifications|Coffee machines|400 Series'
                                    >
                                      <span class='text'>400 Series</span>
                                    </a>
                                    <ul class='5th-level hidden-desktop list-unstyled'>
                                      <li class=''>
                                        <a
                                          href='/products-list/coffee/400-series/fully-automatic-espresso-machine'
                                          class='a-link '
                                          data-link-hierarchy='For partners|Specifications|Coffee machines|400 Series|Fully automatic espresso machine'
                                        >
                                          <span class='text'>
                                            Fully automatic espresso machine
                                          </span>
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li class=''>
                                    <a
                                      href='/products-list/coffee/200-series'
                                      class='a-link has-child-level'
                                      data-link-hierarchy='For partners|Specifications|Coffee machines|200 Series'
                                    >
                                      <span class='text'>200 Series</span>
                                    </a>
                                    <ul class='5th-level hidden-desktop list-unstyled'>
                                      <li class=''>
                                        <a
                                          href='/products-list/coffee/200-series/fully-automatic-espresso-machine'
                                          class='a-link '
                                          data-link-hierarchy='For partners|Specifications|Coffee machines|200 Series|Fully automatic espresso machine'
                                        >
                                          <span class='text'>
                                            Fully automatic espresso machine
                                          </span>
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                              <li class=''>
                                <a
                                  href='/products-list/cooktops'
                                  class='a-link has-child-level'
                                  data-link-hierarchy='For partners|Specifications|Cooktops'
                                >
                                  <span class='text'>Cooktops</span>
                                </a>
                                <ul class='4th-level hidden-desktop list-unstyled'>
                                  <li class=''>
                                    <a
                                      href='/products-list/cooktops/400-series'
                                      class='a-link has-child-level'
                                      data-link-hierarchy='For partners|Specifications|Cooktops|400 Series'
                                    >
                                      <span class='text'>400 Series</span>
                                    </a>
                                    <ul class='5th-level hidden-desktop list-unstyled'>
                                      <li class=''>
                                        <a
                                          href='/products-list/cooktops/400-series/400-series'
                                          class='a-link has-child-level'
                                          data-link-hierarchy='For partners|Specifications|Cooktops|400 Series|400 Series'
                                        >
                                          <span class='text'>400 Series</span>
                                        </a>
                                        <ul class='6th-level hidden-desktop list-unstyled'>
                                          <li class=''>
                                            <a
                                              href='/products-list/cooktops/400-series/400-series/induction'
                                              class='a-link '
                                              data-link-hierarchy='For partners|Specifications|Cooktops|400 Series|400 Series|Induction'
                                            >
                                              <span class='text'>
                                                Induction
                                              </span>
                                            </a>
                                          </li>
                                          <li class=''>
                                            <a
                                              href='/products-list/cooktops/400-series/400-series/cooktops400seriesfullsurfaceinductioncooktops'
                                              class='a-link '
                                              data-link-hierarchy='For partners|Specifications|Cooktops|400 Series|400 Series|Full surface induction cooktops'
                                            >
                                              <span class='text'>
                                                Full surface induction cooktops
                                              </span>
                                            </a>
                                          </li>
                                        </ul>
                                      </li>
                                      <li class=''>
                                        <a
                                          href='/products-list/cooktops/400-series/vario-400-series'
                                          class='a-link has-child-level'
                                          data-link-hierarchy='For partners|Specifications|Cooktops|400 Series|Vario 400 Series'
                                        >
                                          <span class='text'>
                                            Vario 400 Series
                                          </span>
                                        </a>
                                        <ul class='6th-level hidden-desktop list-unstyled'>
                                          <li class=''>
                                            <a
                                              href='/products-list/cooktops/400-series/vario-400-series/induction'
                                              class='a-link '
                                              data-link-hierarchy='For partners|Specifications|Cooktops|400 Series|Vario 400 Series|Induction'
                                            >
                                              <span class='text'>
                                                Induction
                                              </span>
                                            </a>
                                          </li>
                                          <li class=''>
                                            <a
                                              href='/products-list/cooktops/400-series/vario-400-series/gas'
                                              class='a-link '
                                              data-link-hierarchy='For partners|Specifications|Cooktops|400 Series|Vario 400 Series|Gas'
                                            >
                                              <span class='text'>Gas</span>
                                            </a>
                                          </li>
                                          <li class=''>
                                            <a
                                              href='/products-list/cooktops/400-series/vario-400-series/vario-modules'
                                              class='a-link '
                                              data-link-hierarchy='For partners|Specifications|Cooktops|400 Series|Vario 400 Series|Vario-Modules'
                                            >
                                              <span class='text'>
                                                Vario-Modules
                                              </span>
                                            </a>
                                          </li>
                                          <li class=''>
                                            <a
                                              href='/products-list/cooktops/400-series/vario-400-series/downdraft-ventilation'
                                              class='a-link '
                                              data-link-hierarchy='For partners|Specifications|Cooktops|400 Series|Vario 400 Series|Downdraft ventilation'
                                            >
                                              <span class='text'>
                                                Downdraft ventilation
                                              </span>
                                            </a>
                                          </li>
                                          <li class=''>
                                            <a
                                              href='/products-list/cooktops/400-series/vario-400-series/cooktops400varioseriesflexinduction'
                                              class='a-link '
                                              data-link-hierarchy='For partners|Specifications|Cooktops|400 Series|Vario 400 Series|Vario flex induction cooktops'
                                            >
                                              <span class='text'>
                                                Vario flex induction cooktops
                                              </span>
                                            </a>
                                          </li>
                                          <li class=''>
                                            <a
                                              href='/products-list/cooktops/400-series/vario-400-series/cooktops400varioseriesteppanyaki'
                                              class='a-link '
                                              data-link-hierarchy='For partners|Specifications|Cooktops|400 Series|Vario 400 Series|Vario Teppan Yaki'
                                            >
                                              <span class='text'>
                                                Vario Teppan Yaki
                                              </span>
                                            </a>
                                          </li>
                                          <li class=''>
                                            <a
                                              href='/products-list/cooktops/400-series/vario-400-series/cooktops400varioserieselectricgrill'
                                              class='a-link '
                                              data-link-hierarchy='For partners|Specifications|Cooktops|400 Series|Vario 400 Series|Vario electric grill'
                                            >
                                              <span class='text'>
                                                Vario electric grill
                                              </span>
                                            </a>
                                          </li>
                                          <li class=''>
                                            <a
                                              href='/products-list/cooktops/400-series/vario-400-series/cooktops400varioseriesdeepfryer'
                                              class='a-link '
                                              data-link-hierarchy='For partners|Specifications|Cooktops|400 Series|Vario 400 Series|Vario deep fryer'
                                            >
                                              <span class='text'>
                                                Vario deep fryer
                                              </span>
                                            </a>
                                          </li>
                                          <li class=''>
                                            <a
                                              href='/products-list/cooktops/400-series/vario-400-series/cooktops400varioseriestableventilation'
                                              class='a-link '
                                              data-link-hierarchy='For partners|Specifications|Cooktops|400 Series|Vario 400 Series|Table ventilation'
                                            >
                                              <span class='text'>
                                                Table ventilation
                                              </span>
                                            </a>
                                          </li>
                                          <li class=''>
                                            <a
                                              href='/products-list/cooktops/400-series/vario-400-series/cooktops400varioseriesvariodowndraftventilation'
                                              class='a-link '
                                              data-link-hierarchy='For partners|Specifications|Cooktops|400 Series|Vario 400 Series|Vario downdraft ventilation'
                                            >
                                              <span class='text'>
                                                Vario downdraft ventilation
                                              </span>
                                            </a>
                                          </li>
                                          <li class=''>
                                            <a
                                              href='/products-list/cooktops/400-series/vario-400-series/cooktops400varioseriesfullsurfaceinduction'
                                              class='a-link '
                                              data-link-hierarchy='For partners|Specifications|Cooktops|400 Series|Vario 400 Series|Full surface induction cooktop'
                                            >
                                              <span class='text'>
                                                Full surface induction cooktop
                                              </span>
                                            </a>
                                          </li>
                                        </ul>
                                      </li>
                                    </ul>
                                  </li>
                                  <li class=''>
                                    <a
                                      href='/products-list/cooktops/200-series'
                                      class='a-link has-child-level'
                                      data-link-hierarchy='For partners|Specifications|Cooktops|200 Series'
                                    >
                                      <span class='text'>200 Series</span>
                                    </a>
                                    <ul class='5th-level hidden-desktop list-unstyled'>
                                      <li class=''>
                                        <a
                                          href='/products-list/cooktops/200-series/200-series'
                                          class='a-link has-child-level'
                                          data-link-hierarchy='For partners|Specifications|Cooktops|200 Series|200 Series'
                                        >
                                          <span class='text'>200 Series</span>
                                        </a>
                                        <ul class='6th-level hidden-desktop list-unstyled'>
                                          <li class=''>
                                            <a
                                              href='/products-list/cooktops/200-series/200-series/induction'
                                              class='a-link '
                                              data-link-hierarchy='For partners|Specifications|Cooktops|200 Series|200 Series|Induction'
                                            >
                                              <span class='text'>
                                                Induction
                                              </span>
                                            </a>
                                          </li>
                                          <li class=''>
                                            <a
                                              href='/products-list/cooktops/200-series/200-series/cooktops200seriesflexinduction'
                                              class='a-link '
                                              data-link-hierarchy='For partners|Specifications|Cooktops|200 Series|200 Series|Flex induction cooktops'
                                            >
                                              <span class='text'>
                                                Flex induction cooktops
                                              </span>
                                            </a>
                                          </li>
                                          <li class=''>
                                            <a
                                              href='/products-list/cooktops/200-series/200-series/knobs'
                                              class='a-link '
                                              data-link-hierarchy='For partners|Specifications|Cooktops|200 Series|200 Series|Knobs'
                                            >
                                              <span class='text'>Knobs</span>
                                            </a>
                                          </li>
                                        </ul>
                                      </li>
                                      <li class=''>
                                        <a
                                          href='/products-list/cooktops/200-series/vario-200-series'
                                          class='a-link has-child-level'
                                          data-link-hierarchy='For partners|Specifications|Cooktops|200 Series|Vario 200 Series'
                                        >
                                          <span class='text'>
                                            Vario 200 Series
                                          </span>
                                        </a>
                                        <ul class='6th-level hidden-desktop list-unstyled'>
                                          <li class=''>
                                            <a
                                              href='/products-list/cooktops/200-series/vario-200-series/induction'
                                              class='a-link '
                                              data-link-hierarchy='For partners|Specifications|Cooktops|200 Series|Vario 200 Series|Induction'
                                            >
                                              <span class='text'>
                                                Induction
                                              </span>
                                            </a>
                                          </li>
                                          <li class=''>
                                            <a
                                              href='/products-list/cooktops/200-series/vario-200-series/gas'
                                              class='a-link '
                                              data-link-hierarchy='For partners|Specifications|Cooktops|200 Series|Vario 200 Series|Gas'
                                            >
                                              <span class='text'>Gas</span>
                                            </a>
                                          </li>
                                          <li class=''>
                                            <a
                                              href='/products-list/cooktops/200-series/vario-200-series/vario-modules'
                                              class='a-link '
                                              data-link-hierarchy='For partners|Specifications|Cooktops|200 Series|Vario 200 Series|Vario-Modules'
                                            >
                                              <span class='text'>
                                                Vario-Modules
                                              </span>
                                            </a>
                                          </li>
                                          <li class=''>
                                            <a
                                              href='/products-list/cooktops/200-series/vario-200-series/downdraft-ventilation'
                                              class='a-link '
                                              data-link-hierarchy='For partners|Specifications|Cooktops|200 Series|Vario 200 Series|Downdraft ventilation'
                                            >
                                              <span class='text'>
                                                Downdraft ventilation
                                              </span>
                                            </a>
                                          </li>
                                          <li class=''>
                                            <a
                                              href='/products-list/cooktops/200-series/vario-200-series/cooktops200varioseriesteppanyaki'
                                              class='a-link '
                                              data-link-hierarchy='For partners|Specifications|Cooktops|200 Series|Vario 200 Series|Vario Teppan Yaki'
                                            >
                                              <span class='text'>
                                                Vario Teppan Yaki
                                              </span>
                                            </a>
                                          </li>
                                          <li class=''>
                                            <a
                                              href='/products-list/cooktops/200-series/vario-200-series/cooktops200varioserieselectricgrill'
                                              class='a-link '
                                              data-link-hierarchy='For partners|Specifications|Cooktops|200 Series|Vario 200 Series|Vario electric grill'
                                            >
                                              <span class='text'>
                                                Vario electric grill
                                              </span>
                                            </a>
                                          </li>
                                          <li class=''>
                                            <a
                                              href='/products-list/cooktops/200-series/vario-200-series/cooktops200varioseriesvariodowndraftventilation'
                                              class='a-link '
                                              data-link-hierarchy='For partners|Specifications|Cooktops|200 Series|Vario 200 Series|Vario downdraft ventilation'
                                            >
                                              <span class='text'>
                                                Vario downdraft ventilation
                                              </span>
                                            </a>
                                          </li>
                                        </ul>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                              <li class=''>
                                <a
                                  href='/products-list/ventilation'
                                  class='a-link has-child-level'
                                  data-link-hierarchy='For partners|Specifications|Ventilation'
                                >
                                  <span class='text'>Ventilation</span>
                                </a>
                                <ul class='4th-level hidden-desktop list-unstyled'>
                                  <li class=''>
                                    <a
                                      href='/products-list/ventilation/400-series'
                                      class='a-link has-child-level'
                                      data-link-hierarchy='For partners|Specifications|Ventilation|400 Series'
                                    >
                                      <span class='text'>400 Series</span>
                                    </a>
                                    <ul class='5th-level hidden-desktop list-unstyled'>
                                      <li class=''>
                                        <a
                                          href='/products-list/ventilation/400-series/table-ventilation'
                                          class='a-link '
                                          data-link-hierarchy='For partners|Specifications|Ventilation|400 Series|Table ventilation'
                                        >
                                          <span class='text'>
                                            Table ventilation
                                          </span>
                                        </a>
                                      </li>
                                      <li class=''>
                                        <a
                                          href='/products-list/ventilation/400-series/downdraft-ventilation'
                                          class='a-link '
                                          data-link-hierarchy='For partners|Specifications|Ventilation|400 Series|Downdraft ventilation'
                                        >
                                          <span class='text'>
                                            Downdraft ventilation
                                          </span>
                                        </a>
                                      </li>
                                      <li class=''>
                                        <a
                                          href='/products-list/ventilation/400-series/remote-fan-units'
                                          class='a-link '
                                          data-link-hierarchy='For partners|Specifications|Ventilation|400 Series|Remote fan units'
                                        >
                                          <span class='text'>
                                            Remote fan units
                                          </span>
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li class=''>
                                    <a
                                      href='/products-list/ventilation/200-series'
                                      class='a-link has-child-level'
                                      data-link-hierarchy='For partners|Specifications|Ventilation|200 Series'
                                    >
                                      <span class='text'>200 Series</span>
                                    </a>
                                    <ul class='5th-level hidden-desktop list-unstyled'>
                                      <li class=''>
                                        <a
                                          href='/products-list/ventilation/200-series/downdraft-ventilations'
                                          class='a-link '
                                          data-link-hierarchy='For partners|Specifications|Ventilation|200 Series|Downdraft ventilations'
                                        >
                                          <span class='text'>
                                            Downdraft ventilations
                                          </span>
                                        </a>
                                      </li>
                                      <li class=''>
                                        <a
                                          href='/products-list/ventilation/200-series/island-hoods'
                                          class='a-link '
                                          data-link-hierarchy='For partners|Specifications|Ventilation|200 Series|Island hoods'
                                        >
                                          <span class='text'>Island hoods</span>
                                        </a>
                                      </li>
                                      <li class=''>
                                        <a
                                          href='/products-list/ventilation/200-series/wall-mounted-hoods'
                                          class='a-link '
                                          data-link-hierarchy='For partners|Specifications|Ventilation|200 Series|Wall-mounted hoods'
                                        >
                                          <span class='text'>
                                            Wall-mounted hoods
                                          </span>
                                        </a>
                                      </li>
                                      <li class=''>
                                        <a
                                          href='/products-list/ventilation/200-series/slide-out-rangehoods'
                                          class='a-link '
                                          data-link-hierarchy='For partners|Specifications|Ventilation|200 Series|Slide out rangehoods'
                                        >
                                          <span class='text'>
                                            Slide out rangehoods
                                          </span>
                                        </a>
                                      </li>
                                      <li class=''>
                                        <a
                                          href='/products-list/ventilation/200-series/integrated-rangehoods'
                                          class='a-link '
                                          data-link-hierarchy='For partners|Specifications|Ventilation|200 Series|Integrated rangehoods'
                                        >
                                          <span class='text'>
                                            Integrated rangehoods
                                          </span>
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                              <li class=''>
                                <a
                                  href='/products-list/refrigeration'
                                  class='a-link has-child-level'
                                  data-link-hierarchy='For partners|Specifications|Refrigeration'
                                >
                                  <span class='text'>Refrigeration</span>
                                </a>
                                <ul class='4th-level hidden-desktop list-unstyled'>
                                  <li class=''>
                                    <a
                                      href='/products-list/refrigeration/vario-400-series'
                                      class='a-link has-child-level'
                                      data-link-hierarchy='For partners|Specifications|Refrigeration|Vario 400 Series'
                                    >
                                      <span class='text'>Vario 400 Series</span>
                                    </a>
                                    <ul class='5th-level hidden-desktop list-unstyled'>
                                      <li class=''>
                                        <a
                                          href='/products-list/refrigeration/vario-400-series/refrigerators'
                                          class='a-link '
                                          data-link-hierarchy='For partners|Specifications|Refrigeration|Vario 400 Series|Refrigerators'
                                        >
                                          <span class='text'>
                                            Refrigerators
                                          </span>
                                        </a>
                                      </li>
                                      <li class=''>
                                        <a
                                          href='/products-list/refrigeration/vario-400-series/fridge-freezers'
                                          class='a-link '
                                          data-link-hierarchy='For partners|Specifications|Refrigeration|Vario 400 Series|Fridge-freezers'
                                        >
                                          <span class='text'>
                                            Fridge-freezers
                                          </span>
                                        </a>
                                      </li>
                                      <li class=''>
                                        <a
                                          href='/products-list/refrigeration/vario-400-series/freezer'
                                          class='a-link '
                                          data-link-hierarchy='For partners|Specifications|Refrigeration|Vario 400 Series|Freezer'
                                        >
                                          <span class='text'>Freezer</span>
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                              <li class=''>
                                <a
                                  href='/products-list/wine-climate-cabinets'
                                  class='a-link has-child-level'
                                  data-link-hierarchy='For partners|Specifications|Wine cabinets'
                                >
                                  <span class='text'>Wine cabinets</span>
                                </a>
                                <ul class='4th-level hidden-desktop list-unstyled'>
                                  <li class=''>
                                    <a
                                      href='/products-list/wine-climate-cabinets/400-series'
                                      class='a-link '
                                      data-link-hierarchy='For partners|Specifications|Wine cabinets|400 Series'
                                    >
                                      <span class='text'>400 Series</span>
                                    </a>
                                  </li>
                                  <li class=''>
                                    <a
                                      href='/products-list/wine-climate-cabinets/wineclimatecabinets200'
                                      class='a-link '
                                      data-link-hierarchy='For partners|Specifications|Wine cabinets|200 Series'
                                    >
                                      <span class='text'>200 Series</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li class=''>
                                <a
                                  href='/products-list/dishwashing'
                                  class='a-link has-child-level'
                                  data-link-hierarchy='For partners|Specifications|Dishwashers'
                                >
                                  <span class='text'>Dishwashers</span>
                                </a>
                                <ul class='4th-level hidden-desktop list-unstyled'>
                                  <li class=''>
                                    <a
                                      href='/products-list/dishwashing/400-series'
                                      class='a-link has-child-level'
                                      data-link-hierarchy='For partners|Specifications|Dishwashers|400 Series'
                                    >
                                      <span class='text'>400 Series</span>
                                    </a>
                                    <ul class='5th-level hidden-desktop list-unstyled'>
                                      <li class=''>
                                        <a
                                          href='/products-list/dishwashing/400-series/fully-integrated-diswashers'
                                          class='a-link '
                                          data-link-hierarchy='For partners|Specifications|Dishwashers|400 Series|fully-integrated Diswashers'
                                        >
                                          <span class='text'>
                                            fully-integrated Diswashers
                                          </span>
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li class=''>
                                    <a
                                      href='/products-list/dishwashing/200-series'
                                      class='a-link has-child-level'
                                      data-link-hierarchy='For partners|Specifications|Dishwashers|200 Series'
                                    >
                                      <span class='text'>200 Series</span>
                                    </a>
                                    <ul class='5th-level hidden-desktop list-unstyled'>
                                      <li class=''>
                                        <a
                                          href='/products-list/dishwashing/200-series/fully-integrated-diswashers'
                                          class='a-link '
                                          data-link-hierarchy='For partners|Specifications|Dishwashers|200 Series|fully-integrated Diswashers'
                                        >
                                          <span class='text'>
                                            fully-integrated Diswashers
                                          </span>
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li class=''>
                            <a
                              href='/for-partners/resources'
                              class='a-link has-child-level second-level-link'
                              data-link-hierarchy='For partners|Resources'
                            >
                              <span class='text'>Resources</span>
                            </a>
                            <ul class='third-level list-unstyled'>
                              <li class=''>
                                <a
                                  href='/for-partners/resources/brochures'
                                  class='a-link '
                                  data-link-hierarchy='For partners|Resources|Brochures'
                                >
                                  <span class='text'>Brochures</span>
                                </a>
                              </li>
                              <li class=''>
                                <a
                                  href='/for-partners/resources/appliances-documents'
                                  class='a-link '
                                  data-link-hierarchy='For partners|Resources|Appliances documents'
                                >
                                  <span class='text'>Appliances documents</span>
                                </a>
                              </li>
                              <li class=''>
                                <a
                                  href='/for-partners/resources/installation-guides'
                                  class='a-link '
                                  data-link-hierarchy='For partners|Resources|Installation guides'
                                >
                                  <span class='text'>Installation guides</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li class='close'>
                            <button class='a-button a-button-primary js-close'>
                              <span class='text'>
                                [global.common.btn.close]
                              </span>
                            </button>
                          </li>
                        </ul>
                      </li>
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
