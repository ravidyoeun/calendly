import React, { useRef, useEffect, useState } from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';


const Home = () => {
  const [dynamicCalendarUrl, setCalendarUrl ] = useState("https://calendly.com/bshpersona/irvine?primary_color=e37222");
  // <div class="calendly-inline-widget" data-url="https://calendly.com/bshpersona/bosch-calendar?primary_color=e37222" style="min-width:320px;height:630px;"></div>
  // <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js"></script>
  useEffect(() => { // Pass in a callback function!
    console.log("loading data")
    var todaysDate = new Date();
    var day = todaysDate.getUTCDate();
    var month = todaysDate.getUTCMonth() +1;
    console.log("month", month);
      console.log("day", day);
  var year = todaysDate.getUTCFullYear();
  console.log("year", year);  
    console.log("todaysDate", todaysDate);
    var lastDay = getLastDay(year, month);
    console.log("lastDay", lastDay)
    var daysleft = checkIfwithin2days(lastDay, day);
    console.log("daysleft", daysleft)
    if (daysleft <= 2)
    {
      var nextMonth = todaysDate.getUTCMonth() +2;
      console.log("nextMonth", nextMonth)
      var formattedDates = year + "-" + nextMonth;
      console.log("formattedDates", formattedDates)
      setCalendarUrl('https://calendly.com/bshpersona/irvine?primary_color=e37222&month=' + formattedDates)
    }
  }, []);

  const getLastDay = (y,m)  =>{

    return  new Date(y, m, 0).getDate();
    }
    const checkIfwithin2days = (EndOfMonth, TodaysDate) => {
      var daysLeft = EndOfMonth - TodaysDate;
      return daysLeft;
    }

  return (
    <>
      <Hero className="illustration-section-01" />

  
      <div id="schedule_form">
          <div 
            className="calendly-inline-widget"
            data-url={dynamicCalendarUrl}
            style={{ minWidth: '320px', height: '1000px' }} />
        </div>
      <FeaturesTiles />
      {/* <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <Testimonial topDivider /> */}
      {/* <Cta split /> */}
    </>
  );
}

export default Home;