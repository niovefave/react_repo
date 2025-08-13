import { styled } from '@mui/material/styles';
import React from 'react';
import { Link } from 'react-router-dom';
import NavItem from './NavItem';
import { useSelector } from 'react-redux';
import {
  selectBoard,
  selectGallery,
  selectNotice,
  selectMember,
} from '../../redux/navSlice';
import { useDispatch } from 'react-redux';

const LayoutNav = styled('nav')`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: ${(props) => props.theme.palette.primary.contrastText};
  background-color: ${(props) => props.theme.palette.primary.main};
`;

const Nav = () => {
  const dispatch = useDispatch();
  const { itemName } = useSelector((state) => {
    return state.nav;
  });

  return (
    <>
      <LayoutNav>
        <NavItem isSelected={itemName === 'board'}>
          <Link
            to={'/board/list'}
            onClick={() => {
              dispatch(selectBoard());
            }}
          >
            BOARD
          </Link>
        </NavItem>
        <NavItem isSelected={itemName === 'notice'}>
          <Link
            to={'/notice/list'}
            onClick={() => {
              dispatch(selectNotice());
            }}
          >
            NOTICE
          </Link>
        </NavItem>
        <NavItem isSelected={itemName === 'gallery'}>
          <Link
            to={'/gallery/list'}
            onClick={() => {
              dispatch(selectGallery());
            }}
          >
            GALLERY
          </Link>
        </NavItem>
        <NavItem isSelected={itemName === 'member'}>
          <Link
            to={'/member/mypage'}
            onClick={() => {
              dispatch(selectMember());
            }}
          >
            MY_PAGE
          </Link>
        </NavItem>
      </LayoutNav>
    </>
  );
};

export default Nav;
