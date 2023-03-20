import { screen } from '@testing-library/react';

export const PAGINATION_ELEMENT_QUERIES = {
  findPreviousButton: () => screen.findByRole('button', { name: /Previous/i }),
  findNextButton: () => screen.findByRole('button', { name: /Next/i }),
  findInput: () => screen.findByRole('input'),
};
