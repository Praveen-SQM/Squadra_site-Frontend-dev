import React from 'react';
import DesktopUi from '../_components/JobDetails/DesktopUI';
function JobDetails() {

    const jobSections = [
        {
          title: "Company Description",
          content: "Squadra Media is an innovative IT + media company that specializes in creating cutting-edge digital experiences. We work with a diverse range of clients across industries to design, develop, and implement digital solutions that leave lasting impressions.\n\nWe are looking for a Senior UI/UX Designer to join our growing team in Bengaluru, India. If you are passionate about designing intuitive, user-centered digital experiences and have a keen eye for aesthetics, we'd love to hear from you!"
        },
        {
          title: "Job Description",
          content: "As a Senior UI/UX Designer, you will be responsible for creating user-centered designs for our clients' digital products. You will work closely with our development team to ensure that designs are implemented accurately and efficiently."
        },
        {
          title: "Qualification",
          content: "• 5+ years of experience in UI/UX design\n• Strong portfolio demonstrating user-centered design solutions\n• Proficiency in design tools such as Figma, Sketch, or Adobe XD\n• Experience with design systems and component libraries\n• Excellent communication and collaboration skills"
        },
        {
          title: "Locations",
          content: "Bengaluru, India (On-site)"
        },
        {
          title: "Additional Informations",
          content: "• Competitive salary\n• Health insurance\n• Flexible working hours\n• Professional development opportunities\n• Collaborative and innovative work environment"
        }
      ]
    

  return (
    <div className='min-h-screen max-w-full mx-auto'>
      <div className="hidden lg:block min-w-fit  mx-auto">
        <DesktopUi sections={jobSections}/>
        {/* <h1>Desktop careers view</h1> */}
      </div>
      <div className="hidden sm:block lg:hidden">
        {/* <TabUi /> */}
        <h1>Tablet careers view</h1>
      </div>
         <div className="block sm:hidden min-w-fit max-w-[410px] mx-auto">
        {/* <MobileUi /> */}
        <h1>Mobile careers view</h1>
      </div>
    </div>
  );
}
export default JobDetails;