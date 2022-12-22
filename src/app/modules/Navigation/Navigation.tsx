import { useState } from 'react';
import { NavigationBackdrop } from './components/NavigationBackdrop';
import NavigationSidebar from './components/NavigationSidebar';
import NavigationTopbar from './components/NavigationTopbar';

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
