import React, { useEffect, useState } from 'react';


// <script async src="https://www.googletagmanager.com/gtag/js?id=TAG_ID"></script>
// <script>
// window.dataLayer = window.dataLayer || [];
// function gtag(){dataLayer.push(arguments);}
// gtag('js', new Date());

// gtag('config', 'TAG_ID');

// https://github.com/vercel/next.js/blob/canary/packages/third-parties/src/google/gtm.tsx


const useGtag = (tagID: string dataLayerName: string = 'dataLayer') => {
  const tagString = `https://www.googletagmanager.com/gtag/js?id=${tagID}`
  
  const [registeredConfigs, setRegisteredConfigs] = useState({});

  const updateRegisteredConfig = (gtagID: string, groups) => {
    setRegisteredConfigs({
      
    })
  }



  function gtag() {window[dataLayerName].push(arguments)}
  
  const mountConfig = () => {
    window[dataLayerName] = window[dataLayerName] || [];
    gtag('js', new Date());
    gtag('config', tagID);
  }

  

  const ScriptConfig = (): JSX.Element => {
    useEffect(()=>{
      mountConfig();
    },[])
    return (
     <>
      <script async src={tagString}></script>
     </>
    );
  }


  return {
    gtagScript: ScriptConfig,
    gtag: gtag,
  }
}

