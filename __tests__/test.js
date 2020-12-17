import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BaseButton from '../components/BaseButton';
import BaseModal from '../components/BaseModal';

Enzyme.configure({ adapter: new Adapter() });
describe('BaseButton', () => {
  const handleClick = jest.fn();
  const buttonwrapper = shallow(<BaseButton onClick={handleClick}>hello</BaseButton>);
  const modalwrapper = Enzyme.shallow(
    <BaseModal>
      <p>Some contents...</p>
    </BaseModal>,
  );
  it('should have rendered BaseButton', () => {
    expect(buttonwrapper).toMatchSnapshot();
  });
  it('should have rendered BaseModal', () => {
    expect(modalwrapper).toMatchSnapshot();
  });
  it('should excute click event', () => {
    buttonwrapper.find('.base-btn').simulate('click');
    expect(handleClick).toBeCalled();
  });
});
