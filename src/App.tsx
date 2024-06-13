import "./App.css";

import WebApp from "@twa-dev/sdk";

function App() {
  return (
    <>
      <pre>{JSON.stringify(WebApp.initData, null, 2)}</pre>
      <pre>{JSON.stringify(WebApp.initDataUnsafe, null, 2)}</pre>
    </>
  );
}

export default App;
