import React from "react";

export default function Footer() {
  const relevanceDate =
    new Date().toLocaleString("en-US", {
      day: "2-digit",
    }) +
    "." +
    new Date().toLocaleString("en-US", {
      month: "2-digit",
    }) +
    "." +
    new Date().getFullYear();
  return (
    <footer>
      <div>Актуально на {relevanceDate}</div>
      <div>Информация, размещенная на сайте, носит справочный характер.</div>
      <div>Все права защищены &copy;</div>
    </footer>
  );
}
