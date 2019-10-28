import Enzyme from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new EnzymeAdapter() });

// setupFilesAfterEnv: ["<rootDir>/test/setupTests.js"]