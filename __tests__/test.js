// import { renderHook, act } from '@testing-library/react-hooks'
// import BaseButton from '../components/BaseButton'
// import BaseModal from '../components/BaseModal'
const { renderHook, act } = require('@testing-library/react-hooks');
const BaseButton = require('../components/BaseButton');
const BaseModal = require('../components/BaseModal');

describe('BaseButton测试', () => {
  it('测试BaseButton', () => {
    const { result } = renderHook(() => BaseButton());
    act(() => {
      result.current.handleClick();
    });
    expect(result.current.handleClick()).toHaveBeenCalled();
  });

  it('测试BaseModal', () => {
    const { result } = renderHook(() => BaseModal());
    act(() => {
      result.current.handleClick();
    });
    expect(result.current.handleClick()).toHaveBeenCalled();
  });
});
