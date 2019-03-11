import 'babel-polyfill'; // required for async/await in tests (which itself is required for Node's UnhandledPromiseRejectionWarning)

import 'react-testing-library/cleanup-after-each';
import 'jest-styled-components';
