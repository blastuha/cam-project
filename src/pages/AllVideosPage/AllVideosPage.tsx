import React from 'react';
import styles from './AllVideosPage.module.scss';
import { PageContainer } from '@components/containers/PageContainer/PageContainer';
import { useQuery } from '@tanstack/react-query';
import { getAllVideos } from '@api/analyzer/getAllVideos';
import { useNavigate } from 'react-router-dom';

export const AllVideosPage = () => {
  const { data: allVideosData, isLoading } = useQuery({
    queryKey: ['allVideos'],
    queryFn: getAllVideos,
  });

  const navigate = useNavigate();

  console.log('allVideosData', allVideosData);

  return (
    <PageContainer>
      {allVideosData?.data?.map((video) => (
        <p onClick={() => navigate('/video/' + video.id)}>{video.filename}</p>
      ))}
      {/* <span onClick={() => navigate('/video/' + allVideosData?.data[0].id)}>
        {allVideosData?.data[0] && allVideosData?.data[0].filename}
      </span>

      <p onClick={() => navigate('/video/' + allVideosData?.data[1].id)}>
        {allVideosData?.data[1] && allVideosData?.data[1].filename}
      </p> */}
    </PageContainer>
  );
};
