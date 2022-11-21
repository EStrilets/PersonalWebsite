import singletonRouter from 'next/router';
import { render, fireEvent } from '@testing-library/react';
import Home from '../pages/index';
import Links from '../components/links/Links';
import '@testing-library/jest-dom'

jest.mock("next/dist/client/router", () => require("next-router-mock"));

jest.mock("next/dist/shared/lib/router-context", () => {
  const { createContext } = require("react");
  const router = require("next-router-mock").default;
  const RouterContext = createContext(router);
  return { RouterContext };
});


describe('Home', () => {
  it('render the header name', async () => {
    const { findByText } = render(<Home />);
    await findByText(`Hi, I'm Yevgeny Strilets`);
  });

  it('render the second Header', async() => {
    const { findByText } = render(<Home />)
    await findByText('Software developer')
  })

  it('render all links', async() => {
    const { findByTestId } = render(<Home />)
    await findByTestId ('projects-page')
    await findByTestId ('resume-page')
    await findByTestId ('github-page')
    await findByTestId ('linkedin-page')
  })

  it('links should redirect correctly', async() => {
    const { getByTestId } = render(<Links />);

    const gitHubBtn = getByTestId('github-page')
    fireEvent.click(gitHubBtn);
    expect(gitHubBtn).toHaveAttribute('href', 'https://github.com/EStrilets');

    const linkedInBtn = getByTestId('linkedin-page')
    fireEvent.click(linkedInBtn);
    expect(linkedInBtn).toHaveAttribute('href', 'https://www.linkedin.com/in/eugene-strilets/');

    const projectBtn = getByTestId('projects-page')
    fireEvent.click(projectBtn);
    expect(singletonRouter).toMatchObject({ asPath: '/project' });

    const resumeBtn = getByTestId('resume-page')
    fireEvent.click(resumeBtn);
    expect(singletonRouter).toMatchObject({ asPath: '/resume?year=2022' });
  })

});