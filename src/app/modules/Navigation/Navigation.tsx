import { useState } from 'react';
import { NavigationBackdrop } from './components/NavigationBackdrop';
import NavigationSidebar from './components/NavigationSidebar';
import NavigationTopbar from './components/NavigationTopbar';

/**
 * Navigation component that renders a topbar and a sidebar.
 * It also manages the state of the sidebar being shown or not.
 */
export default function Navigation() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleShowSidebar = () => setShowSidebar(prevState => !prevState);

  return (
    <>
      <NavigationTopbar toggleShowSidebar={toggleShowSidebar} />

      <NavigationSidebar show={showSidebar} toggleShow={toggleShowSidebar} />

      <NavigationBackdrop
        show={showSidebar}
        toggleShowSidebar={toggleShowSidebar}
      />
    </>
  );
}
