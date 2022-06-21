import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer'
import GitHubCard from './GitHubCard';

//GitHubCard Snapshot Test
test('renders a snapshot', () => {
  const tree = renderer.create(<GitHubCard/>).toJSON()
  expect(tree).toMatchSnapshot()
})

