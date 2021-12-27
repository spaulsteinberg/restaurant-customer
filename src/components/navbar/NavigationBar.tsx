import React, { FC } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import {NavLink} from 'react-router-dom'
import { IHomeContext, useHomeContext } from '../../contexts/HomeContext';
import useWidth from '../../hooks/useWidth';
import { RootState } from '../../redux/store';
import Cart from './navbar-cart/Cart';
import NavBarTitleItem from './NavBarTitleItem';
import './navigation-styles.scss';

const NavigationBar:FC = () => {
  const {wideView} = useWidth(400);
  const homeContext = useHomeContext() as IHomeContext;
  const cartItemCount = useSelector<RootState, number>(state => state.cart['count'])
  return (
    <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark">
      <Container fluid>
        <NavBarTitleItem wideView={wideView} title={homeContext.value?.name.display} />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          { !wideView ? <NavLink to="/home" className="navigation-link">{homeContext.value?.name.display ? homeContext.value?.name.display : <div className="title-loading-span"></div> }</NavLink> : null}
            <NavLink to="/home" className="navigation-link">Home</NavLink>
            <NavLink to="/ordering" className="navigation-link">Order Now</NavLink>
          </Nav>
          <Nav className="cart-nav">
            <NavLink to="/cart"> 
              <Cart fill="lightgreen" height="24" width="24" count={cartItemCount} /> 
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar
