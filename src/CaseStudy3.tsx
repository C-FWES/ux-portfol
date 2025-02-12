import CaseStudyImage from './CaseStudyImage';
import Navigation from './Navigation';
import camera from './assets/camera_frame.png';
import home from './assets/home_frame.png';
import login from './assets/login_frame.png';
import icons from './assets/planticons.png';
import plantogramhero from './assets/plantogramcover.png';
import features from './assets/plantogramfeatures.png';
import fonts from './assets/plantogramfonts.png';
import inspo from './assets/plantograminspo2.png';
import palette from './assets/plantogrampalette.png';
import userflow from './assets/plantogramuserflow.png';
import stats1 from './assets/plantstats.png';
import stats2 from './assets/plantstats2.png';
import stats3 from './assets/plantstats3.png';
import wireframes from './assets/platogramwireframes.png';
import shop from './assets/shop_frame.png';

import './App.css';

function CaseStudy3() {

  return (
    <div>
      <Navigation></Navigation>
      <div className='caseStudyHeaderContainer'>
        <p className='caseStudyHeader'>CASE STUDY: PLANTOGRAM</p>
        <p className='caseStudyHeaderLight'>2024</p>
      </div>
      <CaseStudyImage imagePath={plantogramhero}></CaseStudyImage>
      <p className='caseStudyBody'>Contributors: Chavi Sharma, Erin Manalo, Naila Noormohamed</p>
      <p className='caseStudyBody'>This project was created as part of the UW/UX FUSE Designathon.</p>
      <p className="caseStudySubHeader">Problem Statement</p>
<p className="caseStudyBody">Taking tangible action to help the environment can feel overwhelming as a young adult. However, small lifestyle changes like owning and caring for plants can have a meaningful impact on the environment. Plants not only beautify our surroundings, but also improve air quality and foster a connection to nature. <strong>However, many people struggle to maintain plants due to forgetfulness, or a lack of time or motivation</strong>. What’s missing is a way to make plant care feel <strong>achievable</strong>, <strong>enjoyable</strong>, and <strong>meaningful</strong>.</p>

<p className="caseStudyBody">Solution: <strong>Plantogram - an app that turns plant care into a fun, social, and rewarding experience. Features a plant care tracker, daily photo-sharing for accountability, and ability to purchase new plants in-app.</strong></p>

<p className="caseStudySubHeader">Research</p>

<p className="caseStudySubSubHeader">User Research</p>

<ul className="caseStudyBody">
    <li>We learned that <strong>75% of millennials are motivated by rewards and social interaction.</strong></li>
    <li><strong>Also, 70% of millennials describe themselves as ‘plant parents’.</strong></li>
    <CaseStudyImage imagePath={stats1}></CaseStudyImage>
    <li><strong>67% of millennials describe themselves as ‘plant murderers’</strong>, struggling to remember plant care tasks.</li>
    <CaseStudyImage imagePath={stats2}></CaseStudyImage>
    <li>A significant percentage of millennials also <strong>worry about plant care tasks</strong>.</li>
    <CaseStudyImage imagePath={stats3}></CaseStudyImage>
</ul>

<p className="caseStudyBody">By creating an app to making plant care social and rewarding, we effectively target this demographic.</p>

<p className="caseStudySubSubHeader">Competitive Analysis</p>

<p className="caseStudyBody">We proceeded to complete an in-depth competitive analysis to see how we should design specific aspects of our product.</p>

<CaseStudyImage imagePath={inspo}></CaseStudyImage>

<p className="caseStudyBody">Our main findings:</p>

<ul className="caseStudyBody">
    <li><strong>Green and earthy palettes</strong>: Used to reinforce a visual design that gives a nature focused vibe.</li>
    <li><strong>Prominent plant graphics</strong>: Large cutouts of plants or skeuomorphic icons that grab user’s attention.</li>
    <li><strong>Minimal interface</strong>: Interfaces were often uncluttered and simple with clear visual hierarchy, reducing cognitive load for users - and adding to the calm vibes.</li>
</ul>

<p className="caseStudyBody">We decided to implement these into our designs.</p>

<p className="caseStudySubHeader">Design Process</p>

<p className="caseStudySubSubHeader">Ideation</p>

<p className="caseStudyBody">We first drafted up a list of features/components that Plantogram should have, so we could have a general idea of how the app would work.</p>

<CaseStudyImage imagePath={features}></CaseStudyImage>

<p className="caseStudyBody">We decided that the most important features were:</p>

<ul className="caseStudyBody">
    <li><strong>Home screen</strong>: Shows goals, user’s plants.</li>
    <li><strong>Photo-taking interface:</strong> Pops up for the user daily for accountability.</li>
    <li><strong>Navigation bar:</strong> For smooth navigation flow to different tabs.</li>
    <li><strong>Shop:</strong> Easily search for and purchase plants in-app.</li>
</ul>

<p className="caseStudyBody">We then drafted up an example <strong>user flow</strong> to help us plan out the layout and assess any potential friction.</p>

<CaseStudyImage imagePath={userflow}></CaseStudyImage>

<p className="caseStudyBody">Based on our findings from the competitive analysis, we picked an earthy color palette to give the app a natural and calm visual.</p>

<CaseStudyImage imagePath={palette}></CaseStudyImage>

<p className="caseStudyBody">For typeface, we created an example frame and experimented with various serif and sans-serif typefaces. We inclined towards a sans-serif font to contribute to the minimalist feel, but continued to iterate the font throughout the design process.</p>

<CaseStudyImage imagePath={fonts}></CaseStudyImage>

<p className="caseStudyBody">We also picked out a skeuomorphic plant icon set to grab user attention and add a cute element to the visual design.</p>

<CaseStudyImage imagePath={icons}></CaseStudyImage>

<p className="caseStudySubSubHeader">Wireframing</p>

<p className="caseStudyBody">We drafted low-fidelity wireframes for all the prioritized frames of the app. This helped us gauge the layout of the app and ensure that we would have a consistent design throughout.</p>

<CaseStudyImage imagePath={wireframes}></CaseStudyImage>

<p className="caseStudyBody">We then used these, along with our previous ideation, as bases for the high-fidelity frames in Figma.</p>

<p className="caseStudySubHeader">Final Design</p>

<p className="caseStudyBody">The final sans-serif typeface we decided on was <strong>Clash Display</strong>, which gave our app a modern and clean touch.</p>

<p className="caseStudySubSubHeader">Login Screen</p>
<ul className="caseStudyBody">
    <li>Input fields for username and password.</li>
    <li>Option to toggle password visibility for convenience.</li>
    <li>Link for easy password recovery.</li>
</ul>

<CaseStudyImage imagePath={login}></CaseStudyImage>

<p className="caseStudySubSubHeader">Home Screen</p>
<ul className="caseStudyBody">
    <li>Displays all owned plants in a grid layout, with a skeuomorphic icon of each plant.</li>
    <li>Plant Care Tracker: Log when a plant is watered, input hours of sunlight each plant received during the day.</li>
    <li>Quick Actions: Add a new plant or update care logs directly from the page.</li>
</ul>

<CaseStudyImage imagePath={home}></CaseStudyImage>

<p className="caseStudySubSubHeader">Plant Shop</p>
<ul className="caseStudyBody">
    <li>Search Bar: Prominently placed at the top for users to quickly search for specific plants by name.</li>
    <li>Plant Catalog: Displays plants in a clean, grid-style layout with clear images, names and prices.</li>
</ul>

<CaseStudyImage imagePath={shop}></CaseStudyImage>

<p className="caseStudySubSubHeader">Camera</p>
<ul className="caseStudyBody">
    <li>Camera Interface: Full-screen camera view for capturing a photo with a plant.</li>
</ul>

<CaseStudyImage imagePath={camera}></CaseStudyImage>

<p className="caseStudySubHeader">Learnings</p>

<p className="caseStudySubSubHeader">Prioritize first</p>
<p className="caseStudyBody">Since we created this in a designathon that spanned less than 24 hours, we didn’t have time to design every single part of the app we wanted. Hence, we needed to prioritize designing necessary features before moving on to things that we should/could have, but didn’t necessarily need. This is important since it’s quite easy to work on too many things at once and fall behind on time constraints!</p>

<p className="caseStudySubSubHeader">Communication is key</p>
<p className="caseStudyBody">We were working in a team of four, and thus each team member was delegated to drafting out different wireframes. We occasionally had times where our respective frames had inconsistent designs (eg. spacing, typeface size), but we were able to resolve these quickly by clearly communicating our decisions with each other. Ultimately, this is important when designing in a team to maintain consistent design choices!</p>

<p className="caseStudySubHeader">Next Steps</p>
<ul className="caseStudyBody">
    <li>Further scope out and design the engagement aspects of the app - i.e., community interaction and posts!</li>
</ul>

    </div>
  )
}

export default CaseStudy3
