import React, { useContext } from 'react';
import { useIntl } from 'react-intl';
import { Button, EmptyState, EmptyStateVariant, EmptyStateActions, EmptyStateFooter } from '@patternfly/react-core';
import { CheckCircleIcon } from '@patternfly/react-icons';
import { AddGroupWizardContext } from './add-group-wizard';
import messages from '../../../Messages';

interface AddGroupSuccessProps {
  onClose: () => void;
}

const AddGroupSuccess = ({ onClose }: AddGroupSuccessProps) => {
  const intl = useIntl();
  const { setHideForm, setWizardSuccess } = useContext(AddGroupWizardContext);

  return (
    <EmptyState  headingLevel="h4" icon={CheckCircleIcon}  titleText={<>{intl.formatMessage(messages.groupCreatedSuccessfully)}</>} variant={EmptyStateVariant.lg}>
      <EmptyStateFooter>
        <Button onClick={onClose} variant="primary">
          {intl.formatMessage(messages.exit)}
        </Button>
        <EmptyStateActions>
          <Button
            onClick={() => {
              setHideForm(false);
              setWizardSuccess(false);
            }}
            variant="link"
          >
            {intl.formatMessage(messages.createAnotherGroup)}
          </Button>
        </EmptyStateActions>
      </EmptyStateFooter>
    </EmptyState>
  );
};

export default AddGroupSuccess;
