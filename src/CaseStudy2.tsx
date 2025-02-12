import { useState } from 'react';

import CaseStudyImage from './CaseStudyImage';
import Navigation from './Navigation';
import mockmatchhero from './assets/mockmatchcover.png';

import './App.css';

import video from './assets/behaviourial.png';
import calls from './assets/calls.png';
import graphs from './assets/graphs.png';
import insights from './assets/insights.png';
import insights1 from './assets/insights1.png';
import insights2 from './assets/insights2.png';
import branding from './assets/mockbranding.png';
import newdash from './assets/mockframe3.png';
import newvideo from './assets/mocknewvideo.png';
import sketch from './assets/mocksketch.png';
import frame1 from './assets/mockwireframe1.png';
import frame2 from './assets/mockwireframe2.png';
import review from './assets/review.png';

function CaseStudy2() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navigation></Navigation>
      <div className='caseStudyHeaderContainer'>
        <p className='caseStudyHeader'>CASE STUDY: MOCKMATCH</p>
        <p className='caseStudyHeaderLight'>2024</p>
      </div>
      <CaseStudyImage imagePath={mockmatchhero}></CaseStudyImage>
      <p className="caseStudySubHeader">Problem Statement</p>
<p className="caseStudyBody">As someone studying in a software-adjacent field at Waterloo, my peers and I are constantly on the search for co-op opportunities. However, a major challenge that we face is the interview process.</p>

<p className="caseStudyBody">Particularly,</p>
<ul className="caseStudyBody">
    <li>In the moment, <strong>communicating</strong> your ideas can become difficult.</li>
    <li>To <strong>practice</strong> interviewing, you need to spend time finding another person who is capable of providing solid feedback in your domain.</li>
    <li>It’s easy to lose track of what your <strong>strengths and weaknesses</strong> are in interviews.</li>
</ul>

<p className="caseStudyBody">Solution: I decided to design a platform where you could engage in mock interviews with an AI agent, where each interview is also tailored to specific target companies. Users can also view detailed insights about their specific strengths and weaknesses, and review past sessions.</p>

<p className="caseStudySubHeader">Research</p>

<p className="caseStudySubSubHeader">Competitive Analysis</p>
<p className="caseStudyBody">This idea was relatively unique and thus I had no direct competitors to scope - however, I did look at other platforms to see how they designed specific aspects.</p>

<p className="caseStudyBody">For the video aspect of the interview, I examined how Google Meets, Zoom, and Discord designed their interfaces.</p>

<CaseStudyImage imagePath={calls}></CaseStudyImage>

<p className="caseStudyBody">My main findings were:</p>
<ul className="caseStudyBody">
    <li><strong>Large video panels</strong>: Used for a clear view of the user and other’s faces.</li>
    <li><strong>Clear buttons</strong>: Visual hierarchy used to clearly indicate exit, mute, camera, etc. buttons.</li>
    <li><strong>Clear labels</strong>: Labels on each camera panel indicating the user’s name.</li>
</ul>

<p className="caseStudyBody">For the insights feature, I examined how various dashboards were able to effectively display data.</p>

<CaseStudyImage imagePath={graphs}></CaseStudyImage>

<p className="caseStudyBody">My main findings were:</p>
<ul className="caseStudyBody">
    <li><strong>Bar graphs</strong>: Clearly differentiated between different values.</li>
    <li><strong>Color grading</strong>: Clearly differentiated between different magnitudes.</li>
</ul>

<p className="caseStudyBody">I involved these findings in my final solutions.</p>

<p className="caseStudySubHeader">Design Process</p>

<p className="caseStudySubSubHeader">Ideation</p>
<p className="caseStudyBody">I started with some rough sketches of what I wanted the platform to look like, based on my prior findings.</p>

<CaseStudyImage imagePath={sketch}></CaseStudyImage>

<p className="caseStudyBody">For the typeface, I decided on sans-serif for a professional yet comforting look. I selected Inter as a font with a good balance between the two.</p>

