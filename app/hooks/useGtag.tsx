'use client';
import React, { useState } from 'react';

type AcceptedGtagValues = string | number | boolean;
type AcceptedGtagCommands =
  | 'config'
  | 'get'
  | 'set'
  | 'event'
  | 'consent'
  | 'js';
type GtagOptions = { [index: string]: AcceptedGtagValues };
type GtagConsentOptions = {
  [index in
    | 'ad_storage'
    | 'ad_user_data'
    | 'ad_personalization'
    | 'analytics_storage'
    | 'wait_for_update']: 'granted' | 'denied' | number;
};
type ConsentArg = 'default' | 'update';

// declare global {
//   interface Window {
//     dataLayer?: Array<GtagConfigParams|GtagGetParams|GtagSetParams|GtagEventParams|GtagConsentParams|GtagDateParams>
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     [key: string]: any
//   }
// }

// interface GtagConfigParams {
//   command: 'config'
//   targetID: string
//   additionalConfigParams?: GtagOptions
// }

// interface GtagGetParams {
//   command: 'get'
//   target: string
//   fieldName: string
//   callback: () => void
// }

// interface GtagSetParams {
//   command: 'set'
//   additionalSetParams: GtagOptions
// }

// interface GtagEventParams {
//   command: 'event'
//   eventName: string
//   additionalEventParams: GtagOptions
// }

// interface GtagConsentParams {
//   command: 'consent'
//   consentArg: 'default' | 'update'
//   consentParams: {[index in 'ad_storage'|
//     'ad_user_data'|'ad_personalization'|'analytics_storage'|'wait_for_update']: 'granted'|'denied'| number}
// }

// interface GtagDateParams {
//   command: 'js'
//   timestamp: Date

// }

const useGtag = (dataLayerName: string = 'dataLayer') => {
  const [rootConfig, setRootConfig] = useState<string>('');
  const [registeredConfigs, setRegisteredConfigs] = useState<{
    [index: string]: GtagOptions;
  }>({});

  const registerGtag = (gtagID: string, properties: GtagOptions = {}) => {
    const update = { ...registeredConfigs };
    console.log(update);
    if (!(gtagID in update)) update[gtagID] = {};
    if (Object.keys(update).length === 1) setRootConfig(gtagID);
    update[gtagID] = { ...properties };
    setRegisteredConfigs(update);
    return;
  };
  const diagnostic = { rootConfig, registeredConfigs };

  // if (gtagID) registerGtag(gtagID, {});

  const mountConfig = () => {
    try {
      window[dataLayerName] = window[dataLayerName] || [];
      gtag('js', new Date());
      for (const tagID of Object.keys(registeredConfigs)) {
        const options = registeredConfigs[tagID] as GtagOptions;
        gtag('config', tagID, options);
      }
    } catch (err) {
      console.error(err);
    }
  };
  const ScriptConfig = (): JSX.Element => {
    const tagString = `https://www.googletagmanager.com/gtag/js?id=${rootConfig}`;
    mountConfig();
    console.log('in component', diagnostic);
    return (
      <>
        <script async src={tagString}></script>
      </>
    );
  };

  function gtag(
    event: AcceptedGtagCommands,
    target: string,
    options: GtagOptions,
  ): void; //config overload
  function gtag(event: AcceptedGtagCommands, date: Date): void; //date overload
  function gtag(
    event: AcceptedGtagCommands,
    target: string,
    fieldName: string,
    callback: () => void,
  ): void; //get overload
  function gtag(event: AcceptedGtagCommands, options: GtagOptions): void; //set overload
  function gtag(
    event: AcceptedGtagCommands,
    eventName: string,
    options: GtagOptions,
  ): void; // event overload
  function gtag(
    event: AcceptedGtagCommands,
    consentArg: ConsentArg,
    options: GtagConsentOptions,
  ): void; //consent overload
  function gtag(
    event: AcceptedGtagCommands,
    a: string | Date | GtagOptions | ConsentArg,
    b?: GtagOptions | string | GtagConsentOptions,
    c?: () => void,
  ): void {
    //implementation
    switch (event) {
      case 'js':
        window[dataLayerName].push(event, a);
        break;
      case 'config':
      case 'set':
      case 'event':
      case 'consent':
        window[dataLayerName].push(event, a, b);
        break;
      case 'get':
        window[dataLayerName].push(event, a, b, c);
        break;
      default:
        throw Error(`gtag function called with invalid event: ${event}`);
    }
    return;
  }

  return {
    GtagScript: ScriptConfig,
    gtag,
    registerGtag,
    diagnostic,
  };
};

export default useGtag;
