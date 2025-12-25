import React, { useEffect, useState } from "react";
import "./Msgdiv.css";
import MsgItem from "../Common/MsgItem";
import Another from "../Common/Another";
import { supabase } from "../../supabase";

const Msgdiv = () => {
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    async function getMessages() {
      const { data, error } = await supabase
        .from("contactus_main")
        .select("*")
        .order("id", { ascending: false })
        .limit(10);

      if (!error) {
        setMessages(data || []);
      } else {
        console.error(error);
      }

      setLoading(false);
    }

    getMessages();
  }, []);


  async function deleteMessage(rowId) {
    const { error } = await supabase
      .from("contactus_main")
      .delete()
      .eq("id", rowId);

    if (error) {
      console.error("Delete failed:", error);
    } else {
      setMessages(prev => prev.filter(msg => msg.id !== rowId));
    }
  }

  if (loading) return <p>Loading messages...</p>;
  if (messages.length === 0) return <p>No messages available.</p>;

  return (
    <div className="msg-container">
      {messages.map((msg, index) => {
        if (index === 2) {
          return (
            <Another
              key={msg.id}
              id={msg.id}
              name={`${msg.first_name} ${msg.last_name}`}
              title={msg.email}
              preview={msg.msg}
              time={msg.created_at || "Unknown"}
              onDelete={deleteMessage}
            />
          );
        }

        return (
          <MsgItem
            key={msg.id}
            id={msg.id}
            name={`${msg.first_name} ${msg.last_name}`}
            title={msg.email}
            preview={msg.msg}
            time={msg.created_at || "Unknown"}
            onDelete={deleteMessage}
          />
        );
      })}
    </div>
  );
};

export default Msgdiv;

// import React, { useEffect, useState } from "react";
// import "./Msgdiv.css";
// import MsgItem from "../Common/MsgItem";
// import Another from "../Common/Another";
// import { supabase } from "../../supabase"; // make sure this is correctly configured

// const Msgdiv = () => {
//   const [loading, setLoading] = useState(true);
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     async function getMessages() {
//       try {
//         const { data, error } = await supabase
//           .from("messages")
//           .select("*")
//           .order("id", { ascending: false }) // newest messages first
//           .limit(10); // fetch up to 10 messages

//         if (error) {
//           console.error("Error fetching messages:", error);
//         } else {
//           setMessages(data || []);
//         }
//       } catch (err) {
//         console.error("Unexpected error:", err);
//       } finally {
//         setLoading(false);
//       }
//     }

//     getMessages();
//   }, []);

//   if (loading) return <p>Loading messages...</p>;
//   if (messages.length === 0) return <p>No messages available.</p>;

//   return (
//     <div className="msg-container">
//       {messages.map((msg, index) => {
//         // Use "Another" component for the 3rd message, like in your static example
//         if (index === 2) {
//           return (
//             <Another
//               key={msg.id}
//               name={msg.name}
//               title={msg.subject}  // map subject to title
//               preview={msg.msg}    // map msg to preview
//               time={msg.time || "Unknown"}
//             />
//           );
//         }

//         return (
//           <MsgItem
//             key={msg.id}
//             name={msg.name}
//             title={msg.subject}  // map subject to title
//             preview={msg.msg}    // map msg to preview
//             time={msg.time || "Unknown"}
//           />
//         );
//       })}
//     </div>
//   );
// };

// export default Msgdiv;