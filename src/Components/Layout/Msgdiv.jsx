import React from "react";
import "./Msgdiv.css";
import MsgItem from "../Common/MsgItem";

const Msgdiv = () => {
  return (
    <div className="msg-container">

      <MsgItem 
        name="Nour Nasr" 
        title="Collaboration Request"
        preview="Hello, I loved your portfolio and want to discuss…"
        time="10:23 AM" 
      />

      <MsgItem name="Ali Hamed" title="Project Update" preview="The files are ready…" time="9:10 AM" />
      <MsgItem name="Sarah Adel" title="Design Review" preview="Can you update slide 3?" time="8:45 AM" />
      <MsgItem name="Lina" title="Meeting Reminder" preview="Don’t forget our call…" time="Yesterday" />
      <MsgItem name="Mostafa" title="UI Feedback" preview="The buttons look great" time="Yesterday" />
      <MsgItem name="Omar" title="New Opportunity" preview="I want to offer you…" time="Monday" />
      <MsgItem name="Jana" title="Thanks!" preview="Your work is amazing!" time="Sunday" />
      <MsgItem name="Ahmed" title="Invoice" preview="Please send the invoice" time="Sunday" />
      <MsgItem name="Mariam" title="Portfolio" preview="Can we collaborate?" time="Saturday" />
      <MsgItem name="Hana" title="Need Help" preview="Can you fix the layout?" time="Saturday" />

    </div>
  );
};

export default Msgdiv;