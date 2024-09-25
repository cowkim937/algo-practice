import React from 'react';

function Hello({ color, name, isSpecial }) {
  return (
    <div className="text-7xl font-serif font-bold text-sky-700" 
        style={{ color }}>
      { isSpecial ? <b>숨겨왔던 나의 </b> : null }
      안녕하세요 {name}
    </div>
  );
}

Hello.defaultProps = {
  name: '이름없음'
}

export default Hello;