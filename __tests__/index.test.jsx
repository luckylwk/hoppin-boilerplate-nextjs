import renderer from 'react-test-renderer';
import { HoppinDesignProvider } from 'hoppin-design-system';

import IndexPage from 'pages/index';
import ExperiencePage from 'pages/experience/[slug]';

describe('/', () => {
  it('should mount without failing', () => {
    const component = renderer.create(
      <HoppinDesignProvider context="hopper">
        <IndexPage />
      </HoppinDesignProvider>,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('/experience/hip-hop-choreographer', () => {
  it('should mount without failing', () => {
    const experience = {
      id: 1,
      slug: 'hip-hop-choreographer',
      title: 'Hip Hop Choreographer',
      location: {},
      hosts_details: {
        profile: {},
      },
      specifics: {},
      price: {},
      information: {
        activities: [],
      },
    };

    const component = renderer.create(
      <HoppinDesignProvider context="hopper">
        <ExperiencePage experience={experience} />,
      </HoppinDesignProvider>,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
