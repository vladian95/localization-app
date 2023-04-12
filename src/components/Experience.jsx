import { useTranslation } from 'react-i18next';

const ExperienceCard = ({ experience }) => {
  const { t } = useTranslation();
  const points = experience.points || [];
  return (
    <div className="card-wrap">
      <h3>{t(`experiences.${experience.id}.title`)}</h3>
      <ul className="card-ul">
        {points.map((point, index) => (
          <li key={index}>
            {t(`experiences.${experience.id}.points.${index}`)}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Experience = () => {
  const { t } = useTranslation();
  const experiences = [
    {
      id: 'webapp',
      title: t('experiences.webapp.title'),
      points: [
        t('experiences.webapp.points.0'),
        t('experiences.webapp.points.1'),
        t('experiences.webapp.points.2'),
        t('experiences.webapp.points.3'),
      ],
    },
    {
      id: 'visual',
      title: t('experiences.visual.title'),
      points: [
        t('experiences.visual.points.0'),
        t('experiences.visual.points.1'),
        t('experiences.visual.points.2'),
        t('experiences.visual.points.3'),
        t('experiences.visual.points.4'),
      ],
    },
    {
      id: 'design',
      title: t('experiences.design.title'),
      points: [
        t('experiences.design.points.0'),
        t('experiences.design.points.1'),
        t('experiences.design.points.2'),
        t('experiences.design.points.3'),
        t('experiences.design.points.4'),
      ],
    },
  ];
  return (
    <div className="ex-wrap">
      {experiences.map((experience, index) => (
        <ExperienceCard key={`experience-${index}`} experience={experience} />
      ))}
    </div>
  );
};

export default Experience;
