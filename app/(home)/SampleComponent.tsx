'use client';

import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import FetchExample from './FetchExample';
import ReactQueryExample from './ReactQueryExample';

const SampleComponent = () => {
  return (
    // <FetchExample />
    <ReactQueryExample />
  );
};

export default SampleComponent;
