import React from 'react';
import useChrome from '@ausuliv/frontend-components/useChrome';

const QuickstartsTest = () => {
  const chrome = useChrome();
  const { quickStarts } = chrome;
  const { Catalog } = quickStarts;

  return <Catalog />;
};

export default QuickstartsTest;
