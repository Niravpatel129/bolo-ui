import DTFPODFeatureSelection from './DTFPODFeatureSelection';

export default {
  title: 'Components/DTFPODFeatureSelection',
  component: DTFPODFeatureSelection,
  parameters: {
    // layout: 'fullscreen',
    layout: 'centered',
  },
};

export const Default = {
  args: {},
  parameters: {
    defaultViewport: 'Desktop'
  }
};

export const DefaultMobile = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
};
// This is comment
