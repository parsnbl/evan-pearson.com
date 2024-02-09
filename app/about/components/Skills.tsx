'use client'
import React from "react";
import { css } from '@emotion/react';

import { Server, Ratio, Database, MousePointerClick, CloudLightning, TrendingUp } from "lucide-react";
import { colors, roboto_condensed } from "@/styles";

const listHeader = css({
  display: 'flex',
  alignItems: 'center',
  paddingLeft: '10px',
  margin: '.5em 0em',

  '& h3': {
    margin: '0px'
  }
});



const columnChild = css({
  //border: '1px dotted gray',
  '& ul': {
    margin: '0px'
  },
  '& li':{
    listStyleType: '"▸  "'
  }
});

const border = {
  right: css({
    borderRight: `1px solid ${colors.platinum}`,
  }),
  left: css({
    borderLeft: `1px solid ${colors.platinum}`,
  }),
  top: css({
    borderTop: `1px solid ${colors.platinum}`,
  }),
  bottom: css({
    borderBottom: `1px solid ${colors.platinum}`,
  }),
}

export const Frontend = () => {
  return (
    <div css={[columnChild, border.right, border.bottom]}>
      <div css={listHeader} className={roboto_condensed.className}>
        <Ratio /><h3>&nbsp;FRONTEND</h3>
      </div>
      <ul style={{columns: 2}}>
        <li>React</li>
        <li>NextJS</li>
        <li>SaSS</li>
        <li>Tailwind</li>
        <li>CSS Modules</li>
        <li>Redux/Redux Toolkit</li>
        <li>React Router</li>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>Jest</li>
        <li>Testing Library</li>
        <li>webpack</li>
        <li>Accessibility</li>
      </ul>
    </div>
  );
};

export const Backend = () => {
  return (
    <div css={[columnChild, border.bottom]}>
      <div css={listHeader} className={roboto_condensed.className}>
        <Server /><h3>&nbsp;BACKEND</h3>
      </div>
      <ul>
        <li>NodeJS</li>
        <li>Express</li>
        <li>Flask</li>
        <li>FastAPI</li>
        <li>SQL - PostgreSQL</li>
        <li>NoSQL - MongoDB/Mongoose</li>
        <li>WebSockets/Socket.io</li>
        <li>Supertest</li>
        <li>crontab</li>
      </ul>
    </div>
  );
};
export const Data = () => {
  return (
    <div css={[columnChild, border.bottom, border.right]}>
      <div css={listHeader} className={roboto_condensed.className}>
        <Database /><h3>&nbsp;DATA</h3>
      </div>
      <ul>
        <li>pandas</li>
        <li>numpy</li>
        <li>pydantic</li>
        <li>Apache Airflow</li>
        <li>Snowflake</li>
        <li>Streamlit</li>
        <li>Tableau</li>
      </ul>
    </div>
  );
};
export const Martech = () => {
  return (
    <div css={[columnChild, border.bottom]}>
      <div css={listHeader} className={roboto_condensed.className}>
        <MousePointerClick /><h3>&nbsp;MARTECH</h3>
      </div>
      <ul>
        <li>Google Tag Manager</li>
        <li>Segment.io</li>
        <li>Conversion APIs</li>
        <li>3P Marketing Pixels - Meta, Google, etc.</li>
        <li>Google Campaign Manager 360</li>
        <li>Google Analytics (GA4)</li>
      </ul>
    </div>
  );
};
export const Cloud = () => {
  return (
    <div css={[columnChild, border.right]}>
      <div css={listHeader} className={roboto_condensed.className}>
        <CloudLightning /><h3>&nbsp;CLOUD/DEVOPS</h3>
      </div>
      <ul>
        <li>Google Cloud Platform</li>
        <li>AWS (Elastic Beanstalk, S3, EC2)</li>
        <li>Docker</li>
        <li>Kubernetes</li>
        <li>Git/GitHub Flow</li>
        <li>GitHub Actions</li>
      </ul>
    </div>
  );
};
export const Growth = () => {
  return (
    <div css={columnChild}>
      <div css={listHeader} className={roboto_condensed.className}>
        <TrendingUp /><h3>&nbsp;GROWTH</h3>
      </div>
      <ul>
        <li>Digital Media Strategy</li>
        <li>Cross-channel Paid Media Strategy/Activation</li>
        <li>Paid Social - Meta, X(Twitter), YouTube, TikTok, SnapChat, etc.</li>
        <li>Paid Search - Google Ads, Bing Ads</li>
        <li>Paid eComm - Amazon Ads, Criteo, Walmart Connect</li>
        <li>Paid Display - Google DV360, AMS, AAP</li>
        <li>Technical SEO</li>
      </ul>
    </div>
  );
};