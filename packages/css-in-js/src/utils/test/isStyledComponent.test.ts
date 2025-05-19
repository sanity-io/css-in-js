import { Component } from 'react';
import { styled } from '../../';
import isStyledComponent from '../isStyledComponent';

describe('isStyledComponent(something)', () => {
  it('returns true if using styled', () => {
    expect(isStyledComponent(styled.div``)).toBe(true);
    expect(isStyledComponent(styled(styled.div``)``)).toBe(true);
  });

  it('returns false for everything else', () => {
    [() => {}, class Foo extends Component {}, 'foo', 1234, true, false].forEach(test =>
      expect(isStyledComponent(test)).toBe(false)
    );
  });
});
