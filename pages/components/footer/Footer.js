import React from "react";
import styled from "styled-components";

const Footer = () => {
  const thisYear = () => {
    const year = new Date().getFullYear();
    return year;
  };

  return (
    <FooterBox>
      <div>&copy; {thisYear()} κΉμμ</div>
    </FooterBox>
  );
};

const FooterBox = styled.div`
  margin: 20px 20px;
`;

export default Footer;
