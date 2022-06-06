import Spinner from '../Spinner';

import { Overlay } from './styles';

export default function Loader({ isLoading }) {
  if (!isLoading) {
    return null;
  }

  return (
    <Overlay>
      <Spinner size={90} />
    </Overlay>
  );
}