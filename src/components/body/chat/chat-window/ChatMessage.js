/**
 * Created by litleleprikon on 15/11/2016.
 *  ___        __    ___           ___                              __
 * /\_ \    __/\ \__/\_ \         /\_ \                          __/\ \
 * \//\ \  /\_\ \ ,_\//\ \      __\//\ \      __   _____   _ __ /\_\ \ \/'\     ___     ___
 *   \ \ \ \/\ \ \ \/ \ \ \   /'__`\\ \ \   /'__`\/\ '__`\/\`'__\/\ \ \ , <    / __`\ /' _ `\
 *    \_\ \_\ \ \ \ \_ \_\ \_/\  __/ \_\ \_/\  __/\ \ \L\ \ \ \/ \ \ \ \ \\`\ /\ \L\ \/\ \/\ \
 *    /\____\\ \_\ \__\/\____\ \____\/\____\ \____\\ \ ,__/\ \_\  \ \_\ \_\ \_\ \____/\ \_\ \_\
 *    \/____/ \/_/\/__/\/____/\/____/\/____/\/____/ \ \ \/  \/_/   \/_/\/_/\/_/\/___/  \/_/\/_/
 *                                                   \ \_\
 *                                                    \/_/
 */

import React from "react";
import {connect} from "react-redux";
//panel-warning
const ChatMessage = ({details, username}) => {
  if (details.user === 'service') {
    return (
      <div>
        {details.user}: {details.text}
      </div>
    )
  }
  return (
    <div
      className={details.user === username ? details.approved ? "panel panel-success" : "panel panel-warning" : "panel panel-info"}>
      <div className="panel-heading">{details.user}</div>
      <div className="panel-body">
        {details.text}
      </div>
    </div>
  )
};

export default connect((state) => ({username: state.user.username}))(ChatMessage);