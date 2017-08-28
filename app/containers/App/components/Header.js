import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid rgba(100, 100, 100, .5);
  background-color: rgba(250, 248, 239, .7);
  // color: #fafafa;
  z-index: 3;
  
  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    max-width: 768px;
    margin: 0 auto;
    height: 100%;
  }
  
  .logo {
    font-size: 20px;
    font-weight: 600;
  }
  
  .right-menu {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    
    .menu-item {
      margin: 5px;
      cursor: pointer;
      font-size: 14px;
      text-transform: uppercase;
      font-weight: 600;
    }
  }
`;

class Header extends React.Component {

  componentDidMount() {

  }

  render() {
    return (
      <HeaderWrapper>
        <div className="container">
          <div className="logo">HexagonWars</div>
          <div className="right-menu">
            <div className="menu-item">Link 1</div>
            <div className="menu-item">Link 2</div>
          </div>
        </div>
      </HeaderWrapper>
    );
  }
}

export default Header;
