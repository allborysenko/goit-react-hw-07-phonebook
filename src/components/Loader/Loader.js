import { Blocks } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Blocks
      visible={true}
      height="40"
      width="40"
      ariaLabel="blocks-loading"
      wrapperStyle={{
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
      }}
      wrapperClass="blocks-wrapper"
    />
  );
}


