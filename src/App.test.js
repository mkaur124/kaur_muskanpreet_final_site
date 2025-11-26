import React from 'react';
import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('Portfolio App', () => {
  beforeEach(() => {
    render(<App />);
  });

  // ------------------------------
  // NAVBAR TEST
  // ------------------------------
  test('renders Navbar links', () => {
    expect(screen.getByText(/Home/i)).toBeInTheDocument();

    // Work appears twice—use index 0
    expect(screen.getAllByText(/Work/i)[0]).toBeInTheDocument();

    expect(screen.getAllByText(/Skills/i)[0]).toBeInTheDocument();
    expect(screen.getByText(/Resources/i)).toBeInTheDocument();

    // Setup appears twice—use index 0
    expect(screen.getAllByText(/Setup/i)[0]).toBeInTheDocument();
  });

  // ------------------------------
  // WORK PROJECTS TEST
  // ------------------------------
  test('renders Work projects', () => {
    expect(
      screen.getAllByText(/Personal Portfolio Website/i).length
    ).toBeGreaterThan(0);

    expect(
      screen.getAllByText(/Winnipeg Air Quality Open Data/i).length
    ).toBeGreaterThan(0);
  });

  // ------------------------------
  // SKILLS TEST
  // ------------------------------
  test('renders Skills section', () => {
    const skillsSection = screen.getByTestId('skills');
    const { getByText, getAllByText } = within(skillsSection);

    expect(getByText(/HTML5/i)).toBeInTheDocument();
    expect(getByText(/CSS3/i)).toBeInTheDocument();
    expect(getByText(/JavaScript/i)).toBeInTheDocument();

    // FIXED — React appears twice in skills
    expect(getAllByText(/React/i)[0]).toBeInTheDocument();

    expect(getByText(/Material-UI/i)).toBeInTheDocument();
  });

  // ------------------------------
  // RESOURCES TEST
  // ------------------------------
  test('renders Resources section', () => {
    const resourcesSection = screen.getByTestId('resources');
    const { getByText } = within(resourcesSection);

    expect(getByText(/React Official Docs/i)).toBeInTheDocument();
    expect(getByText(/Material-UI/i)).toBeInTheDocument();
    expect(getByText(/Winnipeg Open Data API/i)).toBeInTheDocument();
  });

  // ------------------------------
  // DEVELOPER SETUP TEST
  // ------------------------------
  test('renders Developer Setup section', () => {
    const setupSection = screen.getByTestId('developer-setup');
    const { getByText, getAllByText } = within(setupSection);

    // FIXED — "Code Editor" repeats
    expect(getAllByText(/Code Editor/i)[0]).toBeInTheDocument();

    // FIXED — "Terminal" repeats in <h3> AND <p>
    expect(getAllByText(/Terminal/i)[0]).toBeInTheDocument();

    expect(getByText(/Preferred Editor Font/i)).toBeInTheDocument();
  });
});
