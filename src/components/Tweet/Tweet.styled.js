import styled from 'styled-components';
import image from '../../images/picture.png';
export const CardContainer = styled.div`
  position: relative;

  width: 380px;
  height: 460px;
  margin: 30px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  ::before {
    content: '';
    position: absolute;
    top: 28px;
    left: 36px;
    background-image: url(${image});
    width: 308px;
    height: 168px;
    z-index: 1;
  }
  ::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;

    width: 380px;
    height: 8px;

    background: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
    transform: translateY(-50%);
  }
`;

export const FollowButton = styled.button`
  padding: 14px 28px;
  margin-top: 8px;
  width: 196px;
  height: 50px;
  margin-bottom: 36px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;

  text-transform: uppercase;
  border: none;
  transition: background 0.25s ease-in-out;
  &.active {
    background: #5cd3a8;
  }
`;

export const Text = styled.p`
  margin: 0 0 16px 0;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;
  :first-child {
    position: relative;
    margin-top: 160px;
    margin-bottom: 102px;
    z-index: 1;
  }
`;

export const AvatarContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;
export const Avatar = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 68px;
  height: 68px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;
