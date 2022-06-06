
import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { AiOutlineSound } from "react-icons/ai";
import { IoIosPaperPlane } from "react-icons/io";
import { RiWifiFill } from "react-icons/ri"
import "./Cards.css";
const Cards = () => {
    return (
        <div className='container card-section pb-5'>
            <CardGroup>
  <Card>
   <li className='card-img'> <AiOutlineSound/> </li>
    <Card.Body>
      <Card.Text className='mt-5 text-justify'>
      Before jumping onto the PC, I gather as much information as possible. I get the user to describe what's happening, when it started and whether any incident coincided with the onset of the problem. Often, this information gathering leads straight to the solution. Even better, it sometimes lets you know that a reboot is all that's needed to solve the problem.
      </Card.Text>
    </Card.Body>
    <Button variant="primary"> See more </Button>
  </Card>
  <Card>
  <li className='card-img'> <IoIosPaperPlane/> </li>
    <Card.Body>
      <Card.Text className='mt-5 text-justify pb-5'>
      In some instances a problem relates to a specific subsystem of a machine — such as printing. Some users articulate that fact, but others will just call, saying, "My computer isn't working," when what they mean is, "My printer isn't printing." Sometimes multiple subsystems are affected, such as printing and mapped network drives.
      </Card.Text>
    </Card.Body>
  <Button variant="primary"> See more </Button>
  </Card>
  <Card>
  <li className='card-img'> <RiWifiFill/> </li>
    <Card.Body>

      <Card.Text className='mt-5 text-justify'>
      Printers can be tricky. But there are ways of simplifying this troubleshooting job. First, find out what type of printer you're dealing with. If the printer is networked, ensure the network is actually up. If it is, ask whether other machines can print to the printer in question. If they can, check whether any jobs are stuck in the machine's printer queue. 
      </Card.Text>
    </Card.Body>
    <Button variant="primary"> See more </Button>
  </Card>
</CardGroup>
        </div>
    );
};
export default Cards;