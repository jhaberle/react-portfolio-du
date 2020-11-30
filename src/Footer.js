import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;

  width: 100%;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer">
        <div className="row">
          <div class="col-sm-12">
            <footer>Jake Haberle - 2020</footer>
          </div>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
