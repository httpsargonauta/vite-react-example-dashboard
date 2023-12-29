// React JS, React DOM, & React Router DOM
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// CSS - Tailwind
import '../public/css/index.css';

import { ProtectedRoute } from './routes/_privatedRoutes';

// Chakra UI
import { ChakraProvider } from '@chakra-ui/react';
import Theme from './functions/Theme';
import Fonts from './functions/Fonts';

// Layouts & Pages
import { Layout } from './layout/_layout';
import { Login } from './pages/auth/_pageLog';
import { Register } from './pages/auth/_pageReg';
import { Dashboard } from './pages/dashboard/_dashboard';
import { Pricing } from './pages/pricing/_pricing';
import { Settings } from './pages/settings/_settings';
import { Customers } from './pages/custormers/_customers';
import { Users } from './pages/users/_users';
import { Profile } from './pages/profile/_profile';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={Theme}>
        <Fonts />
        <Routes>
          <Route path="/" Component={Login} />
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
          <Route path="/pricing" Component={Pricing} />
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" Component={Dashboard} />
            <Route path="/about" Component={Layout} />
            <Route path="/customers" Component={Customers} />
            <Route path="/customers/:id" Component={Layout} />
            <Route path="/tasklist" Component={Layout} />
            <Route path="/users" Component={Users} />
            <Route path="/settings" Component={Settings} />
            <Route path="/profile" Component={Profile} />
          </Route>
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
