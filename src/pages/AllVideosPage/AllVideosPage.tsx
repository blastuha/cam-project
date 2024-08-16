import React from 'react';
import styles from './AllVideosPage.module.scss';
import { PageContainer } from '@components/containers/PageContainer/PageContainer';
import { useQuery } from '@tanstack/react-query';
import { getAllVideos } from '@api/analyzer/getAllVideos';
import { useNavigate } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
} from '@mui/material';

export const AllVideosPage = () => {
  const { data: allVideosData, isLoading } = useQuery({
    queryKey: ['allVideos'],
    queryFn: getAllVideos,
  });

  const navigate = useNavigate();

  if (isLoading) {
    return (
      <PageContainer>
        <CircularProgress />
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="videos table">
          <TableHead>
            <TableRow>
              <TableCell>Filename</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Start Date</TableCell>
              <TableCell align="right">End Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allVideosData?.data?.map((video) => (
              <TableRow
                key={video.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                onClick={() => navigate('/video/' + video.id)}
                style={{ cursor: 'pointer' }}
              >
                <TableCell component="th" scope="row">
                  {video.filename}
                </TableCell>
                <TableCell align="right">
                  {video.description || 'No Description'}
                </TableCell>
                <TableCell align="right">{video.status}</TableCell>
                <TableCell align="right">
                  {new Date(video.date_start).toLocaleString()}
                </TableCell>
                <TableCell align="right">
                  {new Date(video.date_end).toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </PageContainer>
  );
};
