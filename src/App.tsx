import React from 'react';

type Props = {
  title: string
}

function App({ title }: Props): JSX.Element {
  return (
    <div className="App">
      {title}
    </div>
  );
}

export default App;
