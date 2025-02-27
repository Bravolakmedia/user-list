import { it, expect, describe, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/vitest';
import UserDetail from '../../src/UserDetails';
import { MemoryRouter } from 'react-router-dom';

describe('UserDetail', () => {
    it('should render details of a user', () => {
        render(
        <MemoryRouter> 
        <UserDetail />
        </MemoryRouter>
        );
        const heading = screen.getByRole('heading');
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent(/Loading/i);
        
    })
})