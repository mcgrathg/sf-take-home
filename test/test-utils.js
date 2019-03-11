import React from 'react';
import { render } from 'react-testing-library';

const noOp = () => {};

const childrenObj = <div>something</div>;

const childrenFunc = () => childrenObj;

export * from 'react-testing-library';
export { noOp, childrenObj, childrenFunc, render };
