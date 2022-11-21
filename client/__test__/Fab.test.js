import Fab from '../components/fab/Fab';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'


jest.mock("next/dist/client/router", () => require("next-router-mock"));

jest.mock("next/dist/shared/lib/router-context", () => {
  const { createContext } = require("react");
  const router = require("next-router-mock").default;
  const RouterContext = createContext(router);
  return { RouterContext };
});

describe('Fab', () => {
  it('resume button redirect to google drive', () => {
    const { getByTestId } = render(<Fab />);

    const fabBtn = getByTestId('fab-btn')
    fireEvent.click(fabBtn);
    expect(fabBtn).toHaveAttribute('href', 'https://drive.google.com/file/d/1eemMwJV6Pi2CldF7Peir0kvfq32QWpZC/view?usp=sharing');
  });
});