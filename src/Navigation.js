import React from 'react';
import TabProgressTracker from './componentssp/tabProgressTracker';
import TabStudentProfiles from './componentssp/tabStudentProfiles';
import Projects from './Project';

function Navigation({ page }){
    
    if (page === 'b1') {
      return <TabProgressTracker/>;
    } else if (page === 'b2') {
      return <TabStudentProfiles/>;
    } else if (page === 'b3') {
      return <Projects/>;
    };
    

return(
    <div>
       
    </div>


)}

export default Navigation;