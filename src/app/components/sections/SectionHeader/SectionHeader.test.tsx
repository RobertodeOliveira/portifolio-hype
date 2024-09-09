import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { SectionHeader } from './index';

describe('SectionHeader', async () => {
  it('renders the heading and outputs the HTML', () => {

    const sectionHeaderTitle = 'Título do Header';

    render(<SectionHeader title={sectionHeaderTitle} />);
    
    const headerTitle = screen.getByText(sectionHeaderTitle);
    expect(headerTitle).toBeInTheDocument();
  });
});