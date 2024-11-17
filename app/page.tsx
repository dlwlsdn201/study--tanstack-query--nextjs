import { useQuery } from '@tanstack/react-query';
import SampleComponent from './(home)/SampleComponent';

export default function Root() {
  return (
    <div>
      <div>Root page</div>

      <SampleComponent />
    </div>
  );
}
