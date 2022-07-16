import { ContextProvider } from "./context/Context";
import Layout from "./pages/Layout";

function App() {
  return (
    <ContextProvider>
      <Layout />
    </ContextProvider>
  );
}

export default App;