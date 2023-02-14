import React, { useState, useEffect } from 'react'
import Pager from '../../package/components/pager';

export default function App() {
  const [state, setState] = useState({
    countPerPage: 10,
    page: 1,
  })


  return <Pager page={state.page} countPerPage={state.countPerPage} onSelect={({page, countPerPage}:{page: number; countPerPage: number;})=>setState({...state, page, countPerPage})} totalCount={200} />;
}