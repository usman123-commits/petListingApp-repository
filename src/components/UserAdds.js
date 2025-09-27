import React, { useContext, useEffect } from 'react'
import Carditem from './Carditem';
import { DashboardContext } from '../context/notes/DashboardState';
import { useParams } from 'react-router-dom';

const UserAdds = () => {
    const Context = useContext(DashboardContext);
    const { allAdds, SearchingAllAdds } = Context;
    let {id} = useParams()
    useEffect(()=>{
        SearchingAllAdds(id)
    },[])
  return (
    <div className="container">
    <div className="row g-5">
      {allAdds.length === 0 && (
        <div>
          <i
            className="fas fa-exclamation-triangle "
            style={{ fontSize: "50px", color: "orange" }}
          ></i> Not Found
        </div>
      )}
      {allAdds.map((add) => {
        return <Carditem  card={add} key={add._id} modalId={add._id} />;
      })}
    </div>
  </div>
  )
}

export default UserAdds
