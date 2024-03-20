import React from 'react';
import FeatureToggle from './FeatureToggle';

function App() {
  return (
    <div className="App">
      <h1>Feature Toggle Demo</h1>
      <FeatureToggle isEnabled={true} featureName="Feature A" />
      <FeatureToggle isEnabled={false} featureName="Feature B" />
      <FeatureToggle isEnabled={true} featureName="Feature C" />
    </div>
  );
}

export default App;