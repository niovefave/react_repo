import { styled } from '@mui/material/styles';
import React from 'react';
const LayoutAside = styled('aside')`
  background-color: aliceblue;
`;
const StyledDiv = styled('div')`
  background-color: aliceblue;
  width: var(--aside-width);
  height: var(--aside-height);
  position: fixed;
  top: calc(var(--header-height) + var(--nav-height));
  background-image: url(${(props) => props.adImgUrl});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
`;

const Aside = ({}) => {
  return (
    <LayoutAside>
      <StyledDiv>
        <iframe
          src="https://ads-partners.coupang.com/widgets.html?id=903247&template=carousel&trackingCode=AF2815384&subId=&width=150&height=740&tsource="
          width="150"
          height="708"
          frameborder="0"
          scrolling="no"
          referrerpolicy="unsafe-url"
          browsingtopics
        ></iframe>
      </StyledDiv>
    </LayoutAside>
  );
};

export default Aside;
