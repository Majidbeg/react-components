import '@testing-library/jest-dom/extend-expect';
//enzyme configure file 
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
Enzyme.configure({ adapter: new Adapter() });
