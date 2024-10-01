import AuthProvider from "@/config/AuthProvider";
import Routes from "@/routes/Routes";

const App = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

export default App;
