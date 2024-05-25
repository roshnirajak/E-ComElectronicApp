// import React from 'react';

const ItemInfo = ({ heading, value }) => {
  return (
    <div className="flex justify-between py-2 border-b border-slate-500">
      <p className="font-semibold">{heading}</p>
      <p>{value}</p>
    </div>
  );
};

export default ItemInfo;
