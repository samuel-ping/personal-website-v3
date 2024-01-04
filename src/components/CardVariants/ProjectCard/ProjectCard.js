import { useState } from 'react';

import Image from 'next/image';

import ProjectCardPopup from '@components/CardVariants/ProjectCard/ProjectCardPopup';
import RGBStringToDataURL from 'src/utils/RGBStringToDataURL';

export default function ProjectCard({ info }) {
  const [modalVisible, toggleModalVisible] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => toggleModalVisible(!modalVisible)}
        className="max-w-xs rounded overflow-hidden shadow-lg transition-colors bg-white hover:bg-green-250"
      >
        {info.details.thumbnail && (
          <div className="relative h-56">
            <Image
              src={info.details.thumbnail}
              alt={`Thumbnail for ${info.details.title}`}
              className="w-full object-contain"
              fill
              placeholder="blur"
              blurDataURL={RGBStringToDataURL(info.details['blur-rgb'])}
            />
          </div>
        )}
        <div className="px-3 py-4">
          <h2 className="text-xl font-bold">{info.details.title}</h2>
          <h3>
            {info.details['start-date']}
            {info.details['end-date'] === info.details['start-date'] ? (
              <></>
            ) : info.details['end-date'] === '' ? (
              ' - Present'
            ) : (
              ` - ${info.details['end-date']}`
            )}
          </h3>
          <h3 className="text-gray-600 italic mb-2 truncate">
            {info.details.technologies}
          </h3>
          <h3>{info.details['short-description']}</h3>
        </div>
      </button>

      <ProjectCardPopup
        visible={modalVisible}
        info={info}
        handleClose={() => toggleModalVisible(!modalVisible)}
      />
    </>
  );
}
