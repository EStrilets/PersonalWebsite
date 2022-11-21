import singletonRouter from 'next/router';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import Logo from '../components/logo/Logo';
import ContactBtn from '../components/contactInfo/ContactBtn'

jest.mock("next/dist/client/router", () => require("next-router-mock"));

jest.mock("next/dist/shared/lib/router-context", () => {
  const { createContext } = require("react");
  const router = require("next-router-mock").default;
  const RouterContext = createContext(router);
  return { RouterContext };
});

describe('Navbar', () => {
  it('render the header name', async () => {
    const { getByTestId } = render(<Logo />);

    const logoBtn = getByTestId('logo');
    fireEvent.click(logoBtn);
    expect(singletonRouter).toMatchObject({ asPath: '/' });
  });

  it('render the header name', () => {
    const { getByTestId } = render(<ContactBtn />);

    const contactBtn = getByTestId('contact-btn');
    fireEvent.click(contactBtn);
    expect(singletonRouter).toMatchObject({ asPath: '/contact' });
  });
});