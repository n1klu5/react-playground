import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AllProvidersWrapper } from 'src/tests/AllProvidersWrapper';
import { Pagination } from './Pagination';
import { PAGINATION_ELEMENT_QUERIES } from './testHelpers';

describe('<Pagination/>', () => {
  let fixtures: ReturnType<typeof getFixtures>;

  beforeEach(() => {
    fixtures = getFixtures();
  });

  it('change page on user button click', async () => {
    fixtures.givenComponentIsRendered();
    await fixtures.whenUserClickNextButton();
    fixtures.thenOnChangeHandlerIsCalledWithNextPage();
  });

  it('change page on user input', async () => {
    fixtures.givenComponentIsRendered();
    await fixtures.whenUserTypesInPageNumber();
    fixtures.thenOnChangeHandlerIsCalledWithInputPage();
  });

  it('disable page change if only one page exists', async () => {
    fixtures.givenOnlyOnePageOfDataExists();
    fixtures.givenComponentIsRendered();
    await fixtures.thenPaginationControlsAreDisabled();
  });
});

const getFixtures = () => {
  const onChange = vi.fn();
  const props = {
    currentPageNumber: 1,
    totalNumberOfPages: 3,
  };

  return {
    givenComponentIsRendered: () =>
      render(<Pagination {...props} onChange={onChange} />, {
        wrapper: AllProvidersWrapper,
      }),
    givenOnlyOnePageOfDataExists: () => {
      props.currentPageNumber = 1;
      props.totalNumberOfPages = 1;
    },
    whenUserClickNextButton: async () => {
      await userEvent.click(await PAGINATION_ELEMENT_QUERIES.findNextButton());
    },
    whenUserTypesInPageNumber: async () => {
      const input = await PAGINATION_ELEMENT_QUERIES.findInput();
      await userEvent.type(input, '{selectall}2');
    },
    thenPaginationControlsAreDisabled: async () => {
      expect(await PAGINATION_ELEMENT_QUERIES.findNextButton()).toBeDisabled();
      expect(await PAGINATION_ELEMENT_QUERIES.findInput()).toBeDisabled();
      expect(await PAGINATION_ELEMENT_QUERIES.findPreviousButton()).toBeDisabled();
    },
    thenOnChangeHandlerIsCalledWithNextPage: () => {
      expect(onChange).toBeCalledTimes(1);
      expect(onChange).toBeCalledWith(2);
    },
    thenOnChangeHandlerIsCalledWithInputPage: () => {
      expect(onChange).toBeCalledTimes(1);
      expect(onChange).toBeCalledWith(12);
    },
  };
};
