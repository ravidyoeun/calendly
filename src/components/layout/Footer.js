import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Logo from "./partials/Logo";
import FooterNav from "./partials/FooterNav";
import FooterSocial from "./partials/FooterSocial";

const propTypes = {
  topOuterDivider: PropTypes.bool,
  topDivider: PropTypes.bool,
};

const defaultProps = {
  topOuterDivider: false,
  topDivider: false,
};

const Footer = ({ className, topOuterDivider, topDivider, ...props }) => {
  const classes = classNames(
    "site-footer center-content-mobile",
    topOuterDivider && "has-top-divider",
    className
  );

  return (
    <div class='footer'>
      <footer class='o-footer'>
        <div class='footer-functions g-col'>
          <div
            class='m-footerpagefunctionsfollow'
            data-t-name='FooterPagefunctionsFollow'
            data-t-id='44'
          >
            <div class='likes'>
              <ul class='list-unstyled'>
                <li>
                  <a
                    href='https://www.pinterest.de/gaggenau_/'
                    target='_blank'
                    rel='noopener noreferrer'
                    class='a-link a-link-external has-icon'
                    aria-label='PINTEREST'
                  >
                    <i class='icon icon-pinit2'></i>
                  </a>
                </li>

                <li>
                  <a
                    href='https://www.instagram.com/gaggenauofficial/'
                    target='_blank'
                    rel='noopener noreferrer'
                    class='a-link a-link-external has-icon'
                    aria-label='INSTAGRAM'
                  >
                    <i class='icon icon-instagram'></i>
                  </a>
                </li>

                <li>
                  <a
                    href='https://www.youtube.com/gaggenauofficial'
                    target='_blank'
                    rel='noopener noreferrer'
                    class='a-link a-link-external has-icon'
                    aria-label='YOUTUBE'
                  >
                    <i class='icon icon-youtube'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class='footer-links g-col'>
          <div class='m-footerlinkscopyright'>
            <ul class='list-unstyled'>
              <li>
                <a
                  href='http://www.gaggenau.com/press/'
                  target='_blank'
                  class='a-link a-link-external   '
                >
                  <span class='text'>Press</span>
                </a>
              </li>

              <li>
                <a
                  href='http://www.gaggenau.com/us/general/legal'
                  class='a-link a-link-local   '
                >
                  <span class='text'>Legal</span>
                </a>
              </li>

              <li>
                <a
                  href='http://www.gaggenau.com/us/general/privacy-policy'
                  class='a-link a-link-local   '
                >
                  <span class='text'>
                    Privacy Policy &amp; Data Protection Notice
                  </span>
                </a>
              </li>

              <li>
                <a
                  href='http://www.gaggenau.com/us/general/eshop-faqs'
                  class='a-link a-link-local   '
                  target='_blank'
                >
                  <span class='text'>eShop FAQs</span>
                </a>
              </li>

              <li>
                <a
                  href='https://www.gaggenauprojects.com/'
                  target='_blank'
                  class='a-link a-link-external   '
                >
                  <span class='text'>Gaggenau Project Portal</span>
                </a>
              </li>

              <li>
                <a
                  href='http://resources.gaggenau.com/us/'
                  target='_blank'
                  class='a-link a-link-external   '
                >
                  <span class='text'>Resources</span>
                </a>
              </li>

              <li>
                <a
                  href='//media3.gaggenau.com/Documents/14861275_Gaggenau_Warranty_US_CA.pdf'
                  target='_blank'
                  class='a-link a-link-download   '
                >
                  <span class='text'>Warranty</span>
                </a>
              </li>

              <li>
                <a
                  href='http://www.gaggenau.com/us/general/ada-website-accessibility'
                  class='a-link a-link-local   '
                  target='_blank'
                >
                  <span class='text'>ADA Website Accessibility</span>
                </a>
              </li>

              <li>
                <a
                  href='https://psirt.bosch.com/report-a-vulnerability/'
                  target='_blank'
                  class='a-link a-link-external   '
                >
                  <span class='text'>Report a Vulnerability</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
