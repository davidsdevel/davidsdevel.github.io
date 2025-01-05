'use client'

import { useLayoutEffect, useRef, useState } from "react";
import { FaCircle } from "react-icons/fa";

const features = [
  {
    title: 'Integrate your social media',
    description: 'Promote your entries on different channels without waiting. Focus on create, we promote for you',
    img: `/illustrations/5.svg`,
    feats: [
      'Promote on your social media',
      'Send emails to your subscribers',
      'Send notifications to your readers devices'
    ]
  },
  {
    title: 'Show the right content',
    img: `/illustrations/109.svg`,
    description: 'Our recommendation systems will help you to offer the right content for each person',
    feats: [
      'Similarity filter',
      'Recommendations based on tastes',
      '100% Dinamic content'
    ]
  },
  {

    title: 'Thought for your readers',
    img: `/illustrations/125.svg`,
    description: 'Our platform is optimized to offer the best loading experience. We have reduced the loading times to boost your views',
    feats: [
      'Image size reduction',
      'Asynchronous load'
    ]
  }
];

function FeatureCard({feature, isActive, index}) {
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const containerRef = useRef(null);

    useLayoutEffect(() => {
      if (containerRef.current && textRef.current && imageRef.current) {
        if (isActive) {
          containerRef.current.style.display = 'flex';
          
          setTimeout(() => {
            containerRef.current.style.opacity = 1;
                    
            textRef.current.style.transform = 'translateX(0)';
            imageRef.current.style.transform = 'translateX(0)';
          }, 0);
        } else {
          containerRef.current.style.opacity = 0;
          containerRef.current.style.display = 'none';
                
          if (index === 1) {
            textRef.current.style.transform = 'translateX(-30px)';
            imageRef.current.style.transform = 'translateX(30px)';
          } else {
            textRef.current.style.transform = 'translateX(30px)';
            imageRef.current.style.transform = 'translateX(-30px)';
          }
        }
      }
    }, [isActive, index]);

    return <div ref={containerRef} className={`tab-panel opacity-0 hidden w-full transition-all duration-150 ease flex-col items-center ${ index === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} md:py-16 md:w-3/4 md:m-auto`} role="tabpanel">
    <img src={feature.img} alt="alternative" className='md:w-1/2 transition-all duration-300 ease' ref={imageRef}/>
    <div className="my-8 text-center md:w-1/2 transition-all duration-300 ease" ref={textRef}>
      <h4 className='font-bold text-2xl text-main-700'>{feature.title}</h4>
      <p className='my-8 px-2'>{feature.description}</p>
      <ul className="text-left pl-8 pr-2 mb-12">
        {
          feature.feats.map(feat => {
            return <li className="flex items-center my-2 list-disc " key={feat}>
              <FaCircle className='text-accent-1' style={{width: 8}}/>
              <div className='ml-1'>{feat}</div>
            </li>
          })
        }
      </ul>
      <a className='no-underline bg-accent-1 text-white rounded-full py-3 px-6' href='/docs'>
        REGISTER
      </a>
    </div>
  </div>
}


export default function Features() {
  const [activeTab, setActiveTab]  = useState(0);

  return <div id="features" className="bg-white flex items-center flex-col py-8">
    <div className="text-center">
      <div className='my-8'>
        <div className="text-4xl font-bold text-main-700">FEATURES</div>
        <h3>Thinking on you and your readers</h3>
      </div>
      <p className="my-8 px-4 max-w-2xl">
        Take your time, focus on writing, we&apos;ll take care of deliver your content in all your social media with one click. Once inside we offer the right content to the right person
      </p>
    </div>
    <div className="flex" id="argoTabs" role="tablist">
      <button id='tab-button-1' className='tab-button cursor-pointer mx-1 my-8 rounded-full py-2 px-4' data-tab="1" role="tab" aria-controls="tab-1" onClick={() => setActiveTab(0)}>Promote</button>
      <button id='tab-button-2' className='tab-button cursor-pointer mx-1 my-8 rounded-full py-2 px-4' data-tab="2" role="tab" aria-controls="tab-2" onClick={() => setActiveTab(1)}>Delight</button>
      <button id='tab-button-3' className='tab-button cursor-pointer mx-1 my-8 rounded-full py-2 px-4' data-tab="3" role="tab" aria-controls="tab-3" onClick={() => setActiveTab(2)}>Retain</button>
    </div>
    <div className="relative w-full" >
      {
        features.map((e, i) => {
          return <FeatureCard
            key={e.title}
            feature={e}
            isActive={activeTab === i}
            index={i}
          />
        })
      }
    </div>
  </div>
}

/*
<script>
  const buttons = document.getElementsByClassName('tab-button');
  const tabs = document.getElementsByClassName('tab-panel')

  function handleTabChanges(i: number) {
    for (let j = 0; j < buttons.length; j++) {
      if (j === i) {
        const button = buttons[j] as HTMLButtonElement;
        const tab = tabs[j] z;
        
        button.style.backgroundColor = '#5f4dee';
        button.style.color = '#fff';

        tab.style.display = 'flex'
        setTimeout(() => {
          tab.style.opacity = '1'
        }, 0)
      } else {
        const button = buttons[j] as HTMLButtonElement;
        const tab = tabs[j] as HTMLDivElement;
        
        button.style.backgroundColor = '#fff';
        button.style.color = '#5f4dee';

        tab.style.display = 'none'
        setTimeout(() => {
          tab.style.opacity = '0'
        }, 150)
      }
    }
  }

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
      handleTabChanges(i);
    });
  }

  handleTabChanges(0);
</script>
*/