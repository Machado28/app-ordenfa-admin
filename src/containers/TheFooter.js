import React from "react";
import { CFooter } from "@coreui/react";

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a
          href="https://dlinecode.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          ORDENFA.
        </a>
        <span className="ml-1">&copy; 2021 ordenfa.</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <a
          href="https://dlinecode.com/sobre"
          target="_blank"
          rel="noopener noreferrer"
        >
         ORDENFA
        </a>
      </div>
    </CFooter>
  );
};

export default React.memo(TheFooter);
