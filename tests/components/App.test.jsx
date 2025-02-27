import { it, expect, describe, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/vitest';
import App from '../../src/App';

describe('App', () => {
    it('should render users', () => {
        render(
        <App />
        );
        const heading = screen.getByRole('heading');
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent(/User List/i);
        
    })
})