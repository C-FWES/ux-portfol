import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Navigation from './Navigation'
import Hero from './Hero'
import ProjectList from './ProjectList'
import Footer from './Footer'
import AboutInfo from './AboutInfo';
import CaseStudyImage from './CaseStudyImage';
import quest2hero from './assets/quest2covertransparent.png'

import './App.css'

function CaseStudy1() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navigation></Navigation>
      <div className='caseStudyHeaderContainer'>
        <p className='caseStudyHeader'>CASE STUDY: QUEST 2.0</p>
        <p className='caseStudyHeaderLight'>2024</p>
      </div>
      <CaseStudyImage imagePath={quest2hero}></CaseStudyImage>
      {/* <Footer></Footer> */}
      <p className='caseStudySubHeader'>Problem Statement</p>
<p className="caseStudyBody">The University of Waterloo uses Quest as their student information system - thus, it serves as the main location of student records, course management, academic information, various documents, and tuition payment. However, for a platform so crucial to student life, it is awkward to navigate, difficult to find specific pages, and generally has an outdated interface.</p>

<p className="caseStudyBody">Particularly:</p>
<ul className="caseStudyBody">
    <li><b>Awkward navigation</b>: To navigate to another page, you have to return to the home screen to find your destination page.</li>
    <li><b>Heavy cognitive load</b>: It is difficult to make out different courses in the current calendar. It is difficult to find specific subpages due to the cluttered UI, and also lacks a search function.</li>
    <li><b>Visual design</b>: Quest features an outdated visual design. This ultimately makes it quite unpleasant to use in general.</li>
</ul>

<p className="caseStudyBody">Solution: <b>Improve navigation by introducing a fixed sidebar. Design a modern calendar view with color coded courses. Introduce a domain-specific search bar.</b></p>

<p className="caseStudySubHeader">Research</p>

<p className="caseStudySubSubHeader">Competitive Analysis</p>
<p className="caseStudyBody">I proceeded to conduct an in-depth competitive analysis to scope out features that other products used for an efficient navigation, calendar, and search flow, to find out how I could improve Quest similarly.</p>

<p className="caseStudyBody">My main findings were:</p>
<ul className="caseStudyBody">
    <li><b>Sidebar navigation</b>: Common method of handling smooth navigation between different pages, while still providing access to the focused page.</li>
    <li><b>Color-coded calendar</b>: Frequently used to contrast between different events in a calendar.</li>
    <li><b>Fixed search bar</b>: Common method to provide quick access to search for other pages.</li>
</ul>

<p className="caseStudyBody">I implemented all these findings into my final solution.</p>

<p className="caseStudySubSubHeader">Platform Evaluation</p>
<p className="caseStudyBody">I also conducted an in-depth evaluation of Quest’s existing structure to see how I could effectively apply the previous findings.</p>

<p className="caseStudyBody">My main findings were:</p>
<ul className="caseStudyBody">
    <li>Home page can be simplified into a sidebar.</li>
    <li>Several links on the home page all lead to the same page - let’s consolidate these all into one, then use breadcrumbs for subpages.</li>
    <li>Calendar should have its own subpage page to reduce clutter and improve clarity.</li>
    <li>Search bar can be fixed at the top of every page.</li>
</ul>

<p className="caseStudySubHeader">Design Process</p>

<p className="caseStudySubSubHeader">Ideation</p>
<p className="caseStudyBody">University of Waterloo uses black and gold as their theme colors - thus, I derived an appropriate color palette from this. I compared the colors against light and dark backgrounds to gauge which would be more appealing to the target demographic (students).</p>

<p className="caseStudyBody">I then sketched out some rough ideas of what I wanted the new platform to look like.</p>

<p className="caseStudyBody">For typeface, my goal was to induce clarity while being easy to view, so I decided to use a sans-serif typeface. I decided to use Inter, due to its balance between legibility and comfort.</p>

<p className="caseStudySubSubHeader">Wireframing</p>
<p className="caseStudyBody">Based on my sketches, I derived low-fidelity wireframes for the sidebar, calendar, and search interface. This helped to evaluate the overall layout and any friction that could arise.</p>

<p className="caseStudyBody">I then used these, and my color palette, as bases for the final high-fidelity frames in Figma.</p>

<p className="caseStudySubHeader">Final Design</p>

<p className="caseStudySubSubHeader">Sidebar Implementation</p>
<ul className="caseStudyBody">
    <li><b>Introduces simplified navigation flow</b>: Switch pages without having to go back to a home page.</li>
    <li><b>Reduces cognitive load</b>: Several buttons that all led to the same page are consolidated into a single element. Navigation elements are also now categorized.</li>
</ul>

<p className="caseStudySubSubHeader">Calendar Redesign</p>
<ul className="caseStudyBody">
    <li><b>Improves visual design</b>: Modernized calendar interface, including simplified switching between day/week/month views.</li>
    <li><b>Reduces cognitive load</b>: Courses are categorized by color, making it easy to contrast between different courses.</li>
</ul>

<p className="caseStudySubSubHeader">Search Interface</p>
<ul className="caseStudyBody">
    <li><b>Introduces simplified navigation flow</b>: The search menu directly accesses different pages and subpages, along with permitting specific searches.</li>
    <li><b>Reduces cognitive load</b>: The search menu declutters the interface due to removing the need for subpage links on every page.</li>
</ul>

<p className="caseStudySubSubHeader">Breadcrumbs</p>
<ul className="caseStudyBody">
    <li><b>Introduces simplified navigation flow</b>: The breadcrumb menu allows for easy navigation to previous subpages, and for users to track their current page.</li>
</ul>

<p className="caseStudySubHeader">Learnings</p>

<p className="caseStudySubSubHeader">Navigation flow is crucial</p>
<p className="caseStudyBody">Throughout this design process, I realized how so much of Quest’s friction stemmed from its poor navigation. This has shown me how important navigation flow is - it can be a prominent source of awkwardness if not designed effectively. This also showed me how much impact my navigation improvements had (sidebar, search, breadcrumbs).</p>

<p className="caseStudySubSubHeader">Visuals matter too</p>
<p className="caseStudyBody">Part of why I would feel aversive to using Quest is the outdated visual design. When I showed my Quest redesign to my fellow Waterloo students, they also shared that they would be much happier using this than the original. This has shown me that a huge part of any product is the visual appeal.</p>

<p className="caseStudySubHeader">Next Steps</p>
<ul className="caseStudyBody">
    <li>Although more on the technical side, it would be interesting to implement a semantic search for even more ease of use.</li>
    <li>Creating designs for the rest of the pages with the findings from this case study.</li>
</ul>
        
    </div>
  )
}

export default CaseStudy1
