import { it, expect, describe, vi } from 'vitest';
import UserList from '../../src/UserList';
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

vi.mock("axios");

describe('UserList', () => {
    it('should fetch and display user list', async () => {
     const mockUsers = [{ id:1, firstName: "Emily", lastName: "Johnson" }, { id:2, firstName: "Michael", lastName: "Williams" }];
     axios.get.mockResolvedValue({ data: mockUsers });
     render(<MemoryRouter>
     <UserList />
     </MemoryRouter>
     );

     await waitFor(() => {
        expect(axios.get).toHaveBeenCalledWith("https://dummy-user-api.onrender.com/api/users");

        console.log(screen.debug());
        expect(screen.getByText(/Emily\s+Johnson/i)).to.exist
        expect(screen.getByText(/Michael\s+Williams/i)).to.exist
    })
})
})