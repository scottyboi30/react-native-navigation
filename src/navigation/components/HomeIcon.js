import * as React from "react";

import IconWithBadge from "./IconWithBadge";

function HomeIcon(props) {
  // You should pass down the badgeCount in some other ways like React Context API, Redux, MobX or event emitters.
  return <IconWithBadge {...props} badgeCount={3} />;
}

export default HomeIcon;
