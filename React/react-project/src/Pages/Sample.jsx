import React from 'react';
import { Outlet } from 'react-router-dom';

const Sample = () => {
  return (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quos ratione maxime consequatur quia repellendus dolor pariatur, tempore deleniti. Ab at praesentium ipsam voluptatum qui nostrum neque architecto quam impedit.

      <Outlet />
    </div>
  );
}

export default Sample;
