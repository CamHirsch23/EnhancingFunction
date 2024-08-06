import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Show Action Movies button', () => {
    render(<App />);
    const buttonElement = screen.getByText(/Show Action Movies/i);
    expect(buttonElement).toBeInTheDocument();
});

test('renders Inception movie title', () => {
    render(<App />);
    const movieTitleElement = screen.getByText(/Inception/i);
    expect(movieTitleElement).toBeInTheDocument();
});

test('renders Remove button for Inception', () => {
    render(<App />);
    const removeButtonElement = screen.getAllByText(/Remove/i)[0];
    expect(removeButtonElement).toBeInTheDocument();
});