import { styled } from '@mui/material/styles';
import ThemeSwitch from '../utill/ThemeSwitch';
import { toggleTheme } from '../../redux/themeSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const LayoutDiv = styled('div')`
  display: grid;
  grid-template-columns: 150px 1fr 150px;
  grid-template-rows: 1fr;
  place-items: center center;
  background-color: ${(props) => props.theme.palette.primary.light};
`;

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <LayoutDiv>
        <div>
          <div className="jelly-box"></div>
          <div className="jelly-box-shadow"></div>
        </div>
        <div
          onClick={() => {
            navigate('/');
          }}
        >
          <h1 className="glow">WELCOME</h1>
        </div>
        <div>
          <ThemeSwitch
            onClick={() => {
              dispatch(toggleTheme());
            }}
          />
        </div>
      </LayoutDiv>
    </>
  );
};

export default Header;
