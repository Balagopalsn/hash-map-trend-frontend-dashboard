import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import RootLayout from "./routes/rootLayout";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div
        className="App"
      >
        <RootLayout />
      </div>
    </QueryClientProvider>
  );
}

export default App;
