import React from 'react';
import DesktopUi from '../_components/JobApply/DesktopUI';

function JobDetails() {


    return (
        <div className='min-h-screen max-w-full mx-auto'>
            <div className="hidden lg:block min-w-fit  mx-auto">
                <DesktopUi/>
                {/* <h1>Desktop careers view</h1> */}
            </div>
            <div className="hidden sm:block lg:hidden">
            <DesktopUi/>
                {/* <DesktopUi sections={jobSections}/> */}
            </div>
            <div className="block sm:hidden min-w-fit max-w-[410px] mx-auto">
            <DesktopUi/>
                {/* <DesktopUi sections={jobSections}/> */}
            </div>
        </div>
    );
}
export default JobDetails;