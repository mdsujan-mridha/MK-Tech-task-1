import React, { useEffect, useState } from 'react';
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';

const Add = () => {
    const[add,setAdd] = useState([]);
    useEffect(() => {

       fetch("addAPI.json")
        .then(res => res.json())
         .then(data =>setAdd(data))

    } ,[])
   



    return (
        <div>
            <>
  {['top', 'right', 'bottom', 'left'].map((placement) => (
    <OverlayTrigger
      trigger="click"
      key={placement}
      placement={placement}
      overlay={
        <Popover id={`popover-positioned-${placement}`}>

          <Popover.Header as="h3">{`Popover ${placement}`}</Popover.Header>
          <Popover.Body>
            <strong>Holy guacamole!</strong> Check this info.
          </Popover.Body>
          
          
          

        </Popover>
      }
    >
      <Button variant="secondary">Popover on {placement}</Button>
    </OverlayTrigger>
  ))}
</>
        </div>
    );
};

export default Add;