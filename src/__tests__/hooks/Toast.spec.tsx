import { renderHook, act } from '@testing-library/react-hooks';
import { ToastProvider, useToast } from '../../hooks/Toast';

const mockedAddToast = jest.fn();

jest.mock('../../hooks/Toast', () => {
  return {
    useToast: () => ({
      addToast: mockedAddToast,
    }),
  };
});

describe('Toast hook', () => {
  it('should be able to show a toast message', async () => {
    const { result } = renderHook(() => useToast(), {
      wrapper: ToastProvider,
    });

    act(() => {
      result.current.addToast({
        type: 'success',
        title: 'Tested with success',
        description: 'This function test how to show toast on pages',
      });
    });

    expect(mockedAddToast).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'success',
      }),
    );
  });
});
