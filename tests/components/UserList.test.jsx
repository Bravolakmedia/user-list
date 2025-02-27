import { it, expect, describe, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import UserList from '../../src/UserList';
import React from 'react';
import '@testing-library/jest-dom/vitest';

describe('UserList', () => {
    it('should render list of 20 users', () => {
        render(<UserList />);
        const heading = screen.getByRole('heading');
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent(/User List/i);
        
    })
})