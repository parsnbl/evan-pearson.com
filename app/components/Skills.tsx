'use client'
import React from "react";
import { css } from '@emotion/react';
import { CSSInterpolation } from '@emotion/serialize'
import { Server, Ratio, Database, MousePointerClick, CloudLightning, TrendingUp, Terminal } from "lucide-react";
import { colors, lightBorder, roboto_condensed } from "@/styles";



const skillsIcons = {
  frontend: () => <Ratio />,
  backend: () => <Server />,
  data: () => <Database />,
  martech: () => <MousePointerClick />,
  cloud: () => <CloudLightning />,
  growth: () => <TrendingUp />,
  languages: () => <Terminal />
}

const skillsCopy = {
  frontend: {
    title: 'FRONTEND',
    skills: [
      'React',
      'Next.JS',
      'SaSS',
      'Tailwind',
      'CSS Modules',
      'Redux/Redux Toolkit',
      'React Router',
      'HTML5',
      'CSS3',
      'Jest',
      'Testing Library',
      'webpack',
      'Accessibility'
    ]
  },
  backend: {
    title: 'BACKEND',
    skills: [
      'Node.JS',
      'Express',
      'Flask',
      'FastAPI',
      'PostgreSQL',
      'MongoDB',
      'WebSockets/Socket.io',
      'Supertest',
      'Crontab'
    ]
  },
  data: {
    title: 'DATA',
    skills: [
      'Pandas',
      'Numpy',
      'Pydantic',
      'Apache Airflow',
      'Snowflake',
      'Streamlit',
      'ChartJS',
      'Tableau'
    ]
  },
  martech: {
    title: 'MARTECH',
    skills: [
      'Google Tag Manager',
      'Google Analytics (GA4)',
      'Segment.io',
      'Conversion APIs',
      '3P Marketing Pixels',
      'Google Campaign Manager 360'
    ]
  },
  cloud: {
    title: 'CLOUD',
    skills: [
      'Google Cloud Platform (GCP)',
      'AWS (Elastic Beanstalk, S3, EC2)',
      'Docker',
      'Kubernetes',
      'Git/GitHub',
      'GitHub Actions'
    ]
  },
  growth: {
    title: 'GROWTH',
    skills: [
      'Digital Strategy',
      'Paid Media Strategy/Activation',
      'Digital Growth Hacking',
      'Paid Social',
      'Paid Search',
      'eComm Advertising',
      'Display Advertising',
      'Affiliate Marketing',
      'Technical SEO'
    ]
  },
  languages: {
    title: 'LANGUAGES',
    skills: [
      'JavaScript',
      'Typescript',
      'Python'
    ]
  }
}


const baseSkillCSS = css({
  width: '335px',
  maxWidth: '335px',
  minWidth: '335px',
  height: '234px',
  maxHeight: '234px',
  minHeight: '234px',
  border: lightBorder,
  boxShadow: '1px 1px 1px lightgray',
  background: colors.white
});


const listHeaderCSS = css({
  display: 'flex',
  alignItems: 'center',
  paddingLeft: '10px',
  margin: '.5em 0em',
  '& h3': {
    margin: '0px'
  }
});

type SkillType = 'frontend' | 'backend' | 'data' | 'cloud' | 'martech' | 'growth' | 'languages'

export const Skill = ({skill, columns, css}: {skill: SkillType, columns?: number, css?: CSSInterpolation}) => {

  const ulCSS = {
    margin: '0px',
    columns: 1,
    '& li':{
      listStyleType: '"▸  "'
    }
  };  

  const skills = [];
  for (const skillText of skillsCopy[skill].skills) {
    skills.push(
      <li key={crypto.randomUUID()}>{skillText}</li>
    )
  }
  const skillCSS = [ baseSkillCSS ]
  if (columns) {
    ulCSS.columns = columns;
  }
  if (css) skillCSS.push(css)

  return (
    <div css={skillCSS}>
      <div css={listHeaderCSS}>
        {skillsIcons[skill]()}
        <h3>&nbsp;{skillsCopy[skill].title}</h3>
      </div>
      <ul css={ulCSS}>
        {skills}
      </ul>
    </div>
  );
}
