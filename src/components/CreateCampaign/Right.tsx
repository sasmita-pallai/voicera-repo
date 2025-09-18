import Container from './Container';
import UploadCard, { UploadCardVariant } from '../Dropbox/UploadCard';
import { Schedule } from './Schedule';
import UserDropdown from './userDropdown';
import type { TimeSensitivity } from '../../api/campaign';

interface RightProps {
  setCalling: (file: File | null) => void;
  assignTo: string;
  setAssignTo: (value: string) => void;
  timeSensitivity: TimeSensitivity;
  setTimeSensitivity: (value: TimeSensitivity) => void;
  postmanCollection: string;
  setPostmanCollection: (value: string) => void;
  calling: File | null; 
}

const Right = ({
  setCalling,
  assignTo,
  calling,
  setAssignTo,
  timeSensitivity,
  setTimeSensitivity,
  setPostmanCollection,
  
}: RightProps) => {
  return (
    <div className="flex flex-col w-full gap-2 p-2">
      <Container title="Upload Your File" titledesc="(Calling sheet)">
        <UploadCard
          variant={UploadCardVariant.Media}
          className="h-30 w-full rounded-[4px]"
          onFileSelect={setCalling}
          file={calling}
        />
      </Container>
      
      <Container title="Postman Collection">
       
        <UploadCard variant={UploadCardVariant.Postman} buttonLabel="Upload Media"  className="h-30 w-full rounded-[4px]"
          onLinkSubmit={(url: string) => setPostmanCollection(url)} />

      </Container>
      

      <Container title="Time Sensitivity">
        <Schedule
          timeSensitivity={timeSensitivity}
          setTimeSensitivity={setTimeSensitivity}
        />
      </Container>

      <Container title="Assign To">
  <UserDropdown assignTo={assignTo} setAssignTo={setAssignTo} />
</Container>

    </div>
  );
};

export default Right;
