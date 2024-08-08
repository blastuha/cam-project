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
      <span onClick={() => navigate('/video/' + allVideosData?.data[0].id)}>
        {allVideosData?.data[0].filename}
      </span>
    </PageContainer>
  );
};