<p className="caseStudySubSubHeader">Wireframing</p>
<p className="caseStudyBody">Since this was a design from scratch, I decided to start with a low-fidelity wireframe of the video interview interface, and experiment around.</p>

<p className="caseStudyBody">My initial wireframe of the video interface:</p>

<CaseStudyImage imagePath={frame1}></CaseStudyImage>

<p className="caseStudyBody">I realized that I would also need a control centre for the user, so I also drafted a low-fidelity wireframe for the dashboard.</p>

<CaseStudyImage imagePath={frame2}></CaseStudyImage>

<p className="caseStudyBody">I initially did not create wireframes for the review or insight pages since I intended to iterate through designs for the video and dashboard so I could design the other pages consistently.</p>

<p className="caseStudySubSubHeader">Iterating Designs</p>
<p className="caseStudyBody">I decided to experiment with branding so I would have more basis to create my hi-fidelity frames. For the branding, I selected a rounded sans-serif typeface to contribute to the friendly vibe.</p>

<CaseStudyImage imagePath={branding}></CaseStudyImage>

<p className="caseStudyBody">I decided on a color scheme using orange as a primary, and blue as a secondary for a friendly yet professional atmosphere. As a result, my dashboard design became the following:</p>

<CaseStudyImage imagePath={newdash}></CaseStudyImage>

<p className="caseStudyBody">I realized I didn’t quite like the original layout of the video interface, and thus using my new theming, I drafted a new layout:</p>

<CaseStudyImage imagePath={newvideo}></CaseStudyImage>

<p className="caseStudyBody">For the insights page, I wasn’t exactly sure how to display the data at first. I first used a fixed gradient, but I realized it did not provide any clear hierarchy between values.</p>

<CaseStudyImage imagePath={insights1}></CaseStudyImage>

<p className="caseStudyBody">I decided to use a more opaque value of blue for greater values, versus a more translucent value for lesser values. This allowed for a clear hierarchy within the data display.</p>

<CaseStudyImage imagePath={insights2}></CaseStudyImage>

<p className="caseStudySubHeader">Final Design</p>

<p className="caseStudySubSubHeader">Dashboard</p>
<p className="caseStudyBody">Users can easily start practice interviews and navigate to other pages with the sidebar.</p>

<CaseStudyImage imagePath={newdash}></CaseStudyImage>

<p className="caseStudySubSubHeader">Practice Interview</p>
<p className="caseStudyBody">Users can engage in practice interviews with MockAI, exit sessions, and skip specific questions.</p>

<CaseStudyImage imagePath={video}></CaseStudyImage>

<p className="caseStudySubSubHeader">Review</p>
<p className="caseStudyBody">Users can select past interview sessions to rewatch.</p>

<CaseStudyImage imagePath={review}></CaseStudyImage>

<p className="caseStudySubSubHeader">Insights</p>
<p className="caseStudyBody">Users can view their strengths, weaknesses, progress, and feedback based on past practice interview performance.</p>

<CaseStudyImage imagePath={insights}></CaseStudyImage>

<p className="caseStudySubHeader">Learnings</p>

<p className="caseStudySubSubHeader">Change is ok</p>
<p className="caseStudyBody">By admission, I’m sometimes afraid of completely revamping my work. However, accepting changes can often lead to a much more appealing result, as I saw here by completely redesigning the video interview layout.</p>

<p className="caseStudySubSubHeader">Divide and conquer</p>
<p className="caseStudyBody">When I first thought of the idea, I realized that there were no existing products that performed this specific function. However, by dividing it into parts (video interface, insights, etc.) I was still able to take inspiration and see how other products did specific things effectively.</p>

<p className="caseStudySubHeader">Next Steps</p>
<ul className="caseStudyBody">
    <li>Creating designs for the reviewing function! My idea is to have specific feedback notes aligned to timestamps that would display side by side with the interview recording.</li>
</ul>

    </div>
  )
}

export default CaseStudy2
