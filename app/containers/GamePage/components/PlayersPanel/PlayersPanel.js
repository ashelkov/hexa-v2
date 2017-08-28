import React from 'react';
import styled from 'styled-components';
import playerAvatar from './images/red-beared-man_avatar.png';
import aiAvatar from './images/snowman_avatar.png';

const PanelWrapper = styled.div`
  margin: 10px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  
  .player-info {
    display: flex;
    flex-direction: row;
    justify-content: justify;
    align-items: center;
    flex: 1;
    
    .avatar {
      width: 55px;
      height: 55px;
      border-radius: 50%;
      overflow: hidden;
      border: 1px solid rgba(0, 0, 0, .2);
      background-size: cover;
      margin-right: 10px;
    }
    
    .name-and-stats {
      flex: 1;
    }
    
    .name {
      margin-bottom: 5px;
    }
    
    .progress-bar {
      display: block;
      position: relative;
      height: 10px;
      border-radius: 3px;
      background-color: #DDD;
      overflow: hidden;
      
      .progress-value {
        height: 100%
        background-color: #6CC3C1;
        position: absolute;
        left: 0;
      }
    }
    
    .stats {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      font-size: 12px;
      
      .percent {
         color: #43516c;
         font-weight: 600;
      }
      
      .increment {
        color: #6CC3C1;
      }
    }
    
    &.reversed {
      flex-direction: row-reverse;
      
      .avatar {
        margin-right: 0;
        margin-left: 10px;
      }

      .name-and-stats {
        text-align: right;
      }
      
      .progress-value {
        left: auto;
        right: 0;
      }
      
      .stats {
        flex-direction: row-reverse;
      }
    }
  }
  
  .score {
    margin: 0 30px;
    flex-grow: 0;
    font-size: 32px;
  }
`;

const PlayersPanel = (props) => (
  <PanelWrapper>
    <div className="player-info">
      <div className="avatar" style={{ backgroundImage: `url(${playerAvatar})` }} />
      <div className="name-and-stats">
        <div className="name">Andrey Shelkovnikov</div>
        <div className="progress-bar">
          <div className="progress-value" style={{ width: `${35}%` }} />
        </div>
        <div className="stats">
          <div className="percernt">47%</div>
          <div className="increment">+31</div>
        </div>
      </div>
    </div>
    <div className="score">
      219 : 172
    </div>
    <div className="player-info reversed">
      <div className="avatar" style={{ backgroundImage: `url(${aiAvatar})` }} />
      <div className="name-and-stats">
        <div className="name">Snowman (AI)</div>
        <div className="progress-bar">
          <div className="progress-value" style={{ width: `${53}%` }} />
        </div>
        <div className="stats">
          <div className="percernt">53%</div>
          <div className="increment">+29</div>
        </div>
      </div>
    </div>
  </PanelWrapper>
);

export default PlayersPanel;
