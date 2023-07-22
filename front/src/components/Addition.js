import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Anchor } from "./Anchor";

export default function Addition({ addition }) {
  return (
    <div className="addition_container">
      <p>
        <ReactMarkdown
          components={{
            a: Anchor,
          }}
        >
          {addition}
        </ReactMarkdown>
      </p>
    </div>
  );
}
