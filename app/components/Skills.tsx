'use client';

import { css } from '@emotion/react';
import { FullCSSInterpolation } from '../../declarations';
import {
  Server,
  Ratio,
  Database,
  MousePointerClick,
  CloudLightning,
  TrendingUp,
  Terminal,
  Handshake
} from 'lucide-react';
import { colors, lightBorder } from '@/styles';

<Handshake />
import { SkillType, SkillsData } from '../../declarations';

const skillsIcons = {
  frontend: () => <Ratio />,
  backend: () => <Server />,
  data: () => <Database />,
  martech: () => <MousePointerClick />,
  cloud: () => <CloudLightning />,
  growth: () => <TrendingUp />,
  languages: () => <Terminal />,
  collaboration: () => <Handshake />
};

const skillsCopy: SkillsData = {
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
      'Accessibility',
    ],
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
      'Crontab',
    ],
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
      'Tableau',
    ],
  },
  martech: {
    title: 'MARTECH',
    skills: [
      'Google Tag Manager',
      'Google Analytics (GA4)',
      'Segment.io',
      'Conversion APIs',
      '3P Marketing Pixels',
      'Google Campaign Manager 360',
    ],
  },
  cloud: {
    title: 'CLOUD',
    skills: [
      'Google Cloud Platform (GCP)',
      'AWS (Elastic Beanstalk, S3, EC2)',
      'Docker',
      'Kubernetes',
      'Git/GitHub',
      'GitHub Actions',
    ],
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
      'Technical SEO',
    ],
  },
  languages: {
    title: 'LANGUAGES',
    skills: ['JavaScript', 'Typescript', 'Python'],
  },
  collaboration: {
    title: 'COLLABORATION',
    skills: []
  }
};

const baseSkillCSS = css({

  maxWidth: '335px',
  minWidth: '320px',
  height: '234px',
  maxHeight: '234px',
  minHeight: '234px',
  border: lightBorder,
  boxShadow: '1px 1px 1px lightgray',
  background: colors.white,
});

const listHeaderCSS = css({
  display: 'flex',
  alignItems: 'center',
  paddingLeft: '10px',
  margin: '.5em 0em',
  '& h3': {
    margin: '0px',
  },
});

export const Skill = ({
  skill,
  columns,
  skillCSS,
}: {
  skill: SkillType;
  columns?: number;
  skillCSS?: FullCSSInterpolation;
}) => {
  const ulCSS = {
    margin: '0px',
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
    '& li': {
      listStyleType: '"▸  "',
    },
  };

  if (columns) {
    ulCSS.gridTemplateColumns = `repeat(${columns}, 1fr)`;
  }
  const subSkills = skillsCopy[skill].skills;

  return (
    <div css={skillCSS ? [baseSkillCSS, css(skillCSS)] : baseSkillCSS}>
      <div css={listHeaderCSS}>
        {skillsIcons[skill]()}
        <h3>&nbsp;{skillsCopy[skill].title}</h3>
      </div>
      <ul css={ulCSS}>
        {subSkills.map((text) => (
          <li key={crypto.randomUUID()}>{text}</li>
        ))}
      </ul>
    </div>
  );
};
