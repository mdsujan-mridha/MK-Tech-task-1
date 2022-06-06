import { useState } from "react";
import './Add.css'

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="tab-conatiner">
      <h1 className="text-center pb-5">  VERSATILE AD FORMATS </h1>
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs " : "tabs"}
          onClick={() => toggleTab(1)}
        >
         POP-UNDER
        </button>
        <button
          className={toggleState === 2 ?  "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
         BANNER AD
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
         NATIVE
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
         SKIM
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <div className="add-img-content"> 
          
          <img className="add-img" src="https://i.ibb.co/bzGTC4M/How-to-install-a-motherboard.jpg" alt="" />
          <div> 
          <h2> POP-UNDER </h2>
          <hr />
          <p>
          This is one of the most popular ads. After users click, this ad opens landing page in behind. So, the user experience is not hampered much.
          </p>
          </div>
          </div>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
         <div className="add-img-content"> 
          
          <img className="add-img" src="https://i.ibb.co/Wp5GhvF/home-3.jpg" alt="" />
         <div>
         <h2> BANNER ADD </h2>
          <hr />
          <p>
          Choose between the available banner formats. Highly effective ad for visibility.
          </p>
         </div>
          </div>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <div className="add-img-content"> 
          
          <img className="add-img" src="https://i.ibb.co/jWLbZMp/home-2.jpg" alt="" />
          <div>
          <h2> NATIVE </h2>
          <hr />
          <p>
          Ad format with the image and the title, that perfectly fits into the content of the site. Native ads are placed in the most visible areas of the page and, thus, this format shows good results and the level of interaction.
          </p>
          </div>
          </div>
        </div>

        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
         <div className="add-img-content"> 
          
          <img className="add-img" src="https://i.ibb.co/SrK8dX4/Brakes.jpg" alt="" />
          <div>
          <h2> SKIM </h2>
          <hr />
          <p>
          SKIM is a link that a publisher inserts on a specific site element, and after clicking on it, an advertisement appears to the user. SKIM gives 100% control of your sold traffic amount, higher CR to advertisers and CPM rates to publishers.
          </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tabs;